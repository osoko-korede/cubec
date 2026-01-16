import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    title: "Digital presence consultancy",
    description:
      "Website audit and analysis/ Platform recommendations/ Brand consistency reviews/ Ongoing creative direction",
    icon: "🎯",
  },
  {
    title: "Research & brand strategy",
    description:
      "Website audit and analysis/ Platform recommendations/ Brand consistency reviews/ Ongoing creative direction",
    icon: "🔍",
  },
  {
    title: "Creative direction & design",
    description:
      "Website audit and analysis/ Platform recommendations/ Brand consistency reviews/ Ongoing creative direction",
    icon: "✨",
  },
  {
    title: "Creative leadership",
    description:
      "Website audit and analysis/ Platform recommendations/ Brand consistency reviews/ Ongoing creative direction",
    icon: "🚀",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-400 text-center max-w-3xl mx-auto">
              Comprehensive creative and strategic solutions for ambitious brands looking to make their mark.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-gray-700 transition-colors"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pretty">{service.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="px-6 py-16 bg-primary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
              <div>
                <h3 className="text-2xl font-bold mb-4">01. Discover</h3>
                <p className="text-lg">
                  We immerse ourselves in your brand, understanding your vision, challenges, and opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">02. Design</h3>
                <p className="text-lg">
                  Strategic creative solutions that align with your goals and resonate with your audience.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">03. Deliver</h3>
                <p className="text-lg">
                  Polished execution with ongoing support to ensure your digital presence thrives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to start your project?</h2>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors text-lg"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
