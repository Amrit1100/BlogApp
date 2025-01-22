import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex justify-evenly p-2 bg-red-500 text-white text-l items-center sticky top-0'>
      <Link href={"/"}><div>
        BlogApp
      </div></Link>
      <div>
        <input type="search" placeholder='Search...' className='p-2 text-black' />
      </div>

      <div className='flex space-x-6'>
        <Link href={"/login"}><div className='cursor-pointer '>Login</div></Link>
        <Link href={"/signup"}><div className='cursor-pointer '>SignUp</div></Link>
      </div>
    </div>
  )
}

export default Navbar
