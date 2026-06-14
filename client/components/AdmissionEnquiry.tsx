import { Phone } from "lucide-react";

export default function AdmissionEnquiry() {
  const numbers = ["9764064871", "7387780562"];

  return (
    <section className="py-12 bg-[#eaf5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Admission Enquiry
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {numbers.map((number, index) => (
            <a
              key={index}
              href={`tel:${number}`}
              className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-[#4a7c59] font-semibold text-gray-800 text-lg"
            >
              <Phone size={22} className="text-[#4a7c59]" />
              {number}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}