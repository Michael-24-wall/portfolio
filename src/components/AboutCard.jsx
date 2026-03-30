import { motion } from "framer-motion";

export default function AboutCard({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
    >
      {icon && <div className="text-blue-400 text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-bold text-blue-400">{title}</h3>
      <p className="mt-2 text-gray-300">{value}</p>
    </motion.div>
  );
}