import Image from 'next/image'

const OurServicesCard = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-44 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4 dark:bg-gray-800 dark:border-gray-700">
      {/* {<data.icon className="text-5xl mx-auto text-secondary" />} */}
      <Image
        src={data.icon}
        alt={data.title}
        width={50}
        height={50}
        className="py-1"
      />
      <h1 className="text-center text-primary text-base md:text-md font-semibold mt-3 mb-2">
        {data.title}
      </h1>
    </div>
  )
}

export default OurServicesCard
