// components/AboutCard.js
export default function AboutCard({ title, value, icon, description }) {
  return (
    <div className="group relative bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 border border-gray-800 hover:border-blue-500/50 h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
      
      <div className="relative z-10">
        <div className="text-4xl text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300 inline-block">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        
        <p className="text-lg font-medium text-blue-400 mb-3">
          {value}
        </p>
        
        {description && (
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}