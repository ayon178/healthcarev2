import doctorOne from '../../assets/doct1.png'
import doctorTwo from '../../assets/doct2.png'
import doctorThree from '../../assets/doct3.png'
import doctorFour from '../../assets/doct4.png'
import OurDoctorCard from './OurDoctorsCard'

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
]

const OurDoctors = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 mt-8">
      <h1 className="text-primary text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary mt-10 pb-2">
        Our Doctors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full md:w-[95%] lg:w-[80%] mx-auto px-4 md:px-0">
        {doctorData.map((data, index) => (
          <OurDoctorCard key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default OurDoctors
