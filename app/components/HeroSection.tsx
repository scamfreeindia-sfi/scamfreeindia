export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      
      {/* LEFT SIDE IMAGE */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/image.png')" }}
      />

      {/* LEFT DARK OVERLAY */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-black/70" />

      {/* RIGHT SIDE MATCHING COLOR (IMPORTANT 🔥) */}
      <div className="absolute inset-y-0 right-0 w-1/2 
        bg-gradient-to-br 
        from-[#0a0a0a] 
        via-[#1a0000] 
        to-[#2b0000]" 
      />

      {/* BLEND EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center px-6 py-16 lg:grid-cols-2">
        
        <div>
          <h1 className="text-6xl font-bold text-white">
            Lost Money in Online Scam?
          </h1>
        </div>

        <div className="bg-[#0b0f1a]/80 p-8 rounded-2xl">
          Form Here
        </div>

      </div>
    </section>
  );
}