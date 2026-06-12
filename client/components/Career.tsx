import { useState } from "react";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Job Data ────────────────────────────────────────────────
const allJobs = [
  {
    id: 1,
    title: "Assistant Professor",
    department: "Master Of Business Administration",
    category: "MBA Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "04",
    description: "Bachelor's Degree in Any Discipline and Master's Degree in Business Administration/PGDM/CA/ICWA/M. Com...",
  },
  {
    id: 2,
    title: "Assistant Professor-Physics",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 3,
    title: "Assistant Professor-Botany",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 4,
    title: "Assistant Professor-Chemistry",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 5,
    title: "Assistant Professor-Maths",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 6,
    title: "Assistant Professor-Zoology",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 7,
    title: "Assistant Professor-History",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 8,
    title: "Assistant Professor-Sociology",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 9,
    title: "Assistant Professor-Marathi",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 10,
    title: "Assistant Professor-English",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 11,
    title: "Assistant Professor-Economics",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
  {
    id: 12,
    title: "Assistant Professor-Commerce",
    department: "Art,Commerce & Science",
    category: "Art,Commerce & Science Recruitment",
    location: "Tumsar-Hasara",
    type: "Full-time",
    payScale: "Pay Scale - As per AICTE and State Govt. rules",
    vacancy: "01",
    description: "A Master's degree with 55% marks (or an equivalent grade in a point-scale wherever the grading system is followed) in a...",
  },
];

const filters = [
  { label: "All Positions", value: "all" },
  { label: "MBA Recruitment", value: "MBA Recruitment" },
  { label: "Art,Commerce & Science Recruitment", value: "Art,Commerce & Science Recruitment" },
];

// ─── Main Career Page ────────────────────────────────────────────────────────
export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredJobs = activeFilter === "all"
    ? allJobs
    : allJobs.filter((job) => job.category === activeFilter);

  const handleApply = () => {
    // Scroll to top to show the navigation bar
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4a7c59] text-center mb-8">
          Career Opportunities
        </h1>

        {/* ── Filter Buttons ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all border",
                activeFilter === filter.value
                  ? "bg-[#4a7c59] text-white border-[#4a7c59]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#4a7c59] hover:text-[#4a7c59]"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* ── Job Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Department Badge */}
              <div className="flex justify-end px-4 pt-3">
                <span className="bg-[#4a7c59] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                  {job.department}
                </span>
              </div>

              <div className="px-5 pb-5 pt-2">
                {/* Job Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{job.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {job.description}
                </p>

                {/* Job Meta */}
                <div className="flex items-center gap-3 mb-4 text-xs">
                  <span className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    <Clock className="w-3 h-3" />
                    {job.type}
                  </span>
                  <span className="text-[#4a7c59] font-semibold">
                    {job.payScale}
                  </span>
                  <span className="text-gray-500">
                    Vacancy :{job.vacancy}
                  </span>
                </div>

                {/* Apply Button — scrolls to top to show navbar */}
                <button
                  onClick={handleApply}
                  className="w-full bg-[#4a7c59] hover:bg-[#3d6649] text-white py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-sm"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No positions available in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}