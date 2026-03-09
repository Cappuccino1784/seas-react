
const AboutIntro = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F8FB] via-white to-blue-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            {/* Decorative Theme Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-5xl mx-auto relative z-10 animate-fadeIn">
                {/* Title */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004d61] font-bold mb-4 sm:mb-6 roboto-slab drop-shadow-sm leading-tight transition-all duration-300">
                    Về Chúng Tôi
                </h1>

                {/* Main Description */}
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 font-medium backdrop-blur-sm bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm relative overflow-hidden">
                    <span className="absolute top-0 left-0 w-1.5 h-full bg-[#2d8bba]"></span>
                    SEAS (Summer in Engineering and Applied Sciences) là <span className="text-[#2d8bba] font-bold">trường hè miễn phí</span> dành cho học sinh THPT
                    miền Trung, được thành lập bởi các chuyên viên nghiên cứu người miền Trung đang làm việc tại các
                    viện nghiên cứu hàng đầu trong nước và thế giới. Mục tiêu của SEAS là giúp các bạn học sinh tiếp
                    cận với các ngành khoa học công nghệ mới như trí tuệ nhân tạo (AI), khoa học dữ liệu, lập trình, năng
                    lượng tái tạo, công nghệ lượng tử, và hơn thế nữa!
                </p>
            </div>
        </section>
    );
};

export default AboutIntro;