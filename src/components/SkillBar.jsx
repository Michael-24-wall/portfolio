// components/SkillBar.js
import { useState } from "react";

export default function SkillBar({ skill, level, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (  // ← Added opening parenthesis here
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && (
            <span className="text-blue-400 text-lg group-hover:scale-110 transition-transform">
              {icon}
            </span>
          )}
          <span className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
            {skill}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium transition-all duration-300 ${
            isHovered ? "text-blue-400 scale-110" : "text-gray-400"
          }`}>
            {level}%
          </span>
        </div>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  ); // ← Closing parenthesis before semicolon
}