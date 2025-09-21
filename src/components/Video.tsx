
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
        <div className="fixed top-0 left-0 w-full h-screen bg-black z-10 flex items-center justify-center">
          {/* Simple Loading Cube */}
          <div className="relative">
            {/* Rotating Cube */}
            <div className="w-12 h-12 bg-white animate-spin duration-1000 rounded"></div>
            
            {/* Loading Text */}
            <div className="mt-6 text-center">
              <p className="text-white font-bebas text-lg tracking-wider animate-pulse">
                LOADING...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black z-10 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🔴</div>
            <p className="font-bebas text-2xl">MARS CONNECTION FAILED</p>
            <p className="text-gray-400 mt-2">Unable to establish video link</p>
          </div>
        </div>
      )}

      {/* Video */}
      <video 
        src="https://res.cloudinary.com/diomo9lhe/video/upload/v1758282913/output2_llun6x.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 left-0 w-full h-screen object-cover z-0 opacity-50"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onCanPlay={handleVideoLoad}
      />
    </div>
  )
}

export default Video