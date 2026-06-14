export default function PlacementPartners() {
  const partners = [
    "Axis Bank",
    "HDFC Bank",
    "ICICI Bank",
    "ESAF Bank",
    "SBI Life Insurance",
    "Manappuram Gold",
    "Finable Insurance",
    "Micro Finance",
    "SISCO",
    "MOIL",
    "Competitive Zone",
  ];

  // Duplicate the list for seamless infinite scroll
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Placement Partners
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Leading organizations that trust our talent
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-scroll-left gap-6">
          {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[220px] h-20 bg-white rounded-lg shadow-md border-t-4 border-[#4a7c59] px-6"
            >
              <span className="font-semibold text-gray-800 text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
}