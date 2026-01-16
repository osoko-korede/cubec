import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllProjects } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"

export default async function WorkPage() {
  const projects = await getAllProjects()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6">Our Work</h1>
            <p className="text-xl md:text-2xl text-gray-400 text-center max-w-3xl mx-auto">
              Explore our portfolio of creative projects and digital solutions for trailblazing brands.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] transition-transform hover:scale-[1.02]"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.coverImage || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-sm text-primary mb-2">{project.category}</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 line-clamp-2">{project.shortDescription}</p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
