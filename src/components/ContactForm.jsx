import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all fields!");
      return;
    }

    // Reset error
    setError("");

    // Here you can handle form submission (send to email API or backend)
    console.log("Form Submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide success after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
        {submitted && <p className="text-green-400 font-semibold">Message sent successfully!</p>}

        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          rows="5"
          onChange={handleChange}
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="p-3 bg-blue-400 text-black rounded font-semibold hover:bg-blue-500 transition transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}