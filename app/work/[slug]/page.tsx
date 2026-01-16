import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  getProjectBySlug,
  getProjectSlugs,
  getSimilarProjects,
} from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const similarProjects = await getSimilarProjects(slug, project.category, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="px-6 py-8 max-w-7xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Work</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-primary text-lg mb-4">{project.category}</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-4xl">
                {project.shortDescription}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-16">
              <Image
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  Role
                </h3>
                <p className="text-lg">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  Services
                </h3>
                <ul className="space-y-2">
                  {project.services.map((service, index) => (
                    <li key={index} className="text-lg">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#1a1a1a] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* MDX Content - FIXED */}
            <div className="prose prose-invert prose-lg max-w-4xl mb-16">
              {project.content}
            </div>

            {/* Additional Images */}
            {project.detailImages.length > 1 && (
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.detailImages.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} detail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Similar Projects */}
        {similarProjects.length > 0 && (
          <section className="px-6 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Similar Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarProjects.map((similarProject) => (
                  <Link
                    key={similarProject.id}
                    href={`/work/${similarProject.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                      <Image
                        src={similarProject.coverImage || "/placeholder.svg"}
                        alt={similarProject.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-primary mb-2">
                      {similarProject.category}
                    </p>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {similarProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {similarProject.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-lg hover:text-primary transition-colors group"
                >
                  <span>View All Projects</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
