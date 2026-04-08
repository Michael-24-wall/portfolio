import AnimatedPage from "../components/AnimatedPage";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const openWhatsApp = () => {
    const phoneNumber = "254702167229";
    const message = "Hello! I'm interested in your services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatedPage>
      <section className="min-h-screen pt-32 pb-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Let's Connect
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Reach out to me through any of these channels.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a 
                        href="mailto:michaelwallance4@gmail.com" 
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        michaelwallance4@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <a 
                        href="tel:+254700000000" 
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        +254 702167229
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors cursor-pointer" onClick={openWhatsApp}>
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                      <button 
                        onClick={openWhatsApp}
                        className="text-white hover:text-gray-300 transition-colors cursor-pointer"
                      >
                        +254 702167229
                      </button>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white">Nairobi, Kenya</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Response Time</p>
                      <p className="text-white">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <button
                    onClick={openWhatsApp}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="mt-6">
                  <p className="text-gray-400 text-sm text-center">
                    ✨ Available for freelance & full-time opportunities
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form with FormSubmit */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              
              <form 
                action="https://formsubmit.co/michaelwallance4@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit configuration - These are hidden fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Contact Form Message from Website!" />
                <input type="hidden" name="_replyto" value="email" />
                
                {/* Success page redirect (optional - comment out if you don't want redirect) */}
                {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}
                
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
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
                    required
                    className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
                    placeholder="michaelwallance4@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
                >
                  Send Message
                </button>

                <p className="text-gray-500 text-xs text-center mt-4">
                  Your information will be sent directly to my email. I'll respond within 24 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}