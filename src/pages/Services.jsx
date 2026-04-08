import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaLightbulb, FaMobileAlt, FaDatabase, FaCloudUploadAlt, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

const services = [
  { 
    title: "Web Development", 
    description: "Building responsive, fast, and modern websites using React, Next.js, and Tailwind CSS.", 
    icon: <FaCode />,
    features: ["React/Next.js", "Responsive Design", "API Integration", "Performance"],
    price: "From $150",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "UI/UX Design", 
    description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences.", 
    icon: <FaPalette />,
    features: ["Wireframing", "Prototyping", "User Testing", "Figma"],
    price: "From $100",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "Technical Consulting", 
    description: "Expert advice for your web projects and technology decisions.", 
    icon: <FaLightbulb />,
    features: ["Tech Advice", "Code Review", "Performance", "SEO Basics"],
    price: "From $50/hr",
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Mobile Development", 
    description: "Cross-platform mobile apps that work on both iOS and Android.", 
    icon: <FaMobileAlt />,
    features: ["React Native", "Cross-platform", "Responsive", "Fast Loading"],
    price: "From $200",
    color: "from-green-500 to-teal-500"
  },
  { 
    title: "Backend Development", 
    description: "Robust and scalable backend systems with databases and APIs.", 
    icon: <FaDatabase />,
    features: ["Node.js", "REST APIs", "Database", "Authentication"],
    price: "From $150",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    title: "Website Fixes", 
    description: "Quick fixes, updates, and improvements for existing websites.", 
    icon: <FaCloudUploadAlt />,
    features: ["Bug Fixes", "Updates", "Speed Optimization", "Security"],
    price: "From $30",
    color: "from-indigo-500 to-blue-500"
  }
];

export default function Services() {
  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              My Services
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Affordable web solutions tailored to your needs. 
              Quality work at student-friendly prices.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/30">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm">Starting from just $30</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`text-5xl mb-6 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">WHAT'S INCLUDED:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6 pt-4 border-t border-gray-700">
                    <span className="text-3xl font-bold text-blue-400">{service.price}</span>
                    {service.title === "Technical Consulting" && <span className="text-gray-500 text-sm">/ hour</span>}
                    {service.title !== "Technical Consulting" && service.title !== "Website Fixes" && <span className="text-gray-500 text-sm"> / project</span>}
                    {service.title === "Website Fixes" && <span className="text-gray-500 text-sm"> / fix</span>}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = '/contact'}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Request Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🎓 Student Discount Available!
            </h3>
            <p className="text-gray-200 mb-4">
              Show your student ID and get 20% off on any service
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Claim Discount →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Simple Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Getting your project done in 4 easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contact Me", desc: "Send me your project idea" },
              { step: "02", title: "Discuss", desc: "We talk about requirements" },
              { step: "03", title: "Build", desc: "I create your solution" },
              { step: "04", title: "Deliver", desc: "You get your website" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-5xl font-bold text-blue-400/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {[
              { q: "How do I pay?", a: "I accept mobile money (M-Pesa), bank transfer, and PayPal. Payment plans are available for larger projects." },
              { q: "Do you offer discounts for students?", a: "Yes! Students get 20% off on all services. Just send me your student ID." },
              { q: "How long does a project take?", a: "A simple website takes 1-2 weeks. Complex projects may take 3-4 weeks. Quick fixes can be done in 1-2 days." },
              { q: "Do you offer free revisions?", a: "Yes, I offer 2 free revisions to make sure you're completely satisfied with the work." },
              { q: "What if I need updates later?", a: "I offer affordable maintenance packages starting from $20/month for regular updates and support." },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-4 border border-gray-700"
              >
                <summary className="font-semibold cursor-pointer hover:text-blue-400 text-white transition-colors">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-400 pl-4 border-l-2 border-blue-400">{faq.a}</p>
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
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-gray-200"
          >
            Let's bring your ideas to life without breaking the bank
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Get Free Quote →
          </motion.button>
        </div>
      </section>
    </AnimatedPage>
  );
}