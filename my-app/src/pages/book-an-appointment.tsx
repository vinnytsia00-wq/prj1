export default function BookAppointment() {
  return (
    <section className="relative bg-[#050912] text-white overflow-hidden">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.07),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-32">

        {/* Hero */}
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-gray-500">
            Private Engagement
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            SECURE YOUR{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              SPECIALIST.
            </span>
          </h1>

          <p className="mt-10 text-gray-300 text-lg leading-relaxed max-w-2xl">
            We only take on a limited number of high‑impact projects per quarter.
            If your mission requires precision engineering and strategic execution,
            request your private slot below.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-24 grid lg:grid-cols-3 gap-20 items-start">

          {/* FORM */}
          <div className="lg:col-span-2 relative">

            {/* Glow */}
            <div className="absolute -inset-4 bg-cyan-400/10 blur-3xl rounded-[40px]" />

            <form className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-12 space-y-10">

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-3 tracking-wider">
                  Identify Yourself
                </label>
                <input
                  type="text"
                  placeholder="Name / Company"
                  className="w-full bg-[#0b1220] border border-white/10 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none transition"
                />
              </div>

              {/* Project */}
              <div>
                <label className="block text-sm text-gray-400 mb-3 tracking-wider">
                  Target Objective
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your project"
                  className="w-full bg-[#0b1220] border border-white/10 focus:border-purple-400 rounded-2xl px-6 py-4 outline-none transition resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">

                <div>
                  <label className="block text-sm text-gray-400 mb-3 tracking-wider">
                    Operational Scale
                  </label>
                  <select className="w-full bg-[#0b1220] border border-white/10 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none transition">
                    <option>Startup</option>
                    <option>Scale‑Up</option>
                    <option>Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-3 tracking-wider">
                    Timeline
                  </label>
                  <input
                    type="text"
                    placeholder="When do we go live?"
                    className="w-full bg-[#0b1220] border border-white/10 focus:border-purple-400 rounded-2xl px-6 py-4 outline-none transition"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold py-5 rounded-full tracking-widest hover:opacity-90 transition text-sm"
              >
                SUBMIT MISSION BRIEF
              </button>

              <p className="text-center text-xs text-gray-500">
                Applications are reviewed within 48 hours.
              </p>

            </form>
          </div>

          <div className="relative hidden lg:block">

            <div className="absolute -inset-6 bg-purple-500/10 blur-3xl rounded-[40px]" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 space-y-10">

              <div>
                <h3 className="text-xl font-bold text-cyan-400">
                  Limited Intake
                </h3>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  We intentionally limit active engagements to ensure strategic focus and elite execution quality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400">
                  High‑Impact Only
                </h3>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  We partner with founders and organizations building products designed to dominate their niche.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-400">
                  Response Time
                </h3>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  If aligned, you’ll receive a private strategy call within 48 hours.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-40 text-center border-t border-white/10 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Build With Intent.
          </h2>
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
            If you’re ready to engineer something that scales, performs, and outlasts —
            initiate the process.
          </p>
        </div>

      </div>
    </section>
  );
}