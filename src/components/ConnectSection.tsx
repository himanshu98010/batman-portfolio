import { useState } from "react";
import { Mail, Github, LinkedinIcon, MessageSquare } from "lucide-react";

const ConnectSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false); // New state for error handling

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "himanshusuthar98010@gmail.com",
      action: "mailto:himanshusuthar98010@gmail.com",
      color: "hover:text-red-400",
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      description: "Check out my repositories",
      action: "https://github.com/himanshu98010",
      color: "hover:text-purple-400",
    },
    {
      icon: <LinkedinIcon className="w-8 h-8" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "https://linkedin.com/in/himanshu98010",
      color: "hover:text-blue-400",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Twitter",
      description: "Join the community",
      action: "https://X.com/himanshu98010",
      color: "hover:text-indigo-400",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault(); // <--- VERY IMPORTANT: Prevents the default form submission (and redirect)

    setSubmissionError(false); // Reset any previous errors
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json", // Important for FormSubmit.co AJAX submissions
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Optionally clear the form fields
      } else {
        // Handle non-OK responses (e.g., 400, 500 status codes)
        console.error("Form submission failed:", response.statusText);
        setSubmissionError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError(true);
    }
  };

  return (
    <section
      id="connect"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-primary">
            Call for Backup
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Even Batman needs allies. Whether you have a project that needs a
            hero, or you want to join forces, I'm always ready to answer the
            call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-animate group bg-card rounded-xl p-6 text-center hover:glow-border transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`text-primary mb-4 group-hover:scale-110 transition-transform duration-300 ${method.color} flex justify-center`}
              >
                {method.icon}
              </div>
              <h3 className="font-orbitron font-bold text-lg mb-2 text-primary">
                {method.title}
              </h3>
              <p className="text-gray-300 font-rajdhani">
                {method.description}
              </p>
            </a>
          ))}
        </div>

        {/* Quick Contact Form */}
        <div className="scroll-animate max-w-2xl mx-auto bg-card rounded-xl p-8">
          <h3 className="font-orbitron font-bold text-2xl text-primary mb-6 text-center">
            Send a Signal
          </h3>

          {!isSubmitted ? (
            <form
              action="https://formsubmit.co/ajax/1e11c9cae3ec0fe303b9bfe1a3b50998"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-background font-orbitron font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-all duration-300 transform hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </form>
          ) : (
            <div className="text-center">
              {submissionError ? (
                <div className="text-red-400 font-rajdhani text-xl">
                  ❌ There was an error sending your message. Please try again.
                </div>
              ) : (
                <div className="text-green-400 font-rajdhani text-xl">
                  🦇 The signal's been received — I'll be in touch… when the
                  night is right..
                </div>
              )}
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 bg-primary text-background font-orbitron font-bold py-2 px-4 rounded-lg hover:bg-primary/80 transition-all duration-300"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-primary/20 mt-20 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400 font-rajdhani">
            <p>
              &copy; 2025 Himanshu. Protecting the web, one line of code at a
              time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
