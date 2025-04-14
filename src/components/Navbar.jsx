import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center md:mt-0 py-6 md:py-4 relative text-base' >
        <nav className="max-w-7xl w-full mx-auto px-6 xl:px-0 flex items-center justify-between" >
            <div>
                <h1 className='text-2xl font-medium'>WizzyPic</h1>
            </div>

            <div className='flex items-center gap-4 font-medium'>
                <button className='border px-3 py-2 rounded-md' >Log in</button>
                <button className='border px-3 py-2 rounded-md bg-blue-500 text-white'>Sign up</button>
            </div>
        </nav>

    </div>
  )
}

export default Navbar
