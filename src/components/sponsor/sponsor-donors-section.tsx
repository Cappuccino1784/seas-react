"use client";

import { useState } from "react";

import { PillButton } from "@/components/shared/pill-button";
import { ComingSoonCard } from "../shared/coming-soon-card";
import SponsorDonorsSectionTable from "./sponsor-donors-section-table"; 

const donorYears = ["SEAS 2025", "SEAS 2026"] as const;

export type DonorsList = {
  date: string;
  donor: string;
  amount: string;
}[];

const donors2025: DonorsList = [
  {
    date: "25-07-2025",
    donor: "Công Ty TNHH Tư Vấn KS-TK Hoành Sơn",
    amount: "5,000,000 ₫",
  },
  {
    date: "25-07-2025",
    donor: "UBND Tỉnh Quảng Trị",
    amount: "10,000,000 ₫",
  },
  {
    date: "23-07-2025",
    donor: "Mrs. Tuyết Lê",
    amount: "10,000,000 ₫"
  },
  {
    date: "13-07-2025",
    donor: "Cấn Trần Thành Trung",
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

const donors2026: DonorsList = [
  {
    date: "13-07-2026",
    donor: "Nhà xe Hưng Long",
    amount: "Hỗ trợ đi lại của học viên và trợ giảng từ các tỉnh Hà Nội vào Quảng Bình"
  },
  {
    date: "13-07-2026",
    donor: "Tấn Phát Sport",
    amount: "Toàn bộ áo quần, mũ, phù hiệu, ngoài ra còn hỗ trợ nước uống và hỗ trợ thêm trong chuyến đi Phong Nha"
  },
  {
    date: "13-07-2026",
    donor: "THPT chuyên Võ Nguyên Giáp",
    amount: "Miễn phí chi phí ký túc xá, vật chất giảng dạy"
  },
  {
    date: "13-07-2026",
    donor: "Vật Lý Chill",
    amount: "1,500 $"
  },
  {
    date: "13-07-2026",
    donor: "Nhà tài trợ giấu tên",
    amount: "40,000,000 ₫"
  },
  {
    date: "13-07-2026",
    donor: "Nguyễn Ngọc Khánh Chi",
    amount: "10,000,000 ₫"
  },

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
          SponsorDonorsSectionTable({ donors: donors2025, formatMobileDate }) 
        ) : (
          SponsorDonorsSectionTable({ donors: donors2026, formatMobileDate })
        )}
      </div>
    </section>
  );
}
