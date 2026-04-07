// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, image, link, tech = [] }) {
  return (
    <div className="bg-blue-800 rounded-2xl overflow-hidden border border-blue-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 bg-blue-900">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/images/fallback-project.jpg';
            e.target.onerror = null;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-white leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Tech Stack Tags */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span 
                key={t} 
                className="text-xs px-2 py-1 bg-blue-900 rounded-full text-white"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        
        {/* Link Button */}
        <a 
          href={link}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
        >
          View Project
          <svg 
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}