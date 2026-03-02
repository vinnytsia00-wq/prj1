import React from "react";

const platforms = [
  {
    title: "Web & Desktop",
    description:
      "Native performance across Chrome, Safari, Windows, and MacOS.",
    features: ["React / Next.js", "Electron Apps", "High FPS Rendering"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Mobile Sovereignty",
    description:
      "High-frame-rate iOS and Android experiences engineered for dominance.",
    features: ["Swift / Kotlin", "React Native", "120fps UI"],
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable AWS / Azure / Google Cloud environments.",
    features: ["Auto Scaling", "CI/CD Pipelines", "Zero Downtime"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    title: "Next‑Gen Hardware",
    description:
      "IoT, AR/VR, and custom hardware integrations.",
    features: ["Edge Computing", "AR Interfaces", "Sensor Networks"],
    image:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f",
  },
];

const Platform = () => {
  return (
    <section className="relative bg-[#070b14] text-white py-32 px-6 md:px-16 overflow-hidden">

      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Hero Block */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
            Where We Deploy
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            LIMITLESS{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ECOSYSTEMS.
            </span>
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed">
            Your users are everywhere. Your technology should be too.
            We architect seamless cross-platform systems that scale
            across every environment.
          </p>
        </div>

        {/* Featured Visual */}
        <div className="mt-20 relative max-w-5xl mx-auto">

          <div className="absolute -inset-4 bg-cyan-400/20 blur-3xl rounded-[50px]" />

          <div
            className="relative overflow-hidden border border-cyan-400/40"
            style={{
              clipPath:
                "polygon(8% 0%, 92% 0%, 100% 20%, 100% 80%, 92% 100%, 8% 100%, 0% 80%, 0% 20%)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Platform ecosystem"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
        </div>

        {/* Platform Grid */}
        <div className="mt-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {platforms.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[28px] overflow-hidden border border-white/10 
              hover:border-cyan-400/50 transition duration-500 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=900&q=80`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-cyan-400">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-gray-400">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-20 transition" />
            </div>
          ))}
        </div>

        {/* Metrics Strip */}
        <div className="mt-32 border-t border-white/10 pt-16 grid md:grid-cols-3 gap-12 text-center">

          <div>
            <h4 className="text-4xl font-bold text-cyan-400">4+</h4>
            <p className="mt-2 text-gray-400">
              Platform ecosystems fully supported.
            </p>
          </div>

          <div>
            <h4 className="text-4xl font-bold text-purple-400">100%</h4>
            <p className="mt-2 text-gray-400">
              Cross-device data synchronization.
            </p>
          </div>

          <div>
            <h4 className="text-4xl font-bold text-orange-400">∞</h4>
            <p className="mt-2 text-gray-400">
              Scalability without infrastructure limits.
            </p>
          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center">
          <h3 className="text-4xl font-bold">
            Deploy Everywhere. Win Everywhere.
          </h3>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto mb-8">
            We engineer systems that operate seamlessly across every
            device, environment, and scale.
          </p>

          <a href="/book-an-appointment" className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition">
            START YOUR DEPLOYMENT
          </a>
        </div>

      </div>
    </section>
  );
};

export default Platform;