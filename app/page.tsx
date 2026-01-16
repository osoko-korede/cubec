import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/testimonials";
import { FeaturedProject } from "@/components/featured-project";
import { getFeaturedProjects } from "@/lib/projects";

export default async function Home() {
  // ← Add 'async' here
  const featuredProjects = await getFeaturedProjects(); // ← Add this line

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <FeaturedProject
        projects={featuredProjects.map((p) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          coverImage: p.coverImage,
          slug: p.slug,
          bgColor: p.bgColor || "#f5a6a6", // fallback color
        }))}
      />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
