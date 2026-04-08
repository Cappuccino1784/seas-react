"use client";

import { useState } from "react";

import { PillButton } from "@/components/shared/pill-button";
import { ComingSoonCard } from "../shared/coming-soon-card";

const donorYears = ["SEAS 2025", "SEAS 2026"] as const;

const donors2025 = [
  {
    date: "25/07/2025",
    name: "Cong Ty TNHH Tu Van KS-TK Hoanh Son",
    support: "5,000,000 d",
    highlighted: true,
  },
  {
    date: "24/04/2025",
    name: "Trung tam ngoai ngu CELALS - 35 Ngo Quyen Dong Hoi",
    support:
      "Tai tro khoa hoc tieng Anh 120h trong 2 tuan cho toan bo hoc sinh tham gia chuong trinh, tri gia 60.000.000 vnd",
  },
  {
    date: "19/04/2025",
    name: "Tan Phat Sport",
    support:
      "Toan bo ao quan, mu, phu hieu, ngoai ra con ho tro nuoc uong va ho tro them trong chuyen di Phong Nha",
  },
  {
    date: "25/07/2025",
    name: "Cong Ty TNHH Tu Van KS-TK Hoanh Son",
    support: "5,000,000 d",
    highlighted: true,
  },
  {
    date: "25/07/2025",
    name: "Cong Ty TNHH Tu Van KS-TK Hoanh Son",
    support: "5,000,000 d",
    highlighted: true,
  },
  {
    date: "25/07/2025",
    name: "Cong Ty TNHH Tu Van KS-TK Hoanh Son",
    support: "5,000,000 d",
    highlighted: true,
  },
  {
    date: "25/07/2025",
    name: "Cong Ty TNHH Tu Van KS-TK Hoanh Son",
    support: "5,000,000 d",
    highlighted: true,
  },
  {
    date: "25/07/2025",
    name: "Cong Ty TNHH Tu Van KS-TK Hoanh Son",
    support: "5,000,000 d",
    highlighted: true,
  },
];

function formatMobileDate(date: string) {
  const [day, month, year] = date.split("/");

  return (
    <>
      {day}/{month}
      <br />
      {year}
    </>
  );
}

export function SponsorDonorsSection() {
  const [activeYear, setActiveYear] =
    useState<(typeof donorYears)[number]>("SEAS 2025");

  return (
    <section className="py-12 pb-20 md:py-16 md:pb-24">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-space-grotesk text-[2.35rem] font-bold uppercase leading-[1] tracking-[-0.04em] text-[#04536E] md:text-5xl">
            Nhà hảo tâm
          </h2>

          <div className="flex gap-3">
            {donorYears.map((year) => {
              const isActive = year === activeYear;

              return (
                <PillButton
                  key={year}
                  onClick={() => setActiveYear(year)}
                  isActive={isActive}
                  label={year}
                />
              );
            })}
          </div>
        </div>

        {activeYear === "SEAS 2025" ? (
          <div className="overflow-hidden rounded-[24px] border border-[#b9e7f7] bg-white shadow-[0_20px_48px_rgba(150,199,224,0.14)]">
            <div className="grid grid-cols-[72px_1.2fr_1.2fr] bg-[#dff2fb] font-space-grotesk text-[0.98rem] font-bold uppercase text-[#04536E] md:grid-cols-[170px_1.5fr_1.4fr] md:text-[1rem]">
              <div className="border-r border-[#b9e7f7] px-3 py-4 md:px-5 md:py-5">
                Ngay
              </div>
              <div className="border-r border-[#b9e7f7] px-3 py-4 md:px-5 md:py-5">
                Ten
              </div>
              <div className="px-3 py-4 md:px-5 md:py-5">
                So tien hoac vat chat
              </div>
            </div>

            {donors2025.map((donor, index) => (
              <div
                key={`${donor.name}-${index}`}
                className={[
                  "grid grid-cols-[72px_1.2fr_1.2fr] border-t border-[#d7eaf4] font-lexend text-[0.98rem] md:grid-cols-[170px_1.5fr_1.4fr] md:text-[1rem]",
                  donor.highlighted ? "bg-[#f7fbff]" : "bg-white",
                ].join(" ")}
              >
                <div className="px-3 py-4 leading-[1.35] text-[#4D5761] md:px-5 md:py-5">
                  <span className="md:hidden">
                    {formatMobileDate(donor.date)}
                  </span>
                  <span className="hidden md:inline">{donor.date}</span>
                </div>
                <div className="px-3 py-4 font-semibold text-[#111111] md:px-5 md:py-5">
                  {donor.name}
                </div>
                <div className="px-3 py-4 font-medium text-[#2D8BBA] md:px-5 md:py-5">
                  {donor.support}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ComingSoonCard />
        )}
      </div>
    </section>
  );
}
