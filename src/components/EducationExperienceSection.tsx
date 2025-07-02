const EducationExperienceSection = () => {
  const experiences = [
    {
      type: "experience",
      title: "Fullstack Developer",
      company: "Info Solutions",
      period: "2022 - Present",
      description:
        "Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions.",
    },
    {
      type: "experience",
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2022 - 2024",
      description:
        "Developed responsive web applications using React and Vue.js, collaborated with UX/UI teams to create engaging user experiences.",
    },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      company: "Mumbai University",
      period: "2023 - present",
      description:
        "Focused on software engineering, data structures, algorithms, and web development technologies.",
    },
    {
      type: "education",
      title: "Full Stack Web Development",
      company: "Harkirat cohort 3",
      period: "2024-2025",
      description:
        "Intensive program covering modern web development technologies, databases, and deployment strategies.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-primary">
            Origins & Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every hero has an origin story. Here's how I forged my path in the
            digital realm, gathering the skills and experience needed to protect
            the web from chaos.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`scroll-animate flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-background rounded-xl p-6 shadow-xl hover:glow-border transition-all duration-300 group">
                    <div className="flex items-center mb-3">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 ${
                          item.type === "experience"
                            ? "bg-primary"
                            : "bg-blue-400"
                        }`}
                      ></div>
                      <span className="text-sm font-orbitron text-gray-400 uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="font-orbitron font-bold text-xl text-primary mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center mb-3 text-gray-300">
                      <span className="font-rajdhani font-medium">
                        {item.company}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{item.period}</span>
                    </div>

                    <p className="text-gray-300 font-rajdhani">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;
