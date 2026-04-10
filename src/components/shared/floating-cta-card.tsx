"use client";

import { useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi2";

import { PillArrowButton } from "@/components/shared/pill-arrow-button";

const COUNTDOWN_TARGET = new Date("2026-06-22T23:59:59").getTime();
const INITIAL_COUNTDOWN = [
  { value: "00", label: "NGÀY" },
  { value: "00", label: "GIỜ" },
  { value: "00", label: "PHÚT" },
  { value: "00", label: "GIÂY" },
];

function getTimeLeft() {
  const difference = Math.max(COUNTDOWN_TARGET - Date.now(), 0);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return [
    { value: String(days).padStart(2, "0"), label: "NGÀY" },
    { value: String(hours).padStart(2, "0"), label: "GIỜ" },
    { value: String(minutes).padStart(2, "0"), label: "PHÚT" },
    { value: String(seconds).padStart(2, "0"), label: "GIÂY" },
  ];
}

export function FloatingCtaCard() {
  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(getTimeLeft());
    };

    const timeoutId = window.setTimeout(updateCountdown, 0);
    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsCollapsed((value) => !value)}
        aria-label={isCollapsed ? "Mo the dang ky" : "Thu gon the dang ky"}
        className={[
          "fixed left-0 z-30 flex h-[44px] w-[58px] items-center justify-center rounded-r-full border border-white/70 bg-[linear-gradient(180deg,#61b7df_0%,#319ac7_100%)] text-white shadow-[0_16px_30px_rgba(45,139,186,0.26)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-[0.98]",
          isCollapsed
            ? "bottom-28 translate-x-0 opacity-100 md:bottom-36"
            : "pointer-events-none bottom-28 -translate-x-6 opacity-0 md:bottom-40",
        ].join(" ")}
      >
        <HiChevronDoubleRight className="text-[1.4rem]" />
      </button>

      <aside
        className={[
          "fixed bottom-5 left-4 z-30 w-[min(320px,calc(100vw-32px))] rounded-[24px] bg-[linear-gradient(180deg,#2D8BBA_0%,#62B3D1_100%)] p-3 text-white shadow-[0_22px_48px_rgba(16,61,86,0.28)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:bottom-7 md:left-7 md:w-[320px] md:rounded-[28px] md:p-4",
          isCollapsed
            ? "pointer-events-none translate-x-[-110%] opacity-0"
            : "translate-x-0 opacity-100",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_bottom_right,rgba(126,236,255,0.16),transparent_26%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%)] md:rounded-[28px]" />
        <div className="pointer-events-none absolute inset-x-5 bottom-2 h-16 rounded-full bg-[radial-gradient(circle,rgba(137,237,255,0.22),transparent_68%)] blur-2xl" />

        <button
          type="button"
          onClick={() => setIsCollapsed(true)}
          aria-label="Thu gon the dang ky"
          className="absolute -right-3 top-3 grid h-[40px] w-[40px] place-items-center rounded-full border-2 border-[#78caeb] bg-white text-[#0d6d99] shadow-[0_12px_26px_rgba(16,61,86,0.22)] md:h-[44px] md:w-[44px]"
        >
          <span className="hidden md:inline">
            <HiChevronDoubleLeft className="text-[1.5rem]" />
          </span>
          <span className="md:hidden">
            <HiChevronDown className="text-[1.5rem]" />
          </span>
        </button>

        <div className="relative">
          <p className="font-space-grotesk text-[1.6rem] font-bold uppercase leading-[1] md:text-[2.2rem]">
            SEAS 2026
          </p>
          <p className="mt-1 max-w-[280px] font-space-grotesk text-[0.9rem] font-semibold uppercase leading-[1.12] md:max-w-none md:text-[0.95rem]">
            Trí tuệ nhân tạo và ứng dụng
          </p>

          <div className="mt-3 grid grid-cols-4 gap-2 md:mt-4 md:gap-2">
            {countdown.map((item) => (
              <div
                key={item.label}
                className="rounded-[12px] bg-[#04536E] px-1 py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:rounded-[14px] md:px-2 md:py-2.5"
              >
                <strong className="block font-space-grotesk text-[1.6rem] font-bold leading-none text-[#7CEFF1] md:text-[1.8rem]">
                  {item.value}
                </strong>
                <span className="mt-1 block font-space-grotesk text-[0.75rem] font-bold uppercase tracking-[-0.01em] text-white/85 md:text-[0.8rem]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-4">
            <PillArrowButton
              href="/apply"
              label="Đăng Ký Tham Gia"
              variant="light"
              className="min-h-[46px] w-full min-w-0 border-2 border-white px-5 text-[0.9rem] md:min-h-[48px] md:text-[0.95rem]"
            />
          </div>
        </div>
      </aside>
    </>
  );
}
