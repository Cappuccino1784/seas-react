"use client";

import { useState } from "react";
import { PillButton } from "@/components/shared/pill-button";
import { useRevealOnView } from "@/components/shared/use-reveal-on-view";
import { ComingSoonCard } from "@/components/shared/coming-soon-card";
import { type Project, projects } from "@/components/program/program-projects-content";

const projectYears = Object.keys(projects) as Array<keyof typeof projects>;

/** Extract year number from key like "SEAS 2025" → "2025" */
function getYearFromKey(key: string): string {
  return key.replace("SEAS ", "");
}

function ProjectCard({
  project,
  yearKey,
}: {
  project: Project;
  yearKey: string;
}) {
  const year = getYearFromKey(yearKey);

  return (
    <a
      href={`/project/${year}/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-[#7fc8ef]/50 bg-white shadow-[0_16px_38px_rgba(150,199,224,0.12)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#2D8BBA] hover:shadow-[0_22px_50px_rgba(45,139,186,0.2)] md:rounded-[24px] border-[2px]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#04536E] via-[#2D8BBA] to-[#7fc8ef]">
        {project.slideThumbnail ? (
          <img
            src={project.slideThumbnail}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <svg className="h-7 w-7 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <span className="font-lexend text-[0.75rem] font-medium text-white/60">
              Video sắp ra mắt
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 px-5 pb-3 pt-4 md:px-6">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2D8BBA]/10 font-space-grotesk text-[0.72rem] font-bold text-[#2D8BBA]">
          {String(project.id).padStart(2, "0")}
        </span>
        <h3 className="font-space-grotesk text-[0.88rem] font-bold uppercase leading-[1.35] tracking-[-0.01em] text-[#04536E] md:text-[0.95rem]">
          {project.title}
        </h3>
      </div>

      <div className="mt-auto border-t border-[#7fc8ef]/20 px-5 py-3 md:px-6">
        <p className="truncate font-lexend text-[0.75rem] text-[#4D5761]/70">
          <span className="font-semibold text-[#04536E]/70">Nhóm:</span>{" "}
          {project.teamMembers.members.slice(0, 3).join(", ")}
          {project.teamMembers.members.length > 3 && " …"}
        </p>
      </div>
    </a>
  );
}

export function ProgramPastProjectsSection() {
  const { ref, isVisible } = useRevealOnView<HTMLElement>();
  const [activeYear, setActiveYear] =
    useState<(typeof projectYears)[number]>("SEAS 2025");

  const yearProjects = projects[activeYear];
  const hasProjects = yearProjects.length > 0;

  return (
    <section ref={ref} className="py-12 md:py-16" id="past-projects">
      <div className="container">
        <div className="mb-8 flex flex-col gap-6 md:mb-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p
              className={[
                "mb-4 font-lexend text-[1.05rem] font-medium uppercase text-[#ff6d2d] transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:text-lg",
                isVisible
                  ? "translate-y-0 opacity-100 [transition-delay:80ms]"
                  : "translate-y-8 opacity-0",
              ].join(" ")}
            >
              Dự án
            </p>
            <h2
              className={[
                "font-space-grotesk text-[2.5rem] font-bold uppercase leading-[1] tracking-[-0.04em] text-[#04536E] transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:text-6xl",
                isVisible
                  ? "translate-y-0 opacity-100 [transition-delay:160ms]"
                  : "translate-y-10 opacity-0",
              ].join(" ")}
            >
              Dự án các năm
            </h2>
          </div>

          <div
            className={[
              "flex gap-3 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:260ms]"
                : "translate-y-8 opacity-0",
            ].join(" ")}
          >
            {projectYears.map((year) => (
              <PillButton
                key={year}
                onClick={() => setActiveYear(year)}
                isActive={year === activeYear}
                label={year}
              />
            ))}
          </div>
        </div>

        {hasProjects ? (
          <div
            className={[
              "grid grid-cols-1 gap-6 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:grid-cols-2",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:360ms]"
                : "translate-y-12 opacity-0",
            ].join(" ")}
          >
            {yearProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                yearKey={activeYear}
              />
            ))}
          </div>
        ) : (
          <ComingSoonCard />
        )}
      </div>
    </section>
  );
}
