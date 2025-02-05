import React from 'react'
import logo from '../assets/logo.png';
import proileImg from '../assets/profile.jpeg';

const Navbar = () => {
  return (
    <nav className= 'bg-container py-2 ring-1 ring-slate-900 relative'>
        <div className='mx-auto max-w-[1440px] px-6 lg:px-20 flexBetween'>
            <div><img src={logo} alt='logoIcon' className='h-12 w-12 rounded-full'/> </div>
            <div className='hidden sm:flex bold-22 text-white bg-amber-950 px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2'>ADMIN PANEL</div>
            <div><img src={proileImg} alt="profileIcon" className='h-12 w-12 rounded-full'/></div>
        </div>
    </nav>
  )
}

export default Navbar;
