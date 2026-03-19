import { motion } from "motion/react";
import { Code, Smartphone, Server, Cloud } from "lucide-react";
import Contact from "../components/Contact";

export default function SoftwareDevelopment() {
  const features = [
    {
      title: "Web Development",
      description: "Creating websites and web applications that adapt seamlessly to different devices and screen sizes, ensuring a user-friendly experience with intuitive navigation, fast performance, and visually appealing designs. These solutions focus on enhancing user engagement and achieving business goals effectively.",
      icon: Code,
    },
    {
      title: "Mobile App Development",
      description: "We develop high-performance Android and iOS apps optimized for speed, efficiency, and user experience. By combining intuitive design, robust features, and modern technologies, we ensure seamless functionality across devices. Rigorous testing guarantees reliability, delivering apps that meet business goals and enhance user engagement.",
      icon: Smartphone,
    },
    {
      title: "Enterprise Software Solutions",
      description: "Scalable software efficiently handles current operations and adapts to growth. It streamlines processes like inventory management, CRM, payroll, and ERP, ensuring productivity, real-time data access, and seamless team collaboration.",
      icon: Server,
    },
    {
      title: "Cloud Solutions",
      description: "This involves creating applications optimized for cloud environments or transferring existing ones to cloud platforms. It ensures enhanced scalability, flexibility, and cost-efficiency while enabling secure access, improved performance, and seamless integration with modern technologies.",
      icon: Cloud,
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Software Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Driving innovation through cutting-edge software development tailored to your needs.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
