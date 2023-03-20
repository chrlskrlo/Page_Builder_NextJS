import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-20 mx-auto container'>
        
        <h1 className='text-3xl font-bold'>PF <span className='text-[#82039A] font-sans'> Cloud</span></h1>
     
        <div className='hidden md:flex'>
            <ul className='flex gap-16 items-center justify-center text-lg font-sans font-bold'>
                <li>Product</li>
                <li>Pricing</li>
                <li>Feature</li>
                <li>About us</li>
            </ul>
            </div>
            <div className=' hidden md:flex gap-4'>
            <button className='rounded px-6 py-3 border-[#82039A] border-2 text-[#82039A]'>Sign in</button>
            <button className='bg-[#82039A] rounded px-6 py-3 text-white font-bold'>Sign up</button>
            </div>
        
    </div>
  )
}

export default Navbar