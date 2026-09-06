"use client";

import { useState } from "react";
import { PillButton } from "@/components/shared/pill-button";
import { ComingSoonCard } from "../shared/coming-soon-card";
import { useRevealOnView } from "@/components/shared/use-reveal-on-view";
import { FaVideo, FaBook } from "react-icons/fa";


const bottomLinkClassName =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#2D8BBA]/20 bg-white px-5 py-3 font-lexend text-[0.95rem] font-semibold text-[#04536E] transition-colors hover:border-[#2D8BBA] hover:text-[#0f6e98]";


type PreviewSlot = {
  time: string;
  title: string;
  tone: string;
  muted?: boolean;
};

type PreviewDay = {
  label: string;
  date: string;
  slots: PreviewSlot[];
};

type PreviewWeek = {
  label: string;
  days: PreviewDay[];
};

const lectureMaterials: Record<"SEAS 2025" | "SEAS 2026", string> = {
  "SEAS 2025": "https://drive.google.com/drive/folders/1v5yHX0cxMyBpNezWkWJglRDssyGDd5hB?usp=drive_link",
  "SEAS 2026": "https://drive.google.com/drive/folders/1n3DhWB0pViAaLExwz3Wazi2Pime3M_Gs?usp=sharing",
};

const lectureRecordings: Record<"SEAS 2025" | "SEAS 2026", string> = {
  "SEAS 2025": "https://drive.google.com/drive/folders/1VFsiHiX_Jw2UgKxzijSvJZOz1vBY0MqL?usp=drive_link",
  "SEAS 2026": "https://drive.google.com/drive/folders/1-IuWxqdELcarOtBBQ38qZnzuSPo7OlyS?usp=drive_link",
};

const previewSchedule: Record<"SEAS 2025" | "SEAS 2026", PreviewWeek[]> = {
  "SEAS 2025": [
    {
      label: "Tuần 1",
      days: [
        {
          label: "Thứ 2",
          date: "21/7",
          slots: [
            { time: "8:00 - 9:00", title: "Lễ chào mừng", tone: "bg-[#7d87eb] text-white" },
            { time: "9:00 - 10:00", title: "Bài giảng khách mời 1", tone: "bg-[#ef6d97] text-white" },
            { time: "10:00 - 11:00", title: "Đại số tuyến tính 1: Cơ bản", tone: "bg-[#b0c5ff] text-[#111111]" },
            {
              time: "11:00 - 12:00",
              title:
                "Đại số tuyến tính 2: Biến đổi tuyến tính (Linear transformations)",
              tone: "bg-[#b0c5ff] text-[#111111]",
            },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 1", tone: "bg-[#cfffde] text-[#111111]" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 1", tone: "bg-[#cfffde] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 3",
          date: "22/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title:
                "Đại số tuyến tính 3: Ma trận nghịch đảo (Matrix inversion)",
              tone: "bg-[#b0c5ff] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title:
                "Đại số tuyến tính 4: Phép phân tích riêng (Eigendecomposition)",
              tone: "bg-[#b0c5ff] text-[#111111]",
            },
            { time: "10:00 - 11:00", title: "Xác suất thống kê 1: Cơ bản", tone: "bg-[#fae8b4] text-[#111111]" },
            { time: "11:00 - 12:00", title: "Học máy 1: Giới thiệu", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 2", tone: "bg-[#cfffde] text-[#111111]" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 2", tone: "bg-[#cfffde] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 4",
          date: "23/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Đại số tuyến tính 5: Giải tích ma trận (Matrix calculus)",
              tone: "bg-[#fae8b4] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "Xác suất thống kê 2: Mô hình thống kê",
              tone: "bg-[#fae8b4] text-[#111111]",
            },
            {
              time: "10:00 - 11:00",
              title:
                "Xác suất thống kê 3: Hồi quy tuyến tính (Linear regression)",
              tone: "bg-[#fae8b4] text-[#111111]",
            },
            {
              time: "11:00 - 12:00",
              title: "Học máy 2: Học giám sát (Supervised learning)",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 3", tone: "bg-[#cfffde] text-[#111111]" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 3", tone: "bg-[#cfffde] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 5",
          date: "24/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Đại số tuyến tính 6: Tổng kết & Ví dụ ứng dụng",
              tone: "bg-[#fae8b4] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "Học máy 3: Thuật toán giảm độ dốc (Gradient descent)",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "10:00 - 11:00",
              title: "Học máy 4: Học không giám sát (Unsupervised learning)",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            { time: "11:00 - 12:00", title: "Bài giảng khách mời 2", tone: "bg-[#ef6d97] text-white" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 4", tone: "bg-[#cfffde] text-[#111111]" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 4", tone: "bg-[#cfffde] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 6",
          date: "25/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Học máy 5: Mạng thần kinh nhân tạo (Neural networks)",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "Học máy 6: Tổng kết & Giới thiệu các chủ đề khác",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            { time: "10:00 - 11:00", title: "", tone: "bg-[#f8fbfd] text-[#95a8b6]" },
            { time: "11:00 - 12:00", title: "", tone: "bg-[#f8fbfd] text-[#95a8b6]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            {
              time: "13:00 - 14:30",
              title: "Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng thực tiễn)",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "14:30 - 16:00",
              title: "Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng khoa học)",
              tone: "bg-[#abdde0] text-[#111111]",
            },
          ],
        },
      ],
    },
    {
      label: "Tuần 2",
      days: [
        {
          label: "Thứ 2",
          date: "28/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng thực tiễn",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "10:00 - 11:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng khoa học",
              tone: "bg-[#ffe18f] text-[#111111]",
            },
            { time: "11:00 - 12:00", title: "Học viên làm dự án nhóm", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "14:30 - 16:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
          ],
        },
        {
          label: "Thứ 3",
          date: "29/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng thực tiễn",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "10:00 - 11:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng khoa học",
              tone: "bg-[#ffe18f] text-[#111111]",
            },
            { time: "11:00 - 12:00", title: "Học viên làm dự án nhóm", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "14:30 - 16:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
          ],
        },
        {
          label: "Thứ 4",
          date: "30/7",
          slots: [
            { time: "8:00 - 9:00", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "9:00 - 10:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
            { time: "10:00 - 11:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
            { time: "11:00 - 12:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            {
              time: "13:00 - 14:30",
              title: "Hoạt động: Công viên Đông Mỹ Biên Nhật Lệ",
              tone: "bg-[#69c8c2] text-white",
            },
            { time: "14:30 - 16:00", title: "", tone: "bg-[#69c8c2] text-[#95a8b6]" },
          ],
        },
        {
          label: "Thứ 5",
          date: "31/7",
          slots: [
            { time: "8:00 - 9:00", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "9:00 - 10:00", title: "", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "10:00 - 11:00", title: "Bài giảng khách mời 3", tone: "bg-[#ef6d97] text-white" },
            {
              time: "11:00 - 12:00",
              title: "Bài giảng khách mời 4 / Giao lưu hỏi & đáp",
              tone: "bg-[#ef6d97] text-white",
            },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "14:30 - 16:00", title: "-", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
          ],
        },
        {
          label: "Thứ 6",
          date: "1/8",
          slots: [
            { time: "8:00 - 9:00", title: "Thuyết trình dự án nhóm", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "9:00 - 10:00", title: "", tone: "bg-[#abdde0] text-[#95a8b6]" },
            { time: "10:00 - 11:00", title: "", tone: "bg-[#abdde0] text-[#95a8b6]" },
            { time: "11:00 - 12:00", title: "", tone: "bg-[#abdde0] text-[#95a8b6]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Thảo luận", tone: "bg-[#7d87eb] text-white" },
            { time: "14:30 - 16:00", title: "Lễ tổng kết", tone: "bg-[#7d87eb] text-white" },
          ],
        },
      ],
    },
  ],
  "SEAS 2026": [
    {
      label: "Tuần 1",
      days: [
        {
          label: "Thứ 2",
          date: "20/7",
          slots: [
            { time: "8:00 - 9:00", title: "Lễ chào mừng", tone: "bg-[#7d87eb] text-white" },
            { time: "9:00 - 10:00", title: "Đại số tuyến tính 1: Cơ bản", tone: "bg-[#b0c5ff] text-[#111111]" },
            { time: "10:00 - 11:00", title: "Đại số tuyến tính 2: Biến đổi tuyến tính (Linear transformations)", tone: "bg-[#b0c5ff] text-[#111111]" },
            { time: "11:00 - 12:00", title: "Xác suất thống kê 1: Cơ bản", tone: "bg-[#fae8b4] text-[#111111]" },
            { time: "12:00 - 14:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "14:00 - 15:30", title: "Lập trình Python 1", tone: "bg-[#cfffde] text-[#111111]" },
            { time: "15:30 - 17:00", title: "Bài tập toán trên Python 1", tone: "bg-[#cfffde] text-[#111111]" },
            { time: "20:00 - 21:00", title: "Office Hour: Founders Minh Đức và Bình Minh", tone: "bg-[#6bff63] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 3",
          date: "21/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title:
                "Đại số tuyến tính 3: Ma trận nghịch đảo (Matrix inversion)",
              tone: "bg-[#b0c5ff] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title:
                "Đại số tuyến tính 4: Phép phân tích riêng (Eigendecomposition)",
              tone: "bg-[#b0c5ff] text-[#111111]",
            },
            { time: "10:00 - 11:00", title: "Học máy 1: Giới thiệu", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "11:00 - 12:00", title: "Học máy 2: Học giám sát (Supervised learning)", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "12:00 - 14:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "14:00 - 15:30", title: "Lập trình Python 2", tone: "bg-[#cfffde] text-[#111111]" },
            { time: "15:30 - 17:00", title: "Bài tập toán trên Python 2", tone: "bg-[#cfffde] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 4",
          date: "22/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Xác suất thống kê 2: Mô hình thống kê",
              tone: "bg-[#fae8b4] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "Bài giảng khách mời 1",
              tone: "bg-[#ef6d97] text-white",
            },
            {
              time: "10:00 - 11:00",
              title:
                "Đại số tuyến tính 5: Giải tích ma trận (Matrix calculus)",
              tone: "bg-[#b0c5ff] text-[#111111]",
            },
            {
              time: "11:00 - 12:00",
              title: "Đại số tuyến tính 6/Lập trình Python 3",
              tone: "bg-[#b0c5ff] text-[#111111]",
            },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Học máy 3: Thuật toán giảm độ dốc (Gradient descent)", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 3", tone: "bg-[#cfffde] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 5",
          date: "23/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Xác suất thống kê 3: Hồi quy tuyến tính (Linear regression)",
              tone: "bg-[#fae8b4] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "Bài giảng khách mời 2",
              tone: "bg-[#ef6d97] text-white",
            },
            {
              time: "10:00 - 11:00",
              title: "Đại số tuyến tính 7: Tổng kết & Ví dụ ứng dụng",
              tone: "bg-[#b0c5ff] text-[#111111]",
            },
            { time: "11:00 - 12:00", title: "Học máy 4: Học không giám sát (Unsupervised learning)", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 4", tone: "bg-[#cfffde] text-[#111111]" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 4", tone: "bg-[#cfffde] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 6",
          date: "24/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Học máy 5: Mạng thần kinh nhân tạo (Neural networks)",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "Học máy 6: Tổng kết & Giới thiệu các chủ đề khác",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            { time: "10:00 - 11:00", title: "", tone: "bg-[#abdde0] text-[#95a8b6]" },
            { time: "11:00 - 12:00", title: "Office Hour: Founder Thế Quỳnh", tone: "bg-[#6bff63] text-[#111111]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            {
              time: "13:00 - 14:30",
              title: "Giới thiệu dự án nhóm tuần 2",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "14:30 - 16:00",
              title: "",
              tone: "bg-[#abdde0] text-[#111111]",
            },
          ],
        },
      ],
    },
    {
      label: "Tuần 2",
      days: [
        {
          label: "Thứ 2",
          date: "27/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Thị giác máy tính (Computer vision)",
              tone: "bg-[#abdde0] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "Bài giảng khách mời 3",
              tone: "bg-[#ef6d97] text-white",
            },
            {
              time: "10:00 - 11:00",
              title: "Mô hình Transformer",
              tone: "bg-[#bff7ff] text-[#111111]",
            },
            { time: "11:00 - 12:00", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "14:30 - 16:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
            { time: "20:00 - 21:00", title: "Office Hour: Founder Cảnh Hoàng", tone: "bg-[#6bff63] text-[#111111]" },
          ],
        },
        {
          label: "Thứ 3",
          date: "28/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Mô hình tạo sinh (Generative models)",
              tone: "bg-[#7d87eb] text-[#111111]",
            },
            {
              time: "9:00 - 10:00",
              title: "Thông tin: Chương trình cử nhân tại MBZUAI",
              tone: "bg-[#69c8c2] text-[#111111]",
            },
            {
              time: "10:00 - 11:00",
              title: "LLMs/LoRA/Quant/RL",
              tone: "bg-[#ffe18f] text-[#111111]",
            },
            { time: "11:00 - 12:00", title: "Hệ thống đề xuất (Recommendation Systems)", tone: "bg-[#7d87eb] text-[#111111]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "14:30 - 16:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
          ],
        },
        {
          label: "Thứ 4",
          date: "29/7",
          slots: [
            { time: "8:00 - 9:00", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "9:00 - 10:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
            { time: "10:00 - 11:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
            { time: "11:00 - 12:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            {
              time: "13:00 - 14:30",
              title: "Học viên làm dự án nhóm (Địa điểm tự do)",
              tone: "bg-[#c2a3ff] text-[#111111]",
            },
            { time: "14:30 - 16:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
          ],
        },
        {
          label: "Thứ 5",
          date: "30/7",
          slots: [
            { time: "8:00 - 9:00", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "9:00 - 10:00", title: "Workshop kỹ năng thuyết trình", tone: "bg-[#9effe2] text-[#111111]" },
            { time: "10:00 - 11:00", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            {
              time: "11:00 - 12:00",
              title: "",
              tone: "bg-[#c2a3ff] text-white",
            },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm", tone: "bg-[#c2a3ff] text-[#111111]" },
            { time: "14:30 - 16:00", title: "", tone: "bg-[#c2a3ff] text-[#95a8b6]" },
          ],
        },
        {
          label: "Thứ 6",
          date: "31/7",
          slots: [
            { time: "8:00 - 9:00", title: "Thuyết trình dự án nhóm", tone: "bg-[#abdde0] text-[#111111]" },
            { time: "9:00 - 10:00", title: "", tone: "bg-[#abdde0] text-[#95a8b6]" },
            { time: "10:00 - 11:00", title: "", tone: "bg-[#abdde0] text-[#95a8b6]" },
            { time: "11:00 - 12:00", title: "", tone: "bg-[#abdde0] text-[#95a8b6]" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", tone: "bg-[#eaf5fb] text-[#04536E]", muted: true },
            { time: "13:00 - 14:30", title: "BTC Thảo luận", tone: "bg-[#7d87eb] text-[#111111]" },
            { time: "14:30 - 16:00", title: "Lễ tổng kết", tone: "bg-[#7d87eb] text-[#111111]" },
          ],
        },
      ],
    },
  ],
};

const previewYears = Object.keys(previewSchedule) as Array<
  keyof typeof previewSchedule
>;

export function ProgramSchedulePreviewSection() {
  const { ref, isVisible } = useRevealOnView<HTMLElement>();
  const [activeYear, setActiveYear] =
    useState<(typeof previewYears)[number]>("SEAS 2026");
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);

  const weeks = previewSchedule[activeYear];
  const activeWeek = weeks[activeWeekIndex];
  const hasSchedule = weeks.length > 0;

  const slotCount = activeWeek
    ? Math.max(...activeWeek.days.map((day) => day.slots.length))
    : 0;

  const getTimeLabel = (slotIndex: number) => {
    if (!activeWeek) {
      return "";
    }

    for (const day of activeWeek.days) {
      const slot = day.slots[slotIndex];
      if (slot?.time) {
        return slot.time;
      }
    }

    return "";
  };

  return (
    <section ref={ref} className="py-12 md:py-16" id="program-preview">
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
              Kế hoạch
            </p>
            <h2
              className={[
                "font-space-grotesk text-[2.5rem] font-bold uppercase leading-[1] tracking-[-0.04em] text-[#04536E] transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:text-6xl",
                isVisible
                  ? "translate-y-0 opacity-100 [transition-delay:160ms]"
                  : "translate-y-10 opacity-0",
              ].join(" ")}
            >
              Lịch trình SEAS
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
            {previewYears.map((year) => {
              const isActive = year === activeYear;

              return (
                <PillButton
                  key={year}
                  onClick={() => {
                    setActiveYear(year);
                    setActiveWeekIndex(0);
                  }}
                  isActive={isActive}
                  label={year}
                />
              );
            })}
          </div>
        </div>

        {hasSchedule ? (
          <div
            className={[
              "rounded-[30px] bg-white px-5 py-6 shadow-[0_24px_56px_rgba(150,199,224,0.18)] transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 md:py-8",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:360ms]"
                : "translate-y-12 opacity-0",
            ].join(" ")}
          >
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {weeks.map((week, index) => {
                const isActive = index === activeWeekIndex;

                return (
                  <button
                    key={week.label}
                    type="button"
                    onClick={() => setActiveWeekIndex(index)}
                    className={[
                      "rounded-full px-6 py-3 font-space-grotesk text-[0.95rem] font-bold uppercase transition-colors md:text-[1rem]",
                      isActive
                        ? "bg-[#2D8BBA] text-white"
                        : "bg-[#edf7fc] text-[#2D8BBA] hover:bg-[#dff0fa]",
                    ].join(" ")}
                  >
                    {week.label}
                  </button>
                );
              })}
            </div>

            <div className="overflow-x-auto rounded-[22px] border border-[#d7e9f3] shadow-[0_18px_44px_rgba(150,199,224,0.12)]">
              <table className="w-full min-w-[920px] border-separate border-spacing-0">
                <thead>
                  <tr className="bg-[linear-gradient(90deg,#0d617d,#2D8BBA)] text-white">
                    <th className="w-[130px] border-r border-b border-[rgba(255,255,255,0.15)] px-4 py-3 text-center font-lexend text-[0.85rem] font-semibold uppercase md:text-[0.95rem]">
                      Thời gian
                    </th>
                    {activeWeek.days.map((day) => (
                      <th
                        key={`${day.label}-${day.date}`}
                        className="border-b border-[rgba(255,255,255,0.15)] px-3 py-3 text-center font-space-grotesk text-[0.95rem] font-bold uppercase md:text-[1.02rem]"
                      >
                        {day.label}
                      </th>
                    ))}
                  </tr>
                  <tr>
                    <th className="border-r border-b border-[#d7e9f3] bg-[#f2f9fd] px-4 py-2 text-center font-lexend text-[0.78rem] font-medium text-[#6e8190] md:text-[0.85rem]">

                    </th>
                    {activeWeek.days.map((day) => (
                      <th
                        key={`date-${day.label}-${day.date}`}
                        className="border-b border-[#d7e9f3] bg-[#edf7fc] px-3 py-2 text-center font-lexend text-[0.78rem] font-medium text-[#2D8BBA] md:text-[0.85rem]"
                      >
                        {day.date}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {Array.from({ length: slotCount }, (_, slotIndex) => {
                    const rowSlots = activeWeek.days.map(
                      (day) => day.slots[slotIndex] ?? null,
                    );
                    const isBreakRow = rowSlots.every((slot) => slot?.muted);

                    if (isBreakRow) {
                      return (
                        <tr key={`slot-${slotIndex}`}>
                          <td className="border-r border-b border-[#d7e9f3] bg-[#fafbfd] px-3 py-3 text-center font-lexend text-[0.78rem] font-semibold text-[#4D5761] md:px-4 md:text-[0.88rem]">
                            {getTimeLabel(slotIndex)}
                          </td>
                          <td
                            colSpan={activeWeek.days.length}
                            className="border-b border-[#d7e9f3] bg-[linear-gradient(90deg,#0d617d,#2D8BBA)] px-3 py-3 text-center font-space-grotesk text-[0.92rem] font-bold uppercase text-white md:text-[1rem]"
                          >
                            {rowSlots[0]?.title ?? "Nghỉ"}
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={`slot-${slotIndex}`}>
                        <td className="border-r border-b border-[#d7e9f3] bg-[#fafbfd] px-3 py-3 text-center font-lexend text-[0.78rem] font-semibold text-[#4D5761] md:px-4 md:text-[0.88rem]">
                          {getTimeLabel(slotIndex)}
                        </td>
                        {rowSlots.map((slot, dayIndex) => (
                          <td
                            key={`slot-${slotIndex}-day-${dayIndex}`}
                            className={[
                              "border-b border-[#d7e9f3] px-3 py-4 align-top font-space-grotesk text-[0.9rem] font-bold leading-[1.35] md:text-[0.95rem]",
                              slot?.tone ?? "bg-[#f8fbfd] text-[#95a8b6]",
                            ].join(" ")}
                          >
                            {slot?.title ?? ""}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {
                lectureMaterials[activeYear] ? (
                  <a
                    key={lectureMaterials[activeYear]}
                    href={lectureMaterials[activeYear]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${activeYear} lecture recordings in Google Drive`}
                    className={bottomLinkClassName}
                  >
                    <FaBook className="text-[1.05rem]" />
                    <span>Lecture Materials</span>
                  </a>
                ) : null
              }

              <a
                key={lectureRecordings[activeYear]}
                href={lectureRecordings[activeYear]}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${activeYear} lecture recordings in Google Drive`}
                className={bottomLinkClassName}
              >
                <FaVideo className="text-[1.05rem]" />
                <span>Lecture Recordings</span>
              </a>
            </div>


            {/*<div className="pt-7">
              <PillArrowButton
                href="#program-details"
                label="Xem chi tiết lịch trình đầy đủ"
                className="min-h-[48px] min-w-0 px-6 text-[0.95rem] max-md:w-full"
              />
            </div>*/}
          </div>
        ) : (
          <ComingSoonCard />
        )}
      </div>
    </section>
  );
}
