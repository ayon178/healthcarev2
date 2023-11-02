import React from 'react'
import aboutImage from '../../assets/partner/about_bg.png'

const About = () => {
  return (
    <div
      className="container-fluid flex items-center justify-between mt-8 about px-10 py-5 shadow-lg"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.4), rgba(82,53,160,.4)), url(${aboutImage.src})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(10px)',
        backgroundPosition: 'top ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-wrap justify-between gap-8 mt-4">
        <div className="text-left">
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ CARDIAC SCIENCE
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ OBSTETRICS &amp; GYNAECOLOGY
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ LIVER
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ PAEDIATRIC FOR SPECIAL NEEDS
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ UROLOGY &amp; NEPHROLOGY
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ PSYCHIATRY AND PSYCHOLOGISY
          </p>
        </div>
        <div className="text-left">
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ ONCOLOGY
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ DIABETOLOGY
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ GASTROENTEROLOGY
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ PLASTIC SURGERY
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ NEUROSCIENCES
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ ENDOCRINOLOGY
          </p>
        </div>
        <div className="text-left">
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ SPINE SCIENCES
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ IVF (IN VITRO FERTILIZATION)
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ ORTHOPAEDICS &amp; JOINT REPLACEMENT
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ ENT
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ PROSTHESIS/ARTIFICIAL LIMBS
          </p>
          <p className=" text-xs text-white bg-[#5235a0b3] px-2 py-2 my-2 rounded-md">
            ✔ GENERAL MEDICINE
          </p>
        </div>
      </div>

      <div
        className="w-[22rem] h-[22rem] flex flex-col justify-center items-start px-10 rounded-3xl ml-auto"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.7), rgba(82,53,160,.5))`,
          backgroundSize: 'contain',
          backdropFilter: 'blur(5px)',
        }}
      >
        {/* <h1 className="text-lg text-white">Our Specialties</h1> */}
        <h1 className="text-2xl md:text-3xl text-secondaryText font-semibold mt-5 mb-2">
          Our Specialties
          {/* <br />
          Best Healthcare */}
        </h1>
        <p className="text-sm text-white">
          You can find your necessary medical support from the hospitals
          of multi disciplinary services
        </p>
        {/* <button className="text-primary px-2 py-1 pointer font-bold rounded-md bg-primaryText mt-8">
          Learn More
        </button> */}
      </div>
    </div>
  )
}

export default About
