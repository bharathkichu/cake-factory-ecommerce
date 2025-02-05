import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import user from '../assets/user.svg';
import logout from '../assets/logout.svg';
import Navbar from './Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import { GrCart } from "react-icons/gr";
import { ShopContext } from '../context/ShopContext';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const upMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems} = useContext(ShopContext);

  useEffect(()=> {
    const handleScroll = ()=> {
      if(window.scrollY >0) {
        if(menuOpened) {
          setMenuOpened(false);
        }
        // if (window.scrollY > 0 && menuOpened) {
        //   setMenuOpened(false);
        // }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return()=> {
      window.removeEventListener("scroll", handleScroll);
    };
  },[menuOpened]);


  return (
    <header className='max-padd-container w-full z-50 bg-container'>
      <div className='flexBetween py-3'>
        <Link to={'/'} className='flex items-center gap-x-2'>
           <img src={logo} alt='logoImg' height={50} width={50}/>
           <span className='bold-28'>Cake Factory</span>
        </Link>
        <div className='flexCenter gap-x-4'>
{/* lap navbar */}
          <div>
            <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"}/>
          </div>
{/* mobile navbar */}
          <div>
            <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-12 p-12 bg-white rounded-3xl shadow-md w-55 medium-16 ring-slate-900/5 transition-all duration-300  z-50" : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-55 medium-16 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"}`}/>
          </div>
          <div className='flexBetween gap-x-1 sm:gap-x-2 bold-16'>
            {!menuOpened ? (<MdMenu className='xl:hidden cursor-pointer text-3xl hover:text-slate-800 ' onClick={upMenu}/>) : (<MdClose className='xl:hidden cursor-pointer text-3xl hover:text-slate-800 ' onClick={upMenu}/>)}
            <div className='flexBetween sm:gap-x-2'>
              <NavLink to={'/cart-page'} className={'flex'}><GrCart className='p-2 h-10 w-10 hover:text-slate-800'/>
              <span className='relative flexCenter w-5 h-5 rounded-full bg-amber-950 text-white medium-14 -top-2 right-2'>{getTotalCartItems()}</span>
              </NavLink>
              {localStorage.getItem('auth-token') ?
              <NavLink onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/') }} to={'/Login'} className={'btn-secondary flexCenter gap-x-1 medium-15 rounded-xl'}>
                <img src={logout} alt=''height={10} width={15}/>Logout </NavLink> :
              <NavLink to={'/Login'} className={'btn-secondary flexCenter gap-x-1 medium-15 rounded-xl'}>
                <img src={user} alt=''height={10} width={15}/>Login </NavLink> }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;