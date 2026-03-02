import FeatureCard from "./FeatureCard";
const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex px-6 md:px-16 bg-cover bg-center flex-col justify-around"
    >
      <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  >
    <source src="/bg-main.mp4" type="video/mp4" />
  </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-darkbg "></div>
<div className="flex flex-row pt-28">
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          CUSTOM TECH. ENGINEERED FOR DOMINATION.
        </h1>
        <p className="mt-6 text-lg opacity-80">
          We apply the precision of professional gaming to enterprise-grade technology. IP Quantum builds bespoke engines, not just software.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-5">
          <a href="/book-an-appointment" className="uppercase bg-primary px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            INITIALIZE PARTNERSHIP
          </a>

          <a href="/solutions" className="uppercase border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-black transition">
            EXPLORE ARCHITECTURE
          </a>
        </div>
</div>
      </div>
        <div className="mt-16 flex flex-row flex-wrap gap-6 mx-auto w-[90vw] justify-center">
          <FeatureCard title="Zero Latency Philosophy" description="We build for speed because in tech, as in gaming, milliseconds matter." image="/images/icons/tech.svg"/>
          <FeatureCard title="Bespoke Architecture" description="100% custom-made code. No templates, no technical debt." image="/images/icons/architecture.svg"/>
          <FeatureCard title="Battle-Tested Scaling" description="Systems engineered to handle 1M+ concurrent users without breaking a sweat." image="/images/icons/test.svg"/>
          </div>
    </section>
  );
};

export default Hero;