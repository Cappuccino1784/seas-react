export type StaffLink = {
  label: string;
  href: string;
};

export type StaffMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  profileSummary: string;
  highlights?: string[];
  quote?: string;
  favQuote?: {
    quote: string;
    author: string;
  };
  links?: StaffLink[];
  group: "founder" | "member";
};

export const staffFounders: StaffMember[] = [
  {
    slug: "nguyen-canh-hoang",
    name: "Nguyễn Cảnh Hoàng",
    role: "Sáng Lập & Ban Tổ Chức (Founder & Organizer)",
    bio: "Nghiên Cứu Sinh Tiến Sĩ tại Stony Brook, Chuyên Phan Bội Châu K43.",
    image: "/images/team/founders/hoang-seas.jpg",
    profileSummary:
      "Nghiên cứu sinh Khoa học Máy tính tại Đại học Stony Brook, Hoa Kỳ, chuyên về thị giác máy tính và ứng dụng AI trong y khoa.",
    highlights: [
      "Nghiên cứu & thực tập tại VinUni, VinBigData, tập trung vào xử lý ảnh y tế.",
      "Tốt nghiệp hệ song ngành Khoa học Máy tính & Toán tại Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc (KAIST).",
      "Huy chương Vàng Olympic Toán Quốc tế (IMO) 2017.",
    ],
    quote:
      "Hồi cấp 3, mình tập trung hoàn toàn vào việc học trên lớp và các kỳ thi, nhưng sau này khi ra môi trường đại học, mình nhận ra còn rất nhiều yếu tố quan trọng khác giúp một người phát triển toàn diện. Việc tham gia các sự kiện học thuật từ sớm không chỉ giúp các bạn mở rộng tầm nhìn, mà còn rèn luyện tư duy khoa học, kỹ năng nghiên cứu và định hướng tốt hơn cho tương lai. SEAS được tổ chức với mong muốn mang đến cho học sinh miền Trung những cơ hội quý giá mà trước đây mình chưa từng có.",
    links: [],
    group: "founder",
  },
  {
    slug: "hoang-minh-duc",
    name: "Hoàng Minh Đức",
    role: "Sáng Lập & Ban Tổ Chức (Founder & Organizer)",
    bio: "Nghiên Cứu Sinh Tiến Sĩ tại MIT và CERN, Chuyên Võ Nguyên Giáp K21.",
    image: "/images/team/founders/duc-hoang.jpg",
    profileSummary:
      "Nghiên cứu sinh tiến sĩ tại Viện công nghệ Massachusetts (MIT) và nhận học bổng để chuyển tới Thuỵ Sĩ làm việc tại Hiệp hội nghiên cứu hạt nhân châu Âu (CERN), chuyên về AI cho vật lý hạt lượng tử và xử lý dữ liệu lớn.",
    highlights: [
      "Nhận học bổng Henry W Kendall (1955) và Christiaan Huygens ở MIT.",
      "Từng làm thực tập cho nhiều dự án ở phòng thí nghiệm quốc gia Fermilab và Stanford Linear Accelerator Center (SLAC) ở Mỹ.",
      "Tốt nghiệp với danh dự cao nhất (Summa Cum Laude) ở Rhodes College, nhận học bổng nghiên cứu sinh tiến sĩ vật lý ở Đại học Princeton, Cornell, UCSD.",
    ],
    quote:
      "Trích từ cuốn sách Tony Buổi Sáng mình yêu thích từ thuở nhỏ: ‘Sống trên đời phải biết ơn nghĩa với người, với vùng đất em sinh ra, với vùng đất em lớn lên là đáng quý’. Mình mong muốn tạo điều kiện cho các bạn học sinh miền Trung được tiếp cận với những công nghệ tiên tiến nhất của thế giới. Hy vọng rằng, sau này, các bạn sẽ mang tri thức ấy trở về quê hương, đóng góp và xây dựng mảnh đất đã nuôi dưỡng mình, để nơi đây ngày càng phát triển hơn.",
    links: [],
    group: "founder",
  },
  {
    slug: "tran-huu-binh-minh",
    name: "Trần Hữu Bình Minh",
    role: "Sáng Lập & Ban Tổ Chức (Founder & Organizer)",
    bio: "Researcher @ Ericsson Research, Chuyên Phan Bội Châu K43",
    image: "/images/team/founders/minh-tran-huu-binh.jpg",
    profileSummary:
      "Đây là đoạn giới thiệu tạm thời về founder của SEAS. Bạn có thể bổ sung lại thông tin chi tiết và câu chuyện riêng sau.",
    highlights: [
      "Researcher @ Ericsson Research, Chuyên Phan Bội Châu K43",
      "Chuyên viên nghiên cứu tại Ericsson Research, tập trung vào công nghệ lõi cho mạng viễn thông 6G.",
      "Ngoài Ericsson Research, từng tham gia nghiên cứu về AI và mạng viễn thông ở Sony, Aerospaceresearch.net, và Quỹ Đầu tư Công nghệ Tiên tiến Đại học Tokyo (UTEC).",
      "Nhận Học bổng Chính phủ Nhật Bản (MEXT) để hoành thành bậc Đại học & Thạc sĩ tại Viện Khoa học Tokyo (Science Tokyo). Các dự án nghiên cứu ở Viện được tài trợ bởi Bộ Nội vụ & Truyền thông Nhật Bản (MIC) và Hội Kỹ sư Điện & Điện tử Hoa Kỳ (IEEE).",
      "Đại diện Viện tại Hội thảo Hiệp hội Các trường ĐH Kỹ thuật hàng đầu khu vực Châu Á - Thái Bình Dương (AOTULE) 2023.",
      " Huy chương Vàng Olympic Vật lý Quốc tế (IPhO) 2017.",
    ],
    quote:
      "Đôi lúc một ý tưởng mà chúng ta nghe thoáng qua từ đâu đó có thể làm thay đổi cả một đời người. Mình mong muốn được nghe và học hỏi những ý tưởng hay từ các bạn, và cũng mong mỏi được truyền thật nhiều ý tưởng cũng như cảm hứng đến tất cả mọi người.",
    favQuote: {
      quote:
        "They give luck a chance. Innovation happens when people are free to think, experiment and speculate. It happens when people can trade with each other. It happens where people are relatively prosperous, not desperate. It is somewhat contagious.",
      author:
        "Matt Ridley, How Innovation Works: And Why It Flourishes in Freedom",
    },
    links: [{ label: "Website", href: "https://tranhuubinhminh.com/" }],
    group: "founder",
  },
  {
    slug: "nguyen-the-quynh",
    name: "Nguyễn Thế Quỳnh",
    role: "Sáng Lập & Ban Tổ Chức (Founder & Organizer)",
    bio: "Nghiên Cứu Sinh Tiến Sĩ tại Harvard, Chuyên Võ Nguyên Giáp K21.",
    image: "/images/team/founders/quynh-nguyen.jpeg",
    profileSummary:
      "Hiện là nghiên cứu sinh tiến sĩ ngành Vật lý lượng tử tại Đại học Harvard, nghiên cứu về điện toán lượng tử, lý thuyết khoa học máy tính, và các mối liên kết với vật lý cơ bản.",
    highlights: [
      "Tốt nghiệp cử nhân song ngành Vật lý & Khoa học máy tính tại Viện công nghệ Massachusetts (MIT).",
      "Kinh nghiệm thực tập tại Amazon Web Services (AWS) và Trung tâm nghiên cứu quốc gia Los Alamos về điện toán và học máy lượng tử.",
      "Học bổng tiến sĩ của tập đoàn công nghệ IBM và học bổng James Mills Peirce của Harvard.",
      "Giải thưởng công bố khoa học xuất sắc nhất tại Hội thảo Điện toán lượng tử Quốc tế (QIP) năm 2025.",
      "Huy chương Vàng Olympic Vật lý Quốc tế (IPhO) năm 2016 & 2017.",
    ],
    quote:
      "Ngoài yếu tố học thuật, mình hi vọng SEAS sẽ còn là cơ hội cho các bạn học sinh gặp gỡ bạn bè có cùng chí hướng, xây dựng tình bạn. Những tình bạn hình thành từ sớm (như chính 4 người trong nhóm tụi mình!) có thể trở thành mối quan hệ gắn bó lâu dài, cùng giúp đỡ nhau phát triển trong suốt sự nghiệp học tập và nghiên cứu. Hơn thế nữa, mình tin rằng đây còn là nguồn động viên tinh thần, giúp các bạn kiên trì hơn trên con đường chinh phục tri thức.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "founder",
  },
];

export const staffMembers2025: StaffMember[] = [
  {
    slug: "le-anh-vu",
    name: "Lê Anh Vũ",
    role: "Ban tổ chức tại địa phương",
    bio: "Thầy Giáo tại Trường Chuyên Võ Nguyên Giáp",
    image: "/images/team/2025/le-anh-vu.jpg",
    profileSummary: "Thầy Giáo tại Trường Chuyên Võ Nguyên Giáp",
    highlights: [],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "nguyen-thi-hai-yen",
    name: "Nguyễn Thị Hải Yến",
    role: "Ban tổ chức tại địa phương",
    bio: "Hiệu trưởng tại Trường Chuyên Võ Nguyên Giáp",
    image: "/images/team/2025/nguyen-thi-hai-yen.jpg",
    profileSummary: "Hiệu trưởng tại Trường Chuyên Võ Nguyên Giáp",
    highlights: [],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "vu-phan-khanh",
    name: "Vũ Phan Khánh",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Sinh viên năm 3, ngành Computer Science chuyên môn AI.",
    image: "/images/team/2025/khanh-vu.jpeg",
    profileSummary: "Sinh viên năm 3, ngành Computer Science chuyên môn AI.",
    highlights: [],
    quote: "",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/khanhvu26/" },
    ],
    group: "member",
  },
  {
    slug: "hoang-khoi-nguyen",
    name: "Hoàng Khôi Nguyên",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Kỹ sư AI tại Fsoft-AIC (AI Engineer, FSoft-AIC). Chuyên Võ Nguyên Giáp 17-20.",
    image: "/images/team/2025/nguyen-hoang.jpg",
    profileSummary:
      "Kỹ sư AI tại Fsoft-AIC (AI Engineer, FSoft-AIC). Chuyên Võ Nguyên Giáp 17-20.",
    highlights: [],
    quote: "",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/hknguyen20/" },
    ],
    group: "member",
  },
  {
    slug: "hoang-minh-quang",
    name: "Hoàng Minh Quang",
    role: "Trưởng Marketing (Director of Marketing)",
    bio: "Cử nhân Marketing.",
    image: "/images/team/2025/quang-hoang.jpg",
    profileSummary:
      "Cử nhân Marketing tại UEH-ISB International School of Business. Chuyên Võ Nguyên Giáp 18-21.",
    highlights: [],
    quote: "",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/quanghoang712/" },
    ],
    group: "member",
  },
  {
    slug: "dang-cao-cuong",
    name: "Đặng Cao Cường",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "AI Research Engineer, FPT Software, AI Center",
    image: "/images/team/2025/cuong-dang.jpg",
    profileSummary: "AI Research Engineer, FPT Software, AI Center.",
    highlights: [
      "Nhận bằng Cử nhân Khoa học Máy tính từ Đại học Bách Khoa Hồ Chí Minh vào năm 2023",
      "Bắt đầu chương trình Tiến sĩ tại Viện Max Planck ở Đức vào mùa thu 2025.",
      "Sau khi tốt nghiệp, anh đã làm việc hai năm tại Trung tâm AI của FPT Software với vai trò kỹ sư nghiên cứu, nơi anh nghiên cứu các yếu tố ảnh hưởng đến tính ổn định của các mô hình transformer—một trong những kiến trúc cốt lõi trong các ứng dụng AI ngày nay. Trong khuôn khổ dự án này, anh đã phát triển một công cụ để tăng tốc quá trình dự đoán tính ổn định lên đến 193 lần so với các phương pháp truyền thống, và công trình này đã được chấp nhận tại hội nghị ACL, một trong những hội nghị hàng đầu về xử lý ngôn ngữ tự nhiên và học máy.",
      "Nghiên cứu của anh tập trung vào AI Tin cậy, nhằm tăng cường sự tự tin, minh bạch và tin tưởng của người dùng vào các hệ thống AI.",
      "Anh cũng đã xây dựng nhiều chiến lược tấn công và phòng thủ để nghiên cứu hành vi của người dùng trong các hệ thống AI và giảm thiểu các rủi ro tiềm ẩn.",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "ha-xuan-thien",
    name: "Hà Xuân Thiện",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Cử nhân Khoa Học Máy Tính Chương Trình Tài Năng, Đại học Công nghệ thông tin, ĐHQG TPHCM",
    image: "/images/team/2025/ha-xuan-thien.jpeg",
    profileSummary:
      "Cử nhân Khoa Học Máy Tính Chương Trình Tài Năng, Đại học Công nghệ thông tin, ĐHQG TPHCM",
    highlights: [
      "Tham gia và đạt giải cao trong nhiều cuộc thi thuật toán",
      "Founder câu lạc bộ MaskTech Informatics Club",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "nguyen-thanh-luan",
    name: "Nguyên Thành Luân",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Giảng viên, Đại học Công nghệ Thông tin, ĐHQG-HCM",
    image: "/images/team/2025/luan-nguyen.jpg",
    profileSummary: "Giảng viên, Đại học Công nghệ Thông tin, ĐHQG-HCM.",
    highlights: [
      "Thủ khoa tốt nghiệp cử nhân ngành CNTT, trường ĐH CNTT, ĐHQG-HCM.",
      "Anh tốt nghiệp thạc sĩ ngành Khoa học Thông tin tại Viện Khoa học và Kỹ thuật Tiên tiến Nhật Bản",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "tran-hai-nam",
    name: "Trần Hải Nam",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Kỹ sư AI tập sự, Viettel Group",
    image: "/images/team/2025/nam-tran.jpg",
    profileSummary: "Kỹ sư AI tập sự, Viettel Group",
    highlights: [
      "Chuyên môn của mình về Thị giác máy tính và các ứng dụng AI thực tế, đặc biệt trong xây dựng hệ thống Camera AI.",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "huynh-vu-khoi-nguyen",
    name: "Huỳnh Vũ Khôi Nguyên",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Trợ lý nghiên cứu, Centre for Quantum Technologies",
    image: "/images/team/2025/nguyen-huynh.jpg",
    profileSummary: "Trợ lý nghiên cứu, Centre for Quantum Technologies ",
    highlights: [
      "Hiện là trợ lý nghiên cứu tại Centre for Quantum Technologies, Singapore.",
      "Nghiên cứu của mình thiên về lý thuyết thông tin lượng tử và các mối liên hệ tới các bài toán trong hệ nhiều hạt.",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "ngo-hong-phuc",
    name: "Ngô Hồng Phúc",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Research Assistant, MIT",
    image: "/images/team/2025/phuc-ngo.jpg",
    profileSummary: "Research Assistant, MIT",
    highlights: [
      "Chào mọi người, mình là Phúc! Mình đã có 3 năm làm nghiên cứu tại MIT BCS và CSAIL, nơi mình có cơ hội làm việc ở giao điểm của nhiều lĩnh vực như computer vision, cognitive science, và NLP",
      "Các dự án của mình tập trung vào việc đo lường sự khác biệt giữa con người và mô hình máy tính ở cả cấp độ neuron và hành vi. Khi mình không chạy nghiên cứu thì mình hay tập gym và leo núi.",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "tran-ta-quang-minh",
    name: "Trần Tạ Quang Minh",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Chuyên Ngành: Cử nhân Trí Tuệ Nhân Tạo từ Đại học Khoa học Tự nhiên, ĐHQG TPHCM",
    image: "/images/team/2025/quang-minh.jpeg",
    profileSummary:
      "Chuyên Ngành: Cử nhân Trí Tuệ Nhân Tạo từ Đại học Khoa học Tự nhiên, ĐHQG TPHCM",
    highlights: [
      "Tham gia nhiều cuộc thi về AI và đạt giải cao ở các vòng chung kết",
      "GPA: 9.34/10",
      "Top 3% sinh viên Khoa CNTT năm học 2023–2024",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "bui-ngoc-duc-thien",
    name: "Bùi Ngọc Đức Thiện",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Học bổng Toàn phần Du học cấp 3 United World College (UWC)",
    image: "/images/team/2025/thien-bui.jpg",
    profileSummary:
      "Học bổng Toàn phần Du học cấp 3 United World College (UWC)",
    highlights: [
      "Mình tên là Đức Thiện, một cậu bạn học sinh lớp 12 đến từ Tây Nguyên đại ngàn đầy nắng và gió!!",
      "Mình hiện đang là thực tập sinh cho Lirvana Labs, một công ty công nghệ tại thung lũng Silicon chuyên về một ứng dụng dạy học sử dụng công nghệ AI và Machine Learning.",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "chau-nguyen-to-trinh",
    name: "Châu Nguyễn Tố Trinh",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Sinh viên năm nhất ngành Khoa học máy tính, Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)",
    image: "/images/team/2025/trinh-chau.jpg",
    profileSummary:
      "Sinh viên năm nhất ngành Khoa học máy tính, Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)",
    highlights: [
      "Hiện tại mình đang là sinh viên ngành Khoa học máy tính tại Trường Đại học Công nghệ - ĐHQGHN (VNU-UET). 💡 Mình hiện đang tham gia nghiên cứu tại SQA Lab.",
    ],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "pham-quoc-trung",
    name: "Phạm Quốc Trung",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Kỹ sư tại Vinbrain-Nvidia Vietnam",
    image: "/images/team/2025/trung-pham.jpg",
    profileSummary: "Kỹ sư tại Vinbrain-Nvidia Vietnam",
    highlights: [],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "do-hoang-khanh-linh",
    name: "Đỗ Hoàng Khánh Linh",
    role: "Fundraiser",
    bio: "Concordia International School Hanoi",
    image: "/images/team/2025/do-hoang-khanh-linh.jpg",
    profileSummary: "Concordia International School Hanoi",
    highlights: [],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "hoang-nhat-minh",
    name: "Hoàng Nhật Minh",
    role: "Graphic Designer",
    bio: "Chuyên Võ Nguyên Giáp 24-27",
    image: "/images/team/2025/minh-hoang.jpg",
    profileSummary: "Chuyên Võ Nguyên Giáp 24-27",
    highlights: [],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "bui-nguyen-thao-nhi",
    name: "Bùi Nguyễn Thảo Nhi",
    role: "Media, Design & Photographer",
    bio: "Chuyên Võ Nguyên Giáp 22-25",
    image: "/images/team/2025/nhi-bui.jpg",
    profileSummary: "Chuyên Võ Nguyên Giáp 22-25",
    highlights: [],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "nguyen-nu-thao-vy",
    name: "Nguyễn Nữ Thảo Vy",
    role: "Graphic Designer",
    bio: "Chuyên Võ Nguyên Giáp 23-26",
    image: "/images/team/2025/vy-nguyen.jpg",
    profileSummary: "Chuyên Võ Nguyên Giáp 23-26",
    highlights: [],
    quote: "",
    links: [],
    group: "member",
  },
  {
    slug: "vo-le-yen-nhi",
    name: "Võ Lê Yến Nhi",
    role: "Graphic Designer",
    bio: "Chuyên Võ Nguyên Giáp 23-26",
    image: "/images/team/2025/yen-nhi.jpg",
    profileSummary: "Chuyên Võ Nguyên Giáp 23-26",
    highlights: [
      "You can call me chishiya (チシヤ), ain’t nothing but a fruit lover (๑>◡<๑)",
    ],
    quote: "",
    links: [],
    group: "member",
  },
];

export const allStaffProfiles: StaffMember[] = [
  ...staffFounders,
  ...staffMembers2025,
];

export function getStaffMemberBySlug(slug: string) {
  return allStaffProfiles.find((member) => member.slug === slug);
}
