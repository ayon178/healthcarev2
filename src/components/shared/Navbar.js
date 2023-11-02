'use client'

import React, { useEffect, useRef } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import MobileMenu from './MobileMenu'
import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const refMobile = useRef(null)

  useEffect(() => {
    gsap.from(refMobile.current, {
      xPercent: -100,
    })
  }, [])

  const openMenu = () => {
    gsap.to(refMobile.current, {
      xPercent: 0,
      duration: 1.2,
      ease: 'power2.out',
    })
  }

  const closeMenu = () => {
    gsap.to(refMobile.current, {
      xPercent: -100,
      duration: 1.2,
      ease: 'power2.out',
    })
  }

  const handleMenuItemHover = event => {
    // Create a unique hover animation using GSAP
    gsap.to(event.target, {
      opacity: 0.8, // Reduce opacity on hover
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMenuItemLeave = event => {
    // Restore the menu item on mouse leave
    gsap.to(event.target, {
      opacity: 1, // Restore original opacity
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <div
      id="navbar"
      className="bg-[#F5F8F5] shadow-md z-50 p-2 sticky top-0 w-screen"
    >
      <div className="z-50 container  px-4 md:px-10 py-0 mx-auto flex flex-row justify-between">
        <Link
          href="/#"
          className="font-semibold text-2xl text-tertiary flex items-center"
        >
          {/* <FaHospitalAlt className="text-4xl mr-2" />
        <div className="flex flex-col">
          <h1 className="inline-block text-[.6rem] font-extrabold">
            The Royal
          </h1>
          <h1 className="inline-block text-[.6rem] -my-5 font-extrabold">
            Melbourne
          </h1>
          <h1 className="inline-block text-[.6rem] font-extrabold">Hospital</h1>
        </div> */}
          <Image
            src={logo}
            alt="Royal Melbourne Hospital"
            width={40}
            height={40}
            className="py-1"
          />
        </Link>
        <ul className="flex-row items-center gap-9 text-sm font-semibold text-tertiary hidden md:flex">
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Menu 1
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Menu 2
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Menu 3
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Menu 4
            </Link>
          </li>
          <li>
            <button className="bg-primary text-white px-3 py-2 rounded-md">
              Register Now
            </button>
          </li>
        </ul>
        <BiMenuAltRight
          className="text-primaryText text-4xl md:hidden"
          onClick={openMenu}
        />

        <MobileMenu ref={refMobile} closeMenu={closeMenu} />
      </div>
    </div>
  )
}

export default Navbar
