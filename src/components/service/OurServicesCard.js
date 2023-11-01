import Image from 'next/image'

const OurServicesCard = ({ data }) => {
  return (
    <div className="w-[10rem] rounded-2xl flex flex-col justify-center items-center h-[7rem] mx-auto max-w-sm bg-white border border-gray-200 shadow-lg px-4 dark:bg-gray-800 dark:border-gray-700">
      {/* {<data.icon className="text-5xl mx-auto text-secondary" />} */}
      <Image
        src={data.icon}
        alt={data.title}
        width={30}
        height={30}
        className="py-1"
      />
      <h1 className="text-center text-primary md:text-xs font-semibold mt-3 mb-1">
        {data.title}
      </h1>
    </div>
  )
}

export default OurServicesCard
