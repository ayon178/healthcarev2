import React from 'react'
import Slider from 'react-slick'
import OurDoctorCard from '../doctor/OurDoctorsCard'

const DoctorsSliderCentered = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    )
  }
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    )
  }

  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '120px',
    slidesToShow: 3,
    speed: 500,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  }

  return (
    <Slider {...settings}>
      {sliderData.map((slide, index) => {
        return (
          <div key={index}>
            <OurDoctorCard
              data={slide}
              classData={'h-96 w-full'}
              starBool={true}
            />
          </div>
        )
      })}
    </Slider>
  )
}

export default DoctorsSliderCentered
