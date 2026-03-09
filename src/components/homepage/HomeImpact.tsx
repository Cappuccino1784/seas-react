import { impactData } from "../../assets/infomation/home.impact";

const StatCard = ({ number, description }: { number: string, description: string }) => {
    return (
        <div className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-[24px] border border-white/60 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-5xl sm:text-6xl font-bold text-[#2d8bba] mb-2 group-hover:scale-110 transition-transform flex items-baseline gap-1">
                {number}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-medium">
                {description}
            </p>
        </div>
    );
};

const HomeImpact = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F0F8FB] via-white to-blue-50 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className="animate-fadeIn">
                        <span className="text-[#2d8bba] font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-2 sm:mb-4 block">Nhìn lại SEAS 2025</span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#004d61] mb-4 sm:mb-8 roboto-slab drop-shadow-sm">
                            Hành trình kiến tạo <br className="hidden sm:block" /> giá trị thực thụ
                        </h2>
                        <p className="text-xs sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-10 font-medium px-1">
                            Năm 2025 đánh dấu bước khởi đầu rực rỡ của cộng đồng SEAS tại Quảng Bình. Với chủ đề <span className="text-[#2d8bba] font-bold">Trí tuệ nhân tạo</span>, chúng tôi đã chứng kiến những bước tiến vượt bậc và sự trưởng thành của 43 học viên xuất sắc.
                        </p>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {impactData.stats.map((stat, index) => (
                                <StatCard key={index} number={stat.number} description={stat.description} />
                            ))}
                        </div>
                    </div>

                    {/* Visual/Media Side */}
                    <div className="relative group animate-fadeInUp hover:scale-102 transition-transform duration-700">
                        <div className="absolute inset-0 bg-blue-100 rounded-[40px] rotate-2 group-hover:rotate-5 group-hover:scale-102 transition-transform duration-500"></div>


                        <a
                            href={impactData.card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#2d8bba] font-bold hover:text-[#1e6181] group/link transition-colors"

                        >
                            <div className="relative bg-white p-4 rounded-[40px] shadow-2xl overflow-hidden border border-blue-50">
                                <img
                                    src={impactData.card.image}
                                    alt="SEAS 2025 Activities"
                                    className="w-full h-auto rounded-[32px] object-cover"
                                />
                                <div className="p-4 sm:p-8">
                                    <span className="text-[10px] sm:text-xs font-bold text-[#2d8bba] uppercase mb-1 sm:mb-2 block">{impactData.card.subtitle}</span>
                                    <h3 className="text-base sm:text-2xl font-bold text-[#004d61] mb-2 sm:mb-4 leading-tight">{impactData.card.title}</h3>
                                    <div className="flex items-center text-xs sm:text-base">
                                        {impactData.card.linkText}
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeImpact;
