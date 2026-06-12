import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "ACADEMICS", href: "/academics" },
  { label: "DEPARTMENTS", href: "/departments" },
  { label: "FACILITIES", href: "/facilities" },
  { label: "PLACEMENT", href: "/placement" },
  { label: "CAREER PAGE", href: "/career" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#4a7c59] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm gap-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:dapjkalamcollege@gmail.com"
                className="hover:underline"
              >
                dapjkalamcollege@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>
                Tumsar – Hasara, Tah. Tumsar, Dist. Bhandara
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full bg-white">
        <Link to="/" className="block w-full">
          <img
            src="/banner.png"
            alt="TAJ's Dr. A.P.J. Abdul Kalam College of Management"
            className="w-full h-auto"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f5f5f5] border-y border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center min-h-[56px]">
            {/* Desktop Menu */}
            <div className="hidden lg:flex w-full justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-6 py-4 text-sm font-medium border-r border-gray-300 last:border-r-0 transition-all duration-200",
                    isActive(link.href)
                      ? "bg-[#4a7c59] text-white"
                      : "text-gray-700 hover:bg-[#4a7c59] hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden w-full flex justify-end px-4 py-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 border-b border-gray-100 text-sm font-medium",
                    isActive(link.href)
                      ? "bg-[#4a7c59] text-white"
                      : "text-gray-700 hover:bg-[#4a7c59] hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}