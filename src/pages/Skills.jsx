import AnimatedPage from "../components/AnimatedPage";
import SkillBar from "../components/SkillBar";

const skills = [
  { skill: "React", level: 90 },
  { skill: "JavaScript", level: 95 },
  { skill: "Tailwind CSS", level: 85 },
  { skill: "HTML5", level: 95 },
  { skill: "CSS3", level: 90 },
  { skill: "Node.js", level: 70 },
  { skill: "Git", level: 85 },
];

export default function Skills() {
  return (
    <AnimatedPage>
      <section className="pt-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">Skills</h1>
        {skills.map((item) => (
          <SkillBar key={item.skill} skill={item.skill} level={item.level} />
        ))}
      </section>
    </AnimatedPage>
  );
}