import galaryImageOne from '../../assets/Robotic_Surgical_System.jpg'
import galaryImageTwo from '../../assets/International_Patient_Hall.jpg'
import galaryImageThree from '../../assets/Double_Channel_Chemotherapy.JPG'
import galaryImageFour from '../../assets/Automated_Medical_Laboratory.jpg'
import GalleryCard from './GalleryCard'

const galaryData = [
  {
    title: 'Robotic Surgical System',
    image: galaryImageOne,
  },
  {
    title: 'International Patient Hall',
    image: galaryImageTwo,
  },
  {
    title: 'Double Channel Chemotherapy',
    image: galaryImageThree,
  },
  {
    title: 'Automated Medical Laboratory',
    image: galaryImageFour,
  },
]

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 mt-8">
      <h1 className="text-2xl text-primary md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary  mt-10 pb-2">
        Modern equipment for best medical treatment
      </h1>
      <p className="text-sm text-center mt-3 mb-8">
        We are offering world class medical treatment with modern medical
        technologies to you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[95%] lg:w-[80%] mx-auto px-4 md:px-0">
        {galaryData.map((data, index) => (
          <GalleryCard key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
