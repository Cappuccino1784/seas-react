"use client";

import { useEffect, useRef, useState } from "react";
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

function PdfSlidesPreview({ src, title }: { src: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visiblePageCount, setVisiblePageCount] = useState(6);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const hasMoreSlides = totalPageCount > visiblePageCount;

  useEffect(() => {
    let cancelled = false;

    async function renderPdf() {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      container.innerHTML = "";
      setIsLoading(true);
      setError(null);

      try {
        const pdfjs = await import("pdfjs-dist");

        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();

        const loadingTask = pdfjs.getDocument({ url: src });
        const pdf = await loadingTask.promise;

        if (cancelled || !containerRef.current) {
          loadingTask.destroy();
          return;
        }

        setTotalPageCount(pdf.numPages);

        const pagesToRender = Math.min(visiblePageCount, pdf.numPages);

        for (let pageNumber = 1; pageNumber <= pagesToRender; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber);

          if (cancelled || !containerRef.current) {
            break;
          }

          const pageWrap = document.createElement("div");
          pageWrap.className =
            "min-w-0 overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(45,139,186,0.12)]";

          const pageHeader = document.createElement("div");
          pageHeader.className =
            "border-b border-[#e5f2fb] bg-[#f7fbff] px-4 py-2 font-lexend text-[0.8rem] font-medium uppercase tracking-[0.06em] text-[#2D8BBA]";
          pageHeader.textContent = `${title} - Trang ${pageNumber}`;

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (!context) {
            throw new Error("Không thể khởi tạo canvas để hiển thị slides.");
          }

          pageWrap.appendChild(pageHeader);
          pageWrap.appendChild(canvas);
          container.appendChild(pageWrap);

          await new Promise<void>((resolve) => {
            window.requestAnimationFrame(() => resolve());
          });

          const pageWidth = Math.max(
            pageWrap.getBoundingClientRect().width,
            320,
          );
          const baseViewport = page.getViewport({ scale: 1 });
          const displayScale = pageWidth / baseViewport.width;
          const renderScale = displayScale * window.devicePixelRatio;
          const renderViewport = page.getViewport({ scale: renderScale });

          canvas.width = Math.floor(renderViewport.width);
          canvas.height = Math.floor(renderViewport.height);
          canvas.style.width = `${Math.floor(baseViewport.width * displayScale)}px`;
          canvas.style.height = `${Math.floor(baseViewport.height * displayScale)}px`;
          canvas.className = "block h-auto w-full";

          await page.render({
            canvasContext: context,
            canvas,
            viewport: renderViewport,
          }).promise;
        }

        if (!cancelled) {
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Không thể tải slides của dự án.",
          );
          setIsLoading(false);
        }
      }
    }

    renderPdf();

    return () => {
      cancelled = true;
    };
  }, [src, title, visiblePageCount]);

  return (
    <div className="rounded-[24px] border border-[#7fc8ef]/35 bg-[#f3faff] p-4 shadow-[0_16px_48px_rgba(45,139,186,0.18)] md:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        {isLoading ? (
          <span className="font-lexend text-[0.8rem] text-[#4D5761]">
            Đang tải...
          </span>
        ) : null}
      </div>

      {error ? (
        <div className="rounded-[18px] bg-white px-4 py-5 font-lexend text-[0.95rem] text-[#4D5761] shadow-[0_10px_30px_rgba(45,139,186,0.12)]">
          {error}
        </div>
      ) : (
        <>
          <div
            ref={containerRef}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            aria-label={`${title} slides`}
          />

          {hasMoreSlides ? (
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setVisiblePageCount(totalPageCount)}
                className="inline-flex items-center justify-center rounded-full border border-[#2D8BBA]/20 bg-white px-5 py-3 font-lexend text-[0.95rem] font-semibold text-[#04536E] transition-colors hover:border-[#2D8BBA] hover:text-[#0f6e98]"
              >
                See more slides
              </button>
            </div>
          ) : null}
        </>
      )}
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
  const showSlides = year === "2025" && Boolean(project.slidePdf);
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

        <div className="mb-8">
          <h1 className="mb-2 font-space-grotesk text-[2rem] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-[#04536E] md:text-[2.6rem]">
            SLIDES DỰ ÁN
          </h1>
        </div>

        {showSlides ? (
          <div className="mb-8">
            {slidePdf ? (
              <PdfSlidesPreview src={slidePdf} title={project.title} />
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
