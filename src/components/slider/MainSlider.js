import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { AnimatePresence } from 'framer-motion'
import firstImage from '../../assets/slider/slide_1.png'
import secondImage from '../../assets/slider/slide_2.png'
import thirdImage from '../../assets/slider/slide_3.png'
import fourthImage from '../../assets/slider/slide_4.png'
import fifthImage from '../../assets/slider/slide_5.png'
import sixthImage from '../../assets/slider/slide_6.png'

const images = [
  {
    image: firstImage,
    alt: 'Image 1',
    title: 'REVOLUTIONARY CONCEPT in EQUIPMENT MAINTENANCE',
    text: 'Infrared Scanning / Thermography to assess the condition of your Electrical Machineries',
  },
  {
    image: secondImage,
    alt: 'Image 2',
    title: 'Air we breathe is free, Compressed Air is NOT',
    text: 'Accurately detect & locate the leaks in your production system',
  },
  {
    image: thirdImage,
    alt: 'Image 3',
    title: 'Achieve Zero Air Leak',
    text: 'Precisely quantify the Air Leaks & take proper measure to prevent wastage & damage',
  },
  {
    image: fourthImage,
    alt: 'Image 4',
    title: 'REVOLUTIONARY CONCEPT in EQUIPMENT MAINTENANCE',
    text: 'Infrared Scanning / Thermography to assess the condition of your Electrical Machineries',
  },
  {
    image: fifthImage,
    alt: 'Image 5',
    title: 'Air we breathe is free, Compressed Air is NOT',
    text: 'Accurately detect & locate the leaks in your production system',
  },
  {
    image: sixthImage,
    alt: 'Image 6',
    title: 'Achieve Zero Air Leak',
    text: 'Precisely quantify the Air Leaks & take proper measure to prevent wastage & damage',
  },
]

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length)
    }, 7000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const zoomAndTranslateAnimation = gsap.fromTo(
      '.slide-img',
      { scale: 1 }, // Start with a scale of 1
      {
        scale: 1.2, // Zoom to a scale of 1.2
        duration: 8,
        ease: 'power2.inOut',
      }
    )

    return () => {
      zoomAndTranslateAnimation.kill()
    }
  }, [currentSlide])

  return (
    <div
      className="relative w-screen overflow-hidden"
      style={{ height: 'calc(100vh - 70px)' }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute top-0 left-0 max-w-screen h-full w-screen overflow-hidden flex items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div
            className="w-1/2 sm:w-full overflow-hidden right_bottom_radius relative"
            style={{ height: 'calc(100vh - 70px)' }}
          >
            <div
              className="object-cover w-full h-full slide-img"
              style={{
                backgroundImage: `linear-gradient(to left, rgba(5,32,73,0.3), rgba(5,32,73,.8)), url(${images[currentSlide].image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
              }}
            />
          </div>

          <div className="w-1/2 sm:w-full">
            <div className={` text-white`}>
              <h1 className="text-4xl text-white font-semibold w-1/2">
                {currentSlide === 2 ? (
                  <span
                    style={{ lineHeight: 1.2 }}
                    className="text-4xl text-primary no_wrap"
                  >
                    <span className="text-primary ">Achieve</span>
                    <br /> Zero Air Leak
                  </span>
                ) : currentSlide === 1 ? (
                  <span
                    style={{ lineHeight: 1.2 }}
                    className="text-4xl text-primary no_wrap"
                  >
                    <span className="text-primary ">
                      Air we breathe is free
                    </span>
                    {/* <br /> Compressed Air is NOT */}
                  </span>
                ) : (
                  <span
                    style={{ lineHeight: 1.2 }}
                    className="text-4xl text-primary no_wrap"
                  >
                    <span className="text-primary">REVOLUTIONARY CONCEPT</span>
                    {/* <br /> in EQUIPMENT MAINTENANCE */}
                  </span>
                )}
              </h1>
              <p className={`text-lg text-primary font-semibold mt-3 `}>
                {images[currentSlide].text}
              </p>
              <div className="flex justify-start">
                <button className="text-primary px-4 py-2 pointer font-bold rounded-md bg-primaryText mt-8">
                  Call to Order
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MainSlider
