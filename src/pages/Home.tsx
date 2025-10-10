import { Button } from "@/components/ui/button"
import Video from "../components/Video"


const Home = () => {

  return (
    <>
    <Video/>
    <div className="flex h-screen text-white justify-center items-center flex-col px-4">
    <h1 className="font-bebas text-[6rem] xs:text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] xl:text-[15rem]">MARTIANS</h1>
    <p className="text-white font-baumans tracking-[0.3rem] xs:tracking-[0.5rem] sm:tracking-[0.75rem] md:tracking-[1rem] font-semibold text-sm xs:text-base sm:text-lg md:text-xl text-center mb-4 xs:mb-5 sm:mb-6 md:mb-8 -mt-7 xs:-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 xl:-mt-16">Elite Minds. Infinite Possibilities</p>
    <Button variant={"outline"} className="px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 font-bebas tracking-wider">Explore</Button>
    </div>
    
    </>
  )
}

export default Home