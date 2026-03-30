import { motion } from "framer-motion";

export default function SkillBar({ skill, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-200 font-semibold">{skill}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 h-4 rounded">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5 }}
          className="h-4 bg-blue-400 rounded"
        />
      </div>
    </div>
  );
}