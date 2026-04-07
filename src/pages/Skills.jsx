import AnimatedPage from "../components/AnimatedPage";
import SkillBar from "../components/SkillBar";
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaDatabase,
  FaCloud,
  FaServer,
  FaMobile
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";

const frontendSkills = [
  { skill: "React", level: 90, icon: <FaReact />, category: "Frontend" },
  { skill: "JavaScript", level: 95, icon: <FaJs />, category: "Frontend" },
  { skill: "Tailwind CSS", level: 85, icon: <SiTailwindcss />, category: "Frontend" },
  { skill: "HTML5", level: 95, icon: <FaReact />, category: "Frontend" },
  { skill: "CSS3", level: 90, icon: <FaReact />, category: "Frontend" },
];

const backendSkills = [
  { skill: "Node.js", level: 85, icon: <FaNodeJs />, category: "Backend" },
  { skill: "Express.js", level: 85, icon: <SiExpress />, category: "Backend" },
  { skill: "REST APIs", level: 90, icon: <FaServer />, category: "Backend" },
  { skill: "Authentication", level: 80, icon: <FaServer />, category: "Backend" },
];

const databaseSkills = [
  { skill: "MongoDB", level: 85, icon: <SiMongodb />, category: "Database" },
  { skill: "PostgreSQL", level: 80, icon: <SiPostgresql />, category: "Database" },
  { skill: "Firebase", level: 75, icon: <FaDatabase />, category: "Database" },
  { skill: "Prisma", level: 75, icon: <FaDatabase />, category: "Database" },
];

const toolsSkills = [
  { skill: "Git", level: 85, icon: <FaGitAlt />, category: "Tools" },
  { skill: "Vercel", level: 90, icon: <FaCloud />, category: "Tools" },
  { skill: "Netlify", level: 85, icon: <FaCloud />, category: "Tools" },
  { skill: "Postman", level: 80, icon: <FaCloud />, category: "Tools" },
];

const SkillCategory = ({ title, skills, icon: SectionIcon }) => (
  <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
      <div className="p-2 bg-blue-500/10 rounded-lg">
        <SectionIcon className="text-2xl text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <span className="ml-auto text-sm text-gray-500">{skills.length} skills</span>
    </div>
    <div className="space-y-4">
      {skills.map((skill) => (
        <SkillBar 
          key={skill.skill} 
          skill={skill.skill} 
          level={skill.level} 
          icon={skill.icon}
        />
      ))}
    </div>
  </div>
);

export default function Skills() {
  const totalSkills = frontendSkills.length + backendSkills.length + databaseSkills.length + toolsSkills.length;
  const averageLevel = Math.round(
    [...frontendSkills, ...backendSkills, ...databaseSkills, ...toolsSkills]
      .reduce((acc, curr) => acc + curr.level, 0) / totalSkills
  );

  return (
    <AnimatedPage>
      <section className="min-h-screen pt-32 pb-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/30">
              <span className="text-blue-400 text-sm font-medium">Technical Expertise</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My Skills
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Here are the technologies and tools I work with to build amazing web applications
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
              <div className="text-2xl font-bold text-blue-400">{totalSkills}</div>
              <div className="text-sm text-gray-400">Total Skills</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
              <div className="text-2xl font-bold text-blue-400">{averageLevel}%</div>
              <div className="text-sm text-gray-400">Average Proficiency</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
              <div className="text-2xl font-bold text-blue-400">4+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
              <div className="text-2xl font-bold text-blue-400">15+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <SkillCategory title="Frontend Development" skills={frontendSkills} icon={FaReact} />
            <SkillCategory title="Backend Development" skills={backendSkills} icon={FaNodeJs} />
            <SkillCategory title="Database Management" skills={databaseSkills} icon={FaDatabase} />
            <SkillCategory title="Tools & Deployment" skills={toolsSkills} icon={FaGitAlt} />
          </div>

          {/* Additional Info */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <FaCloud className="text-2xl text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Always Learning</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm constantly expanding my skillset and staying up-to-date with the latest technologies. 
                  Currently exploring Next.js, TypeScript, and cloud architecture to deliver even better solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}