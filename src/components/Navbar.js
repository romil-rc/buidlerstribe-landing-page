import React from 'react'
import '../styles/navbar.css'

function Navbar() {

    window.addEventListener('scroll', ()=>{
        let nav = document.querySelector('nav');
        nav.classList.toggle('scrolling-active', window.scrollY > 0);
    })

    const menuButton = () => {
        const menu = document.querySelector('.mobile-menu');   
        menu.classList.toggle('hidden');
    }

  return (
    <nav className="bg-white p-4 transition-transform ease-linear duration-300">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between">
                <div>
                    <a href="/" className='text-2xl font-medium'>BUIDLERS TRIBE</a>
                </div>
                <div className="hidden md:flex items-center space-x-5">
                    <a href="/" className='text-xl font-normal underline underline-offset-[3px]'>Home</a>
                    <a href="/" className='text-xl font-normal link-underline link-underline-black'>Our Startups</a>
                    <a href="/" className='text-xl font-normal link-underline link-underline-black'>Buidlers</a>
                    <a href="/" className='text-xl font-normal link-underline link-underline-black'>Investors</a>
                    <a href="/" className='text-xl font-normal link-underline link-underline-black'>Experts</a>
                    <a href="/" className='text-xl font-normal link-underline link-underline-black'>People</a>
                    <a href="/" className='text-xl font-normal link-underline link-underline-black'>Values</a>
                    <a href="/" className='text-xl font-normal link-underline link-underline-black'>BeliefDAO</a>
                    <a href="/" className='text-xl font-normal link-underline link-underline-black'>Jobs</a>
                </div>
                {/* Mobile Button  */}
                <div className='md:hidden flex items-center'>
                    <button className='mobile-menu-button' onClick={menuButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* Mobile Menu  */}
        <div className="mobile-menu hidden space-y-5 text-left py-3">
            <a href="/" className='block md:hidden text-xl font-normal'>Home</a>
            <a href="/" className='block md:hidden text-xl font-normal'>Our Startups</a>
            <a href="/" className='block md:hidden text-xl font-normal'>Buidlers</a>
            <a href="/" className='block md:hidden text-xl font-normal'>Investors</a>
            <a href="/" className='block md:hidden text-xl font-normal'>Experts</a>
            <a href="/" className='block md:hidden text-xl font-normal'>People</a>
            <a href="/" className='block md:hidden text-xl font-normal'>Values</a>
            <a href="/" className='block md:hidden text-xl font-normal'>BeliefDAO</a>
            <a href="/" className='block md:hidden text-xl font-normal'>Jobs</a>
        </div>
    </nav>
  )
}

export default Navbar;