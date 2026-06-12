import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, Calendar, Users, Download, Mail, FileText, Building2, UserPlus, Send, Clock, Phone, Award, GraduationCap, BookOpen, FlaskConical, Calculator, Microscope, ScrollText, Languages, TrendingUp, PieChart, AlertCircle } from "lucide-react";

export default function Career() {
  const [activeFilter, setActiveFilter] = useState<"all" | "mba" | "arts">(
    "all"
  );

  const mbaPositions = {
    title: "Master of Business Administration",
    positions: [
      {
        id: 1,
        title: "Assistant Professor",
        qualification:
          "Bachelor's Degree in Any Discipline and Master's Degree in Business Administration/PGDM/CA/ICWA/M. Com with First Class or equivalent and 2 years of Professional experience",
        location: "Tumsar-Hasara",
        vacancy: 4,
        lastDate: "12-10-2025",
        department: "MBA",
      },
    ],
  };

  const artsPositions = [
    {
      id: 2,
      title: "Assistant Professor - Physics",
      qualification:
        "Master's degree with 55% marks in Physics from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: FlaskConical,
    },
    {
      id: 3,
      title: "Assistant Professor - Botany",
      qualification:
        "Master's degree with 55% marks in Botany from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: Leaf,
    },
    {
      id: 4,
      title: "Assistant Professor - Chemistry",
      qualification:
        "Master's degree with 55% marks in Chemistry from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: FlaskConical,
    },
    {
      id: 5,
      title: "Assistant Professor - Maths",
      qualification:
        "Master's degree with 55% marks in Mathematics from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: Calculator,
    },
    {
      id: 6,
      title: "Assistant Professor - Zoology",
      qualification:
        "Master's degree with 55% marks in Zoology from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: Microscope,
    },
    {
      id: 7,
      title: "Assistant Professor - History",
      qualification:
        "Master's degree with 55% marks in History from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: ScrollText,
    },
    {
      id: 8,
      title: "Assistant Professor - Sociology",
      qualification:
        "Master's degree with 55% marks in Sociology from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: Users,
    },
    {
      id: 9,
      title: "Assistant Professor - Marathi",
      qualification:
        "Master's degree with 55% marks in Marathi from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: Languages,
    },
    {
      id: 10,
      title: "Assistant Professor - English",
      qualification:
        "Master's degree with 55% marks in English from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: BookOpen,
    },
    {
      id: 11,
      title: "Assistant Professor - Economics",
      qualification:
        "Master's degree with 55% marks in Economics from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: TrendingUp,
    },
    {
      id: 12,
      title: "Assistant Professor - Commerce",
      qualification:
        "Master's degree with 55% marks in Commerce from recognized Indian University",
      location: "Tumsar-Hasara",
      vacancy: 1,
      department: "Arts/Science",
      lastDate: undefined,
      icon: PieChart,
    },
  ];

  const filteredPositions =
    activeFilter === "all"
      ? [...mbaPositions.positions, ...artsPositions]
      : activeFilter === "mba"
      ? mbaPositions.positions
      : artsPositions;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4a7c59] to-[#3a6347] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Page</h1>
          <p className="text-xl text-[#d4e8da]">
            Join Our Team: Current Opportunities at Dr. A.P.J. Abdul Kalam
            College
          </p>
        </div>
      </section>

      {/* Team Banner */}
      <section className="bg-[#eaf5ef] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <UserPlus size={48} className="text-[#4a7c59]" />
          </div>
          <h2 className="text-3xl font-bold text-[#4a7c59] mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-700">
            We're always looking for talented individuals to join our growing
            team. Explore our current openings and find your perfect role.
          </p>
        </div>
      </section>

      {/* Download Documents Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Download Recruitment Documents
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition border-t-4 border-[#4a7c59]">
              <FileText className="text-[#4a7c59] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#4a7c59] mb-4">
                MBA Recruitment PDF
              </h3>
              <p className="text-gray-700 mb-6">
                Complete details for MBA Assistant Professor positions
              </p>
              <button
                onClick={() =>
                  alert(
                    "Downloading MBA Recruitment PDF...\n\nFile: MBA_Recruitment_Details.pdf"
                  )
                }
                className="bg-[#4a7c59] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3a6347] transition"
              >
                Download PDF
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition border-t-4 border-[#4a7c59]">
              <FileText className="text-[#4a7c59] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#4a7c59] mb-4">
                Arts, Commerce & Science Recruitment PDF
              </h3>
              <p className="text-gray-700 mb-6">
                Complete details for Arts/Commerce/Science positions
              </p>
              <button
                onClick={() =>
                  alert(
                    "Downloading Arts/Commerce/Science Recruitment PDF...\n\nFile: Arts_Commerce_Science_Recruitment.pdf"
                  )
                }
                className="bg-[#4a7c59] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3a6347] transition"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Share Resume Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Share Your Resume
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#eaf5ef] rounded-lg p-8 border-l-4 border-[#4a7c59]">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={28} className="text-[#4a7c59]" />
                <h3 className="text-xl font-bold text-[#4a7c59]">MBA Recruitment</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For MBA Assistant Professor positions, please send your resume
                to:
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="font-mono text-[#4a7c59] font-semibold">
                  dapjkalamcollege@gmail.com
                </p>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Address:</strong> Dr. A. P. J. Abdul Kalam College of
                Management, Tumsar, Dist- Bhandara, Pin Code: 441912
              </p>
            </div>
            <div className="bg-[#eaf5ef] rounded-lg p-8 border-l-4 border-[#4a7c59]">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={28} className="text-[#4a7c59]" />
                <h3 className="text-xl font-bold text-[#4a7c59]">Arts, Commerce & Science Recruitment</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For Arts/Commerce/Science positions, please send your resume
                to:
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="font-mono text-[#4a7c59] font-semibold">
                  dapjkalamcollege@gmail.com
                </p>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Address:</strong> Dr. A. P. J. Abdul Kalam Arts,
                Commerce and Science College Hasara, Tah- Tumsar, Dist-
                Bhandara, Pin Code: 441912
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Filter Positions:
          </h3>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeFilter === "all"
                  ? "bg-[#4a7c59] text-white"
                  : "bg-white text-[#4a7c59] border-2 border-[#4a7c59] hover:bg-[#eaf5ef]"
              }`}
            >
              All Positions
            </button>
            <button
              onClick={() => setActiveFilter("mba")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeFilter === "mba"
                  ? "bg-[#4a7c59] text-white"
                  : "bg-white text-[#4a7c59] border-2 border-[#4a7c59] hover:bg-[#eaf5ef]"
              }`}
            >
              MBA Recruitment
            </button>
            <button
              onClick={() => setActiveFilter("arts")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeFilter === "arts"
                  ? "bg-[#4a7c59] text-white"
                  : "bg-white text-[#4a7c59] border-2 border-[#4a7c59] hover:bg-[#eaf5ef]"
              }`}
            >
              Arts, Commerce & Science
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Current Openings ({filteredPositions.length})
          </h2>

          {filteredPositions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-700 text-lg">
                No positions available for this category at the moment.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPositions.map((position) => {
                const SubjectIcon = (position as any).icon || GraduationCap;
                return (
                  <div
                    key={position.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 border-l-4 border-[#4a7c59]"
                  >
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <SubjectIcon size={24} className="text-[#4a7c59]" />
                          <h3 className="text-2xl font-bold text-[#4a7c59]">
                            {position.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase size={18} />
                          <span>{position.department}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <MapPin className="flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-semibold">{position.location}</p>
                          <p className="text-sm text-gray-600">Location</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-gray-700">
                        <Users className="flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-semibold">{position.vacancy}</p>
                          <p className="text-sm text-gray-600">Vacancies</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 p-6 bg-[#eaf5ef] rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <Award size={18} className="text-[#4a7c59]" />
                        Qualifications:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {position.qualification}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                      <div className="flex gap-6 flex-wrap">
                        <div>
                          <p className="text-sm text-gray-600">Employment Type</p>
                          <p className="font-semibold text-gray-900">Full-time</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Pay Scale</p>
                          <p className="font-semibold text-gray-900">
                            As per AICTE & Govt. rules
                          </p>
                        </div>
                        {position.lastDate && (
                          <div>
                            <p className="text-sm text-gray-600">Last Date</p>
                            <p className="font-semibold text-gray-900">
                              {position.lastDate}
                            </p>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() =>
                          alert(
                            `Application for ${position.title}\n\nPlease send your CV and documents to: dapjkalamcollege@gmail.com`
                          )
                        }
                        className="bg-[#4a7c59] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#3a6347] transition whitespace-nowrap"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact for Inquiries */}
      <section className="bg-[#4a7c59] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Careers?</h2>
          <p className="text-xl text-[#d4e8da] mb-8">
            Contact our HR department for more information
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-lg flex items-center justify-center gap-2">
              <Mail size={20} />
              <a
                href="mailto:dapjkalamcollege@gmail.com"
                className="hover:text-[#d4e8da] transition"
              >
                dapjkalamcollege@gmail.com
              </a>
            </p>
            <p className="text-lg flex items-center justify-center gap-2">
              <Phone size={20} />
              <a
                href="tel:+917387780562"
                className="hover:text-[#d4e8da] transition"
              >
                +91 7387780562
              </a>
            </p>
          </div>
          <button
            onClick={() => alert("Career inquiry form coming soon!")}
            className="bg-white text-[#4a7c59] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Send Inquiry
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Leaf icon is needed for Botany
import { Leaf } from "lucide-react";