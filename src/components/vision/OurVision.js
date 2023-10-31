import visionImage from '../../assets/slider_1.JPG'

const OurVision = () => {
  return (
    <div className="container-fluid h-screen px-4 md:px-0 mt-24">
      {/* <h1 className="text-primary text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary mt-10 pb-2">
        Our Vision
      </h1> */}

      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.8), rgba(82,53,160,.8)), url(${visionImage.src})`,
          backgroundSize: 'cover',
          backdropFilter: 'blur(10px)',
          backgroundPosition: 'top ',
          backgroundRepeat: 'no-repeat',
        }}
        className="py-20 h-full w-full mt-8 gap-5 flex items-center"
      >
        <div className=" px-8 text-left mx-auto w-full sm:w-[90%] md:w-[70%] lg-w-[60%]">
          <h1 className="text-white text-xl">Our Vision</h1>
          <h1 className="text-secondaryText mt-4 mb-6 text-4xl md:text-6xl font-semibold">
            Why Choose Us
          </h1>
          <p className="text-white text-sm text-justify mt-4">
            &quot;We are committed to providing the highest quality of care and
            service to our patients and their families. We strive to be the
            regional healthcare provider of choice, and a place where patients
            come for care, physicians want to practice, and employees prefer to
            work. We are committed to providing the highest quality of care and
            service to our patients and their families. We strive to be the
            regional healthcare provider of choice, and a place where patients
            come for care, physicians want to practice, and employees prefer to
            work. &quot;
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurVision
