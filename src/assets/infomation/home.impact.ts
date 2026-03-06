export interface ImpactStat {
    id: number;
    number: string;
    description: string;
}

export const impactData = {
    tag: "SEAS 2025",
    title: "TÁC ĐỘNG CỦA SEAS 2025",
    card: {
        subtitle: "Đọc bài báo về SEAS 2025 từ Báo Quảng Trị",
        title: "Khơi dậy đam mê khoa học công nghệ",
        image: "/images/layout/impact.png",
        linkText: "Tìm hiểu thêm",
        link: "https://baoquangtri.vn/khoa-hoc-cong-nghe/202508/khoi-day-dam-me-khoa-hoc-cong-nghe-9344c18/",
    },
    stats: [
        { id: 1, number: "350+", description: "Số đơn đăng ký trên cả nước" },
        { id: 2, number: "43", description: "Học sinh đã tham gia" },
        { id: 3, number: "8", description: "Dự án học thuật của học sinh được hoàn thành" },
        { id: 4, number: "12", description: "Trợ giảng từ các trường đại học, công ty danh tiếng trong nước và trên thế giới" },
    ]
};
