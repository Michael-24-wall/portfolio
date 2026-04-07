// components/ContactForm.js
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const openWhatsApp = () => {
    const phoneNumber = "254702167229";
    const message = "Hello! I'm interested in your services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
            placeholder="michaelwallance4@gmail.com"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        {submitStatus === "success" && (
          <div className="bg-green-900/50 border border-green-700 text-green-300 px-4 py-3 rounded-lg">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-gray-400 text-sm text-center mb-4">Or reach out faster via</p>
        <button
          onClick={openWhatsApp}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Chat
        </button>
      </div>
    </>
  );
}