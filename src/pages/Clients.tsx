import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Contact from "../components/Contact";

// ✅ Local images
import ReadyMealzLogo from "../../public/logoreadymealz.jpeg";
import RajdarbarLogo from "../../public/Rajdarbar.png";

export default function Clients() {

  const clients = [
    {
      name: "Raj Darbar",
      image: RajdarbarLogo,
      link: "https://rdarbar.com/",
    },
    {
      name: "Ready Mealz",
      image: ReadyMealzLogo,
      link: "https://www.readymealz.in",
    },
    {
      name: "TechCorp Global",
      logo: "TC",
    },
    {
      name: "HealthPlus Systems",
      logo: "HP",
    },
    {
      name: "EduLearn Network",
      logo: "EN",
    },
    {
      name: "RetailGiant Inc.",
      logo: "RG",
    },
    {
      name: "Fintech Solutions",
      logo: "FS",
    },
    {
      name: "InnovateTech",
      logo: "IT",
    },
  ];

  const testimonials = [
    {
      quote:
        "Vocal Heart Infotech completely transformed our digital presence. Their team delivered a robust, scalable platform that exceeded all our expectations.",
      author: "Sarah Jenkins",
      role: "CTO, TechCorp Global",
      rating: 5,
    },
    {
      quote:
        "The digital marketing strategies implemented by Vocal Heart resulted in a massive increase in our online orders and footfall. Highly recommended!",
      author: "Raj Darbar Management",
      role: "Raj Darbar",
      rating: 5,
    },
    {
      quote:
        "They developed a seamless subscription platform for our tiffin service. The user experience is fantastic, and it has streamlined our daily operations significantly.",
      author: "Ready Mealz Team",
      role: "Ready Mealz",
      rating: 5,
    },
  ];

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 bg-brand-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Clients
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are proud to partner with innovative companies across the globe.
        </p>
      </section>

      {/* Clients */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => {

              const content = (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-brand-50 transition border h-full"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow mb-4 overflow-hidden">

                    {/* ✅ Image OR Text */}
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-brand-600">
                        {client.logo}
                      </span>
                    )}

                  </div>

                  <h3 className="font-semibold text-gray-900 text-center">
                    {client.name}
                  </h3>
                </motion.div>
              );

              return client.link ? (
                <a
                  key={index}
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow border relative"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-gray-200" />

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6">"{t.quote}"</p>

                <h4 className="font-bold">{t.author}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}