import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const loadingPhrases = [
    "Initializing Gotham City...",
    "Establishing connection to Wayne Enterprises...",
    "Scanning for criminal activity...",
    "Loading the Dark Knight's arsenal...",
    "Loading justice protocols...",
    "Compiling shadows and secrets...",
    "Booting up the Batcomputer...",
    "Accessing the Batcave mainframe...",
    "Calibrating fear parameters...",
    "Deploying stealth algorithms...",
    "Synchronizing with Oracle's network...",
    "Activating night vision systems...",
  ];

  useEffect(() => {
    // Change phrase every 300ms
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % loadingPhrases.length);
    }, 350);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Wait for fade out animation
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(phraseInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center batman-gradient transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/20"></div>
          ))}
        </div>
      </div>

      {/* Batman Logo Animation */}
      <div className="relative">
        {/* Scaling Batman Symbol */}
        <div className="animate-[scaleInBatman_2s_ease-out] flex flex-col items-center">
          <div className="batman-symbol mb-8">
            <svg
              width="200"
              height="200"
              viewBox="0 0 100 100"
              className="fill-primary drop-shadow-2xl"
            >
              <path d="M50 10 C30 10, 10 25, 10 45 C10 65, 25 75, 35 80 L35 85 C35 90, 40 95, 50 95 C60 95, 65 90, 65 85 L65 80 C75 75, 90 65, 90 45 C90 25, 70 10, 50 10 Z M25 40 C25 35, 30 30, 35 30 C40 30, 45 35, 45 40 C45 45, 40 50, 35 50 C30 50, 25 45, 25 40 Z M55 40 C55 35, 60 30, 65 30 C70 30, 75 35, 75 40 C75 45, 70 50, 65 50 C60 50, 55 45, 55 40 Z" />
            </svg>
          </div>

          {/* Animated Text */}
          <div className="animate-[textGlow_2s_ease-out] text-center mb-6">
            <h1 className="font-orbitron font-black text-4xl md:text-6xl text-primary text-shadow-glow mb-2">
              THE KNIGHT CODER
            </h1>
            <p className="font-orbitron text-lg md:text-xl text-white/80">
              GUARDIAN OF GOTHAM'S DIGITAL EMPIRE
            </p>
          </div>

          {/* Loading Text */}
          <div className="text-center min-h-[40px] flex items-center justify-center">
            <p className="font-orbitron text-sm md:text-base text-primary/80 animate-pulse">
              {loadingPhrases[currentPhrase]}
            </p>
          </div>
        </div>

        {/* Pulsing Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 border-2 border-primary/30 rounded-full animate-[pulseRing_2s_ease-out]"></div>
        </div>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64">
        <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[loadingBar_3s_ease-out]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
