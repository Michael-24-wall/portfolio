import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-4 py-20">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
            <img 
              src="https://randomuser.me/api/portraits/men/1.jpg"
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
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 text-center"
      >
        Hi, I'm Wallance 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-gray-300 text-base sm:text-lg text-center px-4"
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
        className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
      >
        <Link
          to="/contact"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition transform hover:scale-105 text-center"
        >
          Contact Me
        </Link>
        <Link
          to="/projects"
          className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition transform hover:scale-105 text-center"
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  );
}