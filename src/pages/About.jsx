import AnimatedPage from "../components/AnimatedPage";
import AboutCard from "../components/AboutCard";
import { FaGraduationCap, FaBriefcase, FaAward } from "react-icons/fa";

const aboutInfo = [
  { title: "Education", value: "Software Development at Zindua", icon: <FaGraduationCap /> },
  { title: "Experience", value: "Freelance Web Developer", icon: <FaBriefcase /> },
  { title: "Achievements", value: "Built multiple professional portfolios", icon: <FaAward /> },
];

export default function About() {
  return (
    <AnimatedPage>
      <section className="pt-32 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">About Me</h1>
        <p className="text-gray-300 mb-12">
          I'm a passionate software developer building professional and modern websites. I specialize in React, Tailwind CSS, and responsive web design.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {aboutInfo.map((info) => (
            <AboutCard key={info.title} title={info.title} value={info.value} icon={info.icon} />
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}