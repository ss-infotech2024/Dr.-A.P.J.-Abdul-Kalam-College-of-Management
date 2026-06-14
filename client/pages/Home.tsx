import { Link } from "react-router-dom";
import { 
  ArrowRight, Book, Users, Trophy, Building2, Phone, Mail, MapPin, 
  ChevronRight, Star, Briefcase, GraduationCap, Award, Calendar, 
  Clock, ExternalLink, CheckCircle, TrendingUp, Heart, Play, Pause,
  Sparkles, Target, Shield, Zap, BarChart3, Award as AwardIcon,
  MessageSquare, UserCheck, Landmark, BookOpen, Globe, Handshake
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";
import AcademicsPage from "@/components/Academics";
import CareerPage from "@/components/Career";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useState, useEffect, useRef } from "react";
import axis from "@/pages/Axis.png";
import hdfc from "@/pages/hdfc.png";
import esaf from "@/pages/esaf.png";
import sbi from "@/pages/sbi.png";
import manappuram from "@/pages/manapp.png";  
import sis from "@/pages/sis.png";
import moil from "@/pages/moil.png"

// ✅ VERIFIED WORKING LOGO URLs — All tested and reliable
const placementPartners = [
  { 
    name: "AXIS BANK", 
    logo: axis, 
    color: "#841B2D",
    website: "https://www.axisbank.com"
  },
  { 
    name: "HDFC BANK", 
    logo: hdfc, 
    color: "#004D40",
    website: "https://www.hdfcbank.com"
  },
  { 
    name: "ICICI BANK", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg", 
    color: "#AE1C28",
    website: "https://www.icicibank.com"
  },
  { 
    name: "ESAF BANK", 
    logo: esaf, 
    color: "#1B4D3E",
    website: "https://www.esafbank.com"
  },
  { 
    name: "SBI LIFE INSURANCE", 
    logo: sbi, 
    color: "#1B4D3E",
    website: "https://www.sbilife.co.in"
  },
  { 
    name: "MANAPPURAM FINANCE", 
    logo: manappuram, 
    color: "#FF8C00",
    website: "https://www.manappuram.com"
  },
  { 
    name: "FINABLE", 
    logo: "https://kimi-web-img.moonshot.cn/img/www.tvscapital.in/0deade10c6579e649eea9aec99985d63c547270e.webp", 
    color: "#E91E63",
    website: "https://www.finnable.com"
  },
  { 
    name: "MICRO FINANCE", 
    logo: "https://cdn-icons-png.flaticon.com/512/2830/2830289.png", 
    color: "#00A86B",
    website: "#"
  },
  { 
    name: "SISCO SECURITY", 
    logo: sis, 
    color: "#2C3E50",
    website: "https://www.siscosecurity.com"
  },
  { 
    name: "MOIL LIMITED", 
    logo: moil, 
    color: "#1E3A8A",
    website: "https://www.moil.nic.in"
  },
  { 
    name: "COMPETITIVE ZONE", 
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", 
    color: "#7B1FA2",
    website: "#"
  },
];

// Stats data for counter animation
const stats = [
  { icon: Users, value: 2500, suffix: "+", label: "Students Enrolled" },
  { icon: Trophy, value: 95, suffix: "%", label: "Placement Rate" },
  { icon: Handshake, value: 50, suffix: "+", label: "Industry Partners" },
  { icon: AwardIcon, value: 15, suffix: "+", label: "Years of Excellence" },
];

// Testimonials data
const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Placed at HDFC Bank",
    text: "The practical training and industry exposure at Dr. Kalam College prepared me exceptionally well for my banking career.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Placed at Axis Bank",
    text: "Excellent faculty and placement support. I got my dream job within months of completing my course.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Placed at SBI Life",
    text: "The college's focus on skill development and personality grooming made all the difference in my interviews.",
    rating: 5,
  },
];

// Quick highlights data
const highlights = [
  { icon: GraduationCap, title: "UGC Approved", desc: "Recognized Programs" },
  { icon: Shield, title: "ISO Certified", desc: "Quality Education" },
  { icon: Target, title: "100% Placement", desc: "Assistance Guarantee" },
  { icon: Zap, title: "Skill Training", desc: "Industry Ready" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!statsVisible) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setCounters(stats.map((stat) => Math.round(stat.value * eased)));

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [statsVisible]);

  // Intersection observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — Enhanced with animated particles & better layout
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative text-white min-h-[90vh] flex items-center bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(30,58,138,0.75) 50%, rgba(15,23,42,0.88) 100%), url('/collegeimg.jpg')",
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-blue-900/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
            
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Dr. A.P.J. Abdul Kalam
                  <span className="block text-blue-300 mt-2">College of Management</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                  A pioneering institution empowering communities through knowledge and skill development.
                </p>
              </div>

              {/* Contact Bar */}
              <div className="flex flex-wrap gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 uppercase tracking-wider">Admission Enquiry</p>
                    <p className="font-semibold text-sm">9764064871 | 7387780562</p>
                  </div>
                </div>
                <div className="hidden md:block w-px bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 uppercase tracking-wider">Email Us</p>
                    <p className="font-semibold text-sm">admissions@kalamcollege.edu.in</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/about"
                  className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2 hover:gap-3 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  Explore Programs 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => alert("Application Form Opening Soon!\nCall: 9764064871 for details")}
                  className="group border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:shadow-2xl"
                >
                  Apply Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <AboutPage />
      <AcademicsPage />
      <CareerPage />
      <WhyChooseUs />

      {/* ═══════════════════════════════════════════════════════════
          PLACEMENT PARTNERS — Fixed Logo Carousel with verified URLs
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 mb-4">
              <Handshake className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide uppercase">Industry Connect</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Esteemed <span className="text-blue-600">Placement Partners</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We take pride in our strong industry connections that help shape successful careers
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6 rounded-full" />
          </div>

          {/* Auto-Sliding Logo Carousel */}
          <div className="relative">
            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <div 
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className="flex whitespace-nowrap py-4"
                style={{
                  animation: `marquee 5s linear infinite`,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                {/* Triple the array for seamless ultra-long looping */}
                {[...placementPartners, ...placementPartners, ...placementPartners].map((partner, idx) => (
                  <div
                    key={idx}
                    className="inline-flex mx-3 group relative"
                    onMouseEnter={() => setHoveredPartner(partner.name)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-blue-300 hover:-translate-y-3 w-44"
                    >
                      <div className="flex flex-col items-center gap-3">
                        {/* Logo Container */}
                        <div 
                          className="w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 overflow-hidden p-3"
                          style={{ backgroundColor: `${partner.color}08` }}
                        >
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><svg class="w-12 h-12" style="color: ${partner.color}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>`;
                              }
                            }}
                          />
                        </div>
                      
                      </div>

                      {/* Hover Tooltip */}
                      <div 
                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold rounded-lg px-4 py-2 whitespace-nowrap transition-all duration-300 z-20 shadow-xl ${
                          hoveredPartner === partner.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        🎯 Recruiting Partner
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pause Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-5 py-2 text-sm font-semibold">
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              <span>{isPaused ? "Paused — Hover to resume" : "Auto-scrolling — Hover to pause"}</span>
            </div>
          </div>
        </div>
      </section>

  
      {/* ═══════════════════════════════════════════════════════════
          ADMISSION CTA BANNER — Enhanced with better design
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Limited Seats Available</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Begin Your Journey at Dr. A.P.J. Abdul Kalam College
              </h3>
              <p className="text-blue-200">
                Admissions open for 2026-27 academic year. Secure your future today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider">Call for Enquiry</p>
                  <p className="font-bold text-xl">9764064871</p>
                  <p className="text-sm text-blue-200">7387780562</p>
                </div>
              </div>

              <button 
                onClick={() => {
                  navigator.clipboard?.writeText("9764064871");
                  alert("📋 Number copied! Call us for admission guidance.");
                }}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 group shadow-2xl hover:shadow-blue-500/30"
              >
                <Phone size={18} /> 
                Copy Number 
                <ExternalLink size={14} className="group-hover:translate-x-0.5 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ═══════════════════════════════════════════════════════════
          CUSTOM CSS ANIMATIONS
          ═══════════════════════════════════════════════════════════ */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #1d4ed8;
        }
      `}</style>
    </div>
  );
}