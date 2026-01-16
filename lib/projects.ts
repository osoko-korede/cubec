import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const projectsDir = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
  title: string;
  category: string;
  role: string;
  date: number;
  slug: string;
  shortDescription: string;
  coverImage: string;
  featured?: boolean; // ← ADD THIS
  bgColor?: string; // ← ADD THIS
  services: string[];
  technologies: string[];
  detailImages: string[];
}

// ADD THIS NEW FUNCTION
export async function getFeaturedProjects(): Promise<
  Omit<Project, "content">[]
> {
  const allProjects = await getAllProjects();
  return allProjects
    .filter((project) => project.featured === true)
    .sort((a, b) => b.date - a.date);
}

export interface Project extends ProjectFrontmatter {
  content: React.ReactElement;
  id: string;
}

export async function getAllProjects(): Promise<Omit<Project, "content">[]> {
  const files = fs.readdirSync(projectsDir);
  const projects: Omit<Project, "content">[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const filePath = path.join(projectsDir, file);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);
    const frontmatter = data as ProjectFrontmatter;

    projects.push({
      ...frontmatter,
      id: frontmatter.slug,
    });
  }

  return projects.sort((a, b) => b.date - a.date);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(projectsDir, `${slug}.mdx`);

  try {
    const source = fs.readFileSync(filePath, "utf-8");

    const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
      source,
      options: { parseFrontmatter: true },
    });

    return {
      ...frontmatter,
      id: frontmatter.slug,
      content,
    };
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    return null;
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map((project) => project.slug);
}

export async function getSimilarProjects(
  currentSlug: string,
  category: string,
  limit: number = 3
): Promise<Omit<Project, "content">[]> {
  const allProjects = await getAllProjects();

  // Filter out current project and get same category
  const similarProjects = allProjects.filter(
    (project) => project.slug !== currentSlug && project.category === category
  );

  // If not enough same-category projects, add different ones
  if (similarProjects.length < limit) {
    const otherProjects = allProjects
      .filter(
        (project) =>
          project.slug !== currentSlug && project.category !== category
      )
      .slice(0, limit - similarProjects.length);

    return [...similarProjects, ...otherProjects].slice(0, limit);
  }

  return similarProjects.slice(0, limit);
}
