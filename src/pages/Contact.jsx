import AnimatedPage from "../components/AnimatedPage";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <AnimatedPage>
      <section className="pt-32 max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">Contact Me</h1>
        <p className="text-gray-300 mb-6">Email: michaelwallance4@gmail.com</p>
        <ContactForm />
      </section>
    </AnimatedPage>
  );
}