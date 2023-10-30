import Link from "next/link"

const Welcome = () => {
  return (
    <div className="container mx-auto flex items-center justify-center flex-col h-screen">
      <h1 className="text-4xl font-semibold text-primary text-center">
        Welcome to Demo Outlook{' '}
      </h1>
      <h1 className="text-lg w-[90%] md:w-[60%] font-semibold mt-1 text-center">
        This is the initial design outlook of landing page of Pisces Healthcare
        Services. Elements of the design are subjects to change based on reviews
        & feedbacks.{' '}
      </h1>
      <button className="bg-primary text-white font-semibold px-4 py-2 rounded-md mt-8">
        <Link href="/">View Demo Outlook</Link>
      </button>
    </div>
  )
}

export default Welcome
