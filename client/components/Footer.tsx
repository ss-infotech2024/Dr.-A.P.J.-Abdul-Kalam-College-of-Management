import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. A.P.J. Abdul Kalam</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              College of Management, Tumsar is dedicated to providing quality
              education and fostering innovation, leadership, and professional
              advancement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Academics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Placement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-blue-100 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <p>
                  Tumsar – Hasara, Tah. Tumsar, Dist. Bhandara, Pin Code:
                  441912
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={20} className="flex-shrink-0" />
                <a
                  href="mailto:dapjkalamcollege@gmail.com"
                  className="hover:text-white transition"
                >
                  dapjkalamcollege@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+917387780562" className="hover:text-white transition">
                  +91 7387780562
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-blue-400 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-blue-200 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-200 transition">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-200 transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400 pt-6 text-center text-blue-100 text-sm">
          <p>
            &copy; 2024 Dr. A.P.J. Abdul Kalam College of Management, Tumsar.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
