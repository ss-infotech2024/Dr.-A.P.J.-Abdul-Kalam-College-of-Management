import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Download, AlertCircle, Calendar, BookOpen, Users, Shield, CheckCircle, Clock, Phone, Mail, MapPin, FileCheck, GraduationCap, Award, TrendingUp } from "lucide-react";

export default function Academics() {
  const [expandedRule, setExpandedRule] = useState<number | null>(null);

  const admissionRules = [
    "Reservation of seats for SC/ST/VJ/NT and OBC students will be allotted as per rules.",
    "A student seeking admission to college shall present in person with an application in the prescribed form duly filled and signed by parents/guardians.",
    "Once the student is admitted to the college shall be liable to pay full fees.",
    "Admission is provisional until all the necessary original documents are submitted to the college.",
    "Documents to be submitted at the time of admission: Transfer Certificate, Original Mark-sheets, Prescribed Fees (DD/PO), Certificate if belonging to other University/Board, Validity certificate and other necessary documents for reserve candidature, Recent passport size photographs.",
    "Original documents will be returned only after university eligibility process so candidate is advised to keep sufficient attested Xerox copies.",
  ];

  const regulations = [
    "Minimum 75% attendance is compulsory. Students without minimum 75% attendance will not be allowed to appear for examination.",
    "Students unable to attend classes/practical should submit a written application to the Principal for permission.",
    "Students continuously absent without permission may be removed without prior notice.",
    "Students shall not be allowed to change programme and subjects once selected.",
    "Fees will not be refunded in case of cancellation of admission.",
    "Use of mobile phones within college premises is strictly prohibited.",
    "Late comers will not be allowed once gates are closed.",
    "Students will not be allowed to leave premises once they enter till classes are over.",
    "Chewing betel nuts, tobacco, or gums is not allowed.",
    "Students damaging college property will be penalized.",
    "Ragging is strictly prohibited.",
    "Students responsible for safety/security of own belongings.",
    "Carrying valid college I-Card is compulsory.",
    "Fees for entire course must be paid at admission.",
    "No installments allowed for fees.",
    "Fees structure as per R.T.M. Nagpur University will be followed.",
    "Strict discipline must be followed on campus.",
    "Report any problems immediately to Director/Principal.",
    "Students with motor vehicles must have valid license and helmet.",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4a7c59] to-[#3a6347] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
          <p className="text-xl text-[#d4e8da]">
            Explore our comprehensive MBA program with world-class education and
            career opportunities
          </p>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Courses Offered
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#4a7c59] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">
                    Sr. No.
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Course Name
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Eligibility
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-[#eaf5ef] transition">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4 font-semibold text-[#4a7c59]">MBA</td>
                  <td className="px-6 py-4">2 Years</td>
                  <td className="px-6 py-4">
                    Bachelor's degree with minimum 50% aggregate
                  </td>
                  <td className="px-6 py-4 font-bold text-lg">120</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Fees Structure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["2024-2025", "2025-2026", "2026-2027"].map((year) => (
              <div
                key={year}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition text-center border-t-4 border-[#4a7c59]"
              >
                <div className="flex justify-center mb-4">
                  <Calendar size={48} className="text-[#4a7c59]" />
                </div>
                <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                  Academic Year {year}
                </h3>
                <p className="text-gray-600 mb-6">
                  View detailed fees structure for the academic year
                </p>
                <button
                  onClick={() =>
                    alert(
                      `Downloading fees structure for ${year}\nPDF simulation - Download initiated`
                    )
                  }
                  className="w-full bg-[#4a7c59] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a6347] transition inline-flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  View PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Rules */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Admission Rules
          </h2>
          <div className="space-y-4">
            {admissionRules.map((rule, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <button
                  onClick={() =>
                    setExpandedRule(expandedRule === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-start gap-4 hover:bg-[#eaf5ef] transition"
                >
                  <span className="bg-[#4a7c59] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-left text-gray-700 font-medium">
                    {rule}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Regulations */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            College Regulations & Discipline
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 flex items-start gap-3">
            <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={24} />
            <p className="text-red-800 font-semibold">
              All students are required to follow these regulations strictly.
              Non-compliance may result in disciplinary action.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {regulations.map((regulation, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#4a7c59] hover:shadow-lg transition"
              >
                <div className="flex gap-4">
                  <span className="bg-[#4a7c59] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{regulation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4a7c59] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-xl text-[#d4e8da] mb-8">
            Start your journey towards a successful career in management
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