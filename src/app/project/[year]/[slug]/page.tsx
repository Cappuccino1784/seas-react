import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { projects } from "@/components/program/program-projects-content";
import { ProjectDetailPage } from "@/components/program/project-detail-page";

export function generateStaticParams() {
  const params: { year: string; slug: string }[] = [];
  for (const [key, list] of Object.entries(projects)) {
    const year = key.replace("SEAS ", "");
    for (const project of list) {
      params.push({ year, slug: String(project.slug) });
    }
  }
  return params;
}

export default async function ProjectRoute({
  params,
}: {
  params: Promise<{ year: string; slug: string }>;
}) {
  const { year, slug } = await params;
  const projectYearKey = Object.keys(projects).find(k => k.endsWith(year)) as keyof typeof projects;
  const list = projectYearKey ? projects[projectYearKey] : null;

  if (!list) {
    notFound();
  }

  const decodedSlug = decodeURIComponent(slug);
  const project = list.find((p) => p.slug === decodedSlug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <ProjectDetailPage project={project} year={year} />
      <SiteFooter />
    </>
  );
}
