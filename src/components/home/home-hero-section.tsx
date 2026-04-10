"use client";

import { useEffect, useState } from "react";

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

export function HomeHeroSection() {
  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);
  const [animationCycle, setAnimationCycle] = useState(0);

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

  useEffect(() => {
    const replayAnimations = () => {
      setAnimationCycle((current) => current + 1);
    };

    window.addEventListener("pageshow", replayAnimations);

    return () => window.removeEventListener("pageshow", replayAnimations);
  }, []);

  return (
    <section className="py-8 pb-10 max-md:pt-5">
      <div className="container grid gap-4">
        <div
          className="relative overflow-hidden rounded-[28px] px-12 py-14 shadow-[0_4px_40px_rgba(45,139,186,0.2)] max-lg:px-8 max-md:px-5 max-md:py-8"
          style={{
            backgroundImage: `linear-gradient(100deg, rgba(45, 139, 186, 0.9), rgba(0, 77, 97, 0.9)), url('/images/layout/quang-binh.jpg')`,
            backgroundPosition: "center 35%",
            backgroundSize: "cover",
          }}
        >
          <div
            key={`hero-banner-${animationCycle}`}
            className="relative z-[1] flex min-h-[156px] items-center justify-between gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-8"
          >
            <div className="space-y-3 font-space-grotesk">
              <p className="hero-rise-up mb-4 text-7xl font-bold uppercase leading-[0.9] text-[#7CEFF1] [animation-delay:120ms]">
                SEAS 2026
              </p>
              <h1 className="hero-rise-up m-0 text-3xl font-bold uppercase leading-none text-white [animation-delay:240ms]">
                Trí tuệ nhân tạo và Ứng dụng
              </h1>
            </div>

            <dl className="grid gap-2 font-space-grotesk text-white">
              <div className="hero-rise-up grid grid-cols-[auto_auto] items-baseline gap-x-5 gap-y-1 [animation-delay:360ms] max-md:grid-cols-1 max-md:gap-x-0">
                <dt className="font-lexend text-[1.05rem] font-normal text-[#E6F8FF]">
                  Thời gian dự kiến
                </dt>
                <dd className="m-0 text-[1.15rem] font-semibold uppercase">
                  20/07/2026 - 31/07/2026
                </dd>
              </div>
              <div className="hero-rise-up grid grid-cols-[auto_auto] items-baseline gap-x-5 gap-y-1 [animation-delay:460ms] max-md:grid-cols-1 max-md:gap-x-0">
                <dt className="font-lexend text-[1.05rem] font-normal text-[#E6F8FF]">
                  Địa điểm
                </dt>
                <dd className="m-0 text-[1.15rem] font-semibold uppercase">
                  TP. Đồng Hới, tỉnh Quảng Bình
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          key={`hero-countdown-${animationCycle}`}
          className="grid grid-cols-4 gap-4 max-md:grid-cols-2"
        >
          {countdown.map((item, index) => (
            <article
              key={`${item.label}-${animationCycle}`}
              className="hero-rise-up hero-countdown-card rounded-[22px] bg-white px-3 py-5 text-center font-space-grotesk shadow-[0_4px_30px_rgba(45,139,186,0.18)] [animation-delay:calc(560ms+var(--item-delay))]"
              style={{ ["--item-delay" as string]: `${index * 90}ms` }}
            >
              <strong className="block text-[3.25rem] leading-none font-bold text-[#2d8bba]">
                {item.value}
              </strong>
              <span className="mt-2 block text-[1.05rem] font-bold text-[#575757]">
                {item.label}
              </span>
            </article>
          ))}
        </div>

        <div
          key={`hero-cta-${animationCycle}`}
          className="hero-rise-up flex justify-center pt-4 [animation-delay:900ms]"
        >
          <PillArrowButton
            href="/apply"
            label="Đăng Ký Tham Gia"
            className="min-h-[58px] min-w-[220px] border-[2.5px] border-white px-7 max-md:min-h-[54px] max-md:w-full max-md:min-w-0"
          />
        </div>
      </div>
    </section>
  );
}
