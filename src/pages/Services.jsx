import AnimatedPage from "../components/AnimatedPage";
import ServiceCard from "../components/ServiceCard";
import { FaCode, FaPalette, FaLightbulb } from "react-icons/fa";

const services = [
  { title: "Web Development", description: "Building responsive & modern websites.", icon: <FaCode /> },
  { title: "UI/UX Design", description: "Designing user-friendly interfaces.", icon: <FaPalette /> },
  { title: "Consulting", description: "Providing professional web solutions.", icon: <FaLightbulb /> },
];

export default function Services() {
  return (
    <AnimatedPage>
      <section className="pt-32 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}