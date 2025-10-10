import { Button } from "@/components/ui/button"

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="text-center max-w-6xl">
          <h1 className="font-bebas text-[4rem] xs:text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] mb-6 sm:mb-8 md:mb-10  hover:animate-none hover:scale-110 transition-all duration-500 cursor-default bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent hover:from-white hover:to-white">
            ABOUT US
          </h1>
          <p className="font-baumans text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.2rem] sm:tracking-[0.3rem] md:tracking-[0.5rem] text-white/90 mb-8 sm:mb-10 md:mb-12">
            Gaming Evolution Architects
          </p>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-white mx-auto mb-8 sm:mb-10 md:mb-12"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            We are the bridge between gaming dreams and competitive reality, orchestrating tournaments that define the future of esports.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
                OUR MISSION
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8">
                <span className="text-white font-semibold">MARTIANS</span> exists to revolutionize the gaming ecosystem by creating world-class tournaments and fostering strategic partnerships with leading gaming companies.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10">
                We don't just organize events – we craft experiences that elevate players, engage audiences, and drive the industry forward.
              </p>
              <Button 
                variant="outline" 
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-bebas text-base sm:text-lg md:text-xl tracking-wider bg-transparent border-white/30 hover:bg-white hover:text-black transition-all duration-300"
              >
                VIEW PARTNERSHIPS
              </Button>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                    X+
                  </div>
                  <div className="text-sm sm:text-base text-white/70 tracking-wide">
                    TOURNAMENTS ORGANIZED
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                    X+
                  </div>
                  <div className="text-sm sm:text-base text-white/70 tracking-wide">
                    GAMING PARTNERS
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                    X+
                  </div>
                  <div className="text-sm sm:text-base text-white/70 tracking-wide">
                    PLAYERS ENGAGED
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                    24/7
                  </div>
                  <div className="text-sm sm:text-base text-white/70 tracking-wide">
                    GLOBAL OPERATIONS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
              WHAT WE DO
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              We specialize in three core areas that define the modern gaming landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Tournament Organization */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-white/10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full relative">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <h3 className="font-bebas text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-center tracking-wide">
                TOURNAMENT ORGANIZATION
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed text-center">
                From concept to championship, we orchestrate premium gaming tournaments that set industry standards and create unforgettable competitive experiences.
              </p>
            </div>

            {/* Strategic Partnerships */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-white/10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border border-white"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border border-white"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border border-white"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border border-white"></div>
                </div>
              </div>
              <h3 className="font-bebas text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-center tracking-wide">
                STRATEGIC PARTNERSHIPS
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed text-center">
                Building bridges between gaming companies, developers, and competitive communities to foster innovation and mutual growth.
              </p>
            </div>

            {/* Community Building */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-white/10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full relative">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full absolute top-2 left-2"></div>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full absolute top-2 right-2"></div>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full absolute bottom-2 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
              <h3 className="font-bebas text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-center tracking-wide">
                COMMUNITY BUILDING
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed text-center">
                Cultivating vibrant gaming communities that connect players worldwide and create lasting relationships beyond the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
            READY TO LEVEL UP?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Join the MARTIANS ecosystem and be part of the gaming revolution. Whether you're a player, developer, or industry partner, we're here to elevate your game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
            <Button 
              variant="outline" 
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-bebas text-base sm:text-lg md:text-xl tracking-wider bg-white text-black hover:bg-white/90 transition-all duration-300 w-full sm:w-auto"
            >
              BECOME A PARTNER
            </Button>
            <Button 
              variant="outline" 
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-bebas text-base sm:text-lg md:text-xl tracking-wider bg-transparent border-white/30 hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs