'use client'
import './navbar.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import MenuOverlay from './MenuOverlay';

const NavBar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
    <nav className='nav-main'>
        <div className='nav-container'>
            <Link className='nav-logo' href={'/'}><Image src={'/assets/logo-light.png'} alt='logo' width={58} height={58}/></Link>
            <div className='mobile-nav'>
              {!navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)}>
                  <FontAwesomeIcon className='bar-icon' icon={faBars} />
                </button>
              ) : (
                <button onClick={() => setNavbarOpen(false)}>
                  <FontAwesomeIcon className='x-icon' icon={faXmark} />
                </button>
              )}
            </div>
            <ul className='menu'>
                <li><Link href={'/'} className='menu-item'>About</Link></li>
                <li><Link href={'/'} className='menu-item'>Project</Link></li>
                <li><Link href={'/'} className='menu-item'>Contact</Link></li>
                <li><button className='cv-btn'>Download CV</button></li>
            </ul>
        </div>

    </nav>
    {navbarOpen ? <MenuOverlay /> : null}
    </>
  )
}

export default NavBar