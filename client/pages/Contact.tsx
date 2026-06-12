import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Building2, Calendar, FileText, HelpCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Submitted:", formData);
    alert(
      `Thank you for contacting us!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nWe will get back to you soon.`
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4a7c59] to-[#3a6347] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-[#d4e8da]">
            Get in touch with us for inquiries, admissions, and feedback
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition border-t-4 border-[#4a7c59]">
              <MapPin className="text-[#4a7c59] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#4a7c59] mb-3">Address</h3>
              <p className="text-gray-700 leading-relaxed">
                Tumsar – Hasara, Tah. Tumsar
                <br />
                Dist. Bhandara
                <br />
                Pin Code: 441912
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition border-t-4 border-[#4a7c59]">
              <Mail className="text-[#4a7c59] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#4a7c59] mb-3">Email</h3>
              <a
                href="mailto:dapjkalamcollege@gmail.com"
                className="text-gray-700 hover:text-[#4a7c59] transition break-all"
              >
                dapjkalamcollege@gmail.com
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition border-t-4 border-[#4a7c59]">
              <Phone className="text-[#4a7c59] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#4a7c59] mb-3">Phone</h3>
              <a
                href="tel:+917387780562"
                className="text-gray-700 hover:text-[#4a7c59] transition"
              >
                +91 7387780562
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#4a7c59]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#4a7c59]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#4a7c59]"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none resize-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#4a7c59]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4a7c59] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a6347] transition inline-flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" />
                    <p className="text-green-700 font-semibold">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Side Info */}
            <div className="space-y-8">
              <div className="bg-[#eaf5ef] rounded-lg p-8 border-l-4 border-[#4a7c59]">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={28} className="text-[#4a7c59]" />
                  <h3 className="text-2xl font-bold text-[#4a7c59]">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <Calendar size={20} className="text-[#4a7c59] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Monday - Friday
                      </p>
                      <p className="text-gray-700">9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Calendar size={20} className="text-[#4a7c59] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Saturday</p>
                      <p className="text-gray-700">9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Calendar size={20} className="text-[#4a7c59] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Sunday</p>
                      <p className="text-gray-700">Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#4a7c59]">
                <div className="flex items-center gap-3 mb-6">
                  <FileText size={28} className="text-[#4a7c59]" />
                  <h3 className="text-2xl font-bold text-[#4a7c59]">Quick Links</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#4a7c59] transition font-semibold flex items-center gap-2"
                    >
                      <Building2 size={18} />
                      Academics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#4a7c59] transition font-semibold flex items-center gap-2"
                    >
                      <GraduationCap size={18} />
                      Admissions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#4a7c59] transition font-semibold flex items-center gap-2"
                    >
                      <Briefcase size={18} />
                      Career Opportunities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#4a7c59] transition font-semibold flex items-center gap-2"
                    >
                      <HelpCircle size={18} />
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-[#eaf5ef] rounded-lg p-8 border-l-4 border-[#4a7c59]">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={28} className="text-[#4a7c59]" />
                  <h3 className="text-2xl font-bold text-[#4a7c59]">Admission Inquiries</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  For admission-related queries, please fill the form and our
                  admissions team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => alert("Admission form opening soon!")}
                  className="w-full bg-[#4a7c59] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3a6347] transition"
                >
                  Admission Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-2">
            <MapPin size={28} className="text-[#4a7c59]" />
            Location
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.7584159843567!2d79.23456!3d21.5038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjEuNTAzOCzCsDc5LjIzNDU2!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Import missing icons
import { GraduationCap, Briefcase } from "lucide-react";