"use client";

import { useState } from "react";

import { PillButton } from "@/components/shared/pill-button";
import { ComingSoonCard } from "../shared/coming-soon-card";

const donorYears = ["SEAS 2025", "SEAS 2026"] as const;

const donors2025 = [
  {
    date: "25-07-2025",
    donor: "Công Ty TNHH Tư Vấn KS-TK Hoành Sơn",
    amount: "5,000,000 ₫",
    highlighted: true,
  },
  {
    date: "25-07-2025",
    donor: "UBND Tỉnh Quảng Trị",
    amount: "10,000,000 ₫",
    highlighted: true,
  },
  {
    date: "23-07-2025",
    donor: "Mrs. Tuyết Lê",
    amount: "10,000,000 ₫"
  },
  {
    date: "13-07-2025",
    donor: "Cấn Thành Trung",
    amount: "10,000,000 ₫"
  },
  {
    date: "03-07-2025",
    donor: "Nguyễn Như An",
    amount: "3,000,000 ₫"
  },
  {
    date: "11-06-2025",
    donor: "Nguyễn Thị Thu Trang",
    amount: "5,000,000 ₫"
  },
  {
    date: "07-06-2025",
    donor: "Hoàng Thị Mỹ Tú",
    amount: "5,000,000 ₫"
  },
  {
    date: "17-05-2025",
    donor: "Hội SV Việt Nam tại Science Tokyo",
    amount: "4,500,000 ₫"
  },
  {
    date: "08-05-2025",
    donor: "Bùi Nguyễn Ánh Nhi",
    amount: "5,000,000 ₫"
  },
  {
    date: "24-04-2025",
    donor: "Trung tâm ngoại ngữ CELALS - 35 Ngô Quyền Đồng Hới",
    amount: "Tài trợ khoá học tiếng anh 120h trong 2 tuần cho toàn bộ học sinh tham gia chương trình, trị giá 60.000.000 vnđ"
  },
  {
    date: "19-04-2025",
    donor: "Tấn Phát Sport",
    amount: "Toàn bộ áo quần, mũ, phù hiệu, ngoài ra còn hỗ trợ nước uống và hỗ trợ thêm trong chuyến đi Phong Nha"
  },
  {
    date: "08-04-2025",
    donor: "MIT PKG Fellowship",
    amount: "Hỗ trợ tài chính cho học sinh MIT trong BTC"
  },
  {
    date: "30-03-2025",
    donor: "Pham Viet Hung",
    amount: "500,000 ₫"
  },
  {
    date: "21-03-2025",
    donor: "Nghiêm Vũ Nhật Anh (Stony Brook University)",
    amount: "7,500,000 ₫"
  },
  {
    date: "19-03-2025",
    donor: "Đoàn Thị Minh Phượng (Du học APUS)",
    amount: "2,500,000 ₫"
  },
  {
    date: "18-03-2025",
    donor: "Vương Tiến Thành Bakery",
    amount: "Tài trợ bữa sáng toàn bộ học viên SEAS"
  },
  {
    date: "17-03-2025",
    donor: "Dang Phuoc (Du học Edu4life)",
    amount: "2,000,000 ₫"
  },
  {
    date: "17-03-2025",
    donor: "Nguyễn Ngọc Tuấn (Bố Trạch)",
    amount: "10,000,000 ₫"
  },
  {
    date: "17-03-2025",
    donor: "Giấu Tên",
    amount: "15,000 ₫"
  },
  {
    date: "17-03-2025",
    donor: "Nhà xe Hưng Long",
    amount: "Hỗ trợ đi lại của học viên và trợ giảng từ các tỉnh Hà Nội vào Quảng Bình"
  },
  {
    date: "17-03-2025",
    donor: "Phan Tố Huyền",
    amount: "Trang, đồng phục cho khoá học SEAS"
  },
  {
    date: "17-03-2025",
    donor: "Cựu phụ huynh chuyên Lý THPT chuyên Võ Nguyên Giáp",
    amount: "15,815,000 ₫"
  },
  {
    date: "17-03-2025",
    donor: "THPT chuyên Võ Nguyên Giáp",
    amount: "Miễn phí chi phí ký túc xá, vật chất giảng dạy"
  }
];

function formatMobileDate(date: string) {
  const [day, month, year] = date.split(/[-/]/);

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
                key={`${donor.donor}-${index}`}
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
                  {donor.donor}
                </div>
                <div className="px-3 py-4 font-medium text-[#2D8BBA] md:px-5 md:py-5">
                  {donor.amount}
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
