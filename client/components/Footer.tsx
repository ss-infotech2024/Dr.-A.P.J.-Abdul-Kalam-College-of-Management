import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Send, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4a7c6f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo + College Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src="/logo.png" 
              alt="TAJ Logo" 
              className="w-24 h-24 mb-4 object-contain"
            />
            <h3 className="text-xl font-bold mb-2 leading-tight">
              Dr. A.P.J. Abdul Kalam<br />College of Management
            </h3>
            <div className="space-y-2 text-sm text-white/90 mt-4">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Tumsar – Hasara, Tah. Tumsar, Dist. Bhandara</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:dapjkalamcollege@gmail.com" className="hover:text-white/70 transition">
                  dapjkalamcollege@gmail.com
                </a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/70 transition group">
                  <span className="text-white/60 group-hover:text-white/90">›</span>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/70 transition group">
                  <span className="text-white/60 group-hover:text-white/90">›</span>
                  About College
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/70 transition group">
                  <span className="text-white/60 group-hover:text-white/90">›</span>
                  MBA
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/70 transition group">
                  <span className="text-white/60 group-hover:text-white/90">›</span>
                  Admission And Fee Structure
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/70 transition group">
                  <span className="text-white/60 group-hover:text-white/90">›</span>
                  Vision And Mission
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/70 transition group">
                  <span className="text-white/60 group-hover:text-white/90">›</span>
                  Other Facilities
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/70 transition group">
                  <span className="text-white/60 group-hover:text-white/90">›</span>
                  Placement
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in Touch Buttons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded shadow-lg hover:bg-gray-900 transition text-sm font-semibold"
              >
                CONTACT US
                <Send size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded shadow-lg hover:bg-gray-900 transition text-sm font-semibold"
              >
                FEEDBACK
                <MessageSquare size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded shadow-lg hover:bg-gray-900 transition text-sm font-semibold"
              >
                ADMISSION ENQUIRY
              </a>
            </div>
          </div>

          {/* Column 4: Google Map (Embedded) */}
          <div>
            <div className="w-full h-48 rounded overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1234567890123!2d79.12345678901234!3d21.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzI0LjQiTiA3OcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-center md:text-left">
              <p>© Copyright 2024 <span className="underline">Dr. A.P.J Abdul Kalam College of Management</span></p>
              <p>All Right Reserved.</p>
            </div>
            <div className="text-center md:text-right">
              <p>Designed & Developed By : <span className="font-semibold underline">SS Infotech</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}