import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-6 flex justify-between items-center shadow-md fixed w-full top-0 z-50">
      <h1 className="text-xl font-bold text-blue-400">Wallance Michael</h1>
      <div className="space-x-6">
        <Link className="hover:text-blue-400" to="/">Home</Link>
        <Link className="hover:text-blue-400" to="/about">About</Link>
        <Link className="hover:text-blue-400" to="/skills">Skills</Link>
        <Link className="hover:text-blue-400" to="/projects">Projects</Link>
        <Link className="hover:text-blue-400" to="/services">Services</Link>
        <Link className="hover:text-blue-400" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}