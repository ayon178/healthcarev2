import Image from 'next/image'

const OurHospitalsCard = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: ` url(${data.image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative w-full h-[320px] mx-auto max-w-sm p-0 pb-4 bg-slate-100 border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="partner_bg absolute bottom-0 flex items-center justify-end flex-col  w-full pb-4 h-36">
        <div className="relative h-full w-full">
          <div className="flex items-center bg-white px-4 py-2 rounded-md absolute -top-5 left-0 right-0 mx-auto h-16 w-32 overflow-hidden">
            <Image
              src={data.icon.src}
              alt=""
              height={80}
              width={100}
              className="p-2"
            />
          </div>
        </div>
        <h1 className="text-center px-4 text-lg md:text-xl font-semibold mt-3 mb-2 text-secondaryText">
          {data.title}
        </h1>
        <p className="text-center text-[.7rem] px-4 text-white">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default OurHospitalsCard
