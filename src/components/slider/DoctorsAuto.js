import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import OurDoctorCard from '../doctor/OurDoctorsCard'
import { Autoplay, Swiper as SwiperCore } from 'swiper'

// Install the Swiper Core modules
SwiperCore.use([Autoplay])

const DoctorsAuto = ({ sliderData }) => {
  return (
    <div className="relative mb-8">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true} // Enable infinite loop
        loopFillGroupWithBlank={true} // Ensure there is no gap
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper bg-transparent"
      >
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide className="bg-transparent h-[50%]" key={index}>
              <OurDoctorCard data={slide} classData={'h-72 w-[70%]'} />
            </SwiperSlide>
          )
        })}

        {/* Duplicate the slides to continue the loop */}
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide className="bg-transparent h-[50%]" key={index}>
              <OurDoctorCard data={slide} classData={'h-72 w-[70%]'} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* <div className="swiper-button-prev" />
      <div className="swiper-button-next" /> */}
    </div>
  )
}

export default DoctorsAuto
