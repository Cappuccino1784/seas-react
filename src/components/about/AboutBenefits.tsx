
const BenefitCard = ({ bgImage, title, description, height, delay }: { bgImage: string, title: string, description: string, height: string, delay: string }) => {
    return (
        <div className={`relative ${height} min-h-[160px] sm:min-h-[220px] mb-4 sm:mb-6 break-inside-avoid rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-lg animate-fadeInUp ${delay}`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Dark Overlay/Glassmorphism Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/90 via-[#001f3f]/40 to-black/10 transition-colors duration-500"></div>

            <div className="relative z-10 h-full p-4 sm:p-8 flex flex-col justify-end text-white">
                <div className="translate-y-0">
                    <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-3 drop-shadow-md leading-tight">
                        {title}
                    </h3>
                    <p className="hidden sm:block text-white/80 text-xs sm:text-sm leading-relaxed font-medium">
                        {description}
                    </p>
                    {/* Compact description for mobile */}
                    <p className="sm:hidden text-white/90 text-[10px] leading-tight font-medium line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const AboutBenefits = () => {
    const benefits = [
        {
            bgImage: "/images/layout/benefit-4.JPG",
            title: "Chứng nhận",
            description: "Giấy chứng nhận uy tín từ SEAS cùng các đối tác, minh chứng cho năng lực.",
            height: "h-40 sm:h-96 lg:h-[480px]",
            delay: "animation-delay-100"
        },
        {
            bgImage: "/images/layout/benefit-2.JPG",
            title: "Kết nối",
            description: "Kết nối với chuyên gia, sinh viên từ các trường đại học hàng đầu.",
            height: "h-48 sm:h-[420px] lg:h-[560px]",
            delay: "animation-delay-200"
        },
        {
            bgImage: "/images/layout/benefit-1.JPG",
            title: "Thư giới thiệu",
            description: "Cơ hội nhận thư giới thiệu hỗ trợ hồ sơ đại học.",
            height: "h-40 sm:h-96 lg:h-[480px]",
            delay: "animation-delay-300"
        },
        {
            bgImage: "/images/layout/benefit-3.JPG",
            title: "Trải nghiệm",
            description: "Giao lưu văn hóa, du lịch khám phá vẻ đẹp Quảng Bình.",
            height: "h-48 sm:h-[420px] lg:h-[560px]",
            delay: "animation-delay-400"
        }
    ];

    return (
        <section className="relative py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F8FB] to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/50 rounded-full filter blur-3xl opacity-60"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-50/50 rounded-full filter blur-3xl opacity-60"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-6 sm:mb-10 px-2">
                    <span className="text-[#2d8bba] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-2 sm:mb-4 block">Đặc quyền học viên</span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#004d61] mb-4 sm:mb-6 roboto-slab">
                        Lợi Ích Tham Gia
                    </h2>
                    <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#2d8bba] mx-auto rounded-full"></div>
                </div>

                <div className="columns-2 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutBenefits;
