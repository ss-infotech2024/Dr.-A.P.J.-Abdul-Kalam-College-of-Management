import { useRef } from "react";
import { FileText, CreditCard, GraduationCap, Download } from "lucide-react";

export default function AcademicsPage() {
  
  const paymentRef = useRef<HTMLDivElement>(null);
  const mbaRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const topCards = [
    {
      label: "Download Brochure",
      icon: <FileText className="w-10 h-10 text-[#4a7c59]" />,
      
    },
    {
      label: "Online Payment",
      icon: <CreditCard className="w-10 h-10 text-orange-500" />,
      
    },
    {
      label: "MBA",
      icon: <GraduationCap className="w-10 h-10 text-[#4a7c59]" />,
     
    },
  ];

  const feeCards = [
    {
      year: "2024 - 2025",
      desc: "Academic Year 2024 - 2025 Fees Details",
      pdf: "/ADMISSION FEE 2024-2025.pdf",
    },
    {
      year: "2025 - 2026",
      desc: "Academic Year 2025 - 2026 Fees Details",
      pdf: "/ADMISSION FEE 2025-2026.pdf",
    },
    {
      year: "2026 - 2027",
      desc: "Academic Year 2026 - 2027 Fees Details",
      pdf: "/ADMISSION FEE NOTICE 2026-27.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* ═══════════════════════════════════════════════════════════════
            TOP THREE CARDS — Click to auto-scroll
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {topCards.map((card) => (
            <button
              key={card.label}
              
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center gap-3 group cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition">
                {card.icon}
              </div>
              <span className="text-lg font-semibold text-[#4a7c59] group-hover:text-[#3d6649] transition">
                {card.label}
              </span>
            </button>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            FEES SECTION — Year-Wise College Fees Structure
        ═══════════════════════════════════════════════════════════════ */}
        <div  className="scroll-mt-24">
          <div className="flex items-center justify-center gap-2 mb-8">
            <FileText className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl font-bold text-[#2c5282]">
              Year-Wise College Fees Structure
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {feeCards.map((fee) => (
              <div
                key={fee.year}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {fee.year}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {fee.desc}
                </p>
                <a
                  href={fee.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2c5282] hover:bg-[#1e3a5f] text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  View PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
