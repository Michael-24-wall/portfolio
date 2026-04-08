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
  
  // ========== YOUR RECENT PROJECTS ==========
  const recentProjects = [
    {
      image: "images/system.png",      
      link: "https://shalombookings.vercel.app/",  
      title: "Shalom Bookings",         
      description: "Modern booking system with stunning UI and seamless experience"  
    },
    {
      image: "images/todo.png",        
      link: "https://react-firebase-todolist-ten.vercel.app/",  
      title: "TaskFlow Pro",           
      description: "Responsive task management platform with real-time updates" 
    },
  ];
  
  // Featured projects for the "What I Do" section
  const skillProjects = [
    { 
      icon: "", 
      title: recentProjects[0]?.title || "Web Development", 
      desc: recentProjects[0]?.description || "Fast, modern, and responsive web applications.",
      image: recentProjects[0]?.image || "images/nyota.png",
      link: recentProjects[0]?.link || "#"
    },
    { 
      icon: "", 
      title: recentProjects[1]?.title || "Task Management", 
      desc: recentProjects[1]?.description || "Powerful task management with Firebase integration.",
      image: recentProjects[1]?.image || "images/ndugu.png",
      link: recentProjects[1]?.link || "#"
    },
    { 
      icon: "", 
      title: "StayEasy Booking", 
      desc: "Seamless hotel booking experience on all devices with advanced features.",
      image: "images/stays.png",
      link: "https://stays-five.vercel.app/"
    },
  ];

  return (
    <AnimatedPage>
      {/* Hero Section - Enhanced with more text */}
      <section className="pt-32 text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        
        {/* Animated Background Gradients */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-2xl">
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
          className="text-5xl md:text-7xl font-bold text-white mt-6 relative z-10"
        >
          Hi, I'm Wallance
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative z-10"
        >
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            I build{" "}
            <span className="text-blue-400 font-semibold">
              <Typewriter
                words={["Modern Websites", "Responsive Web Apps", "Professional Portfolios", "E-commerce Solutions"]}
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

        {/* Additional Text Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative z-10 mt-6"
        >
          <p className="text-gray-400 text-base md:text-lg max-w-2xl px-4">
            Passionate about creating digital experiences that make a difference
          </p>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Specializing in full-stack development, responsive design, and user-centric solutions
          </p>
        </motion.div>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative z-10 mt-8 flex flex-wrap gap-3 justify-center"
        >
          {["React", "Node.js", "Firebase", "Tailwind CSS", "TypeScript", "Next.js"].map((skill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium border border-gray-700"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="relative z-10 mt-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/30">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-sm">Available for work</span>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 flex gap-4 flex-wrap justify-center relative z-10"
        >
          <button
            onClick={goToContact}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition transform hover:scale-105"
          >
            Contact Me
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-gray-900 transition transform hover:scale-105"
          >
            View My Work
          </button>
        </motion.div>

        {/* Scroll Indicator */}
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
            initial={{ opacity: 0, y: -20 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
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
            initial={{ opacity: 0, y: -20 }}
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
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 cursor-pointer shadow-xl"
                onClick={() => window.open(skill.link, '_blank')}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={skill.image} 
                    alt={skill.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-blue-400 font-semibold">Click to view →</span>
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

      {/* RECENT PROJECTS SECTION */}
      <section className="py-20 bg-gray-900" id="projects">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
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
            {recentProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -100 : 100, rotateY: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.3 },
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer border border-gray-700"
                onClick={() => window.open(project.link, '_blank')}
              >
                <div className="relative overflow-hidden h-64">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 + 0.3 }}
                    className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.2 + 0.4 }}
                    className="text-gray-300 mb-4"
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 + 0.5 }}
                    className="flex items-center gap-2 text-blue-400 font-semibold"
                  >
                    <span>View Project</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatDelay: 1,
                        duration: 0.5 
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: 'none' }}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToProjects}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition inline-flex items-center gap-2"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Testimonials with African Theme */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
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
            Hear from my amazing clients across Africa and beyond
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Mauro Petilo", 
                review: "Working with Wallance was incredible! He delivered a stunning website that perfectly represents our brand. The communication was excellent throughout.", 
                rating: 5, 
                image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", 
                title: "CEO, Tech Solutions Kenya",
                location: "Nairobi, Kenya"
              },
              { 
                name: "Kwame Asare", 
                review: "Great experience! Understood exactly what I needed. The website exceeded my expectations and launched on time. Highly professional!", 
                rating: 5, 
                image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", 
                title: "Founder, Home Designs Ghana",
                location: "Accra, Ghana"
              },
              { 
                name: "Naledi Moloi", 
                review: "Highly recommend! Attention to detail is top-notch. The team was professional and delivered quality work that exceeded our expectations.", 
                rating: 5, 
                image: "https://images.pexels.com/photos/3184612/pexels-photo-3184612.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", 
                title: "Manager, Hero class SA",
                location: "Johannesburg, SA"
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div>
                    <h3 className="font-semibold text-white text-lg">{review.name}</h3>
                    <p className="text-gray-400 text-sm">{review.title}</p>
                    <p className="text-blue-400 text-xs flex items-center gap-1 mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" clipRule="evenodd" />
                      </svg>
                      {review.location}
                    </p>
                  </div>
                </div>
                <div className="text-blue-400 mb-3 flex gap-1">
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
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {[
              { q: "How long does it take to build a website?", a: "Typically 2-4 weeks depending on the project complexity and requirements." },
              { q: "Do you provide support after launch?", a: "Yes, I offer 30 days of free support after project completion, and ongoing maintenance packages are available." },
              { q: "What is your pricing model?", a: "I offer competitive pricing based on project requirements. Contact me for a free quote tailored to your needs." },
              { q: "Do you work with international clients?", a: "Absolutely! I work with clients from all around the world, including Africa, Europe, Asia, and the Americas." },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-4 border border-gray-700 group"
              >
                <summary className="font-semibold cursor-pointer hover:text-blue-400 text-white transition-colors">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-300 pl-4 border-l-2 border-blue-400">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
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
            className="text-xl mb-8 text-gray-200"
          >
            Let's bring your ideas to life. Get in touch with me today.
          </motion.p>
          <motion.button 
            onClick={goToContact} 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.4 }} 
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-xl"
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
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatedPage>
  );
}