import { FileText, Download } from "lucide-react";

export default function MBASyllabus() {
  const semesters = [
    {
      semester: "Semester 1",
      title: "Foundations of Management",
      duration: "6 Months",
      credits: "24 Credits",
      file: "/first.pdf",
    },
    {
      semester: "Semester 2",
      title: "Functional Management",
      duration: "6 Months",
      credits: "24 Credits",
      file: "/second.pdf",
    },
    {
      semester: "Semester 3",
      title: "Advanced Specialization & Strategy",
      duration: "6 Months",
      credits: "24 Credits",
      file: "/third.pdf",
    },
    {
      semester: "Semester 4",
      title: "Capstone & Industry Integration",
      duration: "6 Months",
      credits: "24 Credits",
      file: "/fourth.pdf",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          MBA Syllabus
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Download the detailed syllabus for each semester
        </p>

        <div className="space-y-6">
          {semesters.map((sem, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-[#4a7c59]"
            >
              <div>
                <p className="text-sm font-semibold text-[#4a7c59] mb-1">
                  {sem.semester}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {sem.title}
                </h3>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{sem.duration}</span>
                  <span>{sem.credits}</span>
                </div>
              </div>

              <a
                href={sem.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#eaf5ef] hover:bg-[#d4e8da] text-[#4a7c59] px-5 py-3 rounded-lg font-semibold transition flex-shrink-0"
              >
                <FileText size={20} className="text-[#4a7c59]" />
                <span>View PDF</span>
                <Download size={18} className="text-[#4a7c59]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}