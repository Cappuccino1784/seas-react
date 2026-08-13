export type Project = {
  id: number;
  title: string;
  summary?: string[];
  context: string[];
  solution: string[];
  goal: string[];
  application: string[];
  interview?: {
    interviewee: string;
    intervieweePhotoUrl: string;
    questions: {
      question: string;
      answer: string[];
    }[];
  };
  faq?: {
    question: string;
    answer: string[];
    author?: string;
  }[];
  teamMembers: {
    instructors: string[];
    members: string[];
  };
  slideThumbnail: string;
  slidePdf?: string;
  videoLink?: string;
  slug: string;
};

export const projects: Record<"SEAS 2025" | "SEAS 2026", Project[]> = {
  "SEAS 2025": [
    // Nhóm 1 - PHÂN LOẠI CÁ TRONG THỜI GIAN THỰC BẰNG AI
    {
      id: 1,
      title: "PHÂN LOẠI CÁ TRONG THỜI GIAN THỰC BẰNG AI",
      context: [
        "Việc nhận diện và phân loại cá có ý nghĩa quan trọng đối với ngư dân, nhà nghiên cứu và các hoạt động quản lý nguồn lợi thủy sản",
        "Trong thực tế, việc xác định loài cá bằng quan sát thủ công thường mất thời gian và dễ nhầm lẫn",
        "Vì vậy, cần một hệ thống có thể hỗ trợ phân loại cá nhanh chóng và chính xác ngay từ hình ảnh",
        "Cần xây dựng một mô hình có khả năng nhận diện loài cá trong thời gian thực",
        "Hệ thống không chỉ phải xác định đúng loài mà còn cần khoanh vùng chính xác đối tượng trong ảnh",
        "Đồng thời, dữ liệu huấn luyện cần được xử lý phù hợp để không bỏ qua các loài cá hiếm",
      ],
      solution: [
        "Ứng dụng thị giác máy tính để phân loại cá từ hình ảnh",
        "Sử dụng mạng nơ-ron tích chập CNN để trích xuất đặc trưng và nhận diện loài cá",
        "Kết hợp kỹ thuật hồi quy khung bao để xác định chính xác vị trí đối tượng trong ảnh",
        "Điều chỉnh dữ liệu nhằm xử lý sự mất cân bằng giữa các nhóm loài cá",
        "Mô hình hoạt động qua nhiều bước: nhận diện các đặc trưng quan trọng của cá, loại bỏ nhiễu nền, chuyển ảnh thành dữ liệu số và tính xác suất cho từng loài",
        "Dữ liệu hình ảnh được chuẩn bị và tối ưu để mô hình học được cả những loài cá phổ biến lẫn ít gặp",
        "Kết quả đầu ra bao gồm cả tên loài dự đoán và vùng khoanh đối tượng trên ảnh",
      ],
      goal: [
        "Phân loại cá nhanh và chính xác hơn từ hình ảnh",
        "Hỗ trợ nhận diện cá theo thời gian thực",
        "Tăng hiệu quả trong việc xác định loài ở cấp họ và cấp loài",
        "Tối ưu khả năng chạy mô hình trên thiết bị di động",
      ],
      application: [
        "Hỗ trợ ngư dân xác định loài cá ngay tại hiện trường",
        "Có thể ứng dụng trong nghiên cứu thủy sản, bảo tồn đa dạng sinh học và quản lý nguồn lợi biển",
        "Tạo tiền đề phát triển thành ứng dụng di động hỗ trợ nhận diện cá thông minh",
        "Góp phần đưa AI vào các bài toán thực tiễn trong lĩnh vực nông nghiệp và thủy sản",
      ],
      teamMembers: {
        instructors: ["Trịnh", "Quang Minh", "Nam", "Đức"],
        members: [
          "Nguyễn Tấn Minh",
          "Trương Phương Nam",
          "Hoàng Nguyên Anh",
          "Nguyễn Như Quỳnh",
          "Đào Quang Tùng",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2025/PHÂN LOẠI CÁ TRONG THỜI GIAN THỰC BẰNG AI.png",
      slidePdf:
        "/pdfs/PROJECTS 2025/Nhóm 1. PHÂN LOẠI CÁ TRONG THỜI GIAN THỰC BẰNG AI.pdf",
      videoLink: "https://www.youtube.com/watch?v=31drH9SzDQg",
      slug: "phan-loai-ca-trong-thoi-gian-thuc-bang-ai",
    },
    // Nhóm 2 - XỬ LÝ NGÔN NGỮ MIỀN TRUNG
    {
      id: 2,
      title: "XỬ LÝ NGÔN NGỮ MIỀN TRUNG",
      context: [
        "Tiếng nói miền Trung có nhiều đặc điểm riêng về phát âm, ngữ điệu và cách biểu đạt",
        "Trong khi đó, các hệ thống nhận diện giọng nói hiện nay thường được tối ưu cho tiếng Việt phổ thông",
        "Vì vậy, việc xây dựng một mô hình có thể nhận diện và chuẩn hóa ngôn ngữ miền Trung là rất cần thiết",
        "Giọng nói miền Trung có sự khác biệt rõ rệt giữa các địa phương, độ tuổi và giới tính",
        "Điều này gây khó khăn cho các hệ thống nhận diện giọng nói thông thường",
        "Cần một mô hình có khả năng nhận diện chính xác giọng nói miền Trung và chuyển đổi thành văn bản dễ hiểu hơn",
      ],
      solution: [
        "Xây dựng hệ thống xử lý ngôn ngữ nói dành riêng cho miền Trung",
        "Sử dụng mô hình PhoWhisper để nhận diện giọng nói và chuyển âm thanh thành văn bản",
        "Huấn luyện mô hình trên dữ liệu giọng nói đa dạng nhằm tăng khả năng nhận diện các biến thể vùng miền",
        "Thu thập dữ liệu giọng nói từ nhiều nguồn, bao gồm nhiều độ tuổi và giới tính khác nhau",
        "Tiền xử lý và chuẩn hóa dữ liệu âm thanh trước khi huấn luyện",
        "Mô hình được tinh chỉnh để nhận diện các cách phát âm đặc trưng của miền Trung và hiển thị kết quả dưới dạng văn bản",
      ],
      goal: [
        "Nhận diện chính xác giọng nói miền Trung hơn so với các hệ thống thông thường",
        "Chuẩn hóa ngôn ngữ nói thành văn bản dễ đọc và dễ hiểu",
        "Mở rộng khả năng hỗ trợ cho nhiều tỉnh thành và nhiều phong cách diễn đạt khác nhau",
      ],
      application: [
        "Góp phần bảo tồn và số hóa ngôn ngữ vùng miền tại Việt Nam",
        "Có thể ứng dụng trong trợ lý ảo, nhập liệu bằng giọng nói và các hệ thống chuyển giọng nói thành văn bản",
        "Hỗ trợ người dùng miền Trung tiếp cận công nghệ ngôn ngữ tự nhiên thuận tiện hơn",
        "Tạo nền tảng để phát triển các hệ thống AI ngôn ngữ toàn diện và gần gũi hơn với người Việt",
      ],
      teamMembers: {
        instructors: ["Luân", "Hoàng", "Hoàng K. Nguyễn"],
        members: [
          "Nguyễn Minh Anh",
          "Nguyễn Thị Nguyệt Tâm",
          "Trần Đình Quân",
          "Phan Thanh Đạt",
          "Lê Quang Huy",
          "Trần Việt Hưng",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2025/XỬ LÝ NGÔN NGỮ MIỀN TRUNG.png",
      slidePdf: "/pdfs/PROJECTS 2025/Nhóm 2. XỬ LÝ NGÔN NGỮ MIỀN TRUNG.pdf",
      videoLink: "https://www.youtube.com/watch?v=rJ9D4ZMR9Qg&t=56s",
      slug: "xu-ly-ngon-ngu-mien-trung",
    },
    // Nhóm 3 - MẠNG NƠ-RON CHO VẬT LÝ NHIỀU HẠT LƯỢNG TỬ
    {
      id: 3,
      title: "MẠNG NƠ-RON CHO VẬT LÝ NHIỀU HẠT LƯỢNG TỬ",
      context: [
        "Vật lý nhiều hạt lượng tử là một lĩnh vực quan trọng trong nghiên cứu vật liệu tiên tiến, đặc biệt là vật liệu siêu dẫn",
        "Các hệ lượng tử có khả năng tồn tại chồng chập nhiều trạng thái, khiến việc mô phỏng và tính toán trở nên rất phức tạp",
        "Việc tìm ra trạng thái năng lượng thấp nhất của hệ có ý nghĩa lớn trong nghiên cứu tính chất vật liệu và ứng dụng công nghệ",
        "Bài toán xác định trạng thái cơ bản của hệ nhiều hạt có độ phức tạp rất cao",
        "Các phương pháp tính toán truyền thống thường gặp khó khăn khi số lượng hạt tăng lên",
        "Vì vậy, cần một cách tiếp cận mới để dự đoán và tối ưu năng lượng hiệu quả hơn",
      ],
      solution: [
        "Kết hợp trí tuệ nhân tạo với vật lý lượng tử để giải bài toán nhiều hạt",
        "Sử dụng mạng nơ-ron để dự đoán và xấp xỉ ma trận năng lượng của hệ",
        "Ứng dụng mô hình Heisenberg làm nền tảng mô phỏng tương tác trong hệ nhiều hạt lượng tử",
        "Bài toán được quy về việc tìm giá trị nhỏ nhất của một phương trình năng lượng thông qua các biến đầu vào",
        "Mô hình AI được huấn luyện để học và xấp xỉ các trạng thái năng lượng của hệ",
        "Cách tiếp cận này tận dụng khả năng học mẫu của mạng nơ-ron trong không gian tính toán rất lớn và phức tạp",
      ],
      goal: [
        "Tìm ra trạng thái năng lượng thấp nhất của hệ nhiều hạt một cách hiệu quả hơn",
        "Giảm khó khăn tính toán so với các phương pháp truyền thống",
        "Mở ra hướng tiếp cận mới trong việc ứng dụng AI vào các bài toán vật lý lượng tử",
      ],
      application: [
        "Góp phần hỗ trợ nghiên cứu vật liệu mới, đặc biệt là vật liệu siêu dẫn",
        "Có tiềm năng ứng dụng trong các bài toán tối ưu phức tạp của vật lý hiện đại",
        "Mở rộng khả năng kết hợp giữa khoa học máy tính, trí tuệ nhân tạo và điện toán lượng tử",
        "Tạo nền tảng cho các nghiên cứu sâu hơn về nhiều dạng hệ lượng tử khác nhau",
      ],
      teamMembers: {
        instructors: ["Thế Quỳnh", "Huỳnh V. K. Nguyên", "Bình Minh"],
        members: [
          "Nguyễn Thị Linh Đan",
          "Nguyễn Minh Đức",
          "Nguyễn Xuân Hoàng",
          "Nguyễn Thái Sơn",
          "Đặng Hữu Thịnh",
          "Đỗ Việt Hoàng Long",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2025/MẠNG NƠ-RON CHO VẬT LÝ NHIỀU HẠT LƯỢNG TỬ.png",
      slidePdf:
        "/pdfs/PROJECTS 2025/Nhóm 3. MẠNG NƠ-RON CHO VẬT LÝ NHIỀU HẠT LƯỢNG TỬ.pdf",
      videoLink: "https://www.youtube.com/watch?v=1YikVMO2c04",
      slug: "mang-no-ron-cho-vat-ly-nhieu-hat-luong-tu",
    },
    // Nhóm 4 - ỨNG DỤNG HỌC KHÔNG GIÁM SÁT TRONG XỬ LÝ ẢNH MƯA
    {
      id: 4,
      title: "ỨNG DỤNG HỌC KHÔNG GIÁM SÁT TRONG XỬ LÝ ẢNH MƯA",
      context: [
        "Hình ảnh ngoài trời thường bị ảnh hưởng bởi mưa, làm giảm độ rõ nét và chất lượng quan sát",
        "Điều này gây khó khăn cho các hệ thống thị giác máy tính như camera an ninh và xe tự lái",
        "Vì vậy, việc loại bỏ nhiễu mưa khỏi ảnh là một bài toán quan trọng trong xử lý ảnh",
        "Cần loại bỏ vệt mưa khỏi hình ảnh mà vẫn giữ được màu sắc, chi tiết và bố cục ban đầu",
        "Trong thực tế, rất khó thu thập đầy đủ cặp dữ liệu ảnh mưa và ảnh sạch tương ứng",
        "Do đó, cần một phương pháp có thể học hiệu quả mà không phụ thuộc nhiều vào dữ liệu gán nhãn",
      ],
      solution: [
        "Ứng dụng học không giám sát để xử lý ảnh mưa",
        "Sử dụng cơ chế học chuyển đổi giữa miền ảnh mưa và miền ảnh sạch",
        "Mô hình học cách nhận diện đặc trưng của ảnh có mưa, sau đó chuyển đổi để tạo ra ảnh rõ nét hơn",
        "Kết hợp thêm kỹ thuật học trên các vùng nhỏ của ảnh để tăng độ chính xác ở cấp độ chi tiết",
        "Áp dụng mô hình học máy không giám sát để tìm quy luật từ dữ liệu mà không cần gán nhãn đầy đủ",
        "Sử dụng cơ chế đối chiếu hai chiều để kiểm tra ảnh sau khi chuyển đổi có giữ được nội dung gốc hay không",
        "Khai thác thông tin ở cấp độ patch để bảo toàn độ sắc nét và tính tự nhiên của hình ảnh",
      ],
      goal: [
        "Loại bỏ hiệu quả vệt mưa trong ảnh",
        "Giữ lại tối đa màu sắc, chi tiết và cấu trúc ban đầu của hình ảnh",
        "Cải thiện chất lượng đầu vào cho các hệ thống nhận diện và phân tích hình ảnh",
      ],
      application: [
        "Giúp camera an ninh nhận diện đối tượng tốt hơn trong điều kiện thời tiết xấu",
        "Hỗ trợ xe tự lái và các hệ thống quan sát tự động hoạt động ổn định hơn",
        "Nâng cao chất lượng thẩm mỹ và khả năng sử dụng của hình ảnh sau xử lý",
        "Có tiềm năng mở rộng sang các điều kiện thời tiết khác như sương mù, mưa lớn và tuyết",
      ],
      teamMembers: {
        instructors: ["Vĩnh", "Đức Thiện", "Xuân Thiện"],
        members: [
          "Trần Minh Hậu",
          "Đào Thị Quỳnh Anh",
          "Nguyễn Phúc Lương",
          "Đinh Hải Lý",
          "Hoàng Kim Lộc",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2025/ỨNG DỤNG HỌC KHÔNG GIÁM SÁT TRONG XỬ LÝ ẢNH MƯA.png",
      slidePdf:
        "/pdfs/PROJECTS 2025/Nhóm 4. ỨNG DỤNG HỌC KHÔNG GIÁM SÁT TRONG XỬ LÝ ẢNH MƯA.pdf",
      videoLink: "https://www.youtube.com/watch?v=gOqhEDAfMSs",
      slug: "ung-dung-hoc-khong-giam-sat-trong-xu-ly-anh-mua",
    },
    // Nhóm 5 - MẠNG NƠ-RON ĐỒ THỊ VÀ TÍNH DỄ BỊ TỔN THƯƠNG TRONG ỨNG DỤNG THỰC TẾ
    {
      id: 5,
      title:
        "MẠNG NƠ-RON ĐỒ THỊ VÀ TÍNH DỄ BỊ TỔN THƯƠNG TRONG ỨNG DỤNG THỰC TẾ",
      context: [
        "Mạng nơ-ron đồ thị (GNN) là một dạng trí tuệ nhân tạo dùng để phân tích dữ liệu dạng đồ thị",
        "GNN được ứng dụng trong nhiều lĩnh vực thực tế như mạng xã hội, hệ thống giao dịch tài chính và phát hiện hành vi bất thường",
        "Tuy nhiên, các mô hình này có thể tồn tại những điểm yếu dễ bị khai thác",
        "Cần đánh giá mức độ dễ bị tấn công của mạng nơ-ron đồ thị trong các ứng dụng thực tế",
        "Chỉ với những thay đổi nhỏ trong cấu trúc đồ thị, hiệu quả dự đoán của mô hình có thể suy giảm đáng kể",
        "Vì vậy, việc xác định các điểm dễ tổn thương là rất quan trọng để đảm bảo an toàn hệ thống",
      ],
      solution: [
        "Mô phỏng các cuộc tấn công lên mạng nơ-ron đồ thị bằng cách thêm hoặc xóa các cạnh trong đồ thị",
        "Áp dụng nhiều phương pháp tấn công khác nhau như Structural Gradient-based Attack và chiến lược tham lam Greedy",
        "Phân tích cấu trúc đồ thị để xác định những nút và cạnh dễ bị tổn thương nhất",
        "Dữ liệu được biểu diễn dưới dạng đồ thị, gồm các đỉnh và các mối liên hệ giữa chúng",
        "Mô hình tập trung khai thác thông tin từ cả đặc trưng của nút và cấu trúc liên kết",
        "Các thí nghiệm được thực hiện trên nhiều loại đồ thị khác nhau để đánh giá độ ổn định của mô hình",
      ],
      goal: [
        "Đánh giá mức độ an toàn của mạng nơ-ron đồ thị trước các tấn công đối kháng",
        "Xác định các điểm yếu trong cấu trúc đồ thị làm suy giảm độ chính xác của mô hình",
        "Đề xuất cơ sở để phát triển các phương pháp phòng vệ hiệu quả hơn trong tương lai",
      ],
      application: [
        "Giúp tăng cường độ an toàn cho các hệ thống sử dụng GNN trong thực tế",
        "Có thể ứng dụng trong bảo mật mạng xã hội, phát hiện gian lận tài chính và các hệ thống phân tích dữ liệu quan hệ",
        "Góp phần giảm thiểu rủi ro khi triển khai AI trên các bài toán có tính nhạy cảm cao",
      ],
      teamMembers: {
        instructors: ["Cường", "Bình Minh"],
        members: [
          "Phạm Tử Thiên",
          "Bùi Minh Thái",
          "Cao Hoàng Lâm",
          "Lê Việt Thành Nhân",
          "Nguyễn Văn Thương",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2025/MẠNG NƠ-RON ĐỒ THỊ VÀ TÍNH DỄ BỊ TỔN THƯƠNG TRONG ỨNG DỤNG THỰC TẾ.png",
      slidePdf:
        "/pdfs/PROJECTS 2025/Nhóm 5. MẠNG NƠ-RON ĐỒ THỊ VÀ TÍNH DỄ BỊ TỔN THƯƠNG TRONG ỨNG DỤNG THỰC TẾ.pdf",
      videoLink: "https://www.youtube.com/watch?v=Gf8p88GySDI",
      slug: "mang-no-ron-do-thi-va-tinh-de-bi-ton-thuong-trong-ung-dung-thuc-te",
    },
    // Nhóm 6 - MÔ HÌNH DỰ BÁO LŨ LỤT Ở MIỀN TRUNG
    {
      id: 6,
      title: "MÔ HÌNH DỰ BÁO LŨ LỤT Ở MIỀN TRUNG",
      context: [
        "Miền Trung Việt Nam thường xuyên đối mặt với nguy cơ lũ lụt",
        "Dự báo sớm có vai trò quan trọng trong giảm thiểu thiệt hại và hỗ trợ phòng chống thiên tai",
        "Cần một mô hình có thể dự đoán dòng chảy và nguy cơ lũ từ dữ liệu thực tế",
        "Dữ liệu thủy văn tại Việt Nam có nhiều đặc thù, cần được điều chỉnh để phù hợp với điều kiện địa phương",
      ],
      solution: [
        "Xây dựng mô hình AI mang tên DeepFlood để hỗ trợ dự báo lũ",
        "Sử dụng mạng nơ-ron nhiều lớp MLP để dự đoán lưu lượng nước và nguy cơ lũ",
        "Kết hợp dữ liệu thủy văn, dữ liệu thời tiết và thông tin vệ tinh",
        "Nguồn dữ liệu chính là bộ CAMELS về thủy văn",
        "Dữ liệu được chọn lọc từ hơn 110.000 mẫu",
        "Dữ liệu cho sông Long Đại được thu thập qua Open-Meteo API",
      ],
      goal: [
        "Dự báo chính xác hơn dòng chảy và nguy cơ lũ",
        "Hỗ trợ cảnh báo sớm tại các khu vực dễ bị ảnh hưởng",
        "Tạo nền tảng cho việc ứng dụng AI vào bài toán thiên tai tại Việt Nam",
      ],
      application: [
        "Có thể áp dụng cho các con sông tại Việt Nam",
        "Hỗ trợ tra cứu thông tin dòng chảy và cảnh báo lũ qua giao diện web",
        "Hướng tới tích hợp vào hệ thống cảnh báo quốc gia và gửi cảnh báo sớm qua SMS",
      ],
      teamMembers: {
        instructors: ["Trịnh", "Quang Minh", "Nam", "Đức"],
        members: [
          "Cao Trung Quân",
          "Phạm Thị Phương Thảo",
          "Võ Ngọc Sinh",
          "Trịnh Hải Đăng",
          "Nguyễn Anh Thư",
          "Nguyễn Minh Khang",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2025/MÔ HÌNH DỰ BÁO LŨ LỤT Ở MIỀN TRUNG.png",
      slidePdf:
        "/pdfs/PROJECTS 2025/Nhóm 6. MÔ HÌNH DỰ BÁO LŨ LỤT Ở MIỀN TRUNG.pdf",
      videoLink: "https://www.youtube.com/watch?v=TVKq89qgKrM",
      slug: "mo-hinh-du-bao-lu-lut-o-mien-trung",
    },
    // Nhóm 7 - AI CHO TẦNG VẬT LÝ CỦA MẠNG 6G
    {
      id: 7,
      title: "AI CHO TẦNG VẬT LÝ CỦA MẠNG 6G",
      context: [
        "Mạng 6G là hướng phát triển tiếp theo sau 4G và 5G",
        "Chất lượng tín hiệu là yếu tố quan trọng để đảm bảo truyền dữ liệu nhanh và chính xác",
        "Tín hiệu trong truyền thông không dây thường bị nhiễu và suy hao",
        "Điều này làm dữ liệu nhận được dễ bị sai lệch và làm giảm hiệu quả hệ thống",
        "Câu hỏi nghiên cứu: AI có thể hỗ trợ giảm nhiễu và cải thiện độ chính xác của tín hiệu hay không?",
      ],
      solution: [
        "Ứng dụng trí tuệ nhân tạo vào xử lý tín hiệu",
        "Tập trung nâng cấp hệ thống OFDM",
        "Huấn luyện mô hình để nhận diện sai lệch trong tín hiệu",
        "Xử lý cả dữ liệu số thực và số phức",
        "Sử dụng bộ dữ liệu theo chuẩn 3GPP",
        "Mô phỏng môi trường đô thị với nhiều nhiễu thực tế",
      ],
      goal: [
        "Phát hiện tín hiệu hiệu quả hơn",
        "Loại bỏ nhiễu tốt hơn",
        "Tái tạo và cải thiện chất lượng tín hiệu thu được",
      ],
      application: [
        "Góp phần nâng cao độ ổn định của truyền thông không dây",
        "Mở ra tiềm năng ứng dụng AI trong hạ tầng mạng 6G tương lai",
      ],
      teamMembers: {
        instructors: ["Bình Minh", "Thế Quỳnh", "Huỳnh V. K. Nguyên"],
        members: [
          "Nguyễn Thị Như Quỳnh",
          "Thái Hồng Phong",
          "Nguyễn Xuân Minh Đức",
          "Nguyễn Hữu Phát Lộc",
          "Trần Hữu Tuấn Khanh",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2025/AI CHO TẦNG VẬT LÝ CỦA MẠNG 6G.png",
      slidePdf:
        "/pdfs/PROJECTS 2025/Nhóm 7. AI CHO TẦNG VẬT LÝ CỦA MẠNG 6G.pdf",
      videoLink: "https://www.youtube.com/watch?v=u87qpgUSiGA",
      slug: "ai-cho-tang-vat-ly-cua-mang-6g",
    },
    // Nhóm 8 - NHẬN DIỆN MÓN ĂN QUA HÌNH ẢNH VÀ VĂN BẢN
    {
      id: 8,
      title: "NHẬN DIỆN MÓN ĂN QUA HÌNH ẢNH VÀ VĂN BẢN",
      context: [
        "Trong thực tế, tên món ăn dễ bị nhầm lẫn do khác biệt vùng miền, cách chế biến và ngôn ngữ mô tả",
        "Người dùng thường gặp khó khăn khi tìm hiểu thông tin món ăn qua hình ảnh hoặc văn bản trên các công cụ tìm kiếm thông thường",
        "Vì vậy, cần một hệ thống có thể hiểu đồng thời cả hình ảnh và ngôn ngữ để nhận diện món ăn chính xác hơn",
        "Cần xây dựng một mô hình có thể liên kết hình ảnh món ăn với phần mô tả bằng văn bản",
        "Hệ thống không chỉ nhận diện tên món mà còn cần phân biệt các món có hình thức tương tự nhau",
        "Ngoài ra, mô hình cũng phải hỗ trợ truy xuất thêm thông tin liên quan như văn hóa, lịch sử và giá trị dinh dưỡng của món ăn",
      ],
      solution: [
        "Xây dựng hệ thống dựa trên mô hình CLIP để xử lý đồng thời hình ảnh và văn bản",
        "Mô hình học mối liên hệ giữa mô tả ngôn ngữ và đặc điểm thị giác của món ăn",
        "Từ đó, hệ thống có thể dự đoán tên món và gợi ý kết quả phù hợp dựa trên cả ảnh lẫn mô tả đầu vào",
        "CLIP mã hóa văn bản thành dữ liệu số để biểu diễn nội dung mô tả",
        "Đồng thời, hình ảnh món ăn được mã hóa để trích xuất các đặc trưng như màu sắc, hình dạng, kết cấu",
        "Hệ thống kết hợp thêm bước phân tích độ sáng và giá trị màu RGB để hỗ trợ phân biệt các món có ngoại hình gần giống nhau",
        "Dữ liệu hình ảnh sau đó được so sánh với cơ sở dữ liệu món ăn để tìm ra kết quả phù hợp",
      ],
      goal: [
        "Nhận diện món ăn chính xác hơn từ cả hình ảnh và văn bản",
        "Giảm tình trạng nhầm lẫn giữa các món ăn có đặc điểm gần giống nhau",
        "Hỗ trợ người dùng tra cứu thông tin món ăn một cách trực quan và thuận tiện hơn",
      ],
      application: [
        "Có thể ứng dụng trên các trang web du lịch, nền tảng ẩm thực hoặc công cụ tra cứu món ăn",
        "Hỗ trợ người dùng tìm hiểu thêm về tên món, nguyên liệu, lịch sử và giá trị dinh dưỡng",
        "Có tiềm năng phát triển thành chatbot tương tác hoặc hệ thống nhận diện món ăn thông minh",
        "Mở rộng khả năng ứng dụng AI đa phương thức trong lĩnh vực văn hóa, du lịch và ẩm thực",
      ],
      teamMembers: {
        instructors: ["Trung", "Khánh", "Hoàng"],
        members: [
          "Nguyễn Xuân Phương",
          "Nguyễn Ngọc Anh",
          "Nguyễn Cảnh Trung",
          "Trần Nguyễn Nguyên Ân",
          "Nguyễn Việt Hoàng",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2025/NHẬN DIỆN MÓN ĂN QUA HÌNH ẢNH VÀ VĂN BẢN.png",
      slidePdf:
        "/pdfs/PROJECTS 2025/Nhóm 8. NHẬN DIỆN MÓN ĂN QUA HÌNH ẢNH VÀ VĂN BẢN.pdf",
      videoLink: "https://www.youtube.com/watch?v=be_XhTaBixk",
      slug: "nhan-dien-mon-an-qua-hinh-anh-va-van-ban",
    },
  ],
  "SEAS 2026": [
    // Nhóm 1 - NGHIÊN CỨU TẤN CÔNG ĐỐI KHÁNG TRÊN BÀI TOÁN NHẬN DIỆN VẬT THỂ
    {
      id: 1,
      title: "NGHIÊN CỨU TẤN CÔNG ĐỐI KHÁNG TRÊN BÀI TOÁN NHẬN DIỆN VẬT THỂ",
      summary: [
        "Dự án đầu tiên có mục tiêu là đánh giá lỗ hổng bảo mật của mô hình YOLOv3 – công nghệ thị giác máy tính phổ biến trên camera giám sát. Nhóm nghiên cứu tập trung vào kịch bản tấn công đối kháng TOG, nơi các hạt nhiễu siêu nhỏ (vô hình với mắt người) có thể khiến AI nhận diện sai lệch hoặc bỏ sót vật thể hoàn toàn.",
        'Thực nghiệm cho thấy mô hình rất dễ bị tổn thương, đặc biệt là với kịch bản làm "biến mất" vật thể (TOG-Vanishing) và các vật thể có kích thước nhỏ ở cự ly xa. Cuộc tấn công diễn ra cực nhanh (chưa tới 0.5 giây/ảnh) nhưng đạt tỷ lệ thành công gần như tuyệt đối mà không làm giảm chất lượng ảnh quan sát.',
        "Từ kết quả này, nhóm đề xuất các giải pháp gia cố như bổ sung dữ liệu nhiễu khi huấn luyện và dùng bộ lọc triệt tiêu nhiễu trước khi đưa vào mô hình. Nghiên cứu góp phần nâng cao độ an toàn cho các hệ thống AI thực tế như xe tự lái và giám sát an ninh. Trong tương lai, nhóm hướng tới thử nghiệm các kịch bản tấn công phức tạp hơn trong môi trường thực tế.",
      ],
      context: [
        "Sự phát triển mạnh mẽ của các hệ thống Computer Vision và mô hình phát hiện đối tượng (YOLO) trong các ứng dụng thực tế như xe tự lái, giám sát an ninh.",
        "Các mô hình AI vẫn rất nhạy cảm và dễ bị tổn thương trước các tấn công đối kháng (Adversarial Attacks) như tấn công TOG (Targeted Adversarial Object Attacks).",
        "Nhiễu đối kháng cực nhỏ, khó phát hiện bằng mắt thường nhưng có thể làm mô hình nhận diện sai lệch hoàn toàn hoặc làm đối tượng biến mất.",
        "Câu hỏi nghiên cứu: Đâu là mức độ ảnh hưởng của tấn công TOG lên mô hình YOLO và các giải pháp phòng thủ hiệu quả là gì?",
      ],
      solution: [
        "Thực nghiệm các kịch bản tấn công TOG (Vanishing, Fabrication, Mislabeling, Untargeted) trên tập dữ liệu chuẩn MS COCO 2017 với mạng Darknet-53.",
        "Xác định tham số tối ưu (Biên độ nhiễu, Số bước lặp) giúp cân bằng giữa tỉ lệ tấn công thành công (ASR) và chất lượng ảnh (PSNR).",
        "Áp dụng các phương pháp phòng thủ: Huấn luyện đối kháng (Adversarial Training), Tiền xử lý & Lọc nhiễu đầu vào (Input Preprocessing), và Trích xuất đặc trưng kháng nhiễu (Feature Denoising).",
      ],
      goal: [
        "Đánh giá lỗ hổng bảo mật của mô hình phát hiện vật thể YOLO trước các phương pháp tấn công TOG.",
        "Phân tích ảnh hưởng của biên độ nhiễu, số bước lặp và kích thước vật thể đến hiệu quả tấn công (ASR) và chất lượng ảnh (PSNR).",
        "Đề xuất các giải pháp phòng thủ nhằm gia tăng tính an toàn và độ tin cậy cho các hệ thống thị giác máy tính.",
      ],
      application: [
        'Cải thiện độ an toàn và độ tin cậy cho các hệ thống xe tự lái (tránh rủi ro bị "làm tàng hình" biển báo, người đi bộ).',
        "Nâng cao tính bảo mật cho các hệ thống giám sát an ninh, nhận diện khuôn mặt và phân tích hình ảnh thông minh.",
        "Mở ra tiềm năng ứng dụng các kỹ thuật phòng thủ đối kháng trong hạ tầng AI thực tế.",
      ],
      interview: {
        interviewee: "Trần Thị Hoài Thương",
        intervieweePhotoUrl:
          "/images/project-interviewee/2026/tran-thi-hoai-thuong.jpg",
        questions: [
          {
            question:
              "Quá trình hoàn thiện dự án của nhóm bạn diễn ra như thế nào? Có kỉ niệm nào đáng nhớ không?",
            answer: [
              "Nếu dùng ba từ để nói về quá trình từ lúc phân chia nhóm đến khi hoàn thành dự án, mình sẽ chọn: nghiêm túc, cẩn thận và gắn kết. Ngay từ đầu, cả nhóm đã xác định làm việc với thái độ nghiêm túc, phân chia nhiệm vụ rõ ràng và kiểm tra kỹ từng phần để hạn chế sai sót. Đồng thời, sự gắn kết giữa các thành viên giúp mọi người luôn tôn trọng ý kiến của nhau và hỗ trợ khi cần.",
              "Trong suốt quá trình làm dự án, khi gặp bài toán khó, cả nhóm cùng tìm hiểu, sau đó đưa ra ý kiến cá nhân và thảo luận để chọn hướng giải quyết tối ưu. Nhờ vậy, nếu có sai sót thì cũng được phát hiện và chỉnh sửa kịp thời.",
              "Vì đã chuẩn bị cẩn thận từ trước, nên đến đêm trước ngày thuyết trình, nhóm không gặp sự cố nghiêm trọng mà chủ yếu tập trung luyện tập để tự tin hơn và chuẩn bị cho phần hỏi đáp. Ngoài ra, chúng mình cũng xin ý kiến từ các mentor để hoàn thiện bài tốt hơn.",
              "Buổi thuyết trình diễn ra khá suôn sẻ. Nhóm không chỉ trình bày nội dung mà còn thêm một vài yếu tố nhẹ nhàng để tạo không khí thoải mái và vui vẻ cho khán giả. Dù phần trả lời câu hỏi còn đôi lúc lúng túng, nhưng tất cả đều đã cố gắng hết mình và đó vẫn là một trải nghiệm đáng nhớ.",
            ],
          },
          {
            question:
              "Sau khi hoàn thành dự án, bạn học hỏi được điều gì, và có dự định gì cho tương lai không?",
            answer: [
              "Trước khi tham gia SEAS, mình nghĩ AI chủ yếu là những mô hình thông minh có thể nhận diện và xử lý dữ liệu một cách chính xác. Tuy nhiên, sau khi thực hiện dự án về tấn công đối kháng trong mô hình nhận diện vật thể, mình nhận ra chỉ với những thay đổi rất nhỏ hay các nhiễu trong dữ liệu đầu vào, các mô hình này vẫn có thể bị đánh lừa và đưa ra kết quả sai lệch. Điều này khiến mình thay đổi góc nhìn rằng AI không chỉ là công cụ mạnh mẽ mà còn tồn tại nhiều lỗ hổng cần được nghiên cứu và cải thiện.",
              "Theo mình, giá trị lớn nhất của dự án nằm ở việc giúp con người nhận diện sớm những điểm yếu của các hệ thống AI trong thực tế, từ đó có thể phát triển các giải pháp bảo mật và tăng độ tin cậy trước khi xảy ra sự cố nghiêm trọng. Đây cũng là một hướng đi rất tiềm năng trong tương lai, đặc biệt khi AI ngày càng được ứng dụng rộng rãi.",
              "Sau dự án này, điều mình tích lũy được không chỉ là kiến thức kỹ thuật mà còn là kỹ năng làm việc nhóm và tư duy phản biện. Mình học được cách đặt câu hỏi, kiểm tra giả thuyết và phối hợp hiệu quả với các thành viên khác. Đây chắc chắn sẽ là nền tảng quan trọng cho những dự án trong tương lai.",
            ],
          },
        ],
      },
      faq: [],
      teamMembers: {
        instructors: ["Nguyễn Tiết Nguyên Khôi", "Nguyễn Xuân Minh Đức"],
        members: [
          "Dương Phương Đông",
          "Hoàng Bình Minh",
          "Trần Hoài Thương",
          "Dương Xuân Quân",
          "Lê Quang Huy",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2026/Nhóm 1. NGHIÊN CỨU TẤN CÔNG ĐỐI KHÁNG TRÊN BÀI TOÁN NHẬN DIỆN VẬT THỂ.jpg",
      slidePdf:
        "/pdfs/PROJECTS 2026/Nhóm 1. NGHIÊN CỨU TẤN CÔNG ĐỐI KHÁNG TRÊN BÀI TOÁN NHẬN DIỆN VẬT THỂ.pdf",
      videoLink: "",
      slug: "nghien-cuu-tan-cong-doi-khang-tren-bai-toan-nhan-dien-vat-the",
    },
    // Nhóm 2 - TÔ MÀU ẢNH TƯ LIỆU LỊCH SỬ MIỀN TRUNG VIỆT NAM BẰNG HỌC SÂU
    {
      id: 2,
      title: "TÔ MÀU ẢNH TƯ LIỆU LỊCH SỬ MIỀN TRUNG VIỆT NAM BẰNG HỌC SÂU",
      summary: [
        "Di sản kiến trúc cổ tại Huế và Hội An mang giá trị lịch sử vô cùng to lớn, nhưng phần lớn tư liệu còn lưu giữ đều là ảnh đen trắng đã xuống cấp theo thời gian. Để khắc phục việc phục hồi thủ công tốn nhiều công sức, nhóm đã ứng dụng AI và Deep Learning giúp tự động hóa quá trình khôi phục màu sắc, góp phần lưu giữ và lan tỏa giá trị di sản.",
        "Dự án sử dụng mô hình Colorization CNN (ECCV 2016) kết hợp với kỹ thuật tinh chỉnh tham số hiệu quả LoRA (Low-Rank Adaptation) trên không gian màu Lab. Bằng cách giữ nguyên kênh độ sáng (L) và chỉ dự đoán 2 kênh màu (a, b), mô hình vừa tái hiện được sắc vàng đặc trưng của Hội An hay màu mái ngói cổ của Huế, vừa tiết kiệm hơn 90% tham số cần huấn luyện.",
        "Thực nghiệm trên tập dữ liệu hơn 1.000 ảnh di sản cho thấy mô hình sau khi fine-tune bằng LoRA đạt các chỉ số chất lượng vượt trội (tăng PSNR, SSIM và giảm MSE). Kết quả tô màu sinh động, tự nhiên và vượt trội hơn hẳn so với mô hình gốc, giúp giải quyết tốt bài toán tô màu kiến trúc cổ phức tạp.",
        "Nghiên cứu mở ra tiềm năng lớn trong việc phục dựng tư liệu lịch sử, hỗ trợ triển lãm số, truyền thông du lịch và giáo dục văn hóa di sản. Trong tương lai, nhóm hướng tới thử nghiệm các công nghệ tiên tiến hơn như Diffusion Models kết hợp ControlNet và mở rộng dữ liệu ra di sản toàn quốc.",
      ],
      context: [
        "Di sản kiến trúc lịch sử tại Huế và Hội An mang giá trị văn hóa, nghệ thuật và lịch sử vô cùng to lớn.",
        "Phần lớn tài liệu tư liệu cổ còn lưu giữ lại đều ở dạng ảnh đen trắng (grayscale) bị giảm chất lượng theo thời gian.",
        "Việc phục hồi màu sắc thủ công tốn rất nhiều thời gian, công sức và đòi hỏi chuyên môn cao.",
        "Áp dụng AI và Deep Learning giúp tự động hóa quá trình khôi phục màu sắc, giữ gìn và lan tỏa giá trị di sản tới cộng đồng rộng rãi hơn.",
      ],
      solution: [
        "Chuyển đổi bài toán sang không gian màu Lab: Giữ nguyên kênh L (Luminance) từ ảnh đen trắng, sử dụng Model để dự đoán 2 kênh màu a và b (Chrominance)",
        "Sử dụng mạng cơ sở Colorization CNN (ECCV 2016) kết hợp Dilation Layers giúp mở rộng trường nhìn (receptive field) để nắm bắt ngữ cảnh kiến trúc tốt hơn",
        "Tích hợp LoRA Fine-tuning (Rank r=12): Đóng băng các lớp suy luận gốc, chỉ huấn luyện ma trận tham số bổ trợ A/B nhẹ để thích ứng miền dữ liệu đặc thù Huế/Hội An, tiết kiệm tối đa tài nguyên tính toán",
        "So sánh kết quả giữa Base Model và LoRA Model để đánh giá chất lượng quá trình train",
      ],
      goal: [
        "Xây dựng mô hình khôi phục màu sắc tự động (Colorization) tối ưu hóa cho kiến trúc Huế - Hội An bằng cách kết hợp kiến trúc CNN (ECCV 2016) và kỹ thuật tinh chỉnh tham số hiệu quả LoRA (Low-Rank Adaptation)",
        "Đảm bảo màu sắc sinh ra tự nhiên, chân thực, tái hiện đúng đặc trưng kiến trúc (tường vàng Hội An, mái ngói cổ, cấu trúc gỗ, di sản Huế) với các chỉ số đo lường vượt trội (tăng PSNR, SSIM và giảm MSE)",
        "Phục dựng tư liệu lịch sử, hỗ trợ truyền thông du lịch, giáo dục văn hóa và bảo tồn di sản số",
      ],
      application: [
        "Bảo tồn & Triển lãm số: Số hóa và tô màu tự động cho các bộ sưu tập ảnh tư liệu di sản, phục vụ triển lãm bảo tàng thực tế ảo/kỹ thuật số",
        "Du lịch & Truyền thông: Tạo nguyên liệu truyền thông hình ảnh sinh động cho các chiến dịch quảng bá du lịch Thừa Thiên Huế và Quảng Nam",
        "Giáo dục & Nghiên cứu: Hỗ trợ giảng dạy lịch sử, kiến trúc cổ Việt Nam với hình ảnh trực quan, sắc nét",
        "Nâng cao hiểu biết về quá trình sử dụng kiến trúc CNN để train model và huấn luyện AI",
      ],
      interview: {
        interviewee: "Trần Hoàng Tố",
        intervieweePhotoUrl:
          "/images/project-interviewee/2026/tran-hoang-to.jpg",
        questions: [
          {
            question:
              "Quá trình hoàn thiện dự án của nhóm bạn diễn ra như thế nào? Có kỉ niệm nào đáng nhớ không?",
            answer: [
              "Nếu dùng 3 từ để mô tả hành trình từ lúc được phân chia nhóm đến khi hoàn thành bài thuyết trình, em sẽ chọn từ: Hào hứng, hoang mang, hân hoan.",
              'Trong suốt quá trình làm dự án, khoảnh khắc "Eureka!" (lúc cả nhóm tìm ra lời giải cho bài toán khó nhất) diễn ra sau vô số lần thử và sai. Quá trình train-model rất lâu, nhóm chúng em quan sát cẩn thận các kết quả ứng với từng tham số và cuối cùng tìm ra thông số cho hàm loss thấp nhất có thể. Và kết quả như ý xuất hiện sau hơn 10 tiếng chờ đợi và cầu nguyện vì chúng em đã điều chỉnh, tính toán vô cùng chi tiết.',
              'Nửa đêm trước ngày thuyết trình, có sự cố khiến cả nhóm "đau đầu" chính là giới hạn thời gian. Nhóm chúng em liên tục tập dợt để phần nói êm mượt, trôi chảy, đồng thời cân bằng giữa sự hài hước và kiến thức chuyên môn nhằm giúp bài thú vị và thu hút các bạn hơn. Trong quá trình đó, nhóm em liên tục lố một ít thời gian nên khá lo lắng. Rất vui là cuối cùng bài đã diễn ra thành công, như tính toán và mong đợi.',
              "Nếu chỉ được chọn 1 điểm kỹ thuật hoặc 1 tính năng mà bạn cảm thấy tự hào nhất trong dự án của nhóm, đó sẽ là ứng dụng LoRA, tối ưu hóa mô hình gốc. Bởi vì nhờ vậy, nhóm em có thể tô màu các bức ảnh kiến trúc cổ đen trắng mà không phải tốn quá nhiều tài nguyên huấn luyện mô hình mới từ đầu.",
              "Trước đó, em nghĩ rằng chỉ cần chia tập train/test rồi chạy lệnh. Tuy nhiên, khi bắt tay vào làm dữ liệu rất dễ trùng lặp, không phù hợp và chất lượng kém. Do đó, nhóm em phải làm sạch dữ liệu cẩn thận. Hơn nữa, trước đó em tưởng rằng chỉ cần giảm hàm loss, giải quyết các chỉ số toán học thuần túy là đã thành công. Tuy nhiên, mô hình huấn luyện chính xác cao nhưng tô màu thực tế không đẹp, bị lem cũng rất đáng lo ngại, nên chúng em phải học cách cân bằng các yếu tố.",
            ],
          },
          {
            question:
              "Sau khi hoàn thành dự án, bạn học hỏi được điều gì, và có dự định gì cho tương lai không?",
            answer: [
              "Em học được cách đặt câu hỏi ngược lại với kết quả của mô hình: nếu loss giảm nhưng ảnh chưa đẹp thì vấn đề nằm ở đâu, ở dữ liệu, cách huấn luyện hay chính objective của bài toán. Điều đó khiến em nhận ra rằng một metric tốt không nhất thiết đồng nghĩa với một sản phẩm tốt, bởi vì những gì con người đánh giá là “đẹp”, “tự nhiên” hay “giống ảnh gốc” đôi khi không thể được phản ánh hoàn toàn bằng một con số.",
              "Nếu có thêm thời gian và ngân sách không giới hạn, tính năng “trong mơ” của em là biến dự án thành một ứng dụng phục chế ảnh dành cho mọi người. Không chỉ tô màu đẹp hơn và tự nhiên hơn cho ảnh kiến trúc, mà có thể xử lý nhiều thể loại ảnh cũ khác nhau, từ ảnh gia đình, ảnh tư liệu lịch sử cho đến phim đen trắng. Ví dụ, các gia đình liệt sĩ hoặc những người đang lưu giữ ảnh của người thân chỉ cần tải ảnh lên và có thể nhận được một phiên bản được phục chế, tô màu rõ nét hơn.",
            ],
          },
        ],
      },
      faq: [],
      teamMembers: {
        instructors: [
          "Nguyễn Phúc Lương",
          "Nguyễn Thị Như Quỳnh",
          "Nguyễn Phú Vinh",
        ],
        members: [
          "Trần Công Đạt",
          "Lương Thị Chi Lan",
          "Trần Đức Phát",
          "Trần Hoàng Tố",
          "Nguyễn Vĩnh Trọng",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2026/Nhóm 2. TÔ MÀU ẢNH TƯ LIỆU LỊCH SỬ MIỀN TRUNG VIỆT NAM BẰNG HỌC SÂU.jpg",
      slidePdf:
        "/pdfs/PROJECTS 2026/Nhóm 2. TÔ MÀU ẢNH TƯ LIỆU LỊCH SỬ MIỀN TRUNG VIỆT NAM BẰNG HỌC SÂU.pdf",
      videoLink: "",
      slug: "to-mau-anh-tu-lieu-lich-su-mien-trung-viet-nam-bang-hoc-sau",
    },
    // Nhóm 3 - ĐÁNH GIÁ ĐỘ BỀN VỮNG CỦA CÁC MÔ HÌNH NGÔN NGỮ LỚN TRÊN PHƯƠNG NGỮ TIẾNG VIỆT
    {
      id: 3,
      title:
        "ĐÁNH GIÁ ĐỘ BỀN VỮNG CỦA CÁC MÔ HÌNH NGÔN NGỮ LỚN TRÊN PHƯƠNG NGỮ TIẾNG VIỆT",
      summary: [
        'Tiếng Việt có sự phân hóa phương ngữ phong phú giữa ba miền Bắc - Trung - Nam, nhưng dữ liệu huấn luyện của các mô hình ngôn ngữ lớn (LLM) hiện nay lại chủ yếu dựa trên tiếng Việt chuẩn. Điều này khiến các AI hoạt động rất tốt trên văn bản chuẩn nhưng dễ gặp "trục trặc" hoặc suy giảm chất lượng khi xử lý câu từ chứa phương ngữ vùng miền.',
        "Đến với SEAS, nhóm nghiên cứu đã xây dựng một khung đánh giá hệ thống để đo lường mức độ ảnh hưởng của biến thể phương ngữ lên hiệu năng của các LLM phổ biến. Nhóm thu thập tập dữ liệu kiểm thử mang đặc trưng phương ngữ, sau đó thử nghiệm song song trên các tác vụ NLP để so sánh độ chính xác giữa đầu vào chuẩn và đầu vào phương ngữ.",
        'Không chỉ dừng lại ở việc đánh giá, nhóm còn huấn luyện một mô hình dịch dựa trên kiến trúc mBART. Mô hình này đóng vai trò "bộ lọc" giúp chuyển đổi văn bản phương ngữ về tiếng Việt chuẩn trước khi đưa vào LLM, từ đó cải thiện đáng kể độ chính xác và độ bền vững cho hệ thống.',
        "Nghiên cứu mang tính ứng dụng cao trong việc xây dựng tổng đài chăm sóc khách hàng tự động, giúp doanh nghiệp lựa chọn AI phù hợp, đồng thời đóng góp vào việc giáo dục và bảo tồn sự đa dạng ngôn ngữ.",
      ],
      context: [
        "Tiếng Việt là ngôn ngữ có sự phân hóa phương ngữ rõ rệt theo ba vùng chính: Bắc, Trung, Nam.",
        "Phần lớn dữ liệu huấn luyện của các mô hình ngôn ngữ lớn (LLM) hiện nay chủ yếu dựa trên văn bản tiếng Việt chuẩn.",
        "Các LLM có thể hoạt động tốt trên tiếng Việt chuẩn nhưng lại suy giảm chất lượng đáng kể khi xử lý đầu vào chứa yếu tố phương ngữ.",
        "Hiện tại, số lượng nghiên cứu đánh giá một cách hệ thống độ bền vững của LLM trước biến thể phương ngữ tiếng Việt còn rất hạn chế.",
      ],
      solution: [
        "Thu thập và xây dựng bộ dữ liệu kiểm thử chứa các câu, đoạn văn mang đặc trưng phương ngữ, gắn với các tác vụ NLP cụ thể.",
        "Lựa chọn một tập các LLM đại diện để đánh giá song song trên cùng bộ dữ liệu chuẩn và bộ dữ liệu phương ngữ.",
        "Đo lường và so sánh hiệu năng giữa đầu vào chuẩn và đầu vào phương ngữ trên từng tác vụ, sử dụng các thang đo phù hợp.",
      ],
      goal: [
        "Xây dựng một khung đánh giá có hệ thống nhằm đo lường mức độ suy giảm hiệu năng của các LLM phổ biến khi đầu vào chứa các biến thể phương ngữ tiếng Việt, thông qua một tập các tác vụ cụ thể.",
        "Huấn luyện một mô hình dịch dựa trên kiến trúc mBART có khả năng chuyển đổi văn bản chứa phương ngữ sang tiếng Việt chuẩn, nhằm giảm thiểu ảnh hưởng tiêu cực của biến thể phương ngữ khi sử dụng các LLM.",
        "Cung cấp cơ sở dữ liệu và kết quả thực nghiệm làm tài liệu tham khảo cho cộng đồng nghiên cứu xử lý ngôn ngữ tự nhiên tiếng Việt.",
      ],
      application: [
        "Đánh giá và lựa chọn mô hình cho doanh nghiệp.",
        "Tổng đài chăm sóc khách hàng tự động.",
        "Giáo dục và bảo tồn ngôn ngữ.",
      ],
      interview: {
        interviewee: "Nguyễn Thanh Tú",
        intervieweePhotoUrl:
          "/images/project-interviewee/2026/nguyen-thanh-tu.jpg",
        questions: [
          {
            question:
              "Quá trình hoàn thiện dự án của nhóm bạn diễn ra như thế nào? Có kỉ niệm nào đáng nhớ không?",
            answer: [
              "Quá trình hoàn thiện dự án của nhóm có thể được đúc kết trọn vẹn qua ba từ: Đoàn kết, Nỗ lực và Bình tĩnh. Suốt chặng đường dài, sự đồng lòng và cố gắng không ngừng nghỉ của từng thành viên chính là động lực lớn nhất giúp cả đội tiến về phía trước.",
              'Kỷ niệm đáng nhớ và "đau tim" nhất chắc chắn là buổi sáng ngày thuyết trình. Ban đầu, mọi thứ diễn ra không hề suôn sẻ và hoàn toàn chệch khỏi những dự tính và mong muốn của nhóm. Tuy nhiên, đối mặt với sự cố đó, thay vì hoảng loạn, toàn đội đã giữ vững sự bình tĩnh để cùng nhau tháo gỡ. Trải nghiệm ngoài ý muốn này không những không làm khó được nhóm mà ngược lại, nó còn trở thành cơ hội tuyệt vời để bộc lộ rõ khả năng giải quyết vấn đề linh hoạt. Sự nhạy bén và tinh thần bọc lót cho nhau trước những tình huống phát sinh bất ngờ đã giúp nhóm lật ngược thế cờ. Đó thực sự là một bài học thực tế quý giá và là minh chứng rõ nét nhất cho sức mạnh của sự đoàn kết.',
            ],
          },
          {
            question:
              "Sau khi hoàn thành dự án, bạn học hỏi được điều gì, và có dự định gì cho tương lai không?",
            answer: [
              'Nhìn lại hành trình đã qua, bọn em đặt niềm tin rất lớn vào tầm nhìn dài hạn của sản phẩm khi nó hoàn toàn hội tụ đủ tiềm năng để vươn mình trở thành một nền tảng lõi vững chắc, tạo đà bứt phá cho các ứng dụng AI giao tiếp tại Việt Nam trong các lĩnh vực như trợ lý ảo, chăm sóc khách hàng, y tế hay giáo dục,... . Hơn thế nữa, chúng em tâm niệm rằng giá trị cốt lõi và to lớn nhất mà dự án mang lại cho cộng đồng không phải là việc tạo ra một "cỗ máy biết tuốt" khô khan, mà là kiến tạo nên một "người bạn" đồng hành thực thụ, một trí tuệ nhân tạo đủ tinh tế để thấu hiểu và trân trọng bản sắc của mỗi con người. Khép lại chặng đường này, điều quý giá nhất mà mỗi cá nhân học hỏi được chính là sự trưởng thành trong kỹ năng làm việc nhóm gắn kết, cùng bản lĩnh ứng biến và giải quyết mọi vấn đề phát sinh một cách vô cùng linh hoạt.',
            ],
          },
        ],
      },
      faq: [
        {
          question:
            "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
          answer: [
            "Động lực nghiên cứu: người Việt ở các vùng khác nhau có thể nói cùng một ý nhưng dùng từ hoàn toàn khác nhau, trong khi LLM thường chỉ được đánh giá trên tiếng Việt chuẩn. Từ đó, nhóm đặt ra câu hỏi: Nếu ý nghĩa không đổi mà chỉ thay cách diễn đạt theo phương ngữ, liệu LLM có còn đưa ra cùng một quyết định hay không? Đây không chỉ là bài toán ngôn ngữ, mà còn liên quan trực tiếp đến độ tin cậy và khả năng phục vụ công bằng người dùng ở các vùng miền.",
          ],
          author: "Trần Tạ Quang Minh – Trợ giảng",
        },
        {
          question: "Dự án sử dụng chủ yếu nền tảng kiến thức và mô hình nào?",
          answer: [
            "Dự án dựa trên ba mảng chính: Large Language Models, NLP evaluation và robustness/fairness. Nhóm xây dựng VialectBench, một benchmark gồm 400 câu gốc và 2.400 phiên bản phương ngữ được con người viết lại, trải trên 6 nhóm phương ngữ và 4 bài toán: Emotion Recognition, NLI, QA và MCQA. Điểm quan trọng là nhãn, đáp án và bằng chứng được giữ nguyên; chỉ phần ngôn ngữ mang tính phương ngữ được thay đổi, nhờ đó có thể cô lập ảnh hưởng của phương ngữ lên mô hình.",
            "Nhóm sau đó đánh giá 10 LLM khác nhau, từ Qwen, Llama, Mistral, Gemma, Vistral, SeaLLM đến GPT-4o. ",
          ],
          author: "Trần Tạ Quang Minh – Trợ giảng",
        },
        {
          question:
            "Thách thức kỹ thuật lớn nhất mà nhóm gặp phải là gì và mọi người đã vượt qua nó ra sao?",
          answer: [
            "Các bạn học sinh cần phải hiểu được dataset, tiến hành chạy đánh giá trên các mô hình ngôn ngữ, tạo visualization, phân tích insights và propose phương pháp để cải thiện.",
          ],
          author: "Trần Tạ Quang Minh – Trợ giảng",
        },
        {
          question:
            "TA đã chuẩn bị những gì trước, và học viên đã tự thực hiện những phần việc nào?",
          answer: [
            "TA đã chuẩn bị dataset, tài liệu hướng dẫn và môi trường phát triển. Học viên đã tự thực hiện việc tiền xử lý dữ liệu, chạy thử nghiệm mô hình, phân tích kết quả và viết báo cáo.",
          ],
          author: "Trần Tạ Quang Minh – Trợ giảng",
        },
      ],
      teamMembers: {
        instructors: [
          "Trần Tạ Quang Minh",
          "Trần Hải Nam",
          "Châu Nguyễn Tố Trinh",
          "Đặng Cao Cường",
          "Nguyễn Thành Luân",
          "Hoàng Minh Đức",
        ],
        members: [
          "Đặng Thị Ngọc Ánh",
          "Nguyễn Hà Phương",
          "Nguyễn Nhật Anh",
          "Nguyễn Quang Lý",
          "Nguyễn Thanh Tú",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2026/Nhóm 3. ĐÁNH GIÁ ĐỘ BỀN VỮNG CỦA CÁC MÔ HÌNH NGÔN NGỮ LỚN TRÊN PHƯƠNG NGỮ TIẾNG VIỆT.jpg",
      slidePdf:
        "/pdfs/PROJECTS 2026/Nhóm 3. ĐÁNH GIÁ ĐỘ BỀN VỮNG CỦA CÁC MÔ HÌNH NGÔN NGỮ LỚN TRÊN PHƯƠNG NGỮ TIẾNG VIỆT.pdf",
      videoLink: "",
      slug: "danh-gia-do-ben-vung-cua-cac-mo-hinh-ngon-ngu-lon-tren-phuong-ngu-tieng-viet",
    },
    // Nhóm 4 - PHÂN LOẠI BỆNH LÁ TRÊN CÂY LÚA DÀNH CHO NÔNG DÂN SỬ DỤNG MÔ HÌNH AI
    {
      id: 4,
      title:
        "PHÂN LOẠI BỆNH LÁ TRÊN CÂY LÚA DÀNH CHO NÔNG DÂN SỬ DỤNG MÔ HÌNH AI",
      summary: [
        "Lúa gạo là nguồn thực phẩm chủ lực tại Việt Nam, đặc biệt là miền Trung - nơi thường chịu ảnh hưởng nặng nề bởi thời tiết và sâu bệnh. Tuy nhiên, việc phát hiện bệnh thủ công dựa vào kinh nghiệm thường tốn thời gian, dễ nhầm lẫn do các triệu chứng khá tương đồng, dẫn đến xử lý chậm hoặc lạm dụng thuốc bảo vệ thực vật.",
        "Đến với SEAS, nhóm đã xây dựng hệ thống học sâu (Deep Learning) giúp phân loại và chẩn đoán bệnh trên lá lúa tự động từ ảnh chụp. Sử dụng bộ dữ liệu Paddy Doctor (Kaggle) đã được các chuyên gia gán nhãn chuẩn xác, nhóm thực hiện quy trình tiền xử lý và làm sạch nghiêm ngặt (resize, chuẩn hóa, xử lý mất cân bằng lớp) để đảm bảo mô hình đạt hiệu năng tối ưu.",
        "Mô hình học sâu tự động trích xuất các đặc trưng hình ảnh và đưa ra dự đoán nhãn bệnh cùng độ tin cậy chỉ trong vài giây. Hệ thống giúp rút ngắn tối đa thời gian chẩn đoán, hỗ trợ nông dân phát hiện bệnh sớm ngay tại đồng ruộng bằng điện thoại di động, từ đó giảm chi phí và bảo vệ môi trường.",
        "Kết quả thực nghiệm cho thấy mô hình có độ chính xác cao và ít nhầm lẫn trên tập kiểm thử (Confusion Matrix). Trong tương lai, nhóm hướng tới mở rộng mô hình phát hiện nhiều bệnh cùng lúc (Object Detection), tích hợp tính năng tư vấn canh tác và tối ưu để ứng dụng chạy mượt trên các thiết bị di động.",
      ],
      context: [
        "Cây lúa là nguồn lương thực quan trọng của hơn một nửa dân số thế giới và là mặt hàng nông sản xuất khẩu chủ lực của Việt Nam.",
        "Sâu bệnh ảnh hưởng trực tiếp đến năng suất, chất lượng lúa và thu nhập của người nông dân.",
        "Việc phát hiện bệnh hiện nay chủ yếu dựa vào kinh nghiệm; nhiều bệnh có biểu hiện tương tự nên dễ chẩn đoán nhầm.",
        "Kiểm tra thủ công mất nhiều thời gian, khó triển khai trên diện tích lớn và có thể dẫn đến sử dụng thuốc bảo vệ thực vật không phù hợp.",
        "Vì vậy, cần một công cụ nhận diện bệnh nhanh, chính xác và có khả năng triển khai rộng rãi.",
      ],
      solution: [
        "Ứng dụng AI, Computer Vision và Deep Learning để tự động phân loại bệnh trên ảnh lá lúa.",
        "Đầu vào là ảnh lá lúa hoặc cây lúa chụp bằng điện thoại/camera; đầu ra gồm loại bệnh hoặc trạng thái bình thường cùng xác suất dự đoán.",
        "Sử dụng bộ dữ liệu mở Paddy Doctor trên Kaggle, gồm các ảnh đã được chuyên gia kiểm tra và gán nhãn.",
        "Dữ liệu được chia thành ba tập: Train, Validation và Test để huấn luyện, điều chỉnh và đánh giá mô hình độc lập.",
        "Quy trình xử lý gồm: Kiểm tra số lượng ảnh, nhãn và mức độ cân bằng giữa các lớp; loại bỏ ảnh lỗi/trùng lặp; chuẩn hóa kích thước, định dạng, không gian màu và giá trị điểm ảnh.",
        "Mã hóa nhãn, huấn luyện và so sánh nhiều mô hình để lựa chọn phương án tốt nhất.",
        "Xây dựng giao diện cho phép người dùng tải ảnh lên và nhận kết quả dự đoán nhanh chóng.",
      ],
      goal: [
        "Xây dựng mô hình tự động nhận diện các loại bệnh trên lá lúa từ hình ảnh.",
        "Tạo quy trình xử lý dữ liệu ảnh đầy đủ, nhất quán và hạn chế rò rỉ dữ liệu.",
        "Huấn luyện, đánh giá và so sánh các mô hình học sâu nhằm lựa chọn mô hình có hiệu năng phù hợp nhất.",
        "Rút ngắn thời gian chẩn đoán và nâng cao độ chính xác so với phương pháp thủ công.",
        "Hỗ trợ phát hiện bệnh sớm, giúp nông dân đưa ra biện pháp xử lý kịp thời.",
        "Tạo nền tảng phát triển các hệ thống AI phục vụ nông nghiệp thông minh và bền vững.",
      ],
      application: [
        "Nhận diện bệnh trên lá lúa trực tiếp từ ảnh chụp bằng điện thoại hoặc camera.",
        "Hỗ trợ nông dân, kỹ thuật viên và cơ quan nông nghiệp kiểm tra tình trạng cây trồng nhanh chóng.",
        "Giảm thiểu thiệt hại về năng suất, chi phí sản xuất và việc lạm dụng thuốc bảo vệ thực vật.",
        "Tích hợp vào ứng dụng di động, website, hệ thống giám sát đồng ruộng hoặc nền tảng nông nghiệp thông minh.",
        "Định hướng phát triển tương lai: Bổ sung thêm nhiều loại sâu bệnh; ứng dụng EfficientNet, ConvNeXt, Vision Transformer hoặc Attention; phát hiện nhiều bệnh và xác định vị trí vùng bệnh trên cùng một ảnh; cung cấp thông tin về nguyên nhân, mức độ nguy hiểm và biện pháp phòng trừ phù hợp.",
      ],
      interview: {
        interviewee: "Nguyễn Thục Khuê",
        intervieweePhotoUrl:
          "/images/project-interviewee/2026/nguyen-thuc-khue.jpg",
        questions: [
          {
            question:
              "Quá trình hoàn thiện dự án của nhóm bạn diễn ra như thế nào? Có kỉ niệm nào đáng nhớ không?",
            answer: [
              "Nhóm chúng mình đã trải qua nhiều khó khăn khi bắt tay vào làm một dự án về vấn đề miền trung. Nhưng mọi người đều rất nỗ lực cộng thêm sự hỗ trợ nhiệt tình từ các anh chị TA đã giúp chúng mình hoàn thành dự án một cách trọn vẹn. Mình nhớ là khi gần kết thúc dự án, chúng mình đã có những ý kiến khác nhau trong việc lựa chọn hình thức trình bày, có bạn muốn trình bày trên một nền tảng chuyên nghiệp nhưng điều đó cũng mang lại khó khăn đối với những bạn khác, vì các bạn chưa tiếp xúc nhiều, chưa quá quen với hình thức đó. Nhưng nhờ có sự hỗ trợ cũng như cùng nhau chia sẻ, động viên. Chúng mình đã quyết định cố hết sức, vừa làm vừa học cộng thêm sự nhiệt tình chia sẻ từ những bạn đã rành đã giúp cho dự án hoàn thành tốt.",
            ],
          },
          {
            question:
              "Sau khi hoàn thành dự án, bạn học hỏi được điều gì, và có dự định gì cho tương lai không?",
            answer: [
              "Trước SEAS, mình nghĩ rằng AI là điều gì đó quá đáng sợ. Mình nghĩ AI có thể làm mọi thứ và sớm muộn thôi AI sẽ thay thế mọi công việc trong tương lai. Mình nghĩ nỗi sợ hãi của mình bắt đầu từ việc mình không biết AI là gì, hoạt động ra sao. Trải qua khóa học, mình đã biết cách xây dựng và huấn luyện một mô hình AI, biết cách hoạt động của nhiều model khác nhau. Không chỉ vậy, dự án nhóm 4 của chúng mình là làm về nhận diện sâu bệnh trên cây lúa. Mình nghĩ sẽ cực kì tuyệt vời khi chúng mình có thể tiếp tục phát triển dự án này với nhiều tính năng hơn, ứng dụng tạo ra những con robot có thể khảo sát sâu bệnh trên những cánh đồng lớn giúp người nông dân biết được tình trạng của cây lúa và đưa ra giải pháp phù hợp. Điều này sẽ góp phần không nhỏ trong việc nâng cao năng suất cây trồng.",
            ],
          },
        ],
      },
      faq: [
        {
          question:
            "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
          answer: [
            "Dự án khởi nguồn từ 1 lần mình tìm kiếm thông tin về các cuộc thi trên Kaggle, và mình vô tình thấy một cuộc thi khá thú vị về phân loại ảnh bệnh trên cây lúa. Thực tế, nông nghiệp cũng là 1 khía cạnh mình thấy đang ứng dụng học máy vào rất nhiều nên từ đó lựa chọn hướng đi này. Việt Nam cũng là đất nước mạnh về nông nghiệp nổi bật với nền văn minh lúa nước, vì vậy mà mình càng thêm tâm huyết đem dự án đến trại hè SEAS năm nay.",
          ],
          author: "Ngô Xuân Thủy – Trợ giảng",
        },
        {
          question: "Dự án sử dụng chủ yếu nền tảng kiến thức và mô hình nào?",
          answer: [
            "Dự án được xây dựng chủ yếu dựa trên nền tảng Thị giác máy tính (Computer Vision) và Học sâu (Deep Learning) với bài toán cốt lõi là phân loại hình ảnh. Để giải quyết bài toán này, hệ thống áp dụng các mô hình Mạng nơ-ron tích chập (CNN) từ cơ bản đến nâng cao. Tiếp tục xây dựng quy trình huấn luyện và giao diện web để trực quan hoá quá trình phân tích ảnh.",
          ],
          author: "Ngô Xuân Thủy – Trợ giảng",
        },
        {
          question:
            "Thách thức kỹ thuật lớn nhất mà nhóm gặp phải là gì và mọi người đã vượt qua nó ra sao?",
          answer: [
            "Mình nghĩ nhóm đã gặp phải khó khăn trong phần lập trình, Computer Vision là phần kiến thức không dễ để các bạn học ngay được trong 1 tuần ngắn ngủi. Dù vậy, cả nhóm đã cố gắng hết sức cùng với các mentor khác chạy các baseline khác nhau để đưa ra kết quả tối ưu nhất. Mình nghĩ chính sự nỗ lực của mỗi bạn đã giúp hoàn thiện dự án này xuất sắc.",
          ],
          author: "Ngô Xuân Thủy – Trợ giảng",
        },
        {
          question:
            "TA đã chuẩn bị những gì trước, và học viên đã tự thực hiện những phần việc nào?",
          answer: [
            "Bản thân là người hướng dẫn, mình đã chuẩn bị trước hướng dẫn tổng quan về dự án, bao gồm mô tả và tài liệu kiến thức cần thiết. Các bạn trong nhóm đã tự thực hiện phần đọc hiểu và bắt đầu quá trình nghiên cứu thêm về mô hình.",
          ],
          author: "Ngô Xuân Thủy – Trợ giảng",
        },
        {
          question:
            "Đánh giá ngắn gọn về hiệu năng/kết quả mà mô hình đạt được?",
          answer: [
            "Thay vì chỉ đưa ra nhãn dự đoán chung cho toàn bộ bức ảnh như các mô hình phân loại truyền thống, YOLO mang lại giá trị thực tiễn cao hơn bằng cách khoanh vùng chính xác (Bounding Box) tọa độ các vết bệnh trên lá. Điều này giúp hệ thống trở nên minh bạch và đáng tin cậy hơn đối với người dùng cuối.",
          ],
          author: "Ngô Xuân Thủy – Trợ giảng",
        },
      ],
      teamMembers: {
        instructors: [
          "Trần Hải Nam",
          "Nguyễn Phú Vinh",
          "Ngô Xuân Thủy",
          "Nguyễn Thành Luân",
        ],
        members: [
          "Nguyễn Hải Đăng",
          "Nguyễn Thục Khuê",
          "Tạ Phúc Lâm",
          "Nguyễn Quốc Mạnh",
          "Trần Gia Bảo",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2026/Nhóm 4. PHÂN LOẠI BỆNH LÁ TRÊN CÂY LÚA DÀNH CHO NÔNG DÂN SỬ DỤNG MÔ HÌNH AI.jpg",
      slidePdf:
        "/pdfs/PROJECTS 2026/Nhóm 4. PHÂN LOẠI BỆNH LÁ TRÊN CÂY LÚA DÀNH CHO NÔNG DÂN SỬ DỤNG MÔ HÌNH AI.pdf",
      videoLink: "",
      slug: "phan-loai-benh-la-tren-cay-lua-danh-cho-nong-dan-su-dung-mo-hinh-ai",
    },
    // Nhóm 5 - HỆ THỐNG GỢI Ý ĐỊA ĐIỂM DU LỊCH VÀ LÊN KẾ HOẠCH CHO DU LỊCH MIỀN TRUNG VIỆT NAM
    {
      id: 5,
      title:
        "HỆ THỐNG GỢI Ý ĐỊA ĐIỂM DU LỊCH VÀ LÊN KẾ HOẠCH CHO DU LỊCH MIỀN TRUNG VIỆT NAM",
      summary: [
        "Miền Trung (Quảng Bình, Quảng Trị, Huế) sở hữu nguồn tài nguyên du lịch vô cùng phong phú, nhưng việc tự lên kế hoạch thường tốn nhiều thời gian và công sức để lựa chọn điểm đến cũng như sắp xếp lộ trình sao cho hợp lý.",
        "Đến với SEAS, nhóm nghiên cứu đã phát triển một hệ thống thông minh tích hợp cả gợi ý địa điểm theo sở thích cá nhân và tự động tối ưu hóa lịch trình tham quan nhiều ngày. Hệ thống kết hợp phân tích đặc trưng ngữ nghĩa địa điểm (TF-IDF, Cosine Similarity) cùng yếu tố thời điểm du lịch thích hợp nhất (best month) để xếp hạng Top-K điểm đến cho người dùng.",
        "Để tạo nên một chuyến đi trọn vẹn, nhóm sử dụng thuật toán K-Means++ gom các địa điểm theo từng ngày tham quan, sau đó tối ưu hóa thứ tự di chuyển trong mỗi cụm bằng thuật toán Held–Karp (Dynamic Programming with Bitmask). Nhờ đó, hành trình được rút ngắn quãng đường di chuyển tối đa và tiết kiệm thời gian cho du khách.",
        "Dự án giúp khách du lịch khám phá miền Trung một cách thuận tiện và tối ưu hơn. Trong tương lai, hệ thống hứa hẹn mở rộng dữ liệu toàn quốc, tích hợp thêm các yếu tố thời tiết, giao thông thực tế và API bản đồ để hoàn thiện trải nghiệm ứng dụng.",
      ],
      context: [
        "Việc lên kế hoạch du lịch thường mất nhiều thời gian do người dùng phải tự tìm kiếm địa điểm, lựa chọn điểm đến phù hợp với sở thích và sắp xếp lịch trình hợp lý.",
        "Đặc biệt, khu vực miền Trung (Quảng Bình, Quảng Trị và Huế) có nhiều điểm đến đa dạng nhưng chưa có hệ thống gợi ý tích hợp cả khâu lựa chọn địa điểm và tối ưu lộ trình.",
      ],
      solution: [
        "Stage 0: Trích xuất đặc trưng ngữ nghĩa của địa điểm bằng TF-IDF kết hợp Cosine Similarity và chuẩn hóa Min-Max.",
        "Stage 1: Tính điểm phù hợp giữa hồ sơ sở thích của người dùng và các địa điểm, kết hợp yếu tố thời gian du lịch (best month) để xếp hạng.",
        "Stage 2: Chọn Top-K địa điểm phù hợp nhất cho từng hồ sơ người dùng.",
        "Stage 3: Sử dụng K-Means++ để chia các địa điểm theo từng ngày tham quan, sau đó tối ưu thứ tự di chuyển trong mỗi cụm bằng thuật toán Held–Karp (Dynamic Programming with Bitmask) nhằm giảm tổng quãng đường.",
      ],
      goal: [
        "Xây dựng hệ thống gợi ý địa điểm du lịch dựa trên sở thích của người dùng.",
        "Tạo lịch trình tham quan nhiều ngày với quãng đường di chuyển hợp lý.",
        "Hỗ trợ người dùng khám phá các điểm đến phù hợp tại Quảng Bình, Quảng Trị và Huế.",
      ],
      application: [
        "Gợi ý địa điểm theo sở thích cá nhân.",
        "Tự động xây dựng lịch trình tham quan nhiều ngày.",
        "Hỗ trợ khách du lịch khám phá khu vực miền Trung một cách thuận tiện và tối ưu hơn.",
        "Có thể mở rộng thêm dữ liệu, tích hợp thời tiết, giao thông và các API bản đồ trong tương lai.",
      ],
      interview: {
        interviewee: "Ngô Trần Quang Minh",
        intervieweePhotoUrl:
          "/images/project-interviewee/2026/ngo-tran-quang-minh.jpg",
        questions: [
          {
            question:
              "Quá trình hoàn thiện dự án của nhóm bạn diễn ra như thế nào? Có kỉ niệm nào đáng nhớ không?",
            answer: [
              "Nếu dùng ba từ để mô tả hành trình từ lúc được chia nhóm đến khi hoàn thành bài thuyết trình, mình sẽ chọn bất ngờ, nỗ lực và trưởng thành. Ban đầu, chúng mình không nghĩ rằng nhóm có thể đưa dự án TrungDuKy – một hệ thống gợi ý điểm đến và lập kế hoạch chuyến đi – đi xa đến vậy. Trong suốt quá trình thực hiện, khoảnh khắc “Eureka!” đáng nhớ nhất là khi cả nhóm tìm ra cách kết hợp DP Bitmask với Multi-start Nearest Neighbor heuristic để giải quyết bài toán lập lịch trình. Với trường hợp n≤16, DP Bitmask cho phép tìm ra lời giải tối ưu tuyệt đối, trong khi heuristic được sử dụng cho những trường hợp lớn hơn. Sự kết hợp này không chỉ giúp tối ưu quãng đường trong từng ngày mà còn tối ưu cách sắp xếp các địa điểm giữa các ngày. Chẳng hạn, thay vì một lịch trình kém hiệu quả như Huế (Day 1) → Quảng Bình (Day 2) → Huế (Day 3), hệ thống có thể nhận ra phương án hợp lý hơn là Huế (Day 1) → Huế (Day 2) → Quảng Bình (Day 3), từ đó giảm đáng kể quãng đường di chuyển.",
              "Tuy nhiên, thử thách lớn nhất lại xuất hiện ngay trước ngày thuyết trình. Lần thử đầu tiên, bài trình bày của nhóm kéo dài tới 30 phút, trong khi thời gian cho phép chỉ có 15 phút. Nhờ những góp ý rất cụ thể từ anh Nguyên Khôi và chị Tâm Phú, nhóm đã thay đổi cách tiếp cận: lược bỏ những phần không thực sự cần thiết, chẳng hạn như trình bày quá sâu về dataset, và tập trung vào những ý tưởng, tính năng và kết quả quan trọng nhất. Qua dự án này, mình không chỉ tự hào về phần kỹ thuật mà còn nhận ra rằng một sản phẩm tốt cần cả khả năng chọn đúng vấn đề để giải quyết và truyền đạt đúng điều cần nói.",
            ],
          },
          {
            question:
              "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
            answer: [
              "Nếu có cơ hội thuyết phục một nhà đầu tư hoặc giám khảo, mình sẽ nhấn mạnh vào tính thực tế và tính địa phương hóa của TrungDuKy. Dự án tập trung vào ba tỉnh miền Trung là Huế, Quảng Trị và Quảng Bình, nơi có rất nhiều địa điểm du lịch giàu tiềm năng nhưng chưa được khai thác và giới thiệu rộng rãi bằng các hệ thống gợi ý tương tự. Trong khi phần lớn các sản phẩm hiện nay thường tập trung vào những thành phố du lịch lớn, TrungDuKy hướng đến việc giúp người dùng khám phá những địa điểm ít được biết đến hơn. Tôi tin rằng dự án có thể mang lại giá trị cho cộng đồng bằng cách cung cấp nhiều lựa chọn du lịch hơn, được sắp xếp theo sở thích cá nhân, đồng thời giúp mọi người có một góc nhìn mới về những điểm đến ngay tại khu vực miền Trung.",
              "Nếu có thêm thời gian và ngân sách không giới hạn, tính năng mình muốn phát triển nhất là AI Vibe Match: người dùng có thể tải lên một hoặc nhiều hình ảnh thể hiện phong cách, không khí hoặc “vibe” mà họ yêu thích, sau đó AI sẽ phân tích hình ảnh và gợi ý những địa điểm trong dataset phù hợp nhất.",
              "Sau dự án, kỹ năng mình tích lũy được nhiều nhất là tư duy logic và khả năng làm việc nhóm. Về kỹ thuật, mình cải thiện đáng kể khả năng tư duy thuật toán, đặc biệt khi phải áp dụng nhiều kiến thức toán học, đồng thời học cách sử dụng GitHub trong một dự án thực tế như tạo branch, pull request và merge code. Về kỹ năng mềm, mình học được cách phân chia tasks, phối hợp nhóm và thuyết trình về một dự án thực tế trước mọi người.",
            ],
          },
        ],
      },
      faq: [
        {
          question:
            "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
          answer: [
            "Khi đến với SEAS – trại hè đầu tiên ở miền Trung dành cho học sinh, sinh viên yêu thích STEM, mình cũng rất mong muốn có thể đem đến một sản phẩm gì đó giúp đỡ cho vùng đất đầy nắng và gió này. Đó là lý do nhóm lựa chọn đề tài về du lịch miền Trung.",
            "Nhận thấy tiềm năng du lịch miền Trung trong thời gian gần đây ngày càng phát triển, thu hút đông đảo du khách trong nước và quốc tế, nhóm tập trung vào ba khu vực Quảng Bình – Quảng Trị – Huế. Tuy nhiên, thông tin về các địa điểm du lịch độc đáo và giàu bản sắc ở đây vẫn còn khá phân mảnh, chưa được thống nhất và thường nằm rải rác trên nhiều website hay nền tảng mạng xã hội khác nhau.",
            "Đặc biệt, các thông tin hiện có chưa mang tính cá nhân hóa dựa trên sở thích của từng du khách, chẳng hạn như họ yêu thích biển, lịch sử, thiên nhiên, ẩm thực hay muốn đi cùng gia đình.",
            "Việc tự tìm kiếm và lựa chọn địa điểm cũng tốn nhiều thời gian. Đối với những du khách không quen thuộc địa phương, việc sắp xếp lịch trình sao cho hợp lý – nên đi địa điểm nào trước, địa điểm nào sau hay nên phân bổ các địa điểm theo từng ngày như thế nào – cũng là một bài toán không đơn giản.",
            "Từ những vấn đề trên, nhóm xây dựng một hệ thống có khả năng gợi ý địa điểm dựa trên sở thích cá nhân, đồng thời sắp xếp chuyến đi nhằm tối ưu hóa việc di chuyển.",
          ],
          author: "Trần Thị Tâm Phú – Trợ giảng",
        },
        {
          question: "Dự án sử dụng chủ yếu nền tảng kiến thức và mô hình nào?",
          answer: [
            "Dự án kết hợp nhiều thuật toán trong Machine Learning và Optimization, có thể kể đến:",
            "• Recommendation System – Content-based Filtering để gợi ý địa điểm dựa trên sở thích người dùng.",
            "• TF-IDF và Cosine Similarity để xác định mức độ tương đồng giữa mô tả địa điểm và các đặc trưng.",
            "• K-Means++ để phân chia các địa điểm thành các ngày tham quan dựa trên vị trí địa lý.",
            "• Traveling Salesman Problem (TSP) với thuật toán Held-Karp / Dynamic Programming with Bitmask để tối ưu thứ tự tham quan trong từng ngày.",
          ],
          author: "Trần Thị Tâm Phú – Trợ giảng",
        },
        {
          question:
            "Thách thức kỹ thuật lớn nhất mà nhóm gặp phải là gì và mọi người đã vượt qua nó ra sao?",
          answer: [
            "Thách thức lớn nhất của nhóm là evaluation, vì hệ thống sử dụng content-based filtering và chưa có lịch sử người dùng để làm ground truth. Nhóm đã thử nghiệm với dữ liệu khảo sát từ người dùng thật, sau đó nhận thấy dữ liệu còn chưa đủ nhất quán nên tiếp tục xây dựng LLM-generated users để tạo ra các profile có sở thích và lựa chọn địa điểm theo cùng một logic. Bên cạnh đó, nhóm cũng so sánh Held-Karp và Greedy Nearest Neighbor để đánh giá khả năng tối ưu lịch trình và sự đánh đổi giữa độ chính xác và thời gian tính toán.",
          ],
          author: "Trần Thị Tâm Phú – Trợ giảng",
        },
        {
          question:
            "TA đã chuẩn bị những gì trước, và học viên đã tự thực hiện những phần việc nào?",
          answer: [
            "Ban đầu, TA đã chuẩn bị khá chi tiết 4 notebooks tương ứng với 4 stage lớn của dự án, cùng database gồm các địa điểm và đặc trưng của các địa điểm đó.",
            "Tuy nhiên, chúng mình cũng cố tình để các notebook không được hoàn thiện sẵn. Một số phần code quan trọng được để trống để các bạn tiếp tục tìm hiểu và triển khai. Các bạn cũng được giao nhiệm vụ tự tìm kiếm những địa điểm và đặc trưng phù hợp để đưa vào hệ thống.",
            "Mình rất bất ngờ với khả năng của các bạn học viên team 5. Các bạn hiểu code và notebook khá nhanh, sau đó còn chủ động tìm hiểu những thuật toán phù hợp hơn cho hệ thống, tự xây dựng website cho dự án và chuẩn bị phần slide rất chi tiết.",
            "Mình thực sự ấn tượng và ngưỡng mộ khả năng học hỏi, tiếp thu và chủ động phát triển dự án của các bạn.",
          ],
          author: "Trần Thị Tâm Phú – Trợ giảng",
        },
        {
          question:
            "Đánh giá ngắn gọn về hiệu năng/kết quả mà mô hình đạt được?",
          answer: [
            "Đối với hệ thống recommendation, kết quả evaluation sử dụng LLM-generated users cho thấy 81.5% địa điểm được hệ thống gợi ý phù hợp với ground truth trong thí nghiệm của nhóm.",
            "Đối với phần tối ưu lịch trình, nhóm so sánh Held-Karp và Greedy Nearest Neighbor để đánh giá sự khác biệt về tổng quãng đường và thời gian tính toán. Kết quả giúp nhóm xác định được khi nào nên sử dụng thuật toán tối ưu chính xác và khi nào nên sử dụng heuristic để cân bằng giữa chất lượng và hiệu năng.",
            "Qua quá trình evaluation, nhóm cũng nhận ra rằng việc đánh giá một hệ thống recommendation không chỉ phụ thuộc vào thuật toán mà còn phụ thuộc rất nhiều vào chất lượng và cách xây dựng ground truth. Đây cũng là một trong những hướng nhóm muốn tiếp tục cải thiện trong tương lai.",
          ],
          author: "Trần Thị Tâm Phú – Trợ giảng",
        },
      ],
      teamMembers: {
        instructors: [
          "Trần Thị Tâm Phú",
          "Châu Nguyễn Tố Trinh",
          "Nguyễn Tiết Nguyên Khôi",
        ],
        members: [
          "Trần Hưng Tiến",
          "Ngô Trần Quang Minh",
          "Nguyễn Tất Bảo Doanh",
          "Đoàn Gia Long",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2026/Nhóm 5. HỆ THỐNG GỢI Ý ĐỊA ĐIỂM DU LỊCH VÀ LÊN KẾ HOẠCH CHO DU LỊCH MIỀN TRUNG VIỆT NAM.jpg",
      slidePdf:
        "/pdfs/PROJECTS 2026/Nhóm 5. HỆ THỐNG GỢI Ý ĐỊA ĐIỂM DU LỊCH VÀ LÊN KẾ HOẠCH CHO DU LỊCH MIỀN TRUNG VIỆT NAM.pdf",
      videoLink: "",
      slug: "he-thong-goi-y-dia-diem-du-lich-va-len-ke-hoach-cho-du-lich-mien-trung-viet-nam",
    },
    // Nhóm 6 - ỨNG DỤNG HỌC TĂNG CƯỜNG TRONG TÀI CHÍNH ĐỊNH LƯỢNG
    {
      id: 6,
      title: "ỨNG DỤNG HỌC TĂNG CƯỜNG TRONG TÀI CHÍNH ĐỊNH LƯỢNG",
      summary: [
        "Thị trường chứng khoán luôn biến động phức tạp và rất khó dự đoán chính xác. Trong khi đó, các chiến lược giao dịch cố định lại thiếu tính linh hoạt và khó thích ứng kịp thời trước những thay đổi bất ngờ của thị trường.",
        "Đến với SEAS, nhóm đã ứng dụng Học tăng cường (Reinforcement Learning - RL) để xây dựng một Agent thông minh có khả năng tự học và tối ưu hóa quyết định giao dịch. Hệ thống thiết lập môi trường mô phỏng thị trường thực tế, cung cấp cho Agent đầy đủ dữ liệu về giá, xu hướng và trạng thái danh mục đầu tư.",
        "Agent tự đưa ra quyết định mua, bán và phân bổ tỷ trọng vốn dựa trên hàm Reward được thiết kế tối ưu giữa lợi nhuận và mức độ rủi ro. Thông qua quá trình huấn luyện và đánh giá Backtesting trên dữ liệu lịch sử, mô hình học cách nâng cao hiệu quả đầu tư, hạn chế các giao dịch dư thừa và kiểm soát rủi ro tốt hơn so với các phương pháp truyền thống.",
        "Nghiên cứu mở ra tiềm năng lớn trong việc tự động hóa giao dịch, tối ưu hóa danh mục tài sản và quản trị rủi ro, tạo tiền đề vững chắc để phát triển các hệ thống AI Trading hay Robo-advisor thông minh trong tương lai.",
      ],
      context: [
        "Thị trường chứng khoán có tính biến động cao và khó dự đoán chính xác.",
        "Quyết định đầu tư cần cân nhắc đồng thời lợi nhuận và rủi ro.",
        "Các chiến lược giao dịch cố định khó thích ứng với sự thay đổi của thị trường.",
        "AI và Reinforcement Learning mở ra khả năng giúp hệ thống tự học và tối ưu quyết định giao dịch.",
        "Câu hỏi nghiên cứu: Liệu RL có thể học được chiến lược giao dịch hiệu quả từ dữ liệu thị trường?",
      ],
      solution: [
        "Xây dựng môi trường mô phỏng thị trường tài chính.",
        "Sử dụng Reinforcement Learning Agent để học chiến lược giao dịch.",
        "Cung cấp cho Agent các thông tin về giá, xu hướng và trạng thái danh mục đầu tư.",
        "Agent lựa chọn và phân bổ tỷ trọng vốn.",
        "Xây dựng hàm Reward dựa trên lợi nhuận và mức độ rủi ro.",
        "Huấn luyện và đánh giá Agent thông qua Backtesting trên dữ liệu lịch sử.",
      ],
      goal: [
        "Xây dựng một Agent có khả năng tự học chiến lược giao dịch.",
        "Tối ưu hóa lợi nhuận và phân bổ vốn.",
        "Hạn chế rủi ro và những giao dịch không cần thiết.",
        "So sánh hiệu quả của mô hình RL với các chiến lược giao dịch cơ bản.",
        "Đánh giá khả năng thích ứng của Agent trước những thay đổi của thị trường.",
      ],
      application: [
        "Tự động hóa giao dịch và hỗ trợ ra quyết định đầu tư.",
        "Tối ưu hóa danh mục đầu tư và phân bổ tài sản.",
        "Hỗ trợ quản trị rủi ro trong đầu tư tài chính.",
        "Làm nền tảng cho các hệ thống AI Trading / Robo-advisor trong tương lai.",
      ],
      interview: {
        interviewee: "Trần Đăng Đạt",
        intervieweePhotoUrl:
          "/images/project-interviewee/2026/tran-dang-dat.jpg",
        questions: [
          {
            question:
              "Quá trình hoàn thiện dự án của nhóm bạn diễn ra như thế nào? Có kỉ niệm nào đáng nhớ không?",
            answer: [
              "Mình đánh giá quá trình hoàn thiện dự án của mình khá là kịch tính. Ngày đầu tiên, chúng mình học về những kiến thức cơ bản của Reinforcement Learning như Q-learning, State, Action và Reward. Chúng mình thực sự cảm thấy khá là khó nhưng mà cũng rất là hay, vì đây là một lĩnh vực mà chúng mình rất hứng thú và rất tò mò. Đến ngay ngày tiếp theo, trong khi chúng mình vẫn đang cày lý thuyết, các nhóm khác đã bắt tay vào làm và thậm chí có nhóm đã làm slide, khiến mình cảm thấy khá áp lực. Kiến thức lý thuyết mặc dù khá là dày đặc, nhưng mà may mắn thay tụi mình cũng đã tổng hợp, rút gọn và speedrun để xong bài thuyết trình. Thật sự rất vui trong khoảng thời gian cùng nhau. Kỷ niệm đáng nhớ nhất có lẽ là lúc cả nhóm brainstorm cách thu hút người nghe ngay từ đoạn đầu. Sau một hồi suy nghĩ, tụi mình đã nảy ra ý tưởng làm một video về “Đạt tỷ phú” – kể về hành trình từ một người chơi chứng khoán thua lỗ đến khi trở thành tỷ phú nhờ Reinforcement Learning. Dù ý tưởng khá “điên”, cả nhóm lại rất hào hứng và cuối cùng chính nó đã trở thành một trong những phần vui nhất của dự án.",
            ],
          },
          {
            question:
              "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
            answer: [
              "Mình đã học được một bài học rất quý giá: Muốn đi xa thì phải làm cùng nhau. Trong quá trình thực hiện dự án, mình nhận ra rằng một người có thể có rất nhiều ý tưởng hay, nhưng để biến những ý tưởng đó thành một sản phẩm hoàn chỉnh thì cần sự phối hợp của cả nhóm. Mỗi thành viên đều có thế mạnh riêng, từ tìm hiểu kiến thức, xây dựng mô hình, xử lý dữ liệu cho đến thiết kế slide và thuyết trình. Đặc biệt, mình cảm giác như các thành viên trong nhóm luôn cùng nhau ủng hộ tinh thần, động viên nhau mỗi khi gặp khó khăn. Hoặc ít nhất, mình cảm thấy bản thân như là một mảnh linh hồn của nhóm, cùng mọi người chia sẻ những khoảnh khắc căng thẳng, vui vẻ và cả những lúc tưởng như không kịp hoàn thành dự án. Sau khi hoàn thành dự án, mình càng cảm thấy hứng thú với Reinforcement Learning và muốn tiếp tục tìm hiểu sâu hơn về lĩnh vực này. Trong tương lai, mình định áp dụng những kiến thức về Reinforcement Learning để nghiên cứu các bài toán thực tế, đặc biệt là trong lĩnh vực tài chính định lượng và giao dịch. ",
            ],
          },
        ],
      },
      faq: [
        {
          question:
            "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
          answer: [""],
          author: "Đỗ Châu Tuấn – Trợ giảng",
        },
      ],
      teamMembers: {
        instructors: ["Đỗ Châu Tuấn", "Nguyễn Phú Vinh", "Nguyễn Vũ Ánh Ngọc"],
        members: [
          "Trần Đăng Đạt",
          "Hoàng Văn Quyền",
          "Vương Khánh Toàn",
          "Nguyễn Tiến Trình",
          "Nguyễn Thanh Trà My",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2026/Nhóm 6. ỨNG DỤNG HỌC TĂNG CƯỜNG TRONG TÀI CHÍNH ĐỊNH LƯỢNG.jpg",
      slidePdf:
        "/pdfs/PROJECTS 2026/Nhóm 6. ỨNG DỤNG HỌC TĂNG CƯỜNG TRONG TÀI CHÍNH ĐỊNH LƯỢNG.pdf",
      videoLink: "",
      slug: "ung-dung-hoc-tang-cuong-trong-tai-chinh-dinh-luong",
    },
    // Nhóm 7 - ỨNG DỤNG MÔ HÌNH SINH TẠO POSTER QUẢNG BÁ DU LỊCH CHO QUẢNG BÌNH
    {
      id: 7,
      title: "ỨNG DỤNG MÔ HÌNH SINH TẠO POSTER QUẢNG BÁ DU LỊCH CHO QUẢNG BÌNH",
      summary: [
        "Quảng Bình sở hữu hơn 300 địa danh du lịch đa dạng, nhưng việc thiết kế poster quảng bá thủ công lại tốn nhiều thời gian và chi phí. Trong khi đó, các mô hình AI Text-to-Image hiện nay vẫn gặp hạn chế khi tái hiện chính xác các danh thắng đặc trưng cũng như việc chèn chữ và sắp xếp bố cục poster.",
        "Đến với SEAS, nhóm đã phát triển giải pháp AI tự động hóa quy trình tạo poster quảng bá du lịch Quảng Bình nhanh chóng và chính xác. Nhóm xây dựng mô hình Text-to-Image chuyên biệt bằng cách fine-tune với kỹ thuật LoRA trên tập dữ liệu hình ảnh thực tế, kết hợp gắn nhãn đặc trưng cho từng địa danh.",
        "Hệ thống kết hợp bộ template poster sẵn có cùng giao diện người dùng (UI) trực quan, giúp tạo ra các sản phẩm truyền thông có hình ảnh chân thực, bố cục hợp lý và văn bản rõ ràng. Quy trình này giúp rút ngắn tối đa thời gian và chi phí thiết kế cho các chiến dịch truyền thông du lịch.",
        "Dự án không chỉ hỗ trợ quảng bá cho Quảng Bình mà còn dễ dàng mở rộng cho các tỉnh thành khác. Trong tương lai, nhóm hướng tới phát triển hệ thống thành AI Agent tự động thiết kế poster hoàn chỉnh chỉ từ câu lệnh (prompt) và đóng gói thành sản phẩm thân thiện với người dùng.",
      ],
      context: [
        "Quảng Bình có 300+ địa danh du lịch đa dạng.",
        "Thiết kế poster thủ công tốn thời gian và chi phí.",
        "AI Text-to-Image hiện nay chưa tái hiện chính xác địa danh.",
        "Khả năng tạo text và bố cục poster còn hạn chế.",
        "Cần một giải pháp AI nhanh, chính xác và dễ mở rộng.",
      ],
      solution: [
        "Xây dựng mô hình Text-to-Image chuyên biệt.",
        "Fine-tune mô hình bằng LoRA trên dữ liệu thực tế.",
        "Gắn label/caption đặc trưng cho từng địa danh.",
        "Xây dựng hệ thống template tạo poster.",
        "Kết hợp UI để tự động hóa quy trình.",
      ],
      goal: [
        "Tạo hình ảnh đúng đặc trưng địa danh.",
        "Cải thiện độ chính xác hình ảnh AI.",
        "Tạo poster có text rõ ràng, bố cục hợp lý.",
        "Rút ngắn thời gian và chi phí thiết kế.",
        "Hoàn thiện quy trình tạo poster tự động.",
      ],
      application: [
        "Tạo poster quảng bá du lịch Quảng Bình.",
        "Hỗ trợ truyền thông cho các địa danh địa phương.",
        "Mở rộng mô hình cho nhiều địa danh khác.",
        "Phát triển thành AI Agent tạo poster từ prompt.",
        "Đóng gói thành sản phẩm dễ sử dụng và tiếp cận.",
      ],
      interview: {
        interviewee: "Nguyễn Thanh An Bình",
        intervieweePhotoUrl:
          "/images/project-interviewee/2026/nguyen-thanh-an-binh.jpg",
        questions: [
          {
            question:
              "Quá trình hoàn thiện dự án của nhóm bạn diễn ra như thế nào? Có kỉ niệm nào đáng nhớ không?",
            answer: [
              'Hành trình của bọn mình từ lúc nhận đề tài đến khi hoàn thành có thể gói gọn trong 3 từ: "Mày mò – Vỡ oà – Chạy nước rút". Ban đầu, việc fine-tune Flux để sinh ảnh chính xác địa danh Quảng Bình gặp vô số thử thách, vì model thường ra hình ảnh chung chung. Khoảnh khắc "Eureka!" đến khi tụi mình điều chỉnh được  và nhìn thấy bức ảnh động Phong Nha ra đúng thạch nhũ – cả nhóm vỡ oà sung sướng. Kỉ niệm đáng nhớ nhất là đêm cuối: code UI tới 2h sáng, mắt cay xè nhưng không ai bỏ cuộc, xong xuôi lại mở Zoom tập thuyết trình lúc nửa đêm. Mệt nhưng vui, và cái cảm giác thở phào khi giao diện tạo poster chạy mượt là điều không bao giờ quên.',
            ],
          },
          {
            question:
              "Sau khi hoàn thành dự án, bạn học hỏi được điều gì, và có dự định gì cho tương lai không?",
            answer: [
              "Dự án cho mình bài học lớn về việc đưa AI vào ứng dụng thực tế – đôi khi dữ liệu đa dạng, chất lượng cao và sự hiểu biết về ngữ cảnh địa phương còn quan trọng hơn cả những mô hình phức tạp. Về định hướng tương lai, nhóm mình muốn mở rộng hệ thống: train trên nhiều địa danh hơn, kết hợp thêm dữ liệu video, drone và cảm xúc để poster giàu sức sống; đồng thời tích hợp AI agent cho phép chỉ cần nhập prompt là tự động tạo poster mà không cần chọn template. Mục tiêu cuối cùng là đóng gói thành sản phẩm hoàn chỉnh, thân thiện với mọi đối tượng, góp phần quảng bá du lịch địa phương một cách bền vững.",
            ],
          },
        ],
      },
      faq: [
        {
          question:
            "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
          answer: [
            "Hiện nay AI đang phát triển rất mạnh, câu hỏi mà nhóm đặt ra là có thể tận dụng AI để quảng bá cho du lịch quê hương đất nước hay không? Từ đó nhóm bắt tay vào xây dựng dự án này.",
          ],
          author: "Nguyễn Thị Hà Chi – Trợ giảng",
        },
        {
          question: "Dự án sử dụng chủ yếu nền tảng kiến thức và mô hình nào?",
          answer: [
            "Kiến thức về mô hình tạo sinh, mô hình sinh ảnh, huấn luyện model.",
          ],
          author: "Nguyễn Thị Hà Chi – Trợ giảng",
        },
        {
          question:
            "Thách thức kỹ thuật lớn nhất mà nhóm gặp phải là gì và mọi người đã vượt qua nó ra sao?",
          answer: [
            "Cấu trúc của poster thì gồm cả ảnh và chữ, nhưng hiện nay model tạo sinh sinh chữ - đặc biệt là chữ Việt Nam còn kém. Vậy nên nhóm tách vấn đề cần giải quyết thành 2 pha, pha sinh ảnh bằng model tạo sinh, và pha tạo template chữ bằng code.",
          ],
          author: "Nguyễn Thị Hà Chi – Trợ giảng",
        },
        {
          question:
            "TA đã chuẩn bị những gì trước, và học viên đã tự thực hiện những phần việc nào?",
          answer: [
            "TA chuẩn bị các kiến thức trại sinh cần có, sườn và các đầu việc cần giải quyết, code mẫu tạm thời. Các bạn trại sinh đã fill được toàn bộ code, và phát triển chi tiết, cải thiện chất lượng model tốt hơn, font chữ poster đẹp và đa dạng hơn.",
          ],
          author: "Nguyễn Thị Hà Chi – Trợ giảng",
        },
        {
          question:
            "Đánh giá ngắn gọn về hiệu năng/kết quả mà mô hình đạt được?",
          answer: [
            "Tốt. Model có thể sinh ra ảnh mang đặc trưng đúng của quê hương Quảng Bình.",
          ],
          author: "Nguyễn Thị Hà Chi – Trợ giảng",
        },
      ],
      teamMembers: {
        instructors: [
          "Đặng Cao Cường",
          "Phạm Phước Minh Quang",
          "Nguyễn Thị Hà Chi",
          "Nguyễn Phương Trang",
        ],
        members: [
          "Phạm Đức Minh",
          "Nguyễn Khánh Toàn",
          "Nguyễn Thanh An Bình",
          "Nguyễn Hồ Mẫn Tuệ",
          "Nguyễn Thành Luân",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2026/Nhóm 7. ỨNG DỤNG MÔ HÌNH SINH TẠO POSTER QUẢNG BÁ DU LỊCH CHO QUẢNG BÌNH.jpg",
      slidePdf:
        "/pdfs/PROJECTS 2026/Nhóm 7. ỨNG DỤNG MÔ HÌNH SINH TẠO POSTER QUẢNG BÁ DU LỊCH CHO QUẢNG BÌNH.pdf",
      videoLink: "",
      slug: "ung-dung-mo-hinh-sinh-tao-poster-quang-ba-du-lich-cho-quang-binh",
    },
    // Nhóm 8 - DỰ ĐOÁN KHẢ NĂNG SỐNG SÓT CỦA BỆNH NHÂN UNG THƯ
    {
      id: 8,
      title: "DỰ ĐOÁN KHẢ NĂNG SỐNG SÓT CỦA BỆNH NHÂN UNG THƯ",
      summary: [
        "Phân tích ảnh giải phẫu bệnh toàn bộ tiêu bản (WSI) là bước then chốt để tiên lượng ung thư, nhưng kích thước ảnh đạt tới hàng tỷ pixel khiến việc đánh giá thủ công gặp rất nhiều khó khăn, chưa kể nguồn dữ liệu y khoa chuẩn hóa còn hạn chế.",
        "Đến với SEAS, nhóm đã xây dựng mô hình Deep Learning tự động phân tích ảnh WSI nhằm dự đoán mức độ nguy cơ tương đối và khả năng sống sót của bệnh nhân ung thư. Hệ thống sử dụng mô hình nền tảng UNI2-h để trích xuất đặc trưng từ các mảnh ảnh nhỏ của tế bào.",
        'Nhờ kết hợp kỹ thuật Attention-based Multiple Instance Learning (MIL), mô hình có thể tự động "săn tìm" và tập trung vào các vùng mô tế bào ác tính mà không cần con người dán nhãn thủ công từng pixel. Nhóm sử dụng hàm mất mát Cox Partial Likelihood Loss để đánh giá và cập nhật trọng số, mang lại độ chính xác cao trong dự đoán.',
        "Dự án mang tính ứng dụng thực tiễn lớn khi cung cấp điểm rủi ro khách quan, hỗ trợ bác sĩ cá nhân hóa phác đồ điều trị phù hợp cho từng bệnh nhân. Đồng thời, hệ thống trực quan hóa kết quả bằng bản đồ nhiệt, khoanh vùng chính xác các khu vực tổn thương để bác sĩ chẩn đoán nhanh chóng hơn.",
      ],
      context: [
        "Phân tích ảnh WSI là một trong những bước quan trọng để tiên lượng ung thư. Tuy nhiên, kích thước ảnh gigapixel khiến việc đánh giá thủ công rất khó khăn.",
        "Các nguồn dữ liệu về y khoa còn hạn chế.",
      ],
      solution: [
        "Sử dụng các mô hình UNI2-h để trích xuất vector đặc trưng từ các patches của tế bào.",
        "Dùng Attention-based MIL giúp mô hình tự động tìm ra và tập trung vào các vùng mô tế bào ác tính mà không cần con người phải dán nhãn chi tiết từng pixel.",
        "Sử dụng hàm mất mát Cox Partial Likelihood Loss để đánh giá và cập nhật trọng số mạng nơ-ron thông qua thuật toán lan truyền ngược.",
      ],
      goal: [
        "Xây dựng một mô hình Deep Learning có khả năng tự động phân tích ảnh WSI để dự đoán chính xác mức độ nguy cơ tương đối giữa các bệnh nhân ung thư.",
        "Trực quan hóa được ảnh WSI của bệnh nhân lên bản đồ nhiệt.",
      ],
      application: [
        "Cung cấp điểm rủi ro khách quan, hỗ trợ các bác sĩ thiết kế phác đồ điều trị cá nhân hóa, mạnh tay hơn với các ca có nguy cơ cao và giảm thiểu tác dụng phụ cho các ca rủi ro thấp.",
        "Trực quan hóa kết quả bằng bản đồ nhiệt, làm nổi bật và khoanh vùng chính xác các khu vực tế bào ác tính trên tiêu bản WSI, giúp bác sĩ quan sát và chẩn đoán nhanh chóng, chính xác hơn.",
      ],
      interview: {
        interviewee: "Nguyễn Thanh Minh",
        intervieweePhotoUrl:
          "/images/project-interviewee/2026/nguyen-thanh-minh.jpg",
        questions: [
          {
            question:
              "Quá trình hoàn thiện dự án của nhóm bạn diễn ra như thế nào? Có kỉ niệm nào đáng nhớ không?",
            answer: [
              "Nhìn chung, quá trình triển khai dự án của nhóm em diễn ra khá suôn sẻ. Trong những ngày đầu, chúng em tập trung xác định rõ định hướng và mục tiêu, đồng thời nghiên cứu các bài báo khoa học để củng cố nền tảng lý thuyết. Sau khi đã vững vàng, nhóm mới chính thức bước vào các giai đoạn cốt lõi: xây dựng, huấn luyện, đánh giá mô hình và cuối cùng là trực quan hóa kết quả trên bản đồ nhiệt. Đối với cá nhân em, mỗi phút giây được đồng hành cùng các thành viên và các anh chị mentor đều là những trải nghiệm vô cùng đáng nhớ vô cùng quý giá. Tuy nhiên, kỷ niệm để lại dấu ấn sâu đậm nhất chắc chắn là đêm trước ngày báo cáo. Tối hôm đó, nhóm may mắn nhận được những lời góp ý tâm huyết từ anh Cảnh Hoàng một trong những founder của SEAS. Nhờ những nhận xét ấy, chúng em nhanh chóng nhận ra các điểm yếu trong phần trình bày của mình. Dù 8h sáng hôm sau đã phải lên thuyết trình, nhưng cả nhóm vẫn đồng lòng thức đến tận 3h sáng để sửa chữa, rà soát lại từng chi tiết với mong muốn mang đến một sản phẩm hoàn thiện nhất.",
            ],
          },
          {
            question:
              "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
            answer: [
              "Sau khi hoàn thành dự án này, bài học lớn nhất mà em nhận được không chỉ nằm ở việc thiết kế được một kiến trúc deep learning, mà còn là cách xử lý dữ liệu thực tế khi mà bọn phải đối mặt với 1 trong những thách thức lớn đó là ảnh WSI có kích thước rất lớn nên bọn em phải dùng các foundation model để có trích xuất ảnh WSI ra những vector đặc trưng. Ngoài ra em còn học hỏi được rất nhiều về cách làm việc, kiến thức, kinh nghiệm của các bạn cùng nhóm và các anh chị mentor. Trong tương lai nếu có khả năng về tiềm lực cũng như kiến thức thì bọn em muốn tích hợp thêm dữ liệu gen và hồ sơ lâm sàng của bệnh nhân vào các lớp đầu vào để AI có một góc nhìn toàn diện từ mức độ phân tử đến tổng thể, tiến gần hơn tới bức tranh y khoa chính xác và  thay vì lớp đầu ra trả về chỉ số risk score và bản độ nhiệt, bọn em còn muốn tích hợp mô hình ngôn ngữ lớn dành riêng cho y khoa để bác sĩ có thể trực tiếp chat với hệ thống để biết vùng tế bào nào là vùng tế bào ác tính và những thắc mắc khác giúp bác sĩ có thể đem ra pháp đồ điều trị thật chính xác cho từng bệnh nhân. ",
            ],
          },
          {
            question:
              "Thách thức kỹ thuật lớn nhất mà nhóm gặp phải là gì và mọi người đã vượt qua nó ra sao?",
            answer: [
              "Thách thức lớn nhất là WSI có kích thước rất lớn và chứa hàng chục nghìn vùng ảnh, nên không thể đưa trực tiếp toàn bộ ảnh vào một mô hình Deep Learning thông thường. Nhóm phải xử lý WSI thành các patch, trích xuất feature và tìm cách tổng hợp một lượng lớn instance thành một biểu diễn ở cấp độ bệnh nhân.",
              "Để giải quyết vấn đề này, nhóm tìm hiểu và áp dụng Multiple Instance Learning, trong đó mỗi patch được xem như một instance và mô hình học cách xác định những vùng có mức độ quan trọng khác nhau đối với kết quả survival. Việc sử dụng foundation model cũng giúp tận dụng các đặc trưng hình ảnh đã được học trước thay vì phải huấn luyện một mô hình thị giác hoàn toàn từ đầu.",
            ],
          },
          {
            question:
              "TA đã chuẩn bị những gì trước, và học viên đã tự thực hiện những phần việc nào?",
            answer: [
              "TA chuẩn bị bài toán, dataset/pipeline ban đầu và định hướng kỹ thuật, đồng thời hướng dẫn học viên về các khái niệm cần thiết như Survival Analysis, WSI, Multiple Instance Learning và foundation models.",
              "Phần học viên chủ động thực hiện bao gồm việc hiểu kiến trúc mô hình, xử lý dữ liệu, xây dựng và huấn luyện pipeline, đánh giá mô hình và trực quan hóa kết quả dựa trên codebase mà TA đã chuẩn bị. Qua đó, học viên không chỉ sử dụng mô hình có sẵn mà còn hiểu được cách xây dựng mô hình học sâu từ đầu tới cuối cho bài toán medical imaging.",
            ],
          },
        ],
      },
      faq: [
        {
          question:
            "Ý tưởng dự án xuất phát từ đâu, hoặc bài toán thực tế nào mà dự án muốn giải quyết?",
          answer: [
            "Ý tưởng của dự án xuất phát từ bài toán dự đoán khả năng sống sót của bệnh nhân ung thư. Trong thực tế, việc ước lượng nguy cơ tử vong và phân tầng bệnh nhân có thể hỗ trợ bác sĩ đưa ra phác đồ điều trị phù hợp và cá nhân hóa hơn.",
            "Nhóm đặc biệt quan tâm đến việc khai thác ảnh tiêu bản (Whole-Slide Image), vì đây là nguồn dữ liệu chứa rất nhiều thông tin về đặc điểm mô học của khối u. Từ đó, nhóm muốn tìm hiểu cách các phương pháp Deep Learning hiện đại có thể được áp dụng để giải quyết bài toán trên.",
          ],
          author: "Nguyễn Phương Trang – Trợ giảng",
        },
        {
          question: "Dự án sử dụng chủ yếu nền tảng kiến thức và mô hình nào?",
          answer: [
            "Về kiến thức, dự án tập trung vào Digital Pathology, Whole-Slide Image (WSI), Deep Learning và Multiple Instance Learning (MIL). Đặc biệt, nhóm tìm hiểu cách sử dụng foundation model (UNI) để trích xuất đặc trưng từ các vùng trên dữ liệu WSI, sau đó sử dụng MIL (attention-based MIL) để tổng hợp các đặc trưng này ở cấp độ toàn bộ bệnh nhân và dự đoán nguy cơ tử vong.",
          ],
          author: "Nguyễn Phương Trang – Trợ giảng",
        },
        {
          question:
            "Thách thức kỹ thuật lớn nhất mà nhóm gặp phải là gì và mọi người đã vượt qua nó ra sao?",
          answer: [
            "Thách thức lớn nhất là WSI có kích thước rất lớn và chứa hàng chục nghìn vùng ảnh, nên không thể đưa trực tiếp toàn bộ ảnh vào một mô hình Deep Learning thông thường. Nhóm phải xử lý WSI thành các patch, trích xuất feature và tìm cách tổng hợp một lượng lớn instance thành một biểu diễn ở cấp độ bệnh nhân.",
            "Để giải quyết vấn đề này, nhóm tìm hiểu và áp dụng Multiple Instance Learning, trong đó mỗi patch được xem như một instance và mô hình học cách xác định những vùng có mức độ quan trọng khác nhau đối với kết quả survival. Việc sử dụng foundation model cũng giúp tận dụng các đặc trưng hình ảnh đã được học trước thay vì phải huấn luyện một mô hình thị giác hoàn toàn từ đầu.",
          ],
          author: "Nguyễn Phương Trang – Trợ giảng",
        },
        {
          question:
            "Đánh giá ngắn gọn về hiệu năng/kết quả mà mô hình đạt được?",
          answer: [
            "Mô hình đã xây dựng được pipeline hoàn chỉnh từ dữ liệu WSI đến dự đoán survival và có thể ước lượng risk score ở cấp độ bệnh nhân, đồng thời trực quan hóa các vùng trên WSI có mức độ đóng góp cao vào dự đoán. Kết quả bước đầu cho thấy pipeline có khả năng khai thác đặc trưng mô học từ WSI cho bài toán survival prediction. Hiệu năng định lượng của mô hình được đánh giá thông qua các chỉ số phù hợp với bài toán survival analysis.",
          ],
          author: "Nguyễn Phương Trang – Trợ giảng",
        },
        {
          question:
            "TA đã chuẩn bị những gì trước, và học viên đã tự thực hiện những phần việc nào?",
          answer: [
            "TA chuẩn bị bài toán, dataset/pipeline ban đầu và định hướng kỹ thuật, đồng thời hướng dẫn học viên về các khái niệm cần thiết như Survival Analysis, WSI, Multiple Instance Learning và foundation models.",
            "Phần học viên chủ động thực hiện bao gồm việc hiểu kiến trúc mô hình, xử lý dữ liệu, xây dựng và huấn luyện pipeline, đánh giá mô hình và trực quan hóa kết quả dựa trên codebase mà TA đã chuẩn bị. Qua đó, học viên không chỉ sử dụng mô hình có sẵn mà còn hiểu được cách xây dựng mô hình học sâu từ đầu tới cuối cho bài toán medical imaging.",
            "Đây cũng phù hợp với learning outcomes của dự án, trong đó nhấn mạnh khả năng làm việc nhóm, hiểu WSI, MIL và cách foundation model được ứng dụng trong medical imaging.",
          ],
          author: "Nguyễn Phương Trang – Trợ giảng",
        },
        {
          question:
            "Đánh giá ngắn gọn về hiệu năng/kết quả mà mô hình đạt được?",
          answer: [
            "Mô hình đã xây dựng được pipeline hoàn chỉnh từ dữ liệu WSI đến dự đoán survival và có thể ước lượng risk score ở cấp độ bệnh nhân, đồng thời trực quan hóa các vùng trên WSI có mức độ đóng góp cao vào dự đoán. Kết quả bước đầu cho thấy pipeline có khả năng khai thác đặc trưng mô học từ WSI cho bài toán survival prediction. Hiệu năng định lượng của mô hình được đánh giá thông qua các chỉ số phù hợp với bài toán survival analysis.",
          ],
          author: "Nguyễn Phương Trang – Trợ giảng",
        },
      ],
      teamMembers: {
        instructors: [
          "Nguyễn Cảnh Hoàng",
          "Nguyễn Phương Trang",
          "Nguyễn Vũ Ánh Ngọc",
        ],
        members: [
          "Nguyễn Thanh Minh",
          "Trần Thanh Hảo",
          "Nguyễn Thức Công Thành",
          "Trần Xuân Phú",
          "Nguyễn Đức Quý",
        ],
      },
      slideThumbnail:
        "/images/project-thumbnails/2026/Nhóm 8. DỰ ĐOÁN KHẢ NĂNG SỐNG SÓT CỦA BỆNH NHÂN UNG THƯ.jpg",
      slidePdf:
        "/pdfs/PROJECTS 2026/Nhóm 8. DỰ ĐOÁN KHẢ NĂNG SỐNG SÓT CỦA BỆNH NHÂN UNG THƯ.pdf",
      videoLink: "",
      slug: "du-bao-kha-nang-song-sot-cua-benh-nhan-ung-thu",
    },
  ],
};
