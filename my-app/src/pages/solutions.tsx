export default function Solutions() {
  const steps = [
    {
      number: "01",
      title: "The Briefing",
      description:
        "We deep-dive into your industry’s Meta — competitors, leverage points, weaknesses, and strategic opportunity.",
    },
    {
      number: "02",
      title: "The Architecture",
      description:
        "We design a zero-latency infrastructure engineered for scale, resilience, and dominance.",
    },
    {
      number: "03",
      title: "The Sprint",
      description:
        "Rapid, elite development cycles with weekly playtests (demos), validation, and refinement.",
    },
    {
      number: "04",
      title: "The Deployment",
      description:
        "We launch, optimize, iterate — and position you to outperform your market.",
    },
  ];

  return (
    <section className="relative bg-[#060a12] text-white overflow-hidden">

      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.07),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.07),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-32">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-gray-500">
            Custom-Made Solutions
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            YOUR CHALLENGE.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              OUR ENGINE.
            </span>
          </h1>

          <p className="mt-10 text-gray-300 text-lg leading-relaxed">
            We don’t believe in “one size fits all.” Every system we build is
            architected specifically for your objectives, performance targets,
            and competitive landscape.
          </p>
        </div>

        {/* PHILOSOPHY BLOCK */}
        <div className="mt-28 grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Built for Strategic Advantage
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Our background in high-stakes digital environments shaped how we
              engineer systems: performance-first, strategically positioned,
              relentlessly optimized.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Every decision is calculated. Every architecture is intentional.
              Every deployment is executed with precision.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-cyan-400/20 blur-3xl rounded-[40px]" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px]">
              <p className="text-[20px] md:text-[30px] font-semibold leading-relaxed">
                “We don’t build software.
                <br />
                We build leverage.”
              </p>
            </div>
          </div>

        </div>

        {/* PROCESS TIMELINE */}
        <div className="mt-36">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Forge Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition duration-500"
              >
                <div className="text-cyan-400 text-sm tracking-widest">
                  {step.number}
                </div>

                <h3 className="mt-4 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-20 transition" />
              </div>
            ))}

          </div>

        </div>

        {/* PERFORMANCE STRIP */}
        <div className="mt-36 border-t border-white/10 pt-20 grid md:grid-cols-3 gap-16 text-center">

          <div>
            <h4 className="text-5xl font-bold text-cyan-400">100%</h4>
            <p className="mt-3 text-gray-400">
              Custom-engineered solutions.
            </p>
          </div>

          <div>
            <h4 className="text-5xl font-bold text-purple-400">0</h4>
            <p className="mt-3 text-gray-400">
              Template-based shortcuts.
            </p>
          </div>

          <div>
            <h4 className="text-5xl font-bold text-orange-400">∞</h4>
            <p className="mt-3 text-gray-400">
              Scalability potential.
            </p>
          </div>

        </div>

        {/* FINAL CTA */}
        <div className="mt-36 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Enter The Forge?
          </h2>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto mb-8">
            If you're building something that needs to outperform, outscale,
            and outlast your competition — let’s begin.
          </p>

          <a href="/book-an-appointment" className="mt-12 px-12 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition">
            INITIATE BRIEFING
          </a>
        </div>

      </div>
    </section>
  );
}