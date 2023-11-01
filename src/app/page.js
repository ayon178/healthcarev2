'use client'

import About from '@/components/about/About'
import Appointment from '@/components/appointment/Appointment'
import OurDoctors from '@/components/doctor/OurDoctors'
import Gallery from '@/components/gallery/Gallery'
import OurHospitals from '@/components/hospitals/OurHospitals'
import MainGallery from '@/components/mainGallery/MainGallery'
import OurServices from '@/components/service/OurServices'
import Navbar from '@/components/shared/Navbar'
import DoctorsSliderCentered from '@/components/slider/Doctors'
import MainSlider from '@/components/slider/MainSlider'
import OurVision from '@/components/vision/OurVision'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingStartTime, setLoadingStartTime] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof window !== 'undefined') {
        const authenticated = window.localStorage.getItem('isAuthenticated')
        if (!authenticated) {
          window.location.href = '/auth/login'
        }
      }

      const navbar = document.querySelector('#navbar')
      const text = document.querySelectorAll('.text_color')
      const timeline = gsap.timeline({ paused: true })

      timeline.to(navbar, {
        // backgroundColor: 'red',
        backdropFilter: 'blur(10px)',
        duration: 0.1,
        ease: 'power3.inOut',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 0,
        paddingBottom: '.8rem',
        paddingTop: '.8rem',
      })

      timeline.to(text, {
        color: '#fff',
        ease: 'power3.inOut',
      })

      setLoadingStartTime(performance.now())
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      const scrollListener = () => {
        if (window.scrollY === 0) {
          timeline.reverse()
        } else {
          timeline.play()
        }
      }

      window.addEventListener('scroll', scrollListener)

      return () => {
        window.removeEventListener('scroll', scrollListener)
      }
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const loadingEndTime = performance.now()
      const loadingTime = loadingEndTime - loadingStartTime
      console.log(`Loading time: ${loadingTime} ms`)
    }
  }, [isLoading, loadingStartTime])

  return (
    <>
      <Navbar />
      <MainSlider />
      <main>
        <OurServices />
        <OurHospitals />
        <About />
        <OurVision />
        <OurDoctors />
        {/* <Gallery /> */}
        <MainGallery />
        <Appointment />
      </main>
    </>
  )
}
