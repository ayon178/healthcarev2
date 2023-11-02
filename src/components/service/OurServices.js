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

import bgImage from '../../assets/service_bg.jpg'

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
    title: 'Tele-consultation',
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
    title: 'Quality/Annual Monitoring',
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
    <div
      className=" container-fluid pb-8"
      style={{
        backgroundImage: ` url(${bgImage.src})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(10px)',
        backgroundPosition: 'top ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto md:flex items-center justify-between">
        <div className="md:w-[40%] border-r-4 md:mt-0 border-secondary pr-4 flex flex-col justify-center relative">
          <h1 className="text-primary text-2xl md:text-3xl text-center md:text-right font-semibold  pb-2">
            Our Services
          </h1>
          <p className="text-center md:text-right text-primary text-sm font-medium">
            We facilitate critical patients
            <br />
            for advanced medical treatment abroad.
          </p>
          {/* <div className="flex md:justify-end">
            <button className="text-primary px-4 py-2 pointer font-bold rounded-md bg-primaryText mt-2">
              Call to Order
            </button>
          </div> */}
          <div className="moving-train hidden md:block"></div>
        </div>
        <div className=" w-full md:w-[60%]  mt-8">
          <div className="mx-auto text-center px-2 md:px-0 flex-wrap flex items-center justify-center gap-4">
            {cardData.slice(0, 2).map((card, index) => (
              <div key={index} className={`service-card-${index}`}>
                <OurServicesCard data={card} />
              </div>
            ))}
          </div>

          <div className="mx-auto my-4 text-center px-2 md:px-0 flex-wrap flex items-center justify-center gap-4">
            {cardData.slice(2, 5).map((card, index) => (
              <div key={index} className={`service-card-${index}`}>
                <OurServicesCard data={card} />
              </div>
            ))}
          </div>

          <div className="mx-auto text-center px-2 md:px-0 flex-wrap flex items-center justify-center gap-4">
            {cardData.slice(5, 8).map((card, index) => (
              <div key={index} className={`service-card-${index}`}>
                <OurServicesCard data={card} />
              </div>
            ))}
          </div>

          <div className="mx-auto text-center mt-4 pb-2 px-2 md:px-0 flex-wrap flex items-center justify-center gap-4">
            {cardData.slice(8, 10).map((card, index) => (
              <div key={index} className={`service-card-${index}`}>
                <OurServicesCard data={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
