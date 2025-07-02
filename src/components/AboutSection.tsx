const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-primary">
              About Me
            </h2>
            <div className="space-y-6 text-lg font-rajdhani">
              <p className="text-gray-100">
                Like Batman protecting Gotham, I safeguard the digital realm
                with cutting-edge technology and relentless pursuit of
                perfection. As a fullstack developer, I operate in the shadows
                of code, emerging with solutions that make the impossible
                possible.
              </p>
              <p className="text-gray-100">
                My arsenal includes modern web technologies, from frontend
                frameworks to backend architectures. Every project is a mission,
                every bug a villain to defeat, and every deployment a victory
                for justice.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Python",
                  "MongoDB",
                  "PostgreSQL",
                  "AWS",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-primary font-medium hover:glow-border transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="scroll-animate flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-background rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center floating">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center floating animation-delay-1000">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
