import React from "react";

const products = [
  {
    title: "Quantum Core",
    subtitle: "Backend Architecture",
    description:
      "Ultra-secure, high-speed server architecture engineered for zero-latency environments.",
    features: [
      "Microservice infrastructure",
      "Real-time data pipelines",
      "Enterprise-grade security",
    ],
    color: "cyan",
  },
  {
    title: "Synapse UI",
    subtitle: "User Experience System",
    description:
      "Immersive, addictive interfaces engineered to maximize engagement and retention.",
    features: [
      "Motion-driven design",
      "Gamified UX systems",
      "Behavior analytics integration",
    ],
    color: "purple",
  },
  {
    title: "Sentinel AI",
    subtitle: "Machine Intelligence",
    description:
      "Custom machine learning models for predictive analytics and automation.",
    features: [
      "Predictive forecasting",
      "Behavior modeling",
      "AI-driven optimization",
    ],
    color: "orange",
  },
  {
    title: "Nexus Bridge",
    subtitle: "Cross‑Platform Engine",
    description:
      "Cross-platform synchronization keeping your data fluid across all devices.",
    features: [
      "Cloud sync engine",
      "Offline-first architecture",
      "Multi-device consistency",
    ],
    color: "emerald",
  },
];

const colorMap: any = {
  cyan: "border-cyan-400/30 hover:border-cyan-400 text-cyan-400",
  purple: "border-purple-400/30 hover:border-purple-400 text-purple-400",
  orange: "border-orange-400/30 hover:border-orange-400 text-orange-400",
  emerald: "border-emerald-400/30 hover:border-emerald-400 text-emerald-400",
};

const Product = () => {
  return (
    <section className="relative bg-[#070b14] text-white py-32 px-6 md:px-16 overflow-hidden bg-no-repeat bg-right-top" style={{ backgroundImage: "url('/images/bg-product.png')" }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,255,255,0.06),transparent_40%),radial-gradient(circle_at_85%_70%,rgba(168,85,247,0.06),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto " >

        {/* Header */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm text-white">
            Blueprint Gallery
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
            WHAT WE{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              FORGE.
            </span>
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed">
            We don't ship templates. We engineer competitive advantage.
            Every system we design is built for performance, scalability,
            and long-term dominance in your market.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-[28px] backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border transition duration-500 group hover:scale-[1.03] ${colorMap[product.color]}`}
            >
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-current opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition" />

              <h3 className="text-2xl font-bold">
                {product.title}
              </h3>

              <p className="text-xs uppercase tracking-widest mt-2 opacity-60">
                {product.subtitle}
              </p>

              <p className="mt-5 text-gray-300 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Feature List */}
              <ul className="mt-6 space-y-2 text-sm text-gray-400">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative Bottom Line */}
              <div className="mt-8 h-[1px] bg-gradient-to-r from-current/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Performance Strip */}
        <div className="mt-32 grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">

          <div>
            <h4 className="text-4xl font-bold text-cyan-400">99.99%</h4>
            <p className="mt-2 text-gray-400">
              Infrastructure uptime across production environments.
            </p>
          </div>

          <div>
            <h4 className="text-4xl font-bold text-purple-400">3x</h4>
            <p className="mt-2 text-gray-400">
              Average user retention increase after UX optimization.
            </p>
          </div>

          <div>
            <h4 className="text-4xl font-bold text-orange-400">-42%</h4>
            <p className="mt-2 text-gray-400">
              Operational cost reduction through AI automation.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <h3 className="text-4xl font-bold">
            Ready to Build Your Advantage?
          </h3>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto mb-8">
            We architect systems designed to win. If you're building
            something category-defining, let's design the blueprint.
          </p>

          <a href="/book-an-appointment" className="mt-12 px-12 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition">
            INITIATE PROJECT
          </a>
        </div>

      </div>
    </section>
  );
};

export default Product;