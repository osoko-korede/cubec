import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative pt-70 pb-30 md:min-h-screen flex flex-col items-center justify-center px-6 md:pt-24 md:pb-12 overflow-hidden">
      {/* Wireframe Hand Left */}
      <div className="absolute left-0 bottom-0 opacity-60">
        <div className="relative w-40 h-40 md:w-70 md:h-70 lg:w-90 lg:h-90">
          <Image
            src="hand-left.svg"
            alt="3D metallic cube"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Wireframe Hand Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2  opacity-60 transform ">
        <div className="relative w-40 h-40 md:w-70 md:h-70 lg:w-90 lg:h-90">
          <Image
            src="hand-right.svg"
            alt="3D metallic cube"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-7xl tracking-tighter text-white text-center leading-tight lg:max-w-3xl text-balance z-30">
        Building creative brands
        <br />
        for the trailblazers
      </h1>

      {/* 3D Cube */}
      <div className="relative w-50 h-50 md:w-80 md:h-80 lg:w-100 lg:h-100">
        <Image
          src="cube-1.png"
          alt="3D metallic cube"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
