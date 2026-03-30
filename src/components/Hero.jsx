import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-32 text-center min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-blue-400"
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
        <span className="text-blue-400 font-semibold">
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
        className="mt-6 flex gap-4"
      >
        <Link
          to="/contact"
          className="px-6 py-3 bg-blue-400 text-black font-semibold rounded hover:bg-blue-500 transition transform hover:scale-105"
        >
          Contact Me
        </Link>
        <Link
          to="/projects"
          className="px-6 py-3 border border-blue-400 rounded hover:bg-blue-500 hover:text-black transition"
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  );
}