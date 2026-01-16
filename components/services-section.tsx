import Image from "next/image";

const services = [
  {
    title: "Digital presence consultancy",
    description:
      "Website audit and analysis/ Platform recommendations/ Brand consistency reviews/ Ongoing creative direction",
  },
  {
    title: "Research & brand strategy",
    description:
      "Website audit and analysis/ Platform recommendations/ Brand consistency reviews/ Ongoing creative direction",
  },
  {
    title: "Creative direction & design",
    description:
      "Website audit and analysis/ Platform recommendations/ Brand consistency reviews/ Ongoing creative direction",
  },
  {
    title: "Creative leadership",
    description:
      "Website audit and analysis/ Platform recommendations/ Brand consistency reviews/ Ongoing creative direction",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="">
        <div className="flex justify-end lg:pl-[350px] xl:pl-[600px] px-6 -mt-40">
          {/* Wireframe Hand */}
          <div className="absolute lg:h-96 block lg:-left-96 lg:-translate-y-1/2 lg:transform z-10">
            <div className="relative w-150 h-150 lg:w-200 lg:h-200">
              <Image
                src="cube-1.png"
                alt="3D metallic cube"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className=" md:grid grid-cols-1 sm:grid-cols-2 pt-[500px] lg:pt-[300px]">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-white/20 p-12 text-center lg:text-left"
              >
                <h3 className="text-4xl text-white mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-base text-white leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
