import { Link } from "react-router-dom";
import { Shield, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ═══════════════════════════════════════════════════════════════
            PAGE TITLE
        ═══════════════════════════════════════════════════════════════ */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4a7c59] text-center mb-8">
          Welcome To Dr. S.C. Gulhane Prema College of Management And Technology
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* ═══════════════════════════════════════════════════════════════
              LEFT CONTENT (2 columns wide)
          ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Main Welcome Paragraph */}
            <div className="text-justify text-gray-700 text-sm leading-relaxed space-y-4">
              <p>
                Welcome to Dr. A.P.J. Abdul Kalam College of Management, Tumsar Taj Multipurpose Development Organization, 
                a pioneering institution in the field of education, has consistently worked towards empowering communities through 
                knowledge and skill development. Over the decades, the organization has earned immense recognition for its commitment 
                to academic excellence, value-based education, and social development initiatives. From humble beginnings, it has 
                grown into a reputed educational body that continues to shape the future of thousands of students. Driven by a vision 
                to make quality education accessible to all, Taj Multipurpose Development Organization has established a strong network 
                of schools and colleges that focus on holistic learning. Each institution under its umbrella is guided by experienced 
                educators, visionary leaders, and a team of dedicated professionals who believe in nurturing young minds to become 
                responsible, self-reliant, and socially conscious citizens. Dr. A.P.J. Abdul Kalam College of Management, Tumsar, stands 
                as a proud extension of this vision. Named after one of India's most respected scientists and former President, Dr. 
                A.P.J. Abdul Kalam, the college embodies his ideals of knowledge, innovation, and integrity. The institution is 
                committed to offering a dynamic learning environment for students pursuing commerce, science, management, and related fields.
              </p>
              <p>
                Located in the educationally growing region of Tumsar, the college provides students with excellent infrastructure, 
                well-equipped classrooms, modern teaching facilities, and a peaceful environment ideal for focused learning. Special 
                emphasis is placed on developing both academic knowledge and practical skills through workshops, seminars, research 
                initiatives, and industry exposure. The college's leadership, under the guidance of Taj Multipurpose Development 
                Organization, strives to create opportunities that go beyond traditional education. The aim is to prepare students 
                for future challenges by instilling leadership qualities, critical thinking abilities, and professional ethics. With 
                a clear mission to become one of the most reputed colleges in the region, Dr. A.P.J. Abdul Kalam College of Management 
                envisions contributing significantly to the educational and socio-economic growth of Tumsar and nearby areas. By blending 
                modern education techniques with strong values, the college seeks to shape future leaders who will drive positive change in society.
              </p>
            </div>

            {/* About College Section */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-[#4a7c59] mb-4">About College</h2>
              <div className="text-justify text-gray-700 text-sm leading-relaxed">
                <p>
                  Welcome to Dr. A.P.J. Abdul Kalam College of Management, where you can access exceptional management education 
                  conveniently located in Tumsar! At our institution, we are committed to nurturing the future leaders of tomorrow. 
                  Our mission is to foster a dynamic learning environment that cultivates innovation, leadership, and professional 
                  advancement. Situated in the vibrant city of Nagpur, we take pride in offering an educational journey that not only 
                  transforms our students but also equips them with the requisite skills, knowledge, and mindset to thrive in today's 
                  competitive business landscape. Here at Dr. A.P.J. Abdul Kalam College of Management, academic excellence takes 
                  precedence, and our faculty comprises seasoned professionals and industry experts. Our curriculum integrates 
                  theoretical learning with practical application, ensuring that graduates are adept at tackling real-world management 
                  challenges with confidence. Recognizing the ever-evolving nature of the business world, we emphasize adaptability, 
                  innovation, and critical thinking in our teaching approach. We are dedicated to providing students with hands-on 
                  learning experiences, fostering collaborations with businesses, and delivering personalized guidance. Our ultimate 
                  objective is to empower students to unleash their creativity, make informed decisions, and lead with integrity.
                </p>
              </div>
            </div>

            {/* Say No to Ragging Section */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-[#4a7c59] mb-4 flex items-center justify-center gap-2">
                Say No to Ragging
                <Shield className="w-6 h-6 text-red-600" />
              </h2>
              <div className="text-justify text-gray-700 text-sm leading-relaxed">
                <p>
                  Ragging is a violation of human rights. Ragging is strictly prohibited on campus and off campus. Join hands in 
                  making the college campus free from ragging. "Stop ragging. Stop this. Thousands Say No to Ragging."
                </p>
              </div>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════════
              RIGHT SIDEBAR (1 column wide)
          ═══════════════════════════════════════════════════════════════ */}
          <div className="space-y-4">
            
           
            

            {/* Mission Section */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-[#4a7c59] text-center mb-4 flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                Mission
              </h2>
              <div className="text-justify text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  "Inculcating Skills: To inculcate managerial and entrepreneurial skills with a zeal to attain excellence in business administration
                </p>
                <p>
                  Motivating to gain professional competence: To motivate students gain professional competence through constant knowledge update, empathetic leadership qualities, and fostering strategic relationships with the industry and practitioners
                </p>
                <p>
                  Cultivating Values: To cultivate personal integrity, ethical consciousness, care for environment and society among future managers"
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-[#4a7c59] text-center mb-4 flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                Vision
              </h2>
              <div className="text-justify text-gray-700 text-sm leading-relaxed">
                <p>
                  "In the era of competition, Dr. A.P.J. Abdul Kalam College of Management nurtures and polishes the personality of 
                  students. Our vision is to produce competent business professionals and entrepreneurs with the necessary managerial 
                  and research skills possessing decision-making ability. Our College strives to impart management knowledge to 
                  prepare students for becoming global business leaders, entrepreneurs to stand up to the global competition. We aim to 
                  achieve high standards through commitment and exceptional efforts at a global level and to become a centre of 
                  excellence for conveying quality education."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
