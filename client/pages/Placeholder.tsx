import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const pageNames: Record<string, string> = {
  "/academics": "Academics",
  "/departments": "Departments",
  "/facilities": "Facilities",
  "/placement": "Placement",
  "/career": "Career Page",
  "/contact": "Contact Us",
};

export default function Placeholder() {
  const location = useLocation();
  const pageName = pageNames[location.pathname] || "Page";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <div className="flex-grow flex items-center justify-center py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-8xl mb-6">📄</div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {pageName}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is coming soon. Tell us more about what you'd like to see
            here, and we'll build it for you!
          </p>
          <div className="bg-blue-50 rounded-lg p-6 text-left">
            <p className="text-gray-700 mb-3">
              <strong>Tip:</strong> To populate this page with content, ask me
              to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Build out the {pageName} section with specific details</li>
              <li>Add courses, facilities, or other relevant information</li>
              <li>Include forms, cards, or other interactive elements</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
