'use client'

import React, { useEffect } from 'react'
import {
  GiFamilyHouse,
  GiSkullStaff,
  GiLevelFourAdvanced,
} from 'react-icons/gi'
import { MdHighQuality } from 'react-icons/md'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OurServicesCard from './OurServicesCard'

// Icon import
import iconOne from '../../assets/icon/icon1.png'
import iconTwo from '../../assets/icon/icon2.png'
import iconThree from '../../assets/icon/icon3.png'
import iconFour from '../../assets/icon/icon4.png'
import iconFive from '../../assets/icon/icon5.png'
import iconSix from '../../assets/icon/icon6.png'
import iconSeven from '../../assets/icon/icon7.png'
import iconEight from '../../assets/icon/icon8.png'
import iconNine from '../../assets/icon/icon9.png'
import iconTen from '../../assets/icon/icon10.png'

const cardData = [
  {
    title: 'Selection of Hospital & Doctors',
    icon: iconOne,
  },
  {
    title: 'Cost estimation from hospital',
    icon: iconTwo,
  },
  {
    title: 'Processing medical Test',
    icon: iconThree,
  },
  {
    title: "Doctor's referral & appointment",
    icon: iconFour,
  },
  {
    title: 'Hospital invitation letter for visa',
    icon: iconFive,
  },
  {
    title: 'Video of Tele-consultation',
    icon: iconSix,
  },
  {
    title: 'Medical arrangements with hospital',
    icon: iconSeven,
  },
  {
    title: 'Pre & Post treatment assistance',
    icon: iconEight,
  },
  {
    title: 'Post discharge assistance',
    icon: iconNine,
  },
  {
    title: 'Quality/Anial monitoring',
    icon: iconTen,
  },
]

const OurServices = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)

  //   cardData.forEach((card, index) => {
  //     const cardAnimation = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: `.service-card-${index}`,
  //         start: '70% bottom',
  //         end: ' center bottom',
  //         scrub: 1,
  //       },
  //       defaults: { duration: 1, ease: 'power2.out' },
  //     })

  //     cardAnimation.fromTo(
  //       `.service-card-${index}`,
  //       { opacity: 0, x: '-100%', scale: 0.5 },
  //       { opacity: 1, x: '0%', scale: 1 }
  //     )
  //   })
  // }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-primary text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary  mt-10 pb-2">
        Our Services
      </h1>
      <div className="mx-auto text-center px-2 md:px-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full md:w-[90%] lg:w-[80%] gap-4 mt-8">
        {cardData.map((card, index) => (
          <div key={index} className={`service-card-${index}`}>
            <OurServicesCard data={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices
