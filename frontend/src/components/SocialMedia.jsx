import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";


function SocialMedia() {
  return (
    <div className='flex gap-6 pr-4'>
        <Link to={''} className='hover:-translate-y-1 transition-all duration-500'><FaYoutube /></Link>
        <Link to={''} className='hover:-translate-y-1 transition-all duration-500'><LuInstagram /></Link>
        <Link to={''} className='hover:-translate-y-1 transition-all duration-500'><BsFacebook /></Link>
        <Link to={''} className='hover:-translate-y-1 transition-all duration-500'><FaSquareXTwitter /></Link>
        <Link to={''} className='hover:-translate-y-1 transition-all duration-500'><BsWhatsapp /></Link>
    </div>
  )
}

export default SocialMedia;