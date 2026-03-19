import React, { useState } from "react";
import { Facebook, Linkedin, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl leading-none">
                  V
                </span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Vocal Heart
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering Enterprises with Vocal Heart Infotech – your partner in
              innovation and success!
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/Vocal-Heart-Infotech-Private-Limited-100064097940874/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/vocalheartinfotechprivatelimited/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Our Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/software-development"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/digital-marketing"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/training-placement"
                  className="hover:text-brand-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Training & Placement
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center min-w-[100px]"
              >
                {subscribed ? <CheckCircle2 className="w-5 h-5" /> : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-400 text-xs mt-2">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            &copy; {new Date().getFullYear()} Vocal Heart Infotech Private
            Limited. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
