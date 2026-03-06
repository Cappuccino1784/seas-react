
const AboutCards = (props: any) => {
    return (
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-blue-50">
            {/* Top bright border on hover */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2d8bba] to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

            <div
                style={props.color}
                className="flex items-center justify-center h-40 sm:h-56 md:h-72 p-4 sm:p-6 md:p-8 relative overflow-hidden">
                {/* Subtle pulse effect on image hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                    src={props.image}
                    alt={props.title}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
            </div>
            <div className="bg-white p-6 sm:p-8 text-center flex-grow flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-[#004d61] mb-4 group-hover:text-[#2d8bba] transition-colors">
                    {props.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {props.description}
                </p>
            </div>
        </div>
    );
};


const AboutIntro = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F8FB] via-white to-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            {/* Decorative Theme Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-5xl mx-auto relative z-10 animate-fadeIn">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004d61] font-bold mb-8 sm:mb-12 roboto-slab drop-shadow-sm">
                    Về Chúng Tôi
                </h1>

                {/* Main Description */}
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 sm:mb-14 font-medium backdrop-blur-sm bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm relative overflow-hidden">
                    <span className="absolute top-0 left-0 w-1.5 h-full bg-[#2d8bba]"></span>
                    SEAS (Summer in Engineering and Applied Sciences) là <span className="text-[#2d8bba] font-bold">trường hè miễn phí</span> dành cho học sinh THPT
                    miền Trung, được thành lập bởi các chuyên viên nghiên cứu người miền Trung đang làm việc tại các
                    viện nghiên cứu hàng đầu trong nước và thế giới. Mục tiêu của SEAS là giúp các bạn học sinh tiếp
                    cận với các ngành khoa học công nghệ mới như trí tuệ nhân tạo (AI), khoa học dữ liệu, lập trình, năng
                    lượng tái tạo, công nghệ lượng tử, và hơn thế nữa!
                </p>

                {/* Benefits Cards */}
                <div className="mt-8 sm:mt-12 relative">
                    <h2 className="text-xl md:text-2xl font-bold text-[#004d61] mb-10 text-center relative inline-block left-1/2 transform -translate-x-1/2">
                        SEAS được thành lập để tạo cơ hội cho học sinh THPT
                        <span className="absolute -bottom-3 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#2d8bba] to-transparent"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AboutCards
                            color={{ backgroundColor: '#E0F7FA' }}
                            image="/images/layout/about-card-1.svg"
                            title="Tiếp cận kiến thức khoa học và kỹ thuật tiên tiến"
                            description="Học sinh sẽ được học từ các chuyên gia hàng đầu trong lĩnh vực khoa học công nghệ, với kinh nghiệm giảng dạy và nghiên cứu tại các viện nghiên cứu và trường đại học danh tiếng trong và ngoài nước."
                        />
                        <AboutCards
                            color={{ backgroundColor: '#FFF3E0' }}
                            image="/images/layout/about-card-2.svg"
                            title="Gặp gỡ, giao lưu với bạn bè và các anh chị đi trước có cùng chí hướng"
                            description="SEAS là nơi các bạn học sinh có thể gặp gỡ, giao lưu với các anh chị đi trước có cùng chí hướng, tạo điều kiện cho việc học hỏi và phát triển kỹ năng mềm."
                        />
                        <AboutCards
                            color={{ backgroundColor: '#F3E5F5' }}
                            image="/images/layout/about-card-3.svg"
                            title="Định hướng nghề nghiệp, trang bị kỹ năng và hồ sơ để ứng tuyển đại học, du học"
                            description="SEAS sẽ giúp học sinh định hướng nghề nghiệp, trang bị kỹ năng và hồ sơ để ứng tuyển đại học, du học, mở ra cơ hội cho tương lai của các bạn."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;