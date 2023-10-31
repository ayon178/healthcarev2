import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import OurDoctorCard from '../doctor/OurDoctorsCard'
import { Autoplay, Swiper as SwiperCore } from 'swiper'

// Install the Swiper Core modules
SwiperCore.use([Autoplay])

const DoctorsAuto = ({ sliderData }) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
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
        className="mySwiper"
      >
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <OurDoctorCard data={slide} />
            </SwiperSlide>
          )
        })}

        {/* Duplicate the slides to continue the loop */}
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <OurDoctorCard data={slide} />
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
