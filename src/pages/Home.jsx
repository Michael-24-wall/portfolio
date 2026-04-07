import AnimatedPage from "../components/AnimatedPage";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToContact = () => {
    navigate("/contact");
  };

  const goToProjects = () => {
    navigate("/projects");
  };

  const profileImage = "https://randomuser.me/api/portraits/men/1.jpg";
  const galleryImages = [
    "https://picsum.photos/id/1/400/400",
    "https://picsum.photos/id/2/400/400",
    "https://picsum.photos/id/3/400/400",
    "https://picsum.photos/id/4/400/400",
    "https://picsum.photos/id/5/400/400",
    "https://picsum.photos/id/6/400/400",
    "https://picsum.photos/id/7/400/400",
    "https://picsum.photos/id/8/400/400",
  ];
  const projectImages = [
    "https://picsum.photos/id/0/400/300",
    "https://picsum.photos/id/10/400/300",
    "https://picsum.photos/id/20/400/300",
  ];

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="pt-32 text-center min-h-screen flex flex-col justify-center items-center bg-gray-900">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
              <img 
                src={profileImage}
                alt="Wallance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mt-6"
        >
          Hi, I'm Wallance 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-gray-300 text-lg"
        >
          I build{" "}
          <span className="text-yellow-400 font-semibold">
            <Typewriter
              words={["Modern Websites", "Responsive Web Apps", "Professional Portfolios"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex gap-4"
        >
          <button
            onClick={goToContact}
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition transform hover:scale-105"
          >
            View My Work
          </button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: "🚀" },
              { number: "30+", label: "Happy Clients", icon: "😊" },
              { number: "4+", label: "Years Experience", icon: "💪" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800 rounded-2xl border border-gray-700"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Web Development", desc: "Fast, modern, and responsive websites.", image: projectImages[0] },
              { icon: "🎨", title: "UI/UX Design", desc: "Beautiful and intuitive designs.", image: projectImages[1] },
              { icon: "📱", title: "Mobile Responsive", desc: "Perfect on all devices.", image: projectImages[2] },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700"
              >
                <img src={skill.image} alt={skill.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                  <p className="text-gray-300">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gray-900" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Recent Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => window.open(image, '_blank')}
              >
                <img src={image} alt={`Project ${idx + 1}`} className="w-full h-48 object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-yellow-400 text-sm font-semibold">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={goToProjects}
              className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-yellow-500 transition transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What My Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", review: "Amazing job! Very professional and delivered on time!", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg", title: "CEO, Tech Corp" },
              { name: "Jane Smith", review: "Great experience! Understood exactly what I needed.", rating: 5, image: "https://randomuser.me/api/portraits/women/12.jpg", title: "Founder, Design Co" },
              { name: "Mike Johnson", review: "Highly recommend! Attention to detail is top-notch.", rating: 5, image: "https://randomuser.me/api/portraits/men/13.jpg", title: "Manager, Startup Inc" },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
                  <div>
                    <h3 className="font-semibold text-white">{review.name}</h3>
                    <p className="text-gray-400 text-sm">{review.title}</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3">{"★".repeat(review.rating)}</div>
                <p className="text-gray-300">"{review.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long does it take to build a website?", a: "Typically 2-4 weeks depending on the project complexity." },
              { q: "Do you provide support after launch?", a: "Yes, I offer 30 days of free support after project completion." },
              { q: "What is your pricing model?", a: "I offer competitive pricing based on project requirements. Contact me for a quote." },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-4 border border-gray-700"
              >
                <summary className="font-semibold cursor-pointer hover:text-yellow-400 text-white">{faq.q}</summary>
                <p className="mt-2 text-gray-300">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold mb-4 text-white">
            Ready to Work Together?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-xl mb-8 text-gray-300">
            Let's bring your ideas to life. Get in touch with me today.
          </motion.p>
          <motion.button onClick={goToContact} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg">
            Hire Me Now →
          </motion.button>
        </div>
      </section>

      {/* Back to Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all hover:scale-110 z-50">
          ↑
        </button>
      )}
    </AnimatedPage>
  );
}