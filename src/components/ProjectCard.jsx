import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h2 className="text-xl font-bold text-blue-400">{title}</h2>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-400 text-black font-semibold rounded hover:bg-blue-500 transition text-center"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
}