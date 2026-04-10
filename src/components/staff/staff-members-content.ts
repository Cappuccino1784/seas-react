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
  highlights: string[];
  quote: string;
  links?: StaffLink[];
  group: "founder" | "member";
};

export const staffFounders: StaffMember[] = [
  {
    slug: "nguyen-canh-hoang",
    name: "Nguyễn Cảnh Hoàng",
    role: "Sáng Lập & Ban Tổ Chức (Founder & Organizer)",
    bio: "Đồng sáng lập SEAS và phụ trách định hướng chiến lược chương trình.",
    image: "/images/team/founders/hoang-seas.jpg",
    profileSummary:
      "Đây là đoạn giới thiệu tạm thời về founder của SEAS. Bạn có thể thêm thông tin chi tiết về hành trình học tập, nghiên cứu và đóng góp cho chương trình sau.",
    highlights: [
      "Placeholder thông tin về tầm nhìn và vai trò sáng lập SEAS.",
      "Placeholder thông tin về kinh nghiệm học thuật, nghiên cứu hoặc công tác chuyên môn.",
      "Placeholder thông tin về các dự án, chương trình hoặc sáng kiến đã đồng hành.",
      "Placeholder thông tin về thành tích nổi bật và đóng góp cho cộng đồng.",
    ],
    quote:
      "Placeholder quote: một chia sẻ ngắn về tầm nhìn, giáo dục và sự phát triển của cộng đồng học sinh.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "founder",
  },
  {
    slug: "hoang-minh-duc",
    name: "Hoàng Minh Đức",
    role: "Sáng Lập & Ban Tổ Chức (Founder & Organizer)",
    bio: "Đồng sáng lập SEAS và phụ trách kết nối học thuật, truyền cảm hứng.",
    image: "/images/team/founders/Duc_Hoang.jpg",
    profileSummary:
      "Đây là đoạn giới thiệu tạm thời về founder của SEAS. Bạn có thể cập nhật thông tin cá nhân, học tập và nghiên cứu sau.",
    highlights: [
      "Placeholder thông tin về tầm nhìn và đóng góp cho SEAS.",
      "Placeholder thông tin về kinh nghiệm nghiên cứu, học thuật hoặc chuyên môn.",
      "Placeholder thông tin về dự án, cộng đồng hoặc hoạt động nổi bật.",
      "Placeholder thông tin về các thành tích và cột mốc quan trọng.",
    ],
    quote:
      "Placeholder quote: một chia sẻ ngắn về câu chuyện không ngừng học hỏi và xây dựng cơ hội cho học sinh.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "founder",
  },
  {
    slug: "tran-huu-binh-minh",
    name: "Trần Hữu Bình Minh",
    role: "Sáng Lập & Ban Tổ Chức (Founder & Organizer)",
    bio: "Đồng sáng lập SEAS và đồng hành trong phát triển học thuật, công nghệ.",
    image: "/images/team/founders/minh-tran-huu-binh.jpg",
    profileSummary:
      "Đây là đoạn giới thiệu tạm thời về founder của SEAS. Bạn có thể bổ sung lại thông tin chi tiết và câu chuyện riêng sau.",
    highlights: [
      "Placeholder thông tin về kinh nghiệm học thuật và nghiên cứu.",
      "Placeholder thông tin về vai trò trong xây dựng chương trình.",
      "Placeholder thông tin về các sáng kiến, dự án và đóng góp cộng đồng.",
      "Placeholder thông tin về thành tích và cột mốc nổi bật.",
    ],
    quote:
      "Placeholder quote: một chia sẻ ngắn về trí tuệ, sự bền bỉ và truyền cảm hứng.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "founder",
  },
  {
    slug: "nguyen-the-quynh",
    name: "Nguyễn Thế Quỳnh",
    role: "Sáng Lập & Ban Tổ Chức (Founder & Organizer)",
    bio: "Đồng sáng lập SEAS và hỗ trợ xây dựng định hướng vận hành, tổ chức.",
    image: "/images/team/founders/Quynh-Nguyen.jpeg",
    profileSummary:
      "Đây là đoạn giới thiệu tạm thời về founder của SEAS. Bạn có thể bổ sung lại thông tin chi tiết và câu chuyện riêng sau.",
    highlights: [
      "Placeholder thông tin về kinh nghiệm học thuật và nghiên cứu.",
      "Placeholder thông tin về vai trò trong xây dựng chương trình.",
      "Placeholder thông tin về các sáng kiến, dự án và đóng góp cộng đồng.",
      "Placeholder thông tin về thành tích và cột mốc nổi bật.",
    ],
    quote:
      "Placeholder quote: một chia sẻ ngắn về trí tuệ, sự bền bỉ và truyền cảm hứng.",
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
    profileSummary: "Đây là đoạn giới thiệu tạm thời về thành viên SEAS. Bạn có thể thay thế phần này bằng thông tin chi tiết về hành trình, kinh nghiệm và đóng góp của nhân sự sau này.",
    highlights: [
      "Placeholder thông tin về vai trò và trách nhiệm trong chương trình SEAS.",
      "Placeholder thông tin về kinh nghiệm học thuật, giảng dạy hoặc vận hành dự án.",
      "Placeholder thông tin về cách thành viên đồng hành cùng học viên và cộng đồng.",
      "Placeholder thông tin về thành tích nổi bật, dự án, hoặc sự kiện đã tham gia.",
    ],
    quote: "Placeholder quote: một chia sẻ ngắn gọn về động lực, tầm nhìn và những giá trị mà thành viên muốn mang đến cho SEAS.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "nguyen-thi-hai-yen",
    name: "Nguyễn Thị Hải Yến",
    role: "Ban tổ chức tại địa phương",
    bio: "Hiệu trưởng tại Trường Chuyên Võ Nguyên Giáp",
    image: "/images/team/2025/nguyen-thi-hai-yen.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về thành viên SEAS. Bạn có thể cập nhật lại bằng thông tin chi tiết và góc nhìn riêng của nhân sự này.",
    highlights: [
      "Placeholder thông tin về kinh nghiệm lãnh đạo, điều phối và kết nối giáo dục.",
      "Placeholder thông tin về đóng góp cho học viên và phát triển chương trình.",
      "Placeholder thông tin về định hướng chiến lược hoặc giải pháp đã thực hiện.",
      "Placeholder thông tin về các cột mốc và thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ ngắn về giáo dục, cơ hội và sự phát triển của học sinh.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "vu-phan-khanh",
    name: "Vũ Phan Khánh",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Sinh viên năm 3, ngành Computer Science chuyên môn AI.",
    image: "/images/team/2025/khanh-vu.jpeg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "hoang-khoi-nguyen",
    name: "Hoàng Khôi Nguyên",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Kỹ sư AI tại Fsoft-AIC (AI Engineer, FSoft-AIC). Chuyên Võ Nguyên Giáp 17-20.",
    image: "/images/team/2025/Nguyen-Hoang.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời cho hồ sơ thành viên. Bạn có thể thêm thông tin về công việc, nghiên cứu và hành trình nghề nghiệp sau.",
    highlights: [
      "Placeholder thông tin về kinh nghiệm công nghiệp và vai trò chuyên môn.",
      "Placeholder thông tin về cách hỗ trợ học viên tiếp cận AI thực tế.",
      "Placeholder thông tin về dự án, sản phẩm hoặc lĩnh vực đã tham gia.",
      "Placeholder thông tin về thành tích nổi bật và đóng góp cho cộng đồng.",
    ],
    quote: "Placeholder quote: một chia sẻ về trí tuệ nhân tạo, học tập và cơ hội phát triển.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "hoang-minh-quang",
    name: "Hoàng Minh Quang",
    role: "Trưởng Marketing (Director of Marketing)",
    bio: "Cử nhân Marketing.",
    image: "/images/team/2025/Quang-Hoang.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về thành viên marketing. Bạn có thể bổ sung tầm nhìn, chuyên môn và câu chuyện cá nhân sau.",
    highlights: [
      "Placeholder thông tin về chiến lược truyền thông và xây dựng hình ảnh SEAS.",
      "Placeholder thông tin về kinh nghiệm marketing, nội dung hoặc sự kiện.",
      "Placeholder thông tin về đóng góp trong các chiến dịch và hoạt động cộng đồng.",
      "Placeholder thông tin về các cột mốc và kết quả nổi bật.",
    ],
    quote: "Placeholder quote: một chia sẻ ngắn về truyền thông, giáo dục và tác động cộng đồng.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "dang-cao-cuong",
    name: "Đặng Cao Cường",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "AI Research Engineer, FPT Software, AI Center",
    image: "/images/team/2025/cuong-dang.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "ha-xuan-thien",
    name: "Hà Xuân Thiện",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "🎓 Chuyên Ngành: Cử nhân Khoa Học Máy Tính Chương Trình Tài Năng, Đại học Công nghệ thông tin, ĐHQG TPHCM",
    image: "/images/team/2025/ha-xuan-thien.jpeg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "nguyen-thanh-luan",
    name: "Nguyên Thành Luân",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Giảng viên, Đại học Công nghệ Thông tin, ĐHQG-HCM",
    image: "/images/team/2025/luan-nguyen.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "tran-hai-nam",
    name: "Trần Hải Nam",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Kỹ sư AI tập sự, Viettel Group",
    image: "/images/team/2025/nam-tran.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "huynh-vu-khoi-nguyen",
    name: "Huỳnh Vũ Khôi Nguyên",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Trợ lý nghiên cứu, Centre for Quantum Technologies",
    image: "/images/team/2025/nguyen-huynh.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "ngo-hong-phuc",
    name: "Ngô Hồng Phúc",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Research Assistant, MIT",
    image: "/images/team/2025/phuc-ngo.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "tran-ta-quang-minh",
    name: "Trần Tạ Quang Minh",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "🎓 Chuyên Ngành: Cử nhân Trí Tuệ Nhân Tạo từ Đại học Khoa học Tự nhiên, ĐHQG TPHCM",
    image: "/images/team/2025/quang-minh.jpeg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "bui-ngoc-duc-thien",
    name: "Bùi Ngọc Đức Thiện",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Học bổng Toàn phần Du học cấp 3 United World College (UWC)",
    image: "/images/team/2025/thien-bui.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "chau-nguyen-to-trinh",
    name: "Châu Nguyễn Tố Trinh",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Sinh viên năm nhất ngành Khoa học máy tính, Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)",
    image: "/images/team/2025/trinh-chau.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "pham-quoc-trung",
    name: "Phạm Quốc Trung",
    role: "Trợ Giảng (Teaching Assistant)",
    bio: "Kỹ sư tại Vinbrain-Nvidia Vietnam",
    image: "/images/team/2025/trung-pham.jpg",
    profileSummary: "Đây là đoạn giới thiệu tạm thời về trợ giảng của SEAS. Bạn có thể thêm thông tin cá nhân, chuyên môn và đóng góp cụ thể sau.",
    highlights: [
      "Placeholder thông tin về nền tảng học tập và chuyên môn liên quan.",
      "Placeholder thông tin về kinh nghiệm hỗ trợ học viên và giảng dạy.",
      "Placeholder thông tin về kỹ năng kỹ thuật hoặc hướng nghiên cứu nổi bật.",
      "Placeholder thông tin về các dự án, CLB hoặc thành tích liên quan.",
    ],
    quote: "Placeholder quote: một chia sẻ về việc dạy, học và truyền cảm hứng cho học viên.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "do-hoang-khanh-linh",
    name: "Đỗ Hoàng Khánh Linh",
    role: "Fundraiser",
    bio: "Concordia International School Hanoi",
    image: "/images/team/2025/do-hoang-khanh-linh.jpg",
    profileSummary: "Nội dung giới thiệu tạm thời cho thành viên SEAS. Bạn có thể cập nhật hồ sơ này sau với thông tin cụ thể hơn.",
    highlights: [
      "Placeholder thông tin về vai trò hỗ trợ sự kiện và logistics.",
      "Placeholder thông tin về kinh nghiệm tổ chức, điều phối hoặc quản lý.",
      "Placeholder thông tin về những hoạt động đã đóng góp cho chương trình.",
      "Placeholder thông tin về thành tích và mục tiêu phát triển.",
    ],
    quote: "Placeholder quote: một chia sẻ ngắn về sự chu đáo và tinh thần đồng hành.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "hoang-nhat-minh",
    name: "Hoàng Nhật Minh",
    role: "Graphic Designer",
    bio: "Chuyên Võ Nguyên Giáp 24-27",
    image: "/images/team/2025/minh-hoang.jpg",
    profileSummary: "Nội dung giới thiệu tạm thời cho thành viên SEAS. Bạn có thể cập nhật hồ sơ này sau với thông tin cụ thể hơn.",
    highlights: [
      "Placeholder thông tin về vai trò hỗ trợ sự kiện và logistics.",
      "Placeholder thông tin về kinh nghiệm tổ chức, điều phối hoặc quản lý.",
      "Placeholder thông tin về những hoạt động đã đóng góp cho chương trình.",
      "Placeholder thông tin về thành tích và mục tiêu phát triển.",
    ],
    quote: "Placeholder quote: một chia sẻ ngắn về sự chu đáo và tinh thần đồng hành.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "bui-nguyen-thao-nhi",
    name: "Bùi Nguyễn Thảo Nhi",
    role: "Media, Design & Photographer",
    bio: "Chuyên Võ Nguyên Giáp 22-25",
    image: "/images/team/2025/nhi-bui.jpg",
    profileSummary: "Nội dung giới thiệu tạm thời cho thành viên SEAS. Bạn có thể cập nhật hồ sơ này sau với thông tin cụ thể hơn.",
    highlights: [
      "Placeholder thông tin về vai trò hỗ trợ sự kiện và logistics.",
      "Placeholder thông tin về kinh nghiệm tổ chức, điều phối hoặc quản lý.",
      "Placeholder thông tin về những hoạt động đã đóng góp cho chương trình.",
      "Placeholder thông tin về thành tích và mục tiêu phát triển.",
    ],
    quote: "Placeholder quote: một chia sẻ ngắn về sự chu đáo và tinh thần đồng hành.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "nguyen-nu-thao-vy",
    name: "Nguyễn Nữ Thảo Vy",
    role: "Graphic Designer",
    bio: "Chuyên Võ Nguyên Giáp 23-26",
    image: "/images/team/2025/vy-nguyen.jpg",
    profileSummary: "Nội dung giới thiệu tạm thời cho thành viên SEAS. Bạn có thể cập nhật hồ sơ này sau với thông tin cụ thể hơn.",
    highlights: [
      "Placeholder thông tin về vai trò hỗ trợ sự kiện và logistics.",
      "Placeholder thông tin về kinh nghiệm tổ chức, điều phối hoặc quản lý.",
      "Placeholder thông tin về những hoạt động đã đóng góp cho chương trình.",
      "Placeholder thông tin về thành tích và mục tiêu phát triển.",
    ],
    quote: "Placeholder quote: một chia sẻ ngắn về sự chu đáo và tinh thần đồng hành.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
    group: "member",
  },
  {
    slug: "vo-le-yen-nhi",
    name: "Võ Lê Yến Nhi",
    role: "Graphic Designer",
    bio: "Chuyên Võ Nguyên Giáp 23-26",
    image: "/images/team/2025/yen-nhi.jpg",
    profileSummary: "Nội dung giới thiệu tạm thời cho thành viên SEAS. Bạn có thể cập nhật hồ sơ này sau với thông tin cụ thể hơn.",
    highlights: [
      "Placeholder thông tin về vai trò hỗ trợ sự kiện và logistics.",
      "Placeholder thông tin về kinh nghiệm tổ chức, điều phối hoặc quản lý.",
      "Placeholder thông tin về những hoạt động đã đóng góp cho chương trình.",
      "Placeholder thông tin về thành tích và mục tiêu phát triển.",
    ],
    quote: "Placeholder quote: một chia sẻ ngắn về sự chu đáo và tinh thần đồng hành.",
    links: [
      { label: "LinkedIn", href: "Thêm link LinkedIn tại đây" },
      { label: "GitHub", href: "Thêm link GitHub tại đây" },
      { label: "Website", href: "Thêm website cá nhân tại đây" },
    ],
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
