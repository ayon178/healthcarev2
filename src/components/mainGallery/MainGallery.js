import React from 'react'
import galary1 from '../../assets/galley1.png'
import galary2 from '../../assets/gallery2.png'
import galary3 from '../../assets/gallery3.png'
import galary4 from '../../assets/gallery4.png'

const MainGallery = () => {
  return (
    <div className="container mx-auto md:flex items-start mt-24 md:px-32">
      <div className="w-full md:w-1/5">
        <h1 className="text-primary mx-auto md:mx-0 text-2xl md:text-3xl  font-semibold w-fit border-b-2 border-secondary pb-2">
          Gallery
        </h1>
        <button className="text-primary px-2 py-1 pointer font-bold rounded-md bg-primaryText mt-8">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-4/5">
        <div className="grid grid-cols-2 items-end gap-4 w-full">
          {/*image one  */}
          <div
            className="pl-10 pr-8 py-8 flex flex-col justify-end"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.1), rgba(82,53,160,.9)), url(${galary1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '280px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className="text-white text-2xl ">Text Writeup</h1>
            <p className="text-white text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ipsa corporis ullam iusto veniam culpa.
            </p>
          </div>
          {/*image two  */}
          <div
            className="pl-10 pr-8 py-8 flex flex-col justify-end"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.1), rgba(82,53,160,.9)), url(${galary2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className="text-white text-2xl ">Text Writeup</h1>
            <p className="text-white text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ipsa corporis ullam iusto veniam culpa.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-start mt-4 gap-4 w-full">
          {/*image three  */}
          <div
            className="pl-10 pr-8 py-8 flex flex-col justify-end"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.1), rgba(82,53,160,.9)), url(${galary3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className="text-white text-2xl ">Text Writeup</h1>
            <p className="text-white text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ipsa corporis ullam iusto veniam culpa.
            </p>
          </div>

          {/*image four  */}
          <div
            className="pl-10 pr-8 py-8 flex flex-col justify-end "
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.1), rgba(82,53,160,.9)), url(${galary4.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '280px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className="text-white text-2xl ">Text Writeup</h1>
            <p className="text-white text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ipsa corporis ullam iusto veniam culpa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainGallery
