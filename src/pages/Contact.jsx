import AnimatedPage from "../components/AnimatedPage";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin, Phone, Send } from "lucide-react"; // Install: npm install lucide-react

export default function Contact() {
  return (
    <AnimatedPage>
      <section className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Reach out to me through any of these channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a 
                        href="mailto:michaelwallance4@gmail.com" 
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        michaelwallance4@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white">Nairobi, Kenya</p>
                    </div>
                  </div>

                  {/* Social/Additional Info */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <Send className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Response Time</p>
                      <p className="text-white">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-sm text-center">
                    ✨ Available for freelance & full-time opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}