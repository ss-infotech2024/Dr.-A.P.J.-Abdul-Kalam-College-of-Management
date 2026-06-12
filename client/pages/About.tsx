import { Link } from "react-router-dom";
import { Eye, Target, Users, Building2, Briefcase, Award, Lightbulb, Handshake, Globe, Trophy, Calendar, CheckCircle, GraduationCap, User, FileText, TrendingUp, Heart, Shield, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4a7c59] to-[#3a6347] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-[#d4e8da]">
            Learn about our institution's mission, vision, and commitment to
            excellence
          </p>
        </div>
      </section>

      {/* About College */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <Building2 size={120} className="text-[#4a7c59]" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#4a7c59] mb-6">
                About Our College
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. A.P.J. Abdul Kalam College of Management provides
                exceptional management education conveniently located in Tumsar.
                Our mission is to foster a dynamic learning environment that
                cultivates innovation, leadership, and professional advancement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Faculty comprises seasoned professionals and industry experts
                dedicated to providing quality education and mentorship. We are
                committed to developing competent business professionals who can
                contribute positively to society and economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-[#4a7c59]" size={40} />
                <h3 className="text-3xl font-bold text-[#4a7c59]">Our Mission</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <TrendingUp size={20} className="text-[#4a7c59]" />
                    Inculcating Skills
                  </h4>
                  <p>
                    To inculcate managerial and entrepreneurial skills with a
                    zeal to attain excellence in business administration.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <GraduationCap size={20} className="text-[#4a7c59]" />
                    Professional Competence
                  </h4>
                  <p>
                    To motivate students to gain professional competence through
                    constant knowledge update and empathetic leadership
                    qualities.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Heart size={20} className="text-[#4a7c59]" />
                    Cultivating Values
                  </h4>
                  <p>
                    To cultivate personal integrity, ethical consciousness,
                    care for environment and society.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="text-[#4a7c59]" size={40} />
                <h3 className="text-3xl font-bold text-[#4a7c59]">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In the era of competition, Dr. A.P.J. Abdul Kalam College of
                Management nurtures and polishes the personality of students.
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59]" size={20} />
                  <span>
                    Produce competent business professionals and entrepreneurs
                    with necessary managerial and research skills
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59]" size={20} />
                  <span>
                    Become a centre of excellence for conveying quality
                    education
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59]" size={20} />
                  <span>
                    Foster innovation, leadership, and professional advancement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* President & Secretary Desk */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Leadership Messages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* President's Desk */}
            <div className="bg-[#eaf5ef] rounded-lg p-8 border-l-4 border-[#4a7c59]">
              <div className="flex items-center gap-4 mb-6">
                <User size={48} className="text-[#4a7c59]" />
                <h3 className="text-2xl font-bold text-[#4a7c59]">
                  President's Message
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. A.P.J. Abdul Kalam College of Management, a burgeoning
                institution nestled in Tumsar, is dedicated to nurturing
                aspiring innovators, technocrats, and entrepreneurs. We provide
                sustainable and affordable education to all deserving students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am confident that students will have undergone a holistic
                transformation and will be equipped to tackle global challenges
                with integrity, innovation, and excellence.
              </p>
            </div>

            {/* Secretary's Desk */}
            <div className="bg-[#eaf5ef] rounded-lg p-8 border-l-4 border-[#4a7c59]">
              <div className="flex items-center gap-4 mb-6">
                <FileText size={48} className="text-[#4a7c59]" />
                <h3 className="text-2xl font-bold text-[#4a7c59]">
                  Secretary's Message
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We assure you of a dynamic and career-focused learning journey.
                Our curriculum is shaped by academic governors including
                student representatives, ensuring relevance to contemporary
                industry needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Faculty comprises visiting lecturers from esteemed institutes
                and corporate professionals. Our Training and Placement Cell
                begins efforts from day one to ensure successful career
                placements for all our graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Lightbulb size={56} className="text-[#4a7c59]" />
              </div>
              <h3 className="text-xl font-bold text-[#4a7c59] mb-3">Innovation</h3>
              <p className="text-gray-700">
                Encouraging creative thinking and innovative solutions to
                business challenges
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Shield size={56} className="text-[#4a7c59]" />
              </div>
              <h3 className="text-xl font-bold text-[#4a7c59] mb-3">Integrity</h3>
              <p className="text-gray-700">
                Maintaining highest standards of honesty and ethical conduct in
                all dealings
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Trophy size={56} className="text-[#4a7c59]" />
              </div>
              <h3 className="text-xl font-bold text-[#4a7c59] mb-3">Excellence</h3>
              <p className="text-gray-700">
                Pursuing excellence in academics, research, and professional
                practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Journey
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[#4a7c59] rounded-full"></div>
                <div className="w-1 h-24 bg-[#4a7c59]"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold text-[#4a7c59] mb-2 flex items-center gap-2">
                  <Calendar size={18} />
                  Institution Established
                </h3>
                <p className="text-gray-700">
                  Founded with a vision to provide quality management education
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[#4a7c59] rounded-full"></div>
                <div className="w-1 h-24 bg-[#4a7c59]"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold text-[#4a7c59] mb-2 flex items-center gap-2">
                  <Users size={18} />
                  First Batch Admission
                </h3>
                <p className="text-gray-700">
                  Welcomed first cohort of MBA students with 100% placement
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[#4a7c59] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#4a7c59] mb-2 flex items-center gap-2">
                  <Sparkles size={18} />
                  Growing Excellence
                </h3>
                <p className="text-gray-700">
                  Expanding programs and maintaining high standards of education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4a7c59] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-[#d4e8da] mb-8 max-w-2xl mx-auto">
            Be part of an institution committed to excellence and student
            success
          </p>
          <button
            onClick={() => alert("Application Form Opening Soon!")}
            className="bg-white text-[#4a7c59] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}