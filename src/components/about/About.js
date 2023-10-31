import React from 'react'
import aboutImage from '../../assets/slider_1.JPG'

const About = () => {
  return (
    <div
      className="container-fluid mt-24 about p-10"
      style={{
        backgroundImage: ` url(${aboutImage.src})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(10px)',
        backgroundPosition: 'top ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="w-[25rem] h-[25rem] flex flex-col justify-center items-start px-10 text-white rounded-3xl ml-auto"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.7), rgba(82,53,160,.5))`,
          backgroundSize: 'contain',
          backdropFilter: 'blur(5px)',
        }}
      >
        <h1 className="text-lg">About Us</h1>
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
