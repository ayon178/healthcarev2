import React from 'react'
import galary1 from '../../assets/gallery/gallery1.jpg'
import galary2 from '../../assets/gallery/gallery2.jpg'
import galary3 from '../../assets/gallery/gallery3.JPG'
import galary4 from '../../assets/gallery/gallery4.jpg'

import bgImage from '../../assets/doctor/bg.png'

const MainGallery = () => {
  return (
    <div
      className=" container-fluid py-8"
      style={{
        backgroundImage: ` url(${bgImage.src})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(10px)',
        backgroundPosition: 'top ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto md:flex items-start mt-24 md:px-32">
        <div className="w-full md:w-1/5 mt-24">
          <h1 className="text-primary mx-auto md:mx-0 text-2xl md:text-3xl  font-semibold w-fit border-b-2 border-secondary pb-2">
            View Gallery
          </h1>
          {/* <button className="text-primary px-2 py-1 pointer font-bold rounded-md bg-primaryText mt-8">
            Learn More
          </button> */}
        </div>
        <div className="w-full md:w-4/5">
          <div className="flex items-end gap-4 w-[85%] ml-auto">
            {/*image one  */}
            <div
              className="pl-10 pr-8 py-8 flex flex-col justify-end shadow-md w-[60%]"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.1), rgba(82,53,160,.9)), url(${galary1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
                width: '100%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="text-white text-center text-2xl ">
                Robotic Surgical System
              </h1>
              {/* <p className="text-white text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa corporis ullam iusto veniam culpa.
              </p> */}
            </div>
            {/*image two  */}
            <div
              className="pl-10 pr-8 py-8 flex flex-col justify-end shadow-md w-[40%]"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.1), rgba(82,53,160,.9)), url(${galary2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
                width: '85%',
                marginLeft: 'auto',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="text-white text-center text-2xl ">
                International Patient Hall
              </h1>
              {/* <p className="text-white text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa corporis ullam iusto veniam culpa.
              </p> */}
            </div>
          </div>
          <div className="flex items-start mt-4 gap-4 w-full">
            {/*image three  */}
            <div
              className="pl-10 pr-8 py-8 flex flex-col justify-end shadow-md"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.1), rgba(82,53,160,.9)), url(${galary3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="text-white text-center text-2xl ">
                Double Channel Chemotherapy
              </h1>
              {/* <p className="text-white text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa corporis ullam iusto veniam culpa.
              </p> */}
            </div>

            {/*image four  */}
            <div
              className="pl-10 pr-8 py-8 flex flex-col justify-end shadow-md"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.1), rgba(82,53,160,.9)), url(${galary4.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="text-white text-2xl text-center">
                Automated Medical Laboratory
              </h1>
              {/* <p className="text-white text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa corporis ullam iusto veniam culpa.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainGallery
