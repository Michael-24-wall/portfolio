import AnimatedPage from "../components/AnimatedPage";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, X } from "lucide-react";

const projects = [
  { 
    id: 1,
    title: "Shalom Hotel System", 
    description: "Full hotel management system with booking, billing, room management, and customer relationship management. Streamlines hotel operations efficiently.", 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    imageAlt: "Modern hotel lobby with reception desk",
    link: "#",
    category: "Web App",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Online Booking", "Billing System", "Room Management", "Customer Dashboard"],
    date: "2024"
  },
  { 
    id: 2,
    title: "Recipe Website", 
    description: "Dynamic recipe platform where users can browse, search, save favorite recipes, and share their own culinary creations.", 
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
    imageAlt: "Delicious homemade pasta dish",
    link: "#",
    category: "Frontend",
    technologies: ["React", "Tailwind CSS", "JSON", "Axios"],
    features: ["Recipe Search", "Save Favorites", "User Ratings", "Category Filter"],
    date: "2024"
  },
  { 
    id: 3,
    title: "Business Website", 
    description: "Modern corporate website template for businesses. Fully responsive with smooth animations, contact forms, and SEO optimization.", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    imageAlt: "Modern office workspace with laptop showing analytics",
    link: "#",
    category: "Website",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "GSAP"],
    features: ["Responsive Design", "Contact Form", "SEO Ready", "Fast Loading"],
    date: "2024"
  },
  { 
    id: 4,
    title: "E-Commerce Platform", 
    description: "Full-featured online store with shopping cart, secure checkout, payment integration, and order tracking system.", 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    imageAlt: "Online shopping cart with credit card",
    link: "#",
    category: "Web App",
    technologies: ["React", "Stripe", "Firebase", "Redux"],
    features: ["Shopping Cart", "Payment Gateway", "Order Tracking", "User Accounts"],
    date: "2024"
  },
  { 
    id: 5,
    title: "Portfolio Dashboard", 
    description: "Analytics dashboard for tracking portfolio performance, investments, and financial metrics with real-time updates.", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    imageAlt: "Business analytics dashboard on laptop",
    link: "#",
    category: "Dashboard",
    technologies: ["Next.js", "Chart.js", "Tailwind", "Recharts"],
    features: ["Real-time Data", "Interactive Charts", "Export Reports", "Custom Widgets"],
    date: "2024"
  },
  { 
    id: 6,
    title: "Task Management App", 
    description: "Collaborative task management tool with real-time updates, team features, and project tracking capabilities.", 
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
    imageAlt: "Organized desk with planner and tasks",
    link: "#",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
    features: ["Task Lists", "Team Collaboration", "Due Dates", "File Attachments"],
    date: "2024"
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["all", ...new Set(projects.map(p => p.category))];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <AnimatedPage>
      <section className="min-h-screen py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">
              My Projects
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Here are some of my recent works. Each project is crafted with passion and attention to detail.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects by title, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="sm:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl border border-gray-700"
            >
              <Filter size={18} />
              Filter Projects
            </button>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${isFilterOpen ? "flex" : "hidden"} sm:flex flex-wrap justify-center gap-3 mb-12`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilter(category);
                  setIsFilterOpen(false);
                }}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300
                  ${filter === category 
                    ? "bg-yellow-400 text-gray-900 font-semibold shadow-lg" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="text-center mb-6">
            <p className="text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setFilter("all");
                  setSearchTerm("");
                }}
                className="mt-4 px-6 py-2 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </AnimatedPage>
  );
}