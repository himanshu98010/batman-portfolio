
const ProofOfWorkSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      github: "#",
      live: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "WebSocket-based chat application with room management, file sharing, and user presence indicators.",
      tech: ["Socket.io", "Express", "PostgreSQL", "Redis"],
      image: "💬",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with drag-and-drop kanban boards, team collaboration, and progress tracking.",
      tech: ["Vue.js", "Python", "FastAPI", "Docker"],
      image: "📋",
      github: "#",
      live: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence dashboard with machine learning insights, data visualization, and automated reporting.",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      image: "📊",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-primary">
            Proof of Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mission reports from the digital battlefield. Each project represents a challenge overcome, 
            a problem solved, and justice served in the realm of code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="scroll-animate group bg-card rounded-xl overflow-hidden hover:glow-border transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{project.image}</div>
                  <h3 className="font-orbitron font-bold text-xl text-primary">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 font-rajdhani text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex-1 bg-background border border-primary/30 text-primary py-2 px-4 rounded-lg text-center font-orbitron font-medium hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 bg-primary text-background py-2 px-4 rounded-lg text-center font-orbitron font-medium hover:bg-primary/80 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfWorkSection;
