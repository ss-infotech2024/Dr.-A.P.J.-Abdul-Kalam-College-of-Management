import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Building2,
  Droplet,
  Cpu,
  BookOpen,
  Users,
  Heart,
  Briefcase,
  Leaf,
  Camera,
  Library,
  Database,
  Bookmark,
  Calendar,
  CheckCircle,
  Sparkles,
  TrendingUp,
  UserCheck,
  Target,
} from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: Building2,
      title: "Clean Premises",
      description:
        "Meticulously maintained premises with clean and spacious surroundings conducive to focused learning and collaboration.",
    },
    {
      icon: Droplet,
      title: "Purified Drinking Water",
      description:
        "Each floor is equipped with hydration stations providing purified drinking water, promoting health and wellness.",
    },
    {
      icon: Cpu,
      title: "Computer & Electronics Labs",
      description:
        "Air-conditioned labs with cutting-edge equipment and software for hands-on learning and innovation.",
    },
    {
      icon: BookOpen,
      title: "Language Lab & Library",
      description:
        "Well-stocked library with digital resources, e-books, and language lab for comprehensive learning support.",
    },
    {
      icon: Building2,
      title: "ICT Classrooms",
      description:
        "Modern ICT-enabled classrooms seamlessly integrated into curriculum with latest technology and tools.",
    },
    {
      icon: Users,
      title: "Extracurricular Activities",
      description:
        "Diverse range of activities spanning sports, arts, community service, and leadership development.",
    },
  ];

  const additionalFacilities = [
    {
      icon: Heart,
      title: "Counseling & Career Guidance",
      description:
        "Comprehensive counseling sessions, resume-building seminars, and mock interviews for student success.",
    },
    {
      icon: Briefcase,
      title: "Mentorship & Internships",
      description:
        "Mentorship programs, industry internships, and alumni networking for career development.",
    },
    {
      icon: Leaf,
      title: "NSS & Sustainability",
      description:
        "NSS activities complemented by sustainability initiatives promoting environmental and social responsibility.",
    },
    {
      icon: Camera,
      title: "CCTV Security",
      description:
        "Advanced CCTV systems ensuring campus safety and emergency response capabilities.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4a7c59] to-[#3a6347] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Campus Facilities
          </h1>
          <p className="text-xl text-[#d4e8da]">
            State-of-the-art infrastructure designed for academic excellence and
            student welfare
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-l-4 border-[#4a7c59]">
            <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We take pride in providing a learning environment that goes beyond
              the traditional classroom experience. From the moment you step onto
              our campus, you'll notice our commitment to excellence in every
              detail.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Inside our classrooms, you'll find state-of-the-art facilities,
              well-equipped labs, air-conditioning for comfort, and dedicated
              spaces like language labs and libraries stocked with resources to
              support diverse learning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Facilities */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Primary Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 border-t-4 border-[#4a7c59]"
                >
                  <Icon className="text-[#4a7c59] mb-4" size={40} />
                  <h3 className="text-xl font-bold text-[#4a7c59] mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 md:py-24 bg-[#eaf5ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Additional Services & Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalFacilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 border-l-4 border-[#4a7c59]"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="text-[#4a7c59] flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-xl font-bold text-[#4a7c59] mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Library Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Library & Reading Room
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#4a7c59]">
              <div className="flex items-center gap-3 mb-6">
                <Library size={32} className="text-[#4a7c59]" />
                <h3 className="text-2xl font-bold text-[#4a7c59]">Library Overview</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The library and reading room stand as cornerstones of academic
                exploration and intellectual growth. These spaces are
                meticulously designed to foster an environment conducive to
                learning, research, and exchange of ideas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With shelves lined with extensive collections of books,
                journals, and digital resources, our library serves as a gateway
                to the vast world of learning and discovery. The careful
                curation ensures access to latest research and classic texts.
              </p>
            </div>
            <div className="bg-[#eaf5ef] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Database size={32} className="text-[#4a7c59]" />
                <h3 className="text-2xl font-bold text-[#4a7c59]">Key Resources</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle size={18} className="text-[#4a7c59] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">On-line journals for research</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={18} className="text-[#4a7c59] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">E-Books collection accessible 24/7</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={18} className="text-[#4a7c59] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">DELNET database access</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={18} className="text-[#4a7c59] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">NDLI (National Digital Library)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={18} className="text-[#4a7c59] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">OPAC (Online Public Access Catalog)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Library Instructions */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#4a7c59]">
              <div className="flex items-center gap-3 mb-6">
                <Bookmark size={28} className="text-[#4a7c59]" />
                <h3 className="text-xl font-bold text-[#4a7c59]">Book Issuing Guidelines</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#4a7c59]">1.</span>
                  <span>All students provided with required number of books for the session</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#4a7c59]">2.</span>
                  <span>Books must be returned before final examination</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#4a7c59]">3.</span>
                  <span>Check books for damage upon receipt; report immediately if found</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#4a7c59]">4.</span>
                  <span>Lost books: Student must return new copy or pay equivalent amount</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#eaf5ef] rounded-lg shadow-lg p-8 border-l-4 border-[#4a7c59]">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={28} className="text-[#4a7c59]" />
                <h3 className="text-xl font-bold text-[#4a7c59]">Additional Services</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#4a7c59] font-bold">•</span>
                  <span>Extra-Curricular books in Hindi, Marathi & English</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4a7c59] font-bold">•</span>
                  <span>Dedicated reading room facilities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4a7c59] font-bold">•</span>
                  <span>On demand soft copy of Syllabus & Question Papers via email</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4a7c59] font-bold">•</span>
                  <span>Library orientation for new students</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Environment */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Holistic Learning Environment
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            We believe in nurturing the holistic development of our students
            through a comprehensive approach to education and personal growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                icon: Target,
                items: [
                  "Well-equipped classrooms",
                  "Modern teaching methods",
                  "Research facilities",
                  "Expert guidance",
                ],
              },
              {
                title: "Personal Development",
                icon: UserCheck,
                items: [
                  "Counseling services",
                  "Leadership programs",
                  "Personality development",
                  "Confidence building",
                ],
              },
              {
                title: "Career Preparation",
                icon: TrendingUp,
                items: [
                  "Industry exposure",
                  "Internship programs",
                  "Interview preparation",
                  "Placement support",
                ],
              },
            ].map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition border-t-4 border-[#4a7c59]"
                >
                  <div className="flex justify-center mb-4">
                    <CategoryIcon size={48} className="text-[#4a7c59]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4a7c59] mb-6">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center justify-center gap-2">
                        <CheckCircle size={16} className="text-[#4a7c59]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4a7c59] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Campus</h2>
          <p className="text-xl text-[#d4e8da] mb-8">
            Visit us and discover the facilities that support your academic
            success
          </p>
          <button
            onClick={() => alert("Campus tour booking coming soon!")}
            className="bg-white text-[#4a7c59] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book Campus Tour
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}