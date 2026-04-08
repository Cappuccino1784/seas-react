"use client";

import { useRevealOnView } from "@/components/shared/use-reveal-on-view";

export function ProgramIntroSection() {
  const { ref, isVisible } = useRevealOnView<HTMLElement>();

  return (
    <section ref={ref} className="py-10 md:py-14">
      <div className="container">
        <div className="grid gap-8 rounded-[28px] bg-white px-6 py-7 shadow-[0_20px_48px_rgba(150,199,224,0.14)] md:px-10 md:py-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <div>
            <h1
              className={[
                "font-space-grotesk text-[2.5rem] font-bold uppercase leading-[1.2] tracking-[-0.05em] text-[#04536E] transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:text-6xl",
                isVisible
                  ? "translate-y-0 opacity-100 [transition-delay:120ms]"
                  : "translate-y-10 opacity-0",
              ].join(" ")}
            >
              CHƯƠNG TRÌNH
              <br />
              DẠY HỌC
            </h1>
          </div>

          <div
            className={[
              "border-l-4 border-[#2D8BBA] pl-5 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:pl-6",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:260ms]"
                : "translate-y-12 opacity-0",
            ].join(" ")}
          >
            <p className="font-lexend text-[1rem] leading-[1.9] text-[#4D5761] md:text-[1.06rem]">
              Chương trình học được thiết kế thành hai tuần. Tuần đầu tiên là{" "}
              <span className="font-semibold text-[#2D8BBA]">
                &quot;Bootcamp Nền tảng&quot;
              </span>
              , tập trung vào Python, Đại số tuyến tính và Machine Learning.
              Tuần thứ hai tập trung vào{" "}
              <span className="font-semibold text-[#2D8BBA]">
                &quot;Ứng dụng của AI&quot;
              </span>
              , với các nội dung về Thị giác máy tính, AI trong khoa học và AI
              trong mạng máy tính. Ngoài ra, học viên còn được tham gia các dự
              án nhóm để thực hành và áp dụng kiến thức vào giải quyết các vấn
              đề thực tiễn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
