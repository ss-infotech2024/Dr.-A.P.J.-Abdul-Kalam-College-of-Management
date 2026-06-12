import { BookOpen, Users, Briefcase, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Comprehensive curriculum designed by industry experts and academic leaders",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Seasoned professionals and industry experts committed to your success",
  },
  {
    icon: Briefcase,
    title: "Placement Focus",
    description: "Dedicated placement cell ensuring career opportunities for all graduates",
  },
  {
    icon: Award,
    title: "Modern Facilities",
    description: "State-of-the-art labs, library, and campus amenities",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#4a7c59]/10 flex items-center justify-center group-hover:bg-[#4a7c59] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#4a7c59] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#4a7c59]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
