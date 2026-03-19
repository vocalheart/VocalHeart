import { motion } from "motion/react";
import Contact from "../components/Contact";
import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";

export default function ContactPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including Software Development, Digital Marketing, Training & Placement, and Tech Support.",
    },
    {
      question: "Where are you located?",
      answer: "We are located at Plot N. 3, Third Floor, Bajaj Tower, Raisen Rd, Lala Lajpat Rai Colony, Bhopal, Madhya Pradesh 462023.",
    },
    {
      question: "How can I apply for a job?",
      answer: "You can visit our Careers page and fill out the application form with your resume and details.",
    },
    {
      question: "Do you provide 24x7 support?",
      answer: "Yes, we offer 24x7 team support to ensure seamless assistance and uninterrupted service for our clients.",
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Please fill out the form below, and our team will review your request and get back to you shortly.
          </motion.p>
        </div>
      </section>

      <Contact />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-brand-600" /> : <Plus className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}
