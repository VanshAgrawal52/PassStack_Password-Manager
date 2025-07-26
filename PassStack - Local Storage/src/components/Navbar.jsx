import React from 'react'


const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl flex items-center">
                    <img className='w-10' src="../src/assets/logo.png" alt="PassStack Logo" />
                    PassStack

                </div>
                <button className='text-white bg-blue-800 hover:bg-blue-700  my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'>
                    <a href="https://github.com/VanshAgrawal52/PassStack" className='flex justify-between items-center'>
                        <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                        <span className='font-bold px-2'>GitHub</span>
                    </a>

                </button>
            </div>
        </nav>
    )
}

export default Navbar