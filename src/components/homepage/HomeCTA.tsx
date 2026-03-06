import { Link } from 'react-router-dom';

const HomeCTA = () => {
    return (
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
            {/* Background Gradient & Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#003B4C] via-[#00637E] to-[#2d8bba] z-0"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('/images/layout/hero-bg-3.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>

            <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 roboto-slab leading-tight">
                    Sẵn sàng bắt đầu hành trình của bạn?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-blue-50 mb-10 max-w-3xl leading-relaxed">
                    Đừng bỏ lỡ cơ hội khám phá tiềm năng của bản thân trong lĩnh vực Khoa học, Công nghệ, Kỹ thuật và Toán học cùng cộng đồng SEAS.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
                    <Link
                        to="/apply"
                        className="bg-white text-[#004d61] hover:bg-blue-50 hover:text-[#2d8bba] font-bold text-lg py-4 px-10 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center group"
                    >
                        Đăng Ký Tham Gia
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                    <Link
                        to="/donate"
                        className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
                    >
                        Tài Trợ SEAS
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeCTA;
