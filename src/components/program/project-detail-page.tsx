"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiArrowLeft,
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
} from "react-icons/hi";
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

function ProjectInterview({
  interview,
}: {
  interview: NonNullable<Project["interview"]>;
}) {
  return (
    <section className="mb-8" aria-labelledby="project-interview-heading">
      <h2
        id="project-interview-heading"
        className="mb-4 font-space-grotesk text-[1.5rem] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-[#04536E] md:text-[1.9rem]"
      >
        Phỏng vấn thành viên dự án
      </h2>

      <div className="overflow-hidden rounded-[24px] border border-[#cfe9f7] bg-white p-4 shadow-[0_8px_24px_rgba(45,139,186,0.1)] md:p-6">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
          {interview.intervieweePhotoUrl ? (
            <img
              src={interview.intervieweePhotoUrl}
              alt={interview.interviewee}
              className="aspect-[4/5] rounded-[15%] object-cover border border-[#d6effc] bg-[#f3fbff] shadow-[0_8px_20px_rgba(45,139,186,0.12)] w-[120px] shrink-0 md:w-[140px]"
            />
          ) : null}
          <div>
            <p className="mb-1 font-lexend text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-[#2D8BBA] sm:text-[1rem] md:text-[1.05rem]">
              Học viên SEAS 2026
            </p>
            <h3 className="font-space-grotesk text-[1.8rem] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-[#04536E] sm:text-[2rem] md:text-[2.4rem]">
              {interview.interviewee}
            </h3>
          </div>
        </div>

        <div className="space-y-5">
          {interview.questions.map((entry, index) => (
            <article
              key={`${entry.question}-${index}`}
              className="rounded-[18px] border border-[#e5f2fb] bg-[#f9fcff] p-4 md:p-5"
            >
              <p className="mb-3 font-lexend text-[1rem] font-semibold text-[#04536E] md:text-[1.05rem]">
                {entry.question}
              </p>
              <div className="space-y-2 font-lexend text-[0.95rem] leading-[1.8] text-[#4D5761] md:text-[1rem]">
                {entry.answer.map((paragraph, answerIndex) => (
                  <p key={answerIndex}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFaq({
  faq,
}: {
  faq: NonNullable<Project["faq"]>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="mb-8" aria-labelledby="project-faq-heading">
      <h2
        id="project-faq-heading"
        className="mb-4 font-space-grotesk text-[1.5rem] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-[#04536E] md:text-[1.9rem]"
      >
        Câu hỏi thường gặp
      </h2>
      <div className="space-y-3">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={`${item.question}-${index}`}
              className="overflow-hidden rounded-[18px] border border-[#cfe9f7] bg-white shadow-[0_8px_24px_rgba(45,139,186,0.1)]"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-lexend text-[0.95rem] font-semibold leading-[1.55] text-[#04536E] md:px-6 md:text-[1rem]"
              >
                {item.question}
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7f5fc] text-[1.25rem] font-medium text-[#2D8BBA] transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#e5f2fb] px-5 py-4 md:px-6">
                    <div className="space-y-3 font-lexend text-[0.95rem] leading-[1.75] text-[#4D5761] md:text-[1rem]">
                      {item.answer.every((entry) => /^[-*•]\s/.test(entry.trim())) ? (
                        <ul className="list-disc space-y-1 pl-5">
                          {item.answer.map((entry, answerIndex) => (
                            <li key={answerIndex}>{entry.replace(/^[-*•]\s*/, "")}</li>
                          ))}
                        </ul>
                      ) : (
                        item.answer.map((paragraph, answerIndex) => (
                          <p key={answerIndex}>{paragraph}</p>
                        ))
                      )}
                      {item.author ? (
                        <p className="mx-[20px] my-2 text-right font-semibold text-[#04536E]">
                          {item.author}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PdfDocumentFrame({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#7fc8ef]/35 bg-[#f3faff] p-3 shadow-[0_16px_48px_rgba(45,139,186,0.18)] md:p-4">
      <div className="overflow-hidden rounded-[18px] border border-[#cfe9f7] bg-white">
        <iframe
          src={src}
          title={`${title} PDF`}
          className="block aspect-[32/22] min-h-[540px] w-full border-0 bg-white"
          loading="lazy"
        />
      </div>
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
  const showSlides = Boolean(project.slidePdf);
  const slidePdf = project.slidePdf;
  const bottomLinkClassName =
    "inline-flex items-center justify-center gap-2 rounded-full border border-[#2D8BBA]/20 bg-white px-5 py-3 font-lexend text-[0.95rem] font-semibold text-[#04536E] transition-colors hover:border-[#2D8BBA] hover:text-[#0f6e98]";

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

            {project.summary?.length ? (
              <div className="mt-5 space-y-3 font-lexend text-[0.95rem] leading-[1.75] text-[#4D5761] md:text-[1rem]">
                {project.summary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : null}

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

        {project.interview ? <ProjectInterview interview={project.interview} /> : null}

        {/* FAQ */}
        {project.faq?.length ? <ProjectFaq faq={project.faq} /> : null}

        <div className="mb-8">
          <h1 className="mb-2 font-space-grotesk text-[2rem] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-[#04536E] md:text-[2.6rem]">
            VIDEO THUYẾT TRÌNH DỰ ÁN
          </h1>
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

        {showSlides ? (
          <div className="mb-8">
            <h1 className="mb-3 font-space-grotesk text-[2rem] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-[#04536E] md:text-[2.6rem]">
              SLIDES DỰ ÁN
            </h1>
            {slidePdf ? (
              <PdfDocumentFrame src={slidePdf} title={project.title} />
            ) : null}
          </div>
        ) : null}

        <div className="mt-10 flex flex-col gap-3 border-t border-[#d9edf9] pt-6 sm:flex-row">
          {project.videoLink ? (
            <a
              href={project.videoLink}
              target="_blank"
              rel="noreferrer"
              className={bottomLinkClassName}
            >
              <HiOutlineVideoCamera className="text-[1.05rem]" />
              <span>YouTube video</span>
            </a>
          ) : null}

          {slidePdf ? (
            <a
              href={slidePdf}
              target="_blank"
              rel="noreferrer"
              className={bottomLinkClassName}
            >
              <HiOutlineDocumentText className="text-[1.05rem]" />
              <span>Slides PDF</span>
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
}
