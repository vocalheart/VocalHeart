import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Contact from "../components/Contact";

// ✅ Local Logos
import ReadyMealzLogo from "../../public/logoreadymealz.jpeg";
import RajdarbarLogo from "../../public/Rajdarbar.png";
import ReviewBadhaoLogo from "../../public/ReviewBadhaoLogo.png";

export default function Portfolio() {

  const projects = [
    {
      title: "Raj Darbar Restaurant Platform",
      category: "Web & Digital Marketing",
      description:
        "A complete digital transformation for Raj Darbar with online ordering and marketing.",
      image: RajdarbarLogo, //  logo used
      link: "https://rdarbar.com/",
    },
    {
      title: "Ready Mealz Subscription Service",
      category: "Web Development",
      description:
        "Subscription-based tiffin platform with flexible meal plans and tracking.",
      image: ReadyMealzLogo,
      link: "https://www.readymealz.in/",
    },
    {
      title: "Review Badhao Marketing Platform",
      category: "Digital Marketing",
      description:
        "A powerful platform to boost business reviews, manage reputation, and increase trust.",
      image: ReviewBadhaoLogo,
      link: "https://www.reviewbadhao.com",
    },
    // 👇 extra dummy projects (same UI maintain)
    {
      title: "Financial Analytics Dashboard",
      category: "Enterprise Software",
      description:
        "Real-time analytics dashboard for tracking revenue and growth.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "EdTech Learning Portal",
      category: "Web Development",
      description:
        "Interactive LMS platform with video streaming and quizzes.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    },
    {
      title: "Real Estate CRM System",
      category: "Enterprise Software",
      description:
        "Custom CRM for managing properties and sales pipeline.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    },
  ];
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 bg-brand-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our successful projects and real client work.
        </p>
      </section>
      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow border hover:shadow-xl transition flex flex-col"
              >

                {/* ✅ IMAGE / LOGO */}
                <div className="h-56 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-24 object-contain group-hover:scale-110 transition"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">

                  <span className="text-xs font-bold text-brand-600 uppercase mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-6 pt-4 border-t">

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700"
                      >
                        Visit Website <ArrowRight className="w-4 h-4" />
                      </a>
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