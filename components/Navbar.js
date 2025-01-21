import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly p-4 bg-red-500 text-white text-xl items-center'>
      <div>
        BlogApp
      </div>
      <div>
        <input type="search" placeholder='Search...' className='p-2 text-black' />
      </div>

      <div className='flex space-x-6'>
        <div className='cursor-pointer '>Login</div>
        <div className='cursor-pointer '>SignUp</div>
      </div>
    </div>
  )
}

export default Navbar
