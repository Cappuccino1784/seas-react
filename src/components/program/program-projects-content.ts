export type Project = {
  id: number;
  title: string;
  context: string[];
  solution: string[];
  goal: string[];
  application: string[];
  teamMembers: {
    instructors: string[];
    members: string[];
  };
  slideThumbnail: string;
  videoLink?: string;
  slug: string;
};

export const projects: Record<"SEAS 2025" | "SEAS 2026", Project[]> = {
  "SEAS 2025": [
    // AI CHO TẦNG VẬT LÝ CỦA MẠNG 6G
    {
      id: 1,
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
      slideThumbnail: "/images/project-thumbnails/2025/AI CHO TẦNG VẬT LÝ CỦA MẠNG 6G.png",
      videoLink: "https://www.youtube.com/watch?v=u87qpgUSiGA",
      slug: "ai-cho-tang-vat-ly-cua-mang-6g",
    },
    // MÔ HÌNH DỰ BÁO LŨ LỤT Ở MIỀN TRUNG
    {
      id: 2,
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
      slideThumbnail: "/images/project-thumbnails/2025/MÔ HÌNH DỰ BÁO LŨ LỤT Ở MIỀN TRUNG.png",
      videoLink: "",
      slug: "mo-hinh-du-bao-lu-lut-o-mien-trung",
    },
    // MẠNG NƠ-RO ĐỒ THỊ VÀ TÍNH DỄ BỊ TỔN THƯƠNG TRONG ỨNG DỤNG THỰC TẾ
    {
      id: 3,
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
      slideThumbnail: "/images/project-thumbnails/2025/MẠNG NƠ-RON ĐỒ THỊ VÀ TÍNH DỄ BỊ TỔN THƯƠNG TRONG ỨNG DỤNG THỰC TẾ.png",
      videoLink: "https://www.youtube.com/watch?v=TVKq89qgKrM",
      slug: "mang-no-ron-do-thi-va-tinh-de-bi-ton-thuong-trong-ung-dung-thuc-te",
    },
    // ỨNG DỤNG HỌC KHÔNG GIÁM SÁT TRONG XỬ LÝ ẢNH MƯA
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
      slideThumbnail: "/images/project-thumbnails/2025/ỨNG DỤNG HỌC KHÔNG GIÁM SÁT TRONG XỬ LÝ ẢNH MƯA.png",
      videoLink: "https://www.youtube.com/watch?v=gOqhEDAfMSs",
      slug: "ung-dung-hoc-khong-giam-sat-trong-xu-ly-anh-mua",
    },
    // MẠNG NƠ-RO CHO VẬT LÝ NHIỀU HẠT LƯỢNG TỬ
    {
      id: 5,
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
      slideThumbnail: "/images/project-thumbnails/2025/MẠNG NƠ-RON CHO VẬT LÝ NHIỀU HẠT LƯỢNG TỬ.png",
      videoLink: "",
      slug: "mang-no-ron-cho-vat-ly-nhieu-hat-luong-tu",
    },
    // NHẬN DIỆN MÓN ĂN QUA HÌNH ẢNH VÀ VĂN BẢN
    {
      id: 6,
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
      slideThumbnail: "/images/project-thumbnails/2025/NHẬN DIỆN MÓN ĂN QUA HÌNH ẢNH VÀ VĂN BẢN.png",
      videoLink: "https://www.youtube.com/watch?v=be_XhTaBixk",
      slug: "nhan-dien-mon-an-qua-hinh-anh-va-van-ban",
    },
    // PHÂN LOẠI CÁ TRONG THỜI GIAN THỰC BẰNG AI
    {
      id: 7,
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
      slideThumbnail: "/images/project-thumbnails/2025/PHÂN LOẠI CÁ TRONG THỜI GIAN THỰC BẰNG AI.png",
      videoLink: "https://www.youtube.com/watch?v=31drH9SzDQg",
      slug: "phan-loai-ca-trong-thoi-gian-thuc-bang-ai",
    },
    // XỬ LÝ NGÔN NGỮ MIỀN TRUNG
    {
      id: 8,
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
      slideThumbnail: "/images/project-thumbnails/2025/XỬ LÝ NGÔN NGỮ MIỀN TRUNG.png",
      videoLink: "https://www.youtube.com/watch?v=rJ9D4ZMR9Qg&t=56s",
      slug: "xu-ly-ngon-ngu-mien-trung",
    },
  ],
  "SEAS 2026": [],
};

