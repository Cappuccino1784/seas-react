import ComingSoon from "../layout/ComingSoon";

const ApplyIntro = () => {
    return (
        <>
            <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-white min-h-[40vh] flex items-center">
                {/* Background Gradient & Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003B4C] via-[#00637E] to-[#2d8bba] z-0"></div>

                {/* Decorative Theme Blobs */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-300/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-5xl mx-auto relative z-10 text-center sm:text-left animate-fadeIn">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 roboto-slab drop-shadow-md">
                        Đăng Ký Tham Gia
                    </h1>

                    {/* Main Description */}
                    <p className="text-base sm:text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl drop-shadow-sm mb-10">
                        Đơn ứng tuyển cho học sinh THPT và sinh viên đại học tham gia trại hè SEAS:
                    </p>
                    <ComingSoon text="Thông tin chi tiết về quy trình nộp đơn và các yêu cầu sẽ sớm được cập nhật. Hãy theo dõi để không bỏ lỡ cơ hội tham gia vào một trải nghiệm học tập và phát triển tuyệt vời!" />
                </div>
            </section>
        </>
    );
};

export default ApplyIntro;