'use client'

import React, { useEffect } from 'react'
import { BiLayer } from 'react-icons/bi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import OurHospitalsCard from './OurHospitalsCard'
import partnerImageOne from '../../assets/partner/hospitalPartner1.png'
import partnerImageTwo from '../../assets/partner/hospitalPartner2.png'
import partnerImageThree from '../../assets/partner/hospitalPartner3.png'

import hospitalLogoOne from '../../assets/logo_hospital1.png'
import hospitalLogoTwo from '../../assets/logo_hospital2.png'
import hospitalLogoThree from '../../assets/logo_hospital3.png'

import bgImage from '../../assets/service_bg_flipped.jpg'
import About from '../about/About'

const cardData = [
  {
    image: partnerImageOne,
    title: 'Gleneagles Global Hospital',
    description: "India's leading integrated healthcare delivery network",
    icon: hospitalLogoOne,
  },
  {
    image: partnerImageTwo,
    title: 'Citizens Specialty Hospital',
    description:
      '(Ultra-modern 300-bed multi- discipline facility spread across 3+ acres in Nallagandla, Hyderabad',
    icon: hospitalLogoTwo,
  },
  {
    image: partnerImageThree,
    title: 'American Oncology Institute',
    description:
      'Leading and fastest growing Multi disciplinary oncology network with 15 Hospitals in South Asia',
    icon: hospitalLogoThree,
  },
]

const OurHospitals = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  //   cardData.forEach((_, index) => {
  //     const cardAnimationLeftToRight = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: `.partner-card-${index}`,
  //         start: '70% bottom',
  //         end: ' center bottom',
  //         scrub: 1,
  //       },
  //       defaults: { duration: 1, ease: 'power2.out' },
  //     })

  //     cardAnimationLeftToRight.fromTo(
  //       `.partner-card-${index}`,
  //       { opacity: 0, x: '-100%' },
  //       { opacity: 1, x: '0%' }
  //     )
  //   })

  //   cardData.forEach((_, index) => {
  //     const cardAnimationLeftToRightArea2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: `.partner-card-area-2-${index}`,
  //         start: '70% bottom',
  //         end: ' center bottom',
  //         scrub: 1,
  //       },
  //       defaults: { duration: 1, ease: 'power2.out' },
  //     })

  //     cardAnimationLeftToRightArea2.fromTo(
  //       `.partner-card-area-2-${index}`,
  //       { opacity: 0, x: '100%' },
  //       { opacity: 1, x: '0%' }
  //     )
  //   })
  // }, [])

  return (
    <div
      className=" container-fluid pt-4 pb-10"
      style={{
        backgroundImage: ` url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto mt-24 md:flex items-center gap-4">
        <div className="md:order-2 md:border-l-4 w-full md:w-[20%] border-secondary pl-4 flex flex-col justify-center relative">
          <h1 className="text-primary text-2xl md:text-3xl text-center md:text-left font-semibold w-fit mx-auto md:mx-0 md:mr-auto mt-8 mb-2 border-b-2 md:border-0 border-secondary">
            Our
            <br />
            Hospitals
          </h1>
          {/* <h1 className="text-center md:text-left mt-10 md:mt-4 mb-5 font-medium bg-white px-4 py-1 text-primary border-primary border-2 rounded-md w-fit block mx-auto md:mx-0">
            Area 1
          </h1> */}
          <p className="text-xs mb-6">
            Giving international
            <br /> patients a blend of quality
            <br /> healthcare & comfort
          </p>
          <div className="moving-train-left hidden md:block"></div>
        </div>
        <div className="mx-auto text-center px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-[70%] gap-4 mt-4">
          {cardData.map((card, index) => (
            <div key={index} className={`partner-card-${index}`}>
              <OurHospitalsCard data={card} />
            </div>
          ))}
        </div>
        {/* <h1 className="text-center mt-5 font-semibold bg-primary px-2 py-1 text-white rounded-md w-fit block mx-auto">Area 2</h1>
      <div className="mx-auto text-center px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cardData.map((card, index) => (
          <div key={index} className={`partner-card-area-2-${index}`}>
            <OurPartnersCard data={card} />
          </div>
        ))}
      </div> */}
      </div>

      <About />
    </div>
  )
}

export default OurHospitals
