import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition >100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
     <div className='fixed top-0 left-0 w-full p-4 text-white flex justify-center  '>
          <div className='w-3/4 border-white border-1 rounded-4xl p-3 flex justify-center items-center'>
            <div className={`${isScrolled ? 'block':'hidden'}`}>Martians</div>
            <div className={`flex justify-between gap-4 items-center ${isScrolled ? 'hidden':'block'}`}>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>
          </div>
           </div>
  )
}

export default FloatingNavbar
