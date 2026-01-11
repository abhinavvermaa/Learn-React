import React, { useState } from "react";
import {
  FiSearch,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiMoreVertical,
} from "react-icons/fi";
import usersData from "../data/users.json";
import "./UserManagement.css";

export default function UserManagement() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ id: "", name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  const [menuOpen, setMenuOpen] = useState(null);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Valid email required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const openAdd = () => {
    setForm({ id: "", name: "", email: "" });
    setErrors({});
    setModal("add");
  };

  const openEdit = (user) => {
    setForm(user);
    setErrors({});
    setModal("edit");
  };

  const saveUser = () => {
    if (!validate()) return;

    if (modal === "add") {
      setUsers([
        ...users,
        {
          id: `USR-00${users.length + 1}`,
          name: form.name,
          email: form.email,
          projects: 0,
          status: "Active",
        },
      ]);
      showToast("User added successfully");
    }

    if (modal === "edit") {
      setUsers(users.map((u) => (u.id === form.id ? { ...u, ...form } : u)));
      showToast("User updated successfully");
    }

    setModal(null);
  };

  const deleteUser = (id) => {
    if (!window.confirm("Delete this user?")) return;
    setUsers(users.filter((u) => u.id !== id));
    showToast("User deleted successfully");
  };

  return (
    <div className="um-page">
      <h1 className="um-title">User Management</h1>
      <p className="um-subtitle">
        Manage and monitor all users on the platform.
      </p>

      <div className="um-card">
        <h2 className="um-card-title">User Management</h2>

        <div className="um-toolbar">
          <div className="um-search">
            <FiSearch />
            <input
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="um-btn primary" onClick={openAdd}>
            <FiPlus /> Add User
          </button>
        </div>

        <table className="um-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Projects</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td className="email">{u.email}</td>
                <td>{u.projects}</td>
                <td>
                  <span className={`status ${u.status.toLowerCase()}`}>
                    {u.status}
                  </span>
                </td>
                <td className="actions">
                    {/* Desktop buttons */}
                    <div className="desktop-actions">
                      <FiEdit className="edit" onClick={() => openEdit(u)} />
                      <FiTrash2
                        className="delete"
                        onClick={() => deleteUser(u.id)}
                      />
                    </div>

                    {/* Mobile 3-dot menu */}
                    <div className="mobile-actions">
                      <button
                        className="dots-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMenuOpen(menuOpen === u.id ? null : u.id);
                        }}
                      >
                        <FiMoreVertical />
                      </button>

                      {menuOpen === u.id && (
                        <div
                          className="action-menu"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            onClick={() => {
                              openEdit(u);
                              setMenuOpen(null);
                            }}
                          >
                            Edit
                          </button>

                          <button
                            className="danger"
                            onClick={() => {
                              deleteUser(u.id);
                              setMenuOpen(null);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {modal && (
        <div className="um-modal-overlay">
          <div className="um-modal">
            <h3>{modal === "add" ? "Add User" : "Edit User"}</h3>

            <label>User Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <small className="error">{errors.name}</small>}

            <label>Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <div className="modal-actions">
              <button className="um-btn outline" onClick={() => setModal(null)}>
                Cancel
              </button>
              <button className="um-btn primary" onClick={saveUser}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="um-toast">{toast}</div>}
    </div>
  );
}
