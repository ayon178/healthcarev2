import React from 'react'
import aboutImage from '../../assets/partner/about_bg.png'

const About = () => {
  return (
    <div
      className="container-fluid mt-8 about px-10 py-5 shadow-lg"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.4), rgba(82,53,160,.4)), url(${aboutImage.src})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(10px)',
        backgroundPosition: 'top ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="w-[22rem] h-[22rem] flex flex-col justify-center items-start px-10 text-white rounded-3xl ml-auto"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.7), rgba(82,53,160,.5))`,
          backgroundSize: 'contain',
          backdropFilter: 'blur(5px)',
        }}
      >
        <h1 className="text-lg">Our Specialties</h1>
        <h1 className="text-2xl md:text-4xl text-secondaryText font-semibold mt-5 mb-2">
          Connecting to
          <br />
          Best Healthcare
        </h1>
        <p className="text-sm text-justify">
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          quos, repellendus dolore placeat est pariatur nobis sapiente culpa
          animi?&quot;
        </p>
        <button className="text-primary px-2 py-1 pointer font-bold rounded-md bg-primaryText mt-8">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default About
