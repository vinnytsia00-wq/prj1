const IdeaCard = () => {
  return (
    <div
      className="
        relative
        w-[420px]
        max-w-full
        p-10
        text-white
        bg-gradient-to-br
        from-indigo-600/30
  via-purple-600/30
  to-orange-500/30
        shadow-2xl
        backdrop-blur-xl
        overflow-hidden
        rounded-[40px_120px_60px_40px]
        bg-opacity-30
        custom:block
        mt-2
      "
    >
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-20" />

      <h2 className="text-xl md:text-xl font-bold leading-snug">
        IP Quantum was founded by a collective of professional gamers and elite developers.
            We spent years mastering the most complex, high-stakes digital environments on earth.
            Today, we bring that same <span className="text-cyan-400">"win-condition"</span> mentality to your business technology.
      </h2>

     
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a href="/solutions" className="bg-purple-300 text-black font-semibold px-6 py-2 rounded-full text-center">
          Solutions
        </a>

        <a href="/book-an-appointment" className="border border-white/60 px-6 py-2 rounded-full hover:bg-white/10 transition text-center">
          Make Appointment
        </a>
      </div>
    </div>
  );
};

export default IdeaCard;