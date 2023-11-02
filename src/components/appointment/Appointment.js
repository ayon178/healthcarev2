import bgImage from '../../assets/bg_1.png'

const Appointment = () => {
  return (
    <div
      className="container-fluid mt-24 pb-10"
      style={{
        backgroundImage: ` url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top ',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="md:flex gap-5 justify-between h-full container mx-auto px-4 md:px-0">
        {/* Left box */}
        <div
          className=" w-full md:w-[35%] h-[484px] flex flex-col px-5 items-center justify-center rounded-md"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(82,53,160,0.4), rgba(82,53,160,1))`,
          }}
        >
          <h1
            className="bg-primary text-center text-secondaryText text-xl md:text-4xl font-bold cursor-pointer px-4 py-1 rounded-md"
            style={{
              textShadow: '0 0 5px rgba(0, 255, 255, 0.7)',
              boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
            }}
          >
            Register
            <br /> Now
          </h1>

          <p className="mt-4 text-white text-[1.3rem] text-center">
            Registered patients will get{' '}
            <span className="font-bold text-3xl">5%</span>
            <br /> discount on hospital admission
          </p>
        </div>
        {/* Right box */}
        <div className="w-full mt-4 md:mt-0 md:w-[65%] shadow-md appointment_border px-4 py-5 rounded-md">
          <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 text-primary border-secondary mb-4 mt-10 pb-2">
            Register to get your ID
          </h1>
          <p className="text-sm text-center mt-3">
            Fill up the form and submit
          </p>

          <form className="mt-16">
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="1234567890"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="mb-6">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Medical Consultation Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="depertment"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Depertment
                </label>
                <select
                  id="depertment"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="1">Cardiology</option>
                  <option value="2">Dental</option>
                  <option value="3">Neurology</option>
                  <option value="4">Orthopedics</option>
                  <option value="5">Pediatrics</option>
                  <option value="6">Urology</option>
                </select>
              </div>
              {/* <div className="mb-6"> */}
              {/* <label
                  htmlFor="doctor"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Doctor
                </label>
                <select
                  id="doctor"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="1">John Doe</option>
                  <option value="1">John Doe</option>
                  <option value="1">John Doe</option>
                  <option value="1">John Doe</option>
                  <option value="1">John Doe</option>
                </select> */}

              {/* upload button for uploading pescription */}
              <div className="flex flex-col items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-primary  hover:bg-primary dark:hover:bg-gray-700 dark:hover:text-white dark:bg-gray-700 dark:text-white border-primary border-2 py-1 px-4 mt-7 hover:text-secondaryText duration-150"
                >
                  <span>Upload Pescription</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-3">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-md text-white font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Appointment
