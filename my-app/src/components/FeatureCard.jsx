const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="relative group w-full max-w-[260px]">

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl" />

      {/* Card Shape */}
      <div
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 
        group-hover:border-cyan-400/60 transition duration-500
        flex flex-col items-center text-center px-6 py-10"
        style={{
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        }}
      >
        {/* Icon */}
        <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
          <img
            src={image}
            alt={title}
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
        )}

        {/* Bottom Accent Line */}
        <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 group-hover:w-20 transition-all duration-500" />
      </div>
    </div>
  );
};

export default FeatureCard;