import React from 'react'

const LoginPage = () => {
  
  return (
    <nav className=' bg-amber-300 w-full h-16  px-4 flex items-center' >
      <h1 className='text-xl font-bold mx-4'>My Logo</h1>
      <ul className='hidden md:flex gap-6 '>
        <li>Home</li>
        <li>Threads</li>
        <li>About</li>
      </ul>
      <div className=" ml-auto flex">
      <div className='hidden md:flex px-2 '>
      <input type="search" placeholder='Search' className='border-white w-50 border-2 rounded-l-2xl  py-0.5 px-2' />
      <button className='border-white border-2 rounded-r-2xl bg-gray-50 hover:bg-amber-400'> Search</button>
      </div>
        <button className='border-2  border-white rounded-2xl px-1.5 py-1 bg-amber-100 hover:bg-red-200'>Login/SignUp</button>
      </div>
      
    </nav>
  )
}

export default LoginPage
