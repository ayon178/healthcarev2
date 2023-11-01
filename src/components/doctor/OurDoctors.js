import doctorOne from '../../assets/doct1.png'
import doctorTwo from '../../assets/doct2.png'
import doctorThree from '../../assets/doct3.png'
import doctorFour from '../../assets/doct4.png'
import DoctorsSliderCentered from '../slider/Doctors'
import DoctorsAuto from '../slider/DoctorsAuto'

import bgImage from '../../assets/doctor/bg.png'

const doctorData = [
  {
    name: 'Walter White',
    image: doctorOne,
    degignation: 'Clief Medical Officer',
    details: '10 years of experience in medical practices.',
  },
  {
    name: 'Sarah Jhonson',
    image: doctorTwo,
    degignation: 'Anesthesiologist',
    details: '10 years of experience in medical practices.',
  },
  {
    name: 'Amanda Jepson',
    image: doctorThree,
    degignation: 'Neurosurgeon',
    details: '10 years of experience in medical practices.',
  },
  {
    name: 'William Anderson',
    image: doctorFour,
    degignation: 'Cardiologist',
    details: '10 years of experience in medical practices.',
  },
  {
    name: 'Amanda Jepson',
    image: doctorThree,
    degignation: 'Neurosurgeon',
    details: '10 years of experience in medical practices.',
  },
  {
    name: 'William Anderson',
    image: doctorFour,
    degignation: 'Cardiologist',
    details: '10 years of experience in medical practices.',
  },
]

const OurDoctors = () => {
  return (
    <div
      className=" container-fluid pt-1"
      style={{
        backgroundImage: ` url(${bgImage.src})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(6px)',
        backgroundPosition: 'top ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 md:px-0 mt-24 md:flex ">
        <div className="w-1/5 mt-[42px]">
          <h1 className="text-primary text-2xl md:text-4xl text-center md:text-left font-semibold w-fit  border-b-2 border-secondary mt-10 pb-2">
            Our
            <br />
            Doctors
          </h1>
          <p className="text-sm mt-2 text-justify">
            Medical treatment from globally
            <br /> renown doctors
          </p>
        </div>

        <div className="w-4/5">
          <div className="">
            <DoctorsSliderCentered sliderData={doctorData} />
          </div>
          <div className=" mt-10">
            <DoctorsAuto sliderData={doctorData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurDoctors
