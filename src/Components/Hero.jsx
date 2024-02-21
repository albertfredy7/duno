import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen'>
        <div className=' lg:grid lg:grid-cols-2  lg:space-x-5 my-24'>
            <div className='flex flex-col justify-center items-center ms-24 mt-28'>
                <div className='text-left px-10 '>
                    <h1 className='lg:text-7xl text-5xl font-bold  '>Creating great</h1>
                    <h1 className='lg:text-7xl text-5xl font-bold'>website user</h1>
                    <h1 className='lg:text-7xl  text-5xl font-bold'>experiences.</h1>
                    <p className='text-xl '>This is where we shine with over 15 years of know how,you can count on us to design outstanding</p>
                </div>
                
                <button className='bg-blue-600 text-white px-4 py-2 rounded-md shadow-md mt-4'>Get Started</button>
            </div>
            <div className='hidden lg:block'>
                <img src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png" className='ms-64' alt=""  />
            </div>
        </div>
    </div>
  )
}

export default Hero