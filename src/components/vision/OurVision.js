import visionImage from '../../assets/why/bg.png'

const OurVision = () => {
  return (
    <div className="container-fluid h-screen px-4 md:px-0 shadow-lg">
      {/* <h1 className="text-primary text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary mt-10 pb-2">
        Our Vision
      </h1> */}

      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.8), rgba(82,53,160,.8)), url(${visionImage.src})`,
          backgroundSize: 'cover',
          backdropFilter: 'blur(10px)',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        className="py-20 h-full w-full mt-8 gap-5 flex items-center"
      >
        <div className=" px-8 text-left mx-auto w-full sm:w-[90%] md:w-[70%] lg-w-[60%]">
          {/* <h1 className="text-white text-xl">Our Vision</h1> */}
          <h1 className="text-secondaryText text-center mt-4 mb-6 text-4xl md:text-7xl font-semibold">
            Why Choose Us
          </h1>
          <p
            style={{ wordSpacing: 1 }}
            className="text-white text-lg text-center mt-4 w-full mx-auto md:w-3/4"
          >
            Two brains are better than one, hence it is useful to take another
            opinion.
            <br />
            If you have the diagnosis and treatment plan a second opinion
            through us will offer more information and logical solution that
            will help you take the correct decision.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurVision
