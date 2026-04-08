import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
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
  FaJs,
  FaHeart,
  FaCoffee,
  FaRocket,
  FaShieldAlt,
  FaTachometerAlt,
  FaMobileAlt
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostgresql, SiTailwindcss, SiTypescript, SiRedux, SiDocker, SiGraphql } from "react-icons/si";

const aboutInfo = [
  { 
    title: "Education", 
    value: "Software Development", 
    institution: "Zindua School",
    icon: <FaGraduationCap />,
    description: "Comprehensive training in full-stack development, algorithms, and system design",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Experience", 
    value: "Full-Stack Developer", 
    institution: "Freelance & Projects",
    icon: <FaBriefcase />,
    description: "Building end-to-end applications with modern MERN and PERN stacks",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "Achievements", 
    value: "15+ Projects", 
    institution: "Successfully Delivered",
    icon: <FaAward />,
    description: "From concept to deployment - scalable web applications with modern tech",
    color: "from-orange-500 to-red-500"
  },
];

const frontendSkills = [
  { name: "React", icon: <FaReact />, level: 85, color: "text-blue-400" },
  { name: "JavaScript", icon: <FaJs />, level: 80, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, level: 70, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, color: "text-blue-400" },
  { name: "Redux", icon: <SiRedux />, level: 65, color: "text-purple-400" },
  { name: "HTML/CSS", icon: <FaHtml5 />, level: 90, color: "text-orange-400" },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, level: 85, color: "text-white" },
  { name: "GraphQL", icon: <SiGraphql />, level: 60, color: "text-pink-500" },
  { name: "REST APIs", icon: <FaCode />, level: 85, color: "text-blue-400" },
  { name: "JWT Auth", icon: <FaShieldAlt />, level: 75, color: "text-blue-400" },
];

const databaseSkills = [
  { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "text-green-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, level: 70, color: "text-blue-400" },
  { name: "Firebase", icon: <FaDatabase />, level: 75, color: "text-yellow-500" },
  { name: "Prisma", icon: <FaDatabase />, level: 70, color: "text-blue-400" },
];

const devopsSkills = [
  { name: "Git", icon: <FaGitAlt />, level: 85, color: "text-orange-500" },
  { name: "Docker", icon: <SiDocker />, level: 55, color: "text-blue-500" },
  { name: "Vercel", icon: <FaCloud />, level: 80, color: "text-gray-400" },
  { name: "Netlify", icon: <FaCloud />, level: 75, color: "text-blue-400" },
];

const SkillSection = ({ title, skills, icon: SectionIcon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
        <SectionIcon className="text-2xl text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, idx) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.1 + (idx * 0.05) }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className={`text-lg ${skill.color} group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </span>
              <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
            </div>
            <span className="text-gray-500 text-xs">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: delay + 0.2 + (idx * 0.05) }}
              viewport={{ once: true }}
              className={`h-full rounded-full bg-gradient-to-r ${skill.color === 'text-green-500' ? 'from-green-500 to-green-400' : 
                skill.color === 'text-blue-400' ? 'from-blue-500 to-blue-400' :
                skill.color === 'text-purple-400' ? 'from-purple-500 to-purple-400' :
                skill.color === 'text-yellow-400' ? 'from-yellow-500 to-yellow-400' :
                'from-blue-400 to-purple-500'}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function About() {
  return (
    <AnimatedPage>
      <section className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/30">
              <span className="text-blue-400 text-sm font-medium">Get to know me</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">full-stack developer</span> crafting robust web applications from database design to pixel-perfect UIs. 
              I specialize in the <span className="text-blue-400 font-semibold">MERN stack</span>, <span className="text-blue-400 font-semibold">JavaScript</span>, and <span className="text-blue-400 font-semibold">modern web technologies</span>.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {aboutInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${info.color} rounded-xl text-white text-2xl`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm text-blue-400 font-semibold uppercase tracking-wider">
                        {info.title}
                      </h3>
                      <p className="text-gray-400 text-xs">{info.institution}</p>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{info.value}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From frontend to backend — here's what I bring to the table
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillSection title="Frontend" skills={frontendSkills} icon={FaReact} delay={0.1} />
              <SkillSection title="Backend" skills={backendSkills} icon={FaNodeJs} delay={0.2} />
              <SkillSection title="Database" skills={databaseSkills} icon={FaDatabase} delay={0.3} />
              <SkillSection title="DevOps & Tools" skills={devopsSkills} icon={FaCloud} delay={0.4} />
            </div>
          </div>

          {/* Development Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 mb-16 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-8">My Development Philosophy</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  🚀
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">End-to-End</h4>
                <p className="text-gray-400 text-sm">Complete solutions from concept to deployment</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  ⚡
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Performance</h4>
                <p className="text-gray-400 text-sm">Optimized code for blazing-fast load times</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  🔒
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Security</h4>
                <p className="text-gray-400 text-sm">Best practices for secure applications</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  📱
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Responsive</h4>
                <p className="text-gray-400 text-sm">Perfect experience on all devices</p>
              </div>
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
              <div className="text-3xl mb-2">💻</div>
              <div className="text-2xl font-bold text-blue-400">1000+</div>
              <p className="text-gray-400 text-sm">Hours of coding</p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
              <div className="text-3xl mb-2">☕</div>
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <p className="text-gray-400 text-sm">Cups of coffee</p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-blue-400">15+</div>
              <p className="text-gray-400 text-sm">Projects completed</p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Let's Build Something Amazing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
}