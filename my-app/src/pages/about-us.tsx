import FeatureCard from "../components/FeatureCard";
export default function DNA() {
  return (
    <section className="relative bg-[#070b14] text-white py-32 px-6 md:px-16 overflow-hidden min-h-[95vh] " 
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(0,255,255,0.08),transparent_40%),radial-gradient(circle_at_85%_75%,rgba(168,85,247,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-8xl mx-auto">
<div className="flex flex-col bg-right-top bg-no-repeat p-7 rounded-lg" style={{ backgroundImage: "url('/images/bg-about.png')" }}>
        <div className="flex flex-col lg:flex-row gap-20 items-start justify-around">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-full md:max-w-3xl">

            <p className="uppercase tracking-[0.3em] text-sm text-white mb-6">
              About Us — The DNA
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              BUILT BY MASTERS.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                DRIVEN BY PERFORMANCE.
              </span>
            </h2>

            <p className="mt-10 text-gray-300 text-lg leading-relaxed max-w-2xl">
              IP Quantum was founded by a collective of professional gamers and elite developers. We spent years mastering the most complex, high-stakes digital environments on earth. Today, we bring that same "win-condition" mentality to your business technology.
            </p>

            

          </div>

          {/* RIGHT SIDE VISUAL / IDEA CARD */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
            </div>

        </div>
<div className="mt-16 flex flex-row flex-wrap gap-8 justify-center">

              <FeatureCard
                title="Precision"
                description="We write code like a pro-player executes a frame-perfect move."
                image="/images/icons/precision.svg"
              />

              <FeatureCard
                title="Endurance"
                description="Our systems are engineered for long-term scalability and resilience."
                image="/images/icons/endurance.svg"
              />

              <FeatureCard
                title="Strategy"
                description="We don't build what you request. We build what helps you win."
                image="/images/icons/strategy.svg"
              />

              <FeatureCard
                title="Execution"
                description="Fast iterations. Tactical decisions. Relentless optimization."
                image="/images/icons/execution.svg"
              />

            </div>
            </div>
        {/* Bottom Philosophy Strip */}
        <div className="mt-32 border-t border-white/10 pt-16 grid md:grid-cols-3 gap-12">

          <div>
            <h4 className="text-3xl font-bold text-cyan-400">Competitive Mindset</h4>
            <p className="mt-4 text-gray-400">
              Every system is built with a clear objective: dominate your category.
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-purple-400">Engineered Systems</h4>
            <p className="mt-4 text-gray-400">
              Infrastructure designed for high-load, high-stakes environments.
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-orange-400">Long-Term Scaling</h4>
            <p className="mt-4 text-gray-400">
              Built not just for launch — but for sustained market control.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}