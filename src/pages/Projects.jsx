import AnimatedPage from "../components/AnimatedPage";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { 
    title: "Shalom Hotel System", 
    description: "Full hotel management system with booking & billing.", 
    image: "/images/shalom-hotel.jpg", 
    link: "#" 
  },
  { 
    title: "Recipe Website", 
    description: "Dynamic recipe platform using React & JSON.", 
    image: "/images/recipe-website.jpg", 
    link: "#" 
  },
  { 
    title: "Business Website", 
    description: "Corporate website template for modern businesses.", 
    image: "/images/business-website.jpg", 
    link: "#" 
  },
];

export default function Projects() {
  return (
    <AnimatedPage>
      <section id="projects" className="pt-32 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">Projects</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}