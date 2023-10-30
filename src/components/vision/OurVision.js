import visionImage from '../../assets/logo.png'

const OurVision = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 mt-8">
      <h1 className="text-primary text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary mt-10 pb-2">
        Our Specialties
      </h1>

      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(82,53,160,0.8), rgba(82,53,160,.8)), url(${visionImage.src})`,
          backgroundSize: 'contain',
          backdropFilter: 'blur(10px)',
          backgroundPosition: 'top ',
          backgroundRepeat: 'no-repeat',
        }}
        className="py-20 h-full w-full mt-8 gap-5 items-center rounded-md"
      >
        <div className=" px-8 text-center mx-auto w-full sm:w-[90%] md:w-[70%] lg-w-[60%]">
          {' '}
          {/* <h1 className="md:text-3xl text-2xl font-bold text-secondaryText">
            Our Specialties
          </h1> */}
          <p className="text-sm text-justify mb-7 mt-7 text-white">
            If you are looking for diagnosis & treatment plan from world class
            hospitals and a second opinion through us, we will offer more
            information and logical solutions that will help you take the
            correct decision.
          </p>
          {/* <p className="text-sm text-justify text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            ducimus est quae enim pariatur, magnam deleniti, vero iure
            consequuntur minus labore quibusdam unde accusamus maiores mollitia
            repudiandae natus nihil? Quas saepe hic dolores illum, dolor aliquid
            ea doloremque ab sapiente numquam qui fugit temporibus! Cupiditate
            porro temporibus quidem voluptas eligendi, unde tempora id
          </p> */}
          <div className="flex flex-wrap justify-between mt-4">
            <div className="text-left">
              <p className="text-white">✔ CARDIAC SCIENCE</p>
              <p className="text-white">✔ OBSTETRICS &amp; GYNAECOLOGY</p>
              <p className="text-white">✔ LIVER</p>
              <p className="text-white">✔ PAEDIATRIC FOR SPECIAL NEEDS</p>
              <p className="text-white">✔ UROLOGY &amp; NEPHROLOGY</p>
              <p className="text-white">✔ PSYCHIATRY AND PSYCHOLOGIST</p>
            </div>
            <div className="text-left">
              <p className="text-white">✔ ONCOLOGY</p>
              <p className="text-white">✔ DIABETOLOGY</p>
              <p className="text-white">✔ GASTROENTEROLOGY</p>
              <p className="text-white">✔ PLASTIC SURGERY</p>
              <p className="text-white">✔ NEUROSCIENCES</p>
              <p className="text-white">✔ ENDOCRINOLOGY</p>
            </div>
            <div className="text-left">
              <p className="text-white">✔ SPINE SCIENCES</p>
              <p className="text-white">✔ IVF (IN VITRO FERTILIZATION)</p>
              <p className="text-white">
                ✔ ORTHOPAEDICS &amp; JOINT REPLACEMENT
              </p>
              <p className="text-white">✔ ENT</p>
              <p className="text-white">✔ PROSTHESIS/ARTIFICIAL LIMBS</p>
              <p className="text-white">✔ GENERAL MEDICINE</p>
            </div>
          </div>
          <button className="mt-7 text-primary bg-white px-4 py-1 font-medium rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurVision
