'use client'

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import gsap, { Power2 } from 'gsap'
// import slideOne from '../../assets/slider_1.JPG'
// import slideTwo from '../../assets/slider_2.JPG'
// import slideThree from '../../assets/slider_3.JPG'
import mainSliderImage from '../../assets/main_slider.jpg'

export default function SwiperAutoSlider() {
  const cardData = [
    {
      image: mainSliderImage,
    },
    {
      image: mainSliderImage,
    },
    {
      image: mainSliderImage,
    },
  ]

  const swiperRef = useRef(null)

  // useEffect(() => {
  //   // Initialize Swiper
  //   const swiper = swiperRef.current.swiper

  //   // Add an event listener for slide change
  //   swiper.on('slideChange', () => {
  //     // Get the active slide index
  //     const activeSlideIndex = swiper.activeIndex

  //     // Run GSAP animation for the image (zoom in)
  //     gsap.fromTo(
  //       `.slide-${activeSlideIndex}`,
  //       { scale: 1.5, opacity: 1 },
  //       {
  //         scale: 1,
  //         opacity: 1,
  //         duration: 1,
  //         ease: Power2.easeInOut,
  //       }
  //     )

  //     // Run GSAP animation for the slider header text (fade down)
  //     gsap.fromTo(
  //       `.slide-${activeSlideIndex} .slide-header`,
  //       { opacity: 0, y: -100 },
  //       { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: Power2.easeInOut }
  //     )
  //     // Run GSAP animation for the slider paragraph text (fade up)
  //     gsap.fromTo(
  //       `.slide-${activeSlideIndex} .slide-text`,
  //       { opacity: 0, y: 100 },
  //       { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: Power2.easeInOut }
  //     )
  //   })
  // }, [])

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {cardData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide-${index} relative h-full flex items-center justify-center`}
              style={{
                backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.05), rgba(82,53,160,1)), url(${item.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="mt-5 flex container mx-auto ps-5 md:ps-10 flex-col items-start justify-center">
                <div className="text-white text-2xl md:text-3xl text-left slide-header font-bold">
                  {/* Your <span className="text-secondaryText">Health</span> Is
                  <br />
                  <span className="mt-1">
                    <span className="text-secondaryText">Important</span> To Us
                  </span> */}
                  Offering you the best{' '}
                  <span className="text-secondaryText">healthcare</span>
                  <br /> by{' '}
                  <span className="text-secondaryText">
                    dedicated doctors
                  </span>{' '}
                  in world class hospitals
                  <br /> with advanced treatments and modern equipment.
                </div>
                <p className="text-white mt-10 w-[95%] md:w-[50%] font-semibold text-left slide-text text-[.9rem]">
                  Your journey with us will be comfortable and transparent.
                  <br /> The health of our clients both physical and mental, is
                  our priority.
                </p>
                <button className="bg-white slide-text px-4 py-2 rounded-md mt-4 text-primary text-sm font-semibold">
                  Register Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
