import { useEffect, useState } from "react"

function TodoL(){
  const[input,setinput]=useState("")
  const[arr,setarr] = useState(()=>{
    return JSON.parse( localStorage.getItem("itemss"))|| [];
   
  })
  const [ edit,setedit]=useState(null)
  function handlesubmit(e){
    e.preventDefault()
    if (input.trim() === "") return; // ✅ Prevent empty submissions
    if(edit!==null){
      const updated = arr.map((val,index)=>
        index===edit?input:val

      );
      setarr(updated);
      setedit(null)
    }
    else{
      
    setarr([...arr,input])
  }
  setinput("");
  }
  
  useEffect(()=>{
    localStorage.setItem("itemss", JSON.stringify(arr))
  },[arr])
  function handledel(index){
    const newarr=arr.filter((_,i)=>i!==index)
    setarr(newarr)
  }
  function handleEdit(index){
    setinput(arr[index]);
    setedit(index)
  }
  return (<>
    <h1>Todo List </h1>
    <form onSubmit={handlesubmit}>
      <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} />
      <button type="submit">{edit!==null?"update":"submit"}</button>
    </form>
    <ul>
      {arr.map((val,index)=>{
        return <li key={index}>{val} <button onClick={() => handleEdit(index)}>✏ Edit</button>{" "}
            <button onClick={() => handledel(index)}>❌ Delete</button></li>
      })}
    </ul>
  </>)
}

export default TodoL