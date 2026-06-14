import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Briefcase, Trophy, Mic, FileText, Users2, Code, Handshake, TrendingUp, Building2, Calendar, Target, Rocket, Brain, Award, LucideIcon } from "lucide-react";
import PlacementPartners from "@/components/PlacementPartners";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function Placement() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Pre-Placement Talks",
      description:
        "Companies visit campus to introduce students to their organization, available job roles, requirements, and the selection process.",
      icon: Mic,
    },
    {
      number: 2,
      title: "Aptitude Assessments",
      description:
        "Firms conduct tests to evaluate logical reasoning, problem-solving, numerical proficiency, and communication skills through multiple-choice questions.",
      icon: FileText,
    },
    {
      number: 3,
      title: "Group Discussions",
      description:
        "Students are grouped for discussions to assess communication skills, confidence, and leadership traits. Topics are provided for expression of opinions.",
      icon: Users2,
    },
    {
      number: 4,
      title: "Technical Interviews",
      description:
        "Students successful in group discussions proceed to technical interviews evaluating proficiency in their field. Questions focus on subject expertise and problem-solving.",
      icon: Code,
    },
    {
      number: 5,
      title: "HR Interviews",
      description:
        "Final stage assessing personality, behavior, and compatibility with company culture. Queries focus on interests, strengths, weaknesses, and career objectives.",
      icon: Handshake,
    },
  ];

  const importance = [
    {
      icon: Briefcase,
      title: "Early Employment Opportunities",
      description:
        "Acts as a bridge between students and employers, alleviating job hunting stress by facilitating early job acquisition before graduation.",
    },
    {
      icon: Users,
      title: "Industry Exposure",
      description:
        "Students gain invaluable exposure to various industries, interact with professionals, stay updated on trends, and understand market demands.",
    },
    {
      icon: CheckCircle,
      title: "Skill Augmentation",
      description:
        "Drives students to enhance skills aligned with industry requirements, fostering professional development and competitive advantage.",
    },
    {
      icon: Trophy,
      title: "Networking Opportunities",
      description:
        "Fosters creation of professional networks, enabling connections with industry experts and peers crucial for future career endeavors.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4a7c59] to-[#3a6347] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Campus Placement
          </h1>
          <p className="text-xl text-[#d4e8da]">
            Bridging the gap between education and career success
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-l-4 border-[#4a7c59]">
            <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
              Importance of Campus Placement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Campus placement stands as a pivotal element in a student's
              academic journey, offering the chance to secure employment prior
              to graduation. It presents a multitude of benefits and serves as a
              crucial bridge connecting students with potential employers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond securing employment, campus placement provides early
              exposure to professional environments, helps students develop
              industry-relevant skills, and builds confidence for future career
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Importance Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Key Benefits of Campus Placement
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {importance.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 border-t-4 border-[#4a7c59]"
                >
                  <Icon className="text-[#4a7c59] mb-4" size={40} />
                  <h3 className="text-xl font-bold text-[#4a7c59] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Campus Placement Process
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#4a7c59] text-white rounded-full flex items-center justify-center mb-4">
                      <StepIcon size={32} />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-1 h-24 bg-[#4a7c59]"></div>
                    )}
                  </div>
                  <div className="pb-6 flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-[#4a7c59] mb-2">
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-[#eaf5ef] rounded-lg p-8 border-l-4 border-[#4a7c59]">
            <p className="text-gray-700 text-lg">
              <span className="font-bold text-[#4a7c59]">Note:</span> Upon completion of all
              stages, successful candidates receive job offers. It's important
              to note that the process may vary among companies, with some
              opting out of certain stages based on their requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Placement Record
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition border-t-4 border-[#4a7c59]">
              <div className="text-5xl font-bold text-[#4a7c59] mb-3">100%</div>
              <p className="text-gray-700 font-semibold">Placement Rate</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition border-t-4 border-[#4a7c59]">
              <div className="text-5xl font-bold text-[#4a7c59] mb-3">50+</div>
              <p className="text-gray-700 font-semibold">Recruiting Companies</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition border-t-4 border-[#4a7c59]">
              <div className="text-5xl font-bold text-[#4a7c59] mb-3">120+</div>
              <p className="text-gray-700 font-semibold">Annual Placements</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition border-t-4 border-[#4a7c59]">
              <div className="text-4xl font-bold text-[#4a7c59] mb-3">12-15K</div>
              <p className="text-gray-700 font-semibold">Average Package (₹/month)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#eaf5ef] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Eligibility Criteria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#4a7c59]">
              <div className="flex items-center gap-3 mb-6">
                <Brain size={32} className="text-[#4a7c59]" />
                <h3 className="text-2xl font-bold text-[#4a7c59]">Academic Eligibility</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59] flex-shrink-0" size={24} />
                  <span className="text-gray-700">Regular attendance in classes and labs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59] flex-shrink-0" size={24} />
                  <span className="text-gray-700">Minimum 75% attendance requirement met</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59] flex-shrink-0" size={24} />
                  <span className="text-gray-700">No disciplinary issues on record</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59] flex-shrink-0" size={24} />
                  <span className="text-gray-700">Valid college I-Card and all documents</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#4a7c59]">
              <div className="flex items-center gap-3 mb-6">
                <Rocket size={32} className="text-[#4a7c59]" />
                <h3 className="text-2xl font-bold text-[#4a7c59]">Professional Readiness</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59] flex-shrink-0" size={24} />
                  <span className="text-gray-700">Enhanced communication skills</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59] flex-shrink-0" size={24} />
                  <span className="text-gray-700">Professional attitude and etiquette</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59] flex-shrink-0" size={24} />
                  <span className="text-gray-700">Updated resume and portfolio</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-[#4a7c59] flex-shrink-0" size={24} />
                  <span className="text-gray-700">Technical knowledge in field</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Tips for Placement Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Prepare Thoroughly",
                icon: Target,
                points: [
                  "Practice aptitude tests",
                  "Review technical concepts",
                  "Prepare for group discussions",
                  "Practice mock interviews",
                ],
              },
              {
                title: "Build Confidence",
                icon: Brain,
                points: [
                  "Attend coaching sessions",
                  "Participate in workshops",
                  "Enhance communication",
                  "Develop leadership skills",
                ],
              },
              {
                title: "Professional Approach",
                icon: Award,
                points: [
                  "Maintain professional appearance",
                  "Create strong resume",
                  "Research companies",
                  "Follow up professionally",
                ],
              },
            ].map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#4a7c59] hover:shadow-lg transition"
                >
                  <div className="flex justify-center mb-4">
                    <CategoryIcon size={48} className="text-[#4a7c59]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4a7c59] mb-6 text-center">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700 items-center">
                        <CheckCircle size={16} className="text-[#4a7c59] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
<PlacementPartners/>
      {/* CTA Section */}
      <section className="bg-[#4a7c59] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Campus Placement?</h2>
          <p className="text-xl text-[#d4e8da] mb-8">
            Start preparing now to secure your dream career
          </p>
          <button
            onClick={() => alert("Placement registration form coming soon!")}
            className="bg-white text-[#4a7c59] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Register for Placement
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}