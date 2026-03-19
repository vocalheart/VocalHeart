import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Contact from "../components/Contact";

export default function Portfolio() {
  const projects = [
    {
      title: "Raj Darbar Restaurant Platform",
      category: "Web & Digital Marketing",
      description: "A complete digital transformation for Raj Darbar, including a custom dhaba-style themed website, online ordering integration, and a targeted digital marketing campaign to increase local footfall and online orders.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://rdarbar.com/"
    },
    {
      title: "Ready Mealz Subscription Service",
      category: "Web Development",
      description: "Developed a seamless subscription-based platform for Ready Mealz, enabling users to easily subscribe to healthy, home-cooked tiffin services with flexible meal plans and daily delivery tracking.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://www.readymealz.in"
    },
    {
      title: "Global SEO & Marketing Campaign",
      category: "Digital Marketing",
      description: "An aggressive 6-month digital marketing campaign that increased organic traffic by 300% and generated over 10,000 qualified leads.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Financial Analytics Dashboard",
      category: "Enterprise Software",
      description: "A comprehensive, real-time analytics dashboard built for a fintech startup to monitor transactions, user growth, and revenue metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "EdTech Learning Portal",
      category: "Web Development",
      description: "An interactive learning management system featuring video streaming, progress tracking, and gamified quizzes for K-12 students.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Real Estate CRM System",
      category: "Enterprise Software",
      description: "A custom CRM solution designed specifically for a real estate agency to manage property listings, client interactions, and sales pipelines.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="pt-24">
      {/* Header Section */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore some of our most successful projects. We take pride in delivering innovative solutions that drive real business results.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-600 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-medium flex items-center gap-2 hover:text-brand-700 transition-colors">
                        Visit Website <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <button className="text-brand-600 font-medium flex items-center gap-2 hover:text-brand-700 transition-colors">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
