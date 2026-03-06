
const HomeQuote = () => {
    return (
        <section className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-[#E6F3F8]">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-1/4 w-60 h-60 bg-teal-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 animate-slowPan"></div>
            <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-blue-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="absolute inset-0 bg-[url('/images/layout/quote-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>

            <div className="relative max-w-3xl mx-auto z-10 animate-fadeIn">
                <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 sm:p-10 border border-white/60 group hover:-translate-y-1">
                    {/* Glowing top border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#004d61] via-[#2d8bba] to-teal-400 rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity"></div>

                    {/* Large Quote Icon */}
                    <div className="absolute -top-4 left-0 sm:-left-4 text-[#2d8bba] opacity-15 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 pointer-events-none">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>

                    <div className="text-center relative z-10">
                        <h2 className="playfair-display text-xl sm:text-2xl md:text-3xl font-bold text-[#004d61] mb-6 sm:mb-8 leading-relaxed text-balance">
                            "SEAS là giấc mơ được chúng tôi ấp ủ nhiều năm. Đó không chỉ là nơi truyền cảm hứng mà còn mở ra cơ hội để các bạn học sinh quê mình thấy rằng khoa học, công nghệ không còn xa vời mà đang ở rất gần, từ chính nơi mình sinh ra."
                        </h2>

                        <div className="flex flex-col items-center justify-center space-y-3 mt-4">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#2d8bba] to-transparent rounded-full mb-2"></div>

                            <img
                                src="/images/team/founders/Duc_Hoang.jpg"
                                alt="Hoàng Minh Đức"
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#2d8bba] shadow-sm"
                            />

                            <div>
                                <p className="text-base sm:text-lg text-gray-900 font-bold uppercase tracking-wider">
                                    Hoàng Minh Đức
                                </p>
                                <p className="text-sm font-semibold text-[#2d8bba]">
                                    Đồng sáng lập SEAS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeQuote;