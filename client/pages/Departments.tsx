import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Globe, Briefcase } from "lucide-react";

export default function Departments() {
  const features = [
    {
      icon: Briefcase,
      title: "Experiential Learning",
      description:
        "Hands-on projects, internships, and consulting assignments allowing students to apply theoretical knowledge in practical business settings.",
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description:
        "Extensive networking through alumni events, guest lectures, career fairs, and industry conferences with peers, faculty, and professionals.",
    },
    {
      icon: Award,
      title: "Specialized Tracks",
      description:
        "Multiple specializations and concentrations to tailor studies and deepen expertise in specific areas of interest.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "International study tours, exchange programs, and global immersion experiences preparing for success in a globalized economy.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Department of MBA
          </h1>
          <p className="text-xl text-blue-100">
            Excellence in Management Education and Professional Development
          </p>
        </div>
      </section>

      {/* MBA Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-6xl text-center">📚</div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Master of Business Administration
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An MBA, or Master of Business Administration, is a prestigious
                and versatile postgraduate degree that equips individuals with
                advanced skills and knowledge in business management. Typically
                pursued after gaining professional experience, our MBA program
                covers various aspects of business including finance, marketing,
                operations, strategy, leadership, and entrepreneurship.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The curriculum is designed to enhance critical thinking,
                problem-solving, and decision-making abilities required for
                effective management roles in diverse industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Benefits of MBA Degree
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Career Growth
              </h3>
              <p className="text-gray-700">
                Increased career opportunities and higher earning potential in
                diverse industries including finance, consulting, technology,
                healthcare, and manufacturing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Professional Networks
              </h3>
              <p className="text-gray-700">
                Forge meaningful connections with industry professionals, peers,
                and alumni that prove instrumental in future career endeavors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Global Perspective
              </h3>
              <p className="text-gray-700">
                Develop understanding of international business practices and
                cultural contexts, preparing for success in a globalized economy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Leadership Development
              </h3>
              <p className="text-gray-700">
                Highly valued by employers for focus on leadership development
                and strategic thinking in the dynamic field of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Special Features of Our MBA Program
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="text-primary flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Curriculum Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Core Subjects",
                items: [
                  "Business Management",
                  "Financial Management",
                  "Marketing Strategy",
                  "Operations Management",
                ],
              },
              {
                title: "Specialized Tracks",
                items: [
                  "Finance & Banking",
                  "Marketing Management",
                  "Supply Chain Management",
                  "Entrepreneurship",
                ],
              },
              {
                title: "Practical Components",
                items: [
                  "Industry Internships",
                  "Case Study Analysis",
                  "Group Projects",
                  "Research Initiatives",
                ],
              },
            ].map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700">
                      <span className="text-primary font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Career Prospects
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our MBA graduates are well-equipped to pursue careers in diverse
              sectors including:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Corporate Management",
                "Investment Banking",
                "Management Consulting",
                "Entrepreneurship",
                "Supply Chain Management",
                "Digital Marketing",
                "HR Management",
                "Business Analytics",
              ].map((career, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-primary"
                >
                  <span className="text-primary font-bold text-lg">→</span>
                  <span className="text-gray-700 font-semibold">{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Message */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-l-4 border-primary">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Message from Our Faculty
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our faculty comprises visiting lecturers from esteemed institutes
              and seasoned professionals from the corporate world. Their
              expertise offers invaluable insights into corporate culture,
              preparing students for success in the professional sphere.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to facilitating quality education by identifying
              and nurturing each student's potential, aligning it with the
              demands of the industry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our MBA Program</h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform your career with our comprehensive MBA degree
          </p>
          <button
            onClick={() => alert("Application Form Opening Soon!")}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
