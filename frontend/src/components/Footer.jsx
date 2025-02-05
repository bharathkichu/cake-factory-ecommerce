import React from 'react'
import Navbar from './Navbar'
import SocialMedia from './SocialMedia'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='max-padd-container bg-container py-8'>
      <div className='flexCenter flex-col gap-y-2'>
        <Link to={'/'} className='flex items-center gap-x-2'>
            <img src={logo} alt='logoImg' height={50} width={50}/>
            <span className='bold-28 hidden xs:flex'>Cake Factory</span>
        </Link>
        <div className='py-2'>
            <Navbar containerStyles={"flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"}/>
        </div>
        <SocialMedia/>
        <hr className=' w-2/3 my-3'/>
        <div className='text-gray-90'><span className='text-amber-950 bold-15'>Open Every Day</span> | Monday - Sunday: 9.30am - 10pm</div>
        <div>Copyright &copy; Cake Factory | All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer