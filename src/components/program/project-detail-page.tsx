"use client";

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import type { Project } from "@/components/program/program-projects-content";

function getYouTubeId(url?: string): string | null {
  if (!url) return null;
  const m = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  return m?.[1] ?? null;
}

function DetailSection({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 font-space-grotesk text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#2D8BBA] md:text-[0.95rem]">
        {label}
      </p>
      <ul className="space-y-2 pl-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative font-lexend text-[0.95rem] leading-[1.75] text-[#4D5761] before:absolute before:-left-3.5 before:top-[0.6em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#2D8BBA]/40 before:content-[''] md:text-[1rem]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectDetailPage({
  project,
  year,
}: {
  project: Project;
  year: string;
}) {
  const videoId = getYouTubeId(project.videoLink);

  return (
    <main className="overflow-clip bg-[#F9FCFF] py-8 pb-16 md:py-10 md:pb-20">
      <div className="container">
        <Link
          href="/program"
          className="mb-6 inline-flex items-center gap-2 font-lexend text-[1rem] font-medium text-[#2D8BBA] transition-colors hover:text-[#0f6e98]"
        >
          <HiArrowLeft className="text-[1.1rem]" />
          <span>Quay về chương trình</span>
        </Link>

        <div className="relative mb-10 pt-4 md:pt-6">
          <div className="pointer-events-none absolute left-0 top-6 h-[98%] w-full rounded-[30px] bg-[#d6f0fb] md:left-[-18px] md:top-4 md:w-[96%] md:-rotate-[2deg]" />

          <section className="relative rounded-[30px] bg-white px-6 py-6 shadow-[0_16px_40px_rgba(45,139,186,0.18)] md:px-8 md:py-8 lg:px-10 lg:py-10">
            <p className="mb-2 font-lexend text-[0.9rem] font-medium uppercase text-[#ff6d2d]">
              SEAS {year}
            </p>
            <h1 className="mb-2 font-space-grotesk text-[2rem] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-[#04536E] md:text-[2.6rem]">
              {project.title}
            </h1>

            <div className="my-6 h-[4px] w-[74px] rounded-full bg-[linear-gradient(90deg,#b7e2f6_0%,#2D8BBA_100%)]" />

            <div className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <DetailSection label="Bối cảnh" items={project.context} />
                <DetailSection label="Giải pháp" items={project.solution} />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <DetailSection label="Mục tiêu" items={project.goal} />
                <DetailSection label="Ứng dụng" items={project.application} />
              </div>

              <div className="rounded-[20px] bg-[#F7FAFF] px-6 py-5 md:px-8 md:py-6">
                <p className="mb-4 font-space-grotesk text-[0.9rem] font-bold uppercase tracking-[0.04em] text-[#2D8BBA]">
                  Thành viên
                </p>
                <div className="space-y-3">
                  <p className="font-lexend text-[0.95rem] leading-[1.75] text-[#4D5761] md:text-[1rem]">
                    <span className="font-semibold text-[#04536E]">
                      Giảng viên hướng dẫn:
                    </span>{" "}
                    {project.teamMembers.instructors.join(", ")}
                  </p>
                  <p className="font-lexend text-[0.95rem] leading-[1.75] text-[#4D5761] md:text-[1rem]">
                    <span className="font-semibold text-[#04536E]">
                      Thành viên nhóm:
                    </span>{" "}
                    {project.teamMembers.members.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {videoId ? (
          <div className="mb-8 overflow-hidden rounded-[24px] shadow-[0_16px_48px_rgba(45,139,186,0.18)]">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        ) : project.slideThumbnail ? (
          <div className="mb-8 overflow-hidden rounded-[24px] shadow-[0_16px_48px_rgba(45,139,186,0.18)]">
            <img
              src={project.slideThumbnail}
              alt={project.title}
              className="aspect-video w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}
