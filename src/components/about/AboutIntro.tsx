

const AboutIntro = () => {
    return (
        <section className="bg-[#F8F8F8] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
                    Giới Thiệu SEAS
                </h1>

                {/* Main Description */}
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    SEAS (Summer in Engineering and Applied Sciences) là trường hè miễn phí dành cho học sinh THPT
                    miền Trung, được thành lập bởi các chuyên viên nghiên cứu người miền Trung đang làm việc tại các
                    viện nghiên cứu hàng đầu trong nước và thế giới. Mục tiêu của SEAS là giúp các bạn học sinh tiếp
                    cận với các ngành khoa học công nghệ mới như trí tuệ nhân tạo (AI), khoa học dữ liệu, lập trình, năng
                    lượng tái tạo, công nghệ lượng tử, và hơn thế nữa!
                </p>

                {/* Benefits List */}
                <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                            SEAS được thành lập để tạo cơ hội cho học sinh THPT:
                        </p>
                    </div>

                    <div className="flex items-start">
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                            ● Tiếp cận kiến thức khoa học và kỹ thuật tiên tiến.
                        </p>
                    </div>

                    <div className="flex items-start">
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                            ● Gặp gỡ, giao lưu với bạn bè và các anh chị đi trước có cùng chí hướng.
                        </p>
                    </div>

                    <div className="flex items-start">
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                            ● Định hướng nghề nghiệp, trang bị kỹ năng và hồ sơ để ứng tuyển đại học, du học.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;