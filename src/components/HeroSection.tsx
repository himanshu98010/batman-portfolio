import { useEffect, useState } from "react";

const mapRange = (value, inMin, inMax, outMin, outMax) => {
  value = Math.max(inMin, Math.min(inMax, value));
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({
    leftEye: { x: 0, y: 0 },
    rightEye: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newMousePosition = {
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      };
      setMousePosition(newMousePosition);

      const batmanSymbol = document.querySelector(".batman-symbol");
      if (batmanSymbol) {
        const rect = batmanSymbol.getBoundingClientRect();

        const mouseXRelativeToSymbol = e.clientX - rect.left;
        const mouseYRelativeToSymbol = e.clientY - rect.top;

        const eyeMovementRadius = 6;

        const inputMinX = 0;
        const inputMaxX = 120;

        const inputMinY = 0;
        const inputMaxY = 120;

        let targetOffsetX = mapRange(
          mouseXRelativeToSymbol,
          inputMinX,
          inputMaxX,
          -eyeMovementRadius,
          eyeMovementRadius
        );

        let targetOffsetY = mapRange(
          mouseYRelativeToSymbol,
          inputMinY,
          inputMaxY,
          -eyeMovementRadius,
          eyeMovementRadius
        );

        targetOffsetX = Math.max(
          -eyeMovementRadius,
          Math.min(eyeMovementRadius, targetOffsetX)
        );
        targetOffsetY = Math.max(
          -eyeMovementRadius,
          Math.min(eyeMovementRadius, targetOffsetY)
        );

        setEyePosition({
          leftEye: {
            x: targetOffsetX,
            y: targetOffsetY,
          },
          rightEye: {
            x: targetOffsetX,
            y: targetOffsetY,
          },
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="batman-gradient relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 transition-all duration-300"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${
            mousePosition.y * 0.5
          }px)`,
        }}
      >
        <div className="grid h-full w-full grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/20"></div>
          ))}
        </div>
      </div>

      <div
        className="floating absolute right-20 top-20 transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="batman-logo h-32 w-32 opacity-20"></div>
      </div>

      <div className="container relative mx-auto px-6 text-center z-10">
        <div className="animate-fadeInUp">
          <h1 className="font-orbitron font-black text-6xl text-shadow-glow md:text-8xl mb-6">
            <span className="text-primary">Knight Shift Coder</span>
            <br />
            <span className="text-white"> I am Himanshu</span>
          </h1>
        </div>

        <div className="animate-fadeInUp animation-delay-300">
          <p className="font-rajdhani font-bold text-xl text-gray-300 md:text-2xl mb-8">
            Built in the Shadows • Fullstack Developer
          </p>
        </div>

        <div className="animate-scaleIn animation-delay-600 mb-8">
          <div className="batman-symbol floating relative mx-auto mb-8">
            <svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              className="fill-primary"
            >
              <path d="M50 10 C30 10, 10 25, 10 45 C10 65, 25 75, 35 80 L35 85 C35 90, 40 95, 50 95 C60 95, 65 90, 65 85 L65 80 C75 75, 90 65, 90 45 C90 25, 70 10, 50 10 Z M25 40 C25 35, 30 30, 35 30 C40 30, 45 35, 45 40 C45 45, 40 50, 35 50 C30 50, 25 45, 25 40 Z M55 40 C55 35, 60 30, 65 30 C70 30, 75 35, 75 40 C75 45, 70 50, 65 50 C60 50, 55 45, 55 40 Z" />
            </svg>

            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute h-3 w-3 rounded-full bg-red-500 transition-transform duration-150 ease-out"
                style={{
                  left: `calc(${38}px - 6px)`,
                  top: `calc(${48}px - 6px)`,
                  transform: `translate(${eyePosition.leftEye.x}px, ${eyePosition.leftEye.y}px)`,
                  boxShadow:
                    "0 0 12px rgba(239, 68, 68, 0.9), 0 0 24px rgba(239, 68, 68, 0.6), 0 0 36px rgba(239, 68, 68, 0.3)",
                  filter: "blur(0.5px)",
                }}
              />

              <div
                className="absolute h-3 w-3 rounded-full bg-red-500 transition-transform duration-150 ease-out"
                style={{
                  left: `calc(${82}px - 6px)`,
                  top: `calc(${48}px - 6px)`,
                  transform: `translate(${eyePosition.rightEye.x}px, ${eyePosition.rightEye.y}px)`,
                  boxShadow:
                    "0 0 12px rgba(239, 68, 68, 0.9), 0 0 24px rgba(239, 68, 68, 0.6), 0 0 36px rgba(239, 68, 68, 0.3)",
                  filter: "blur(0.5px)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="animate-fadeInUp animation-delay-900 flex flex-col justify-center gap-6 sm:flex-row">
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden rounded-lg bg-primary px-8 py-4 font-orbitron text-lg font-bold text-background transition-all duration-300 hover:scale-105 hover:shadow-lg glow-border"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          >
            <span className="relative z-10">VIEW MY WORK</span>
            <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </button>

          <button
            onClick={() =>
              document
                .getElementById("connect")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group rounded-lg border-2 border-primary px-8 py-4 font-orbitron text-lg font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-background"
            style={{
              transform: `translate(${mousePosition.x * -0.02}px, ${
                mousePosition.y * -0.02
              }px)`,
            }}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
