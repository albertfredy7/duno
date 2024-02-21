import React, { useState } from 'react'

function Navbar() {

    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
        <nav className='h-24 mx-4'>
            <div className='flex justify-between p-5'>
                {/* logo */}
                <div>
                    <img className='w-1/2 lg:w-1/3' src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Logo_Nubi_320x130.png" alt="" /> 
                </div>

                {/* primary links */}
                
                    <ul className='flex justify-center items-center text-xl font-semibold space-x-3 text-gray-900 lg:flex sm:hidden md:hidden hidden'>
                        <li className='p-2'>
                            <a href="#">Feed</a>
                        </li>
                        <li className='p-2'>
                            <a href="#">Creators</a>
                        </li>
                        <li className='p-2'>
                            <a href="#">Blog</a>
                        </li>
                        <li className='p-2'>
                            <a href="#">Suport</a>
                        </li>
                    </ul>
               


                {/* secondary links */}
                
                    <ul className='flex justify-center items-center text-xl font-semibold text-gray-900 space-x-3 lg:flex sm:hidden md:hidden hidden'>
                        <li className='p-2'>
                            <a href="#">Login</a>
                        </li>
                        <li className='p-2 bg-blue-600 text-white rounded-md shadow-md'>
                            <a href="#">Register</a>
                        </li>
                    </ul>


                    <div className='lg:hidden'>
                        <button onClick={handleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" / >
                        </svg>

                        </button>
                    </div>
                


            </div>


            {/* mobile view */}

            
                <div className='flex justify-center items-center   '>
                    
                <ul className={nav ? 'fixed  left-0 top-0  ease-in-out duration-300 bg-white w-[60%] h-full ' : 'ease-in-out duration-300 fixed left-[-100%]  bg-white w-full h-full'}>
                <div>
                    <img className='w-1/2 m-5' src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Logo_Nubi_320x130.png" alt="" /> 
                </div>
                    <li className='p-2 mx-5 text-xl font-semibold text-gray-900 border-b border-gray-300'>
                        <a href="#">Feed</a>
                    </li>
                    <li className='p-2 mx-5 text-xl font-semibold text-gray-900 border-b border-gray-300'>
                        <a href="#">Creators</a>
                    </li>
                    <li className='p-2 mx-5 text-xl font-semibold text-gray-900 border-b border-gray-300'>
                        <a href="#">Blog</a>
                    </li>
                    <li className='p-2 mx-5 text-xl font-semibold text-gray-900 '>
                        <a href="#">Suport</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar