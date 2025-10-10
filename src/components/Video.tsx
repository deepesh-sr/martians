
import { useState } from 'react';

const Video = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative">
      {/* Loading State */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black z-10 flex items-center justify-center px-4">
          {/* Simple Loading Cube */}
          <div className="relative">
            {/* Rotating Cube */}
            <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white animate-spin duration-1000 rounded"></div>
            
            {/* Loading Text */}
            <div className="mt-4 xs:mt-5 sm:mt-6 text-center">
              <p className="text-white font-bebas text-sm xs:text-base sm:text-lg md:text-xl tracking-wider animate-pulse">
                LOADING...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black z-10 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl mb-2 xs:mb-3 sm:mb-4">🔴</div>
            <p className="font-bebas text-lg xs:text-xl sm:text-2xl md:text-3xl">MARS CONNECTION FAILED</p>
            <p className="text-gray-400 mt-1 xs:mt-2 text-xs xs:text-sm sm:text-base">Unable to establish video link</p>
          </div>
        </div>
      )}

      {/* Video */}
      <video 
        src="https://cdn.pixabay.com/video/2021/10/20/92677-637275026_large.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 left-0 w-full h-screen object-cover z-0 opacity-20 xs:opacity-25 sm:opacity-30"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onCanPlay={handleVideoLoad}
      />
    </div>
  )
}

export default Video