import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md text-white py-4 px-4 sm:px-6 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
      {/* Logo */}
      <Link 
        to="/" 
        className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
      >
        Wallance Michael
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`relative px-2 py-1 transition-all duration-300 font-medium
              ${isActive(link.path) 
                ? "text-yellow-400" 
                : "text-gray-300 hover:text-yellow-400"
              } group`}
          >
            {link.name}
            {/* Active indicator */}
            {isActive(link.path) && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
            )}
            {/* Hover effect */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-yellow-400 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[68px] left-0 w-full bg-gray-900/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out z-40
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`w-full text-center py-3 transition-all duration-300 font-medium text-lg
                ${isActive(link.path) 
                  ? "text-yellow-400 bg-gray-800" 
                  : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}