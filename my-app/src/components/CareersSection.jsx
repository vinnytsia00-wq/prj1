import React from "react";

const cards = [
  {
    title: "QUANTUM ANALYTICS",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "AI & MACHINE SOLUTIONS",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    title: "ENTERPRISE INTERFACES",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const CareersSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              START YOUR STRATEGIC ENGAGEMENT.
            </h2>

            <p className="mt-6 text-gray-300 max-w-md">
              We partner with ambitious teams ready to build category-defining technology. Share your vision, timeline, and operational scale - and secure your place in our development cycle.
            </p>

            <a href="/book-an-appointment" className="mt-8 px-8 py-3 rounded-full font-semibold bg-primary text-black text-center">
              Make an appointment
            </a>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group shadow-xl"
              >
                <img
                  src={`${card.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={card.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <h3 className="absolute bottom-4 left-4 text-sm font-bold tracking-wide">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareersSection;