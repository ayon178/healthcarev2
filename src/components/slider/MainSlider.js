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

import first from '../../assets/slider/1.1.jpg'
import second from '../../assets/slider/1.2.jpg'

const images = [
  {
    image: first,
    alt: 'Image 1',
    title: 'Best healthcare in world class hospitals',
    text: 'Your journey with us will be comfortable and transparent',
  },
  {
    image: second,
    alt: 'Image 2',
    title: 'Advanced treatment',
    text: 'Offering treatment in top healthcare centers with modern equipment',
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
          className="absolute top-0 left-0 max-w-screen h-full w-screen overflow-hidden md:flex items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div
            className="md:w-[65%] w-full overflow-hidden right_bottom_radius relative"
            style={{ height: 'calc(100vh - 70px)' }}
          >
            <div
              className="object-cover w-full h-full slide-img"
              style={{
                backgroundImage: `linear-gradient(to left, rgba(5,32,73,0.3), rgba(5,32,73,.8)), url(${images[currentSlide].image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: ' center',
              }}
            />
          </div>

          <div className="md:w-[35%] w-full pr-8">
            <div className={` text-white`}>
              <h1 className="text-4xl text-white font-semibold w-full">
                {currentSlide === 1 ? (
                  <span
                    style={{ lineHeight: 1.2 }}
                    className="text-[30px] text-[#440B72] no_wrap"
                  >
                    <span className="text-[#440B72] helevetica heading_drop_shadow">
                      Advanced treatment
                      <br />
                      with{' '}
                      <span className="text-[#33C9FF] heading_no_shadow">
                        latest medical technology
                      </span>
                    </span>
                  </span>
                ) : (
                  <span
                    style={{ lineHeight: 1.2 }}
                    className="text-[30px] text-[#440B72] no_wrap"
                  >
                    <span className=" no_wrap helevetica heading_drop_shadow">
                      <span className="text-[#33C9FF] heading_no_shadow">
                        Best healthcare
                      </span>
                      <br />
                      in{' '}
                      <span className="text-[#33C9FF] heading_no_shadow">
                        world class
                      </span>{' '}
                      hospitals
                    </span>
                  </span>
                )}
              </h1>
              <p className={`text-md text-[#AEA8B4] font-semibold mt-3 pr-8`}>
                {images[currentSlide].text}
              </p>
              <div className="flex justify-start">
                <button className="text-primary px-4 py-2 pointer font-bold rounded-md bg-[#9EDEF2] mt-8">
                  Register Now
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
