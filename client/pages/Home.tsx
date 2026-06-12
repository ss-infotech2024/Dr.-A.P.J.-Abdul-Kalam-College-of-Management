import { Link } from "react-router-dom";
import { ArrowRight, Book, Users, Trophy, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";
import AcademicsPage from "@/components/Academics";
import CareerPage from "@/components/Career";
import WhyChooseUs from "@/components/WhyChooseUs";

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
      <AboutPage/>
      <AcademicsPage/>
      <CareerPage/>
      <WhyChooseUs/>


    

      <Footer />
    </div>
  );
}
