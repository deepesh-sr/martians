import { Button } from "@/components/ui/button"

const Events = () => {
  const events = [
    {
      id: 1,
      title: "BGMI CHAMPIONSHIP",
      subtitle: "Battle Royale Supreme",
      date: "NOV 15-17, 2025",
      prize: "$50,000",
      participants: "2,048",
      status: "LIVE",
      category: "MOBILE",
      color: "from-red-500/20 to-orange-500/20",
      border: "border-red-500/30"
    },
    {
      id: 2,
      title: "VALORANT MASTERS",
      subtitle: "Tactical Warfare Elite",
      date: "DEC 01-05, 2025",
      prize: "$100,000",
      participants: "128",
      status: "UPCOMING",
      category: "PC",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30"
    },
    {
      id: 3,
      title: "COD WARZONE PRO",
      subtitle: "Zone Domination",
      date: "NOV 22-24, 2025",
      prize: "$75,000",
      participants: "512",
      status: "REGISTRATION",
      category: "PC",
      color: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30"
    },
    {
      id: 4,
      title: "FREE FIRE ULTIMATE",
      subtitle: "Survival Champions",
      date: "DEC 10-12, 2025",
      prize: "$30,000",
      participants: "1,024",
      status: "UPCOMING",
      category: "MOBILE",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30"
    },
    {
      id: 5,
      title: "APEX LEGENDS SERIES",
      subtitle: "Arena Legends",
      date: "DEC 20-22, 2025",
      prize: "$80,000",
      participants: "256",
      status: "REGISTRATION",
      category: "PC",
      color: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-500/30"
    },
    {
      id: 6,
      title: "FORTNITE FESTIVAL",
      subtitle: "Build & Battle",
      date: "JAN 05-07, 2026",
      prize: "$120,000",
      participants: "512",
      status: "UPCOMING",
      category: "CROSS",
      color: "from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-500/30"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-red-500 text-white animate-pulse'
      case 'REGISTRATION': return 'bg-green-500 text-black'
      case 'UPCOMING': return 'bg-blue-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative overflow-hidden">
        {/* Matrix Background Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-1 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className={`bg-white/5 animate-pulse`}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + (i % 3)}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-6xl relative z-10">
          <h1 className="font-bebas text-[4rem] xs:text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] mb-6 sm:mb-8 md:mb-10 hover:animate-none hover:scale-110 transition-all duration-500 cursor-default bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent hover:from-white hover:to-white">
            EVENTS
          </h1>
          <p className="font-baumans text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.2rem] sm:tracking-[0.3rem] md:tracking-[0.5rem] text-white/90 mb-8 sm:mb-10 md:mb-12">
            Tournament Matrix Activated
          </p>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 sm:mb-10 md:mb-12 animate-pulse"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            Enter the competitive matrix where legends are forged and champions rise through digital warfare.
          </p>
        </div>

        {/* Floating Matrix Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative">
        {/* Matrix Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 gap-px h-full w-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <div 
                key={i} 
                className={`border border-white/10 ${i % 7 === 0 ? 'bg-white/5 animate-pulse' : ''}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
              ACTIVE TOURNAMENTS
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Matrix of competitive gaming events designed to test the limits of skill and strategy
            </p>
          </div>

          {/* Events Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`group relative bg-gradient-to-br ${event.color} backdrop-blur-sm border ${event.border} rounded-2xl p-6 sm:p-8 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Matrix Effect Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="grid grid-cols-6 gap-px h-full w-full">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="bg-white/10 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bebas tracking-wider ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs font-bebas tracking-wide">
                      {event.category}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 tracking-wide group-hover:text-white transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Event Subtitle */}
                  <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {event.subtitle}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-xs sm:text-sm">DATE</span>
                      <span className="text-white font-bebas text-sm sm:text-base tracking-wide">{event.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-xs sm:text-sm">PRIZE POOL</span>
                      <span className="text-white font-bebas text-sm sm:text-base tracking-wide">{event.prize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-xs sm:text-sm">PLAYERS</span>
                      <span className="text-white font-bebas text-sm sm:text-base tracking-wide">{event.participants}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 sm:gap-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 font-bebas tracking-wider text-xs sm:text-sm"
                    >
                      {event.status === 'LIVE' ? 'WATCH LIVE' : event.status === 'REGISTRATION' ? 'REGISTER' : 'VIEW DETAILS'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="px-3 sm:px-4 bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <span className="text-lg">⚡</span>
                    </Button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Matrix Footer */}
          <div className="text-center mt-16 sm:mt-20 md:mt-24">
            <Button 
              variant="outline" 
              className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 font-bebas text-lg sm:text-xl md:text-2xl tracking-wider bg-transparent border-white/30 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
            >
              VIEW ALL TOURNAMENTS
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events