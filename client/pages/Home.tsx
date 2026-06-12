import { Link } from "react-router-dom";
import { ArrowRight, Book, Users, Trophy, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

     {/* Hero Section */}
<section
  className="relative text-white py-20 md:py-32 bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/collegeimg.jpg')",
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Dr. A.P.J. Abdul Kalam College of Management
        </h1>

        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          Welcome To Dr. A.P.J. Abdul Kalam College of Management,
          Tumsar. Taj Multipurpose Development Organization, a pioneering
          institution in the field of education, has consistently worked
          towards empowering communities through knowledge and skill
          development.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            to="/about"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center gap-2"
          >
            Learn More <ArrowRight size={20} />
          </Link>

          <button
            onClick={() => alert("Application Form Opening Soon!")}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Say No to Ragging */}
      <section className="bg-red-50 border-l-4 border-red-500 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Say No to Ragging
          </h2>
          <p className="text-red-800 text-lg">
            Ragging is a violation of human rights. Ragging is strictly
            prohibited on campus and off campus. Join hands in making the
            college campus free from ragging.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Quality Education
              </h3>
              <p className="text-gray-700">
                Comprehensive curriculum designed by industry experts and
                academic leaders
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Expert Faculty
              </h3>
              <p className="text-gray-700">
                Seasoned professionals and industry experts committed to your
                success
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Placement Focus
              </h3>
              <p className="text-gray-700">
                Dedicated placement cell ensuring career opportunities for all
                graduates
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Modern Facilities
              </h3>
              <p className="text-gray-700">
                State-of-the-art labs, library, and campus amenities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">120+</div>
              <p className="text-blue-100 text-lg">Annual Intake (MBA)</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-blue-100 text-lg">Placement Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100 text-lg">Faculty Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2+</div>
              <p className="text-blue-100 text-lg">Years Duration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">📖</div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Master of Business Administration (MBA)
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Our flagship MBA program is designed to develop competent
                business professionals and entrepreneurs with necessary
                managerial and research skills.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>2-Year Full-Time Program</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Annual Intake: 120 Students</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Specializations in multiple domains</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Industry-aligned curriculum</span>
                </li>
              </ul>
              <Link
                to="/academics"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Explore Academics
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-12 text-center">
              <div className="text-8xl mb-4">🎓</div>
              <h4 className="text-2xl font-bold text-primary mb-4">
                Eligibility Criteria
              </h4>
              <p className="text-gray-700 text-lg mb-4">
                Bachelor's degree with minimum 50% aggregate
              </p>
              <button
                onClick={() => alert("Admission details: Check main website")}
                className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards a rewarding career in management and
            leadership.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => alert("Application Form Opening Soon!")}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Apply Now
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
