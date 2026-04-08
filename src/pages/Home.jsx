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

  const profileImage = "images/meee.jpeg";
  
  // ========== YOUR RECENT PROJECTS WITH DESCRIPTIONS ==========
  const galleryImages = [
    { 
      image: "images/todo.png", 
      link: "https://react-firebase-todolist-ten.vercel.app/",
      title: "TaskFlow Pro",
      description: "A powerful task management application with real-time updates, user authentication, and cloud synchronization using Firebase."
    },
    { 
      image: "images/system.png", 
      link: "https://shalombookings.vercel.app/",
      title: "Shalom Bookings",
      description: "Modern booking system for hotels and accommodations with seamless user experience, payment integration, and admin dashboard."
    },
  ];
  
  const skillProjects = [
    { 
      title: "Web Development", 
      desc: "Fast, modern, and responsive websites.",
      image: "images/nyota.png",
      link: "https://nyota-frontend-nine.vercel.app/"
    },
    { 
      title: "Web Development", 
      desc: "Beautiful and intuitive designs.",
      image: "images/ndugu.png",
      link: "https://frontend-opal-ten-20.vercel.app/"
    },
    { 
      title: "Mobile Responsive Design", 
      desc: "Perfect on all devices.",
      image: "images/stays.png",
      link: "https://stays-five.vercel.app/"
    },
  ];

  const testimonials = [
    { 
      name: "Mauro Petilo", 
      review: "Working with Wallance was absolutely wonderful. He delivered a stunning website that perfectly captures our brand. Professional, timely, and exceeded all expectations.", 
      rating: 5, 
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop", 
      title: "CEO, Tech Solutions Kenya",
      location: "Nairobi"
    },
    { 
      name: "Kwame Asare", 
      review: "Great experience from start to finish. Understood exactly what I needed and delivered ahead of schedule. Highly recommend for any web development needs.", 
      rating: 5, 
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop", 
      title: "Founder, Creative Hub Ghana",
      location: "Accra"
    },
    { 
      name: "Naledi Moloi", 
      review: "Exceptional attention to detail and great communication throughout. The website has helped grow our business significantly. Will definitely work together again.", 
      rating: 5, 
      image: "https://images.pexels.com/photos/3184612/pexels-photo-3184612.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop", 
      title: "Manager, Startup SA",
      location: "Johannesburg"
    },
  ];

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="pt-32 text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,193,7,0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,193,7,0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,193,7,0.08) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative z-10"
        >
          <motion.div 
            className="w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-2xl"
            animate={{ boxShadow: ["0 0 0 0 rgba(255,193,7,0.4)", "0 0 0 20px rgba(255,193,7,0)", "0 0 0 0 rgba(255,193,7,0.4)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
              <img 
                src={profileImage}
                alt="Wallance"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
            Hi, I'm Wallance
          </h1>
          <motion.div 
            className="h-1 bg-yellow-400 mt-2 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 mt-4"
        >
          <p className="text-gray-300 text-lg md:text-xl">
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
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative z-10 mt-6"
        >
          <p className="text-gray-400 text-base max-w-2xl px-4">
            Passionate about creating digital experiences that make a difference
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Full-stack development, responsive design, user-centric solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="relative z-10 mt-8 flex flex-wrap gap-3 justify-center"
        >
          {["React", "Node.js", "Firebase", "Tailwind CSS", "TypeScript", "Next.js"].map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + idx * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm text-yellow-400 rounded-full text-sm font-medium border border-gray-700 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="relative z-10 mt-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/30">
            <motion.span 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-green-400 text-sm">Available for work</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-8 flex gap-4 flex-wrap justify-center relative z-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToContact}
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition shadow-lg"
          >
            Contact Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            My Achievements
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "8+", label: "Happy Clients" },
              { number: "2+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-800 rounded-2xl border border-gray-700"
              >
                <motion.div 
                  className="text-4xl font-bold text-yellow-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillProjects.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 cursor-pointer"
                onClick={() => window.open(skill.link, '_blank')}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img 
                    src={skill.image} 
                    alt={skill.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-yellow-400 font-semibold">Click to view →</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                  <p className="text-gray-300">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery - 2 cards with titles and descriptions */}
      <section className="py-20 bg-gray-900" id="projects">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-white"
          >
            My Recent Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Here are some of my latest works. Each project is built with care and attention to detail.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {galleryImages.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-gray-800 rounded-2xl overflow-hidden cursor-pointer border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
                onClick={() => window.open(project.link, '_blank')}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-yellow-400 text-base font-semibold px-4 py-2 bg-gray-900/80 rounded-full">View Project →</span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech tags or extra info */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      Full Stack
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      Responsive
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      Modern UI
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToProjects}
              className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-yellow-500 transition inline-flex items-center gap-2 shadow-lg"
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
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-white"
          >
            What My Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Hear from my amazing clients across Africa
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div>
                    <h3 className="font-semibold text-white text-lg">{review.name}</h3>
                    <p className="text-gray-400 text-sm">{review.title}</p>
                    <p className="text-yellow-400 text-xs mt-1">📍 {review.location}</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-300 leading-relaxed">"{review.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {[
              { q: "How long does it take to build a website?", a: "Typically 2-4 weeks depending on the project complexity." },
              { q: "Do you provide support after launch?", a: "Yes, I offer 30 days of free support after project completion." },
              { q: "What is your pricing model?", a: "I offer competitive pricing based on project requirements. Contact me for a quote." },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-4 border border-gray-700"
              >
                <summary className="font-semibold cursor-pointer hover:text-yellow-400 text-white transition-colors">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-300 pl-4 border-l-2 border-yellow-400">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.2 }} 
            viewport={{ once: true }} 
            className="text-xl mb-8 text-gray-300"
          >
            Let's bring your ideas to life. Get in touch with me today.
          </motion.p>
          <motion.button 
            onClick={goToContact} 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.4 }} 
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-yellow-500 transition shadow-lg"
          >
            Hire Me Now →
          </motion.button>
        </div>
      </section>

      {/* Back to Top Button */}
      {isVisible && (
        <motion.button 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all z-50"
        >
          ↑
        </motion.button>
      )}
    </AnimatedPage>
  );
}