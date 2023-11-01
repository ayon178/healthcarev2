import Image from 'next/image'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import star from '../../assets/doctor/star.png'

const OurDoctorCard = ({ data, classData, starBool }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: ` url(${data.image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className={`relative ${classData} mx-auto max-w-sm p-0 pb-4`}
      >
        <div className="partner_bg absolute bottom-0 flex items-center justify-end flex-col w-full pb-4 h-28">
          <div className="relative h-full w-full">
            <div className=" bg-white px-4 py-2 rounded-md absolute -top-5 left-0 right-0 w-fit mx-auto">
              <div className="flex flex-col">
                <h1 className="inline-block text-primary text-center text-[.9rem] font-extrabold">
                  {data.name}
                </h1>
                <h1 className="inline-block text-primary text-center text-[.6rem] font-extrabold">
                  {data.degignation}
                </h1>
              </div>
            </div>
          </div>
          <p className="text-center text-[.7rem] px-4 text-white">
            {data.details}
          </p>
        </div>
        {starBool && (
          <Image
            src={star.src}
            alt="star"
            height={20}
            width={20}
            className="absolute -top-2 -left-2 w-fit mx-auto"
          />
        )}
      </div>
    </>
  )
}

export default OurDoctorCard
