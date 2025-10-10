import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import Video from "../components/Video"


const Home = () => {
  const navigate = useNavigate()

  const handleAboutUsClick = () => {
    navigate('/aboutus')
  }

  const handleEventsClick = () => {
    navigate('/events')
  }

  return (
    <>
    <Video/>
    <div className="flex h-screen text-white justify-center items-center flex-col px-4 relative z-20">
    <h1 className="font-bebas text-[6rem] xs:text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] xl:text-[15rem]">MARTIANS</h1>
    <p className="text-white font-baumans tracking-[0.3rem] xs:tracking-[0.5rem] sm:tracking-[0.75rem] md:tracking-[1rem] font-semibold text-sm xs:text-base sm:text-lg md:text-xl text-center mb-4 xs:mb-5 sm:mb-6 md:mb-8 -mt-7 xs:-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 xl:-mt-16">Elite Minds. Infinite Possibilities</p>
    <div className="w-3/4 flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-6 relative z-30">
    <Button 
      variant={"outline"} 
      onClick={handleAboutUsClick}
      className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 font-bebas tracking-wider text-sm sm:text-base md:text-lg lg:text-xl bg-transparent border-white/30 text-white hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
    >
      About Us
    </Button>
    <Button 
      variant={"outline"} 
      onClick={handleEventsClick}
      className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 font-bebas tracking-wider text-sm sm:text-base md:text-lg lg:text-xl bg-transparent border-white/30 text-white hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
    >
      Events
    </Button>
    </div>
    </div>
    </>
  )
}

export default Home