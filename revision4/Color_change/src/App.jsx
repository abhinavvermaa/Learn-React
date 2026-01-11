import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'
import UserManagement from './components/UserManagement'
import UserProjects from './components/UserProjects'
import LandingPage from './components/Features'
import UserStories from './components/UserStories'

function App() {
  const [color, setColor] = useState("green")

  
  return (
    <>
    <UserStories />
    </>
  )
}

export default App
