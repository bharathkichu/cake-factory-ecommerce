import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({containerStyles}) {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={'/'} className={({isActive})=>isActive ? "active-link" : ""}>Home</NavLink>
      <NavLink to={'/ourcakes'} className={({isActive})=>isActive ? "active-link" : ""}>Our Cakes</NavLink>
      <NavLink to={'/ourcookies'} className={({isActive})=>isActive ? "active-link" : ""}>Our Cookies</NavLink>
      <NavLink to={'/blog'} className={({isActive})=>isActive ? "active-link" : ""}>Blog</NavLink>
    </nav>
  )
}

export default Navbar;