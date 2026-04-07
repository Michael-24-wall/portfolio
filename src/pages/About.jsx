import AnimatedPage from "../components/AnimatedPage";
import AboutCard from "../components/AboutCard";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaAward, 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaCloud,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
  FaJs
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostgresql, SiTailwindcss } from "react-icons/si";

const aboutInfo = [
  { 
    title: "Education", 
    value: "Software Development at Zindua", 
    icon: <FaGraduationCap />,
    description: "Comprehensive training in full-stack development, algorithms, and system design"
  },
  { 
    title: "Experience", 
    value: "Full-Stack Developer", 
    icon: <FaBriefcase />,
    description: "Building end-to-end applications with modern MERN and PERN stacks"
  },
  { 
    title: "Achievements", 
    value: "15+ Full-Stack Projects Delivered", 
    icon: <FaAward />,
    description: "From concept to deployment - scalable web applications with 99.9% uptime"
  },
];

const frontendSkills = [
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
  { name: "HTML/CSS", icon: <FaHtml5 />, color: "text-blue-400" },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs />, color: "text-blue-400" },
  { name: "Express", icon: <SiExpress />, color: "text-white" },
  { name: "REST APIs", icon: <FaCode />, color: "text-blue-400" },
  { name: "JWT Auth", icon: <FaCode />, color: "text-blue-400" },
];

const databaseSkills = [
  { name: "MongoDB", icon: <SiMongodb />, color: "text-blue-400" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
  { name: "Firebase", icon: <FaDatabase />, color: "text-blue-400" },
  { name: "Prisma", icon: <FaDatabase />, color: "text-blue-400" },
];

const devopsSkills = [
  { name: "Git", icon: <FaGitAlt />, color: "text-blue-400" },
  { name: "Vercel", icon: <FaCloud />, color: "text-blue-400" },
  { name: "Netlify", icon: <FaCloud />, color: "text-blue-400" },
  { name: "Render", icon: <FaCloud />, color: "text-blue-400" },
];

const SkillSection = ({ title, skills, icon: SectionIcon }) => (
  <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-blue-500/10 rounded-lg">
        <SectionIcon className="text-2xl text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div 
          key={skill.name}
          className="group relative px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-blue-500"
        >
          <div className="flex items-center gap-2">
            <span className={`text-lg ${skill.color} group-hover:scale-110 transition-transform`}>
              {skill.icon}
            </span>
            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function About() {
  return (
    <AnimatedPage>
      <section className="min-h-screen pt-32 pb-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/30">
              <span className="text-blue-400 text-sm font-medium">Full-Stack Developer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">full-stack developer</span> crafting robust web applications from database design to pixel-perfect UIs. 
              I specialize in the <span className="text-blue-400 font-semibold">MERN stack</span>, <span className="text-blue-400 font-semibold">JavaScript</span>, and <span className="text-blue-400 font-semibold">modern web technologies</span>.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {aboutInfo.map((info, index) => (
              <div 
                key={info.title}
                className="transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AboutCard 
                  title={info.title} 
                  value={info.value} 
                  icon={info.icon}
                  description={info.description}
                />
              </div>
            ))}
          </div>

          {/* Skills Section - Full Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              Full-Stack Arsenal
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              From frontend magic to backend logic and database optimization — I've got you covered
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillSection title="Frontend" skills={frontendSkills} icon={FaReact} />
              <SkillSection title="Backend" skills={backendSkills} icon={FaNodeJs} />
              <SkillSection title="Database" skills={databaseSkills} icon={FaDatabase} />
              <SkillSection title="DevOps & Tools" skills={devopsSkills} icon={FaCloud} />
            </div>
          </div>

          {/* Development Philosophy */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-16 border border-gray-800">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">End-to-End Solutions</h3>
                <p className="text-gray-400 text-sm">From concept to deployment, I build complete applications that scale</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Performance First</h3>
                <p className="text-gray-400 text-sm">Optimized code, efficient queries, and blazing-fast load times</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Security Minded</h3>
                <p className="text-gray-400 text-sm">Authentication, authorization, and best security practices</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 rounded-full font-semibold text-white hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Let's Build Something Amazing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}