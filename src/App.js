const Button = ({ children, className }) => (
  <button className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded ${className}`}>
    {children}
  </button>
);
import { motion } from "framer-motion";
import { LucideBrainCircuit, LucideCloud, LucideShieldCheck, LucideDatabase, LucideCodeSquare, LucideGlobe2 } from "lucide-react";

export default function NexaTech() {
  const services = [
    {
      title: "AI Solutions",
      icon: <LucideBrainCircuit className="w-10 h-10" />,
      desc: "Custom AI-powered platforms for automation, prediction, and optimization tailored to your business goals."
    },
    {
      title: "Cloud Infrastructure",
      icon: <LucideCloud className="w-10 h-10" />,
      desc: "Deploy scalable cloud environments using AWS, Azure, and GCP with best practices in security and cost."
    },
    {
      title: "Cybersecurity",
      icon: <LucideShieldCheck className="w-10 h-10" />,
      desc: "Advanced protection using endpoint security, firewalls, and incident response services."
    },
    {
      title: "Database Engineering",
      icon: <LucideDatabase className="w-10 h-10" />,
      desc: "Robust data models, performance tuning, and reliable backups using modern database solutions."
    },
    {
      title: "Web Development",
      icon: <LucideCodeSquare className="w-10 h-10" />,
      desc: "Responsive, elegant front-end & full-stack applications powered by React, Node.js, and more."
    },
    {
      title: "Global Infrastructure",
      icon: <LucideGlobe2 className="w-10 h-10" />,
      desc: "International deployment strategies, CDN integration, and 99.99% uptime availability."
    }
  ];

  return (
    <main className="bg-black text-white min-h-screen font-sans">
     <header className="w-full px-6 md:px-20 py-6 flex justify-between items-center border-b border-zinc-800 bg-black sticky top-0 z-50">
  <h1 className="text-3xl font-bold tracking-wider">NexaTech</h1>
  <nav className="space-x-8 text-gray-400 text-lg font-semibold">
    <a href="#about" className="hover:text-white">About</a>
    <a href="#services" className="hover:text-white">Services</a>
    <a href="#contact" className="hover:text-white">Contact</a>
  </nav>
</header>


      <section className="px-6 md:px-20 py-24 text-center bg-gradient-to-b from-zinc-900 to-black space-y-6">
        <motion.h2 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold">
          Engineering Tomorrow
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-400 max-w-2xl mx-auto text-lg">
          NexaTech delivers intelligent, scalable solutions in AI, Cloud, Cybersecurity, and more. Build smarter. Run faster. Stay secure.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Button className="text-md px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white">Request a Consultation</Button>
        </motion.div>
      </section>

      <section id="about" className="px-6 md:px-40 py-20 text-center space-y-6 bg-black">
        <h2 className="text-4xl font-semibold">Who We Are</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          NexaTech is a leading global provider of next-gen digital solutions, combining deep tech expertise with innovation.
          From startups to Fortune 500 companies, we help clients stay ahead with transformative platforms and resilient systems.
        </p>
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80" alt="Team" className="rounded-2xl w-full h-80 object-cover mt-10 shadow-md" />
      </section>

      <section id="services" className="px-6 md:px-20 py-20 bg-zinc-950">
        <h2 className="text-4xl font-semibold mb-10 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-zinc-900 p-8 rounded-2xl shadow-lg text-center space-y-4">
              <div className="text-blue-400 mx-auto">{service.icon}</div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 md:px-40 py-20 text-center space-y-6 bg-black">
        <h2 className="text-4xl font-semibold">Let’s Connect</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Want to explore how NexaTech can help your business? Reach out to us — our consultants are ready to help you plan, build, and scale.
        </p>
        <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">Get in Touch</Button>
      </section>

      <footer className="text-center text-gray-600 text-sm py-10 border-t border-zinc-800 bg-zinc-950">
        © 2025 NexaTech. All rights reserved.
      </footer>
    </main>
  );
}
