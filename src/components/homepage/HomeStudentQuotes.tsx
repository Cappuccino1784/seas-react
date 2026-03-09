import { useState } from "react"
import studentsQuotes from "../../assets/infomation/home.students"

const HomeStudentQuotes = () => {
    const [showAll, setShowAll] = useState(false);
    const allQuotes = studentsQuotes.quotes;

    return (
        <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F8FB]">
            {/* Decorative Theme Blobs */}
            <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 transform -translate-x-1/2"></div>
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 transform translate-x-1/3"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <span className="text-[#2d8bba] font-bold uppercase tracking-wider text-[10px] sm:text-base mb-2 sm:mb-3 block">
                        CÂU CHUYỆN SEAS
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#004d61] mb-4 sm:mb-6 roboto-slab">
                        Cảm Nhận Học Viên
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-lg px-4 leading-relaxed">
                        Lắng nghe chia sẻ từ chính những thế hệ học viên đã từng tham gia trại hè.
                    </p>
                </div>

                <div className={`relative transition-all duration-1000 ease-in-out overflow-hidden ${!showAll ? 'max-h-[500px] sm:max-h-none' : 'max-h-[5000px]'}`}>
                    <div className="columns-2 lg:columns-3 gap-4 sm:gap-8 space-y-4 sm:space-y-8">
                        {allQuotes.map((quote) => (
                            <div
                                key={quote.id}
                                className="group bg-white rounded-[16px] sm:rounded-[24px] shadow-sm hover:shadow-2xl transition-all duration-300 p-3 sm:p-8 break-inside-avoid w-full border border-blue-50 relative overflow-hidden transform hover:-translate-y-2 block"
                            >
                                {/* Decorative Quote Icon Background */}
                                <svg
                                    className="absolute -top-2 -right-2 w-20 h-20 text-[#E6F3F8] transform -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>

                                {/* Top decorative gradient line */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2d8bba] via-teal-400 to-[#1e6181] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <p className="text-gray-700 italic leading-relaxed mb-4 sm:mb-8 text-[10px] sm:text-base font-medium">
                                        "{quote.quote}"
                                    </p>

                                    <div className="mt-auto pt-3 sm:pt-6 border-t border-blue-50/50 flex items-center group-hover:border-[#2d8bba]/30 transition-colors duration-300">
                                        <img
                                            src={quote.image}
                                            alt={quote.name}
                                            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-4 object-cover border-2 border-transparent group-hover:border-[#2d8bba] transition-colors duration-300 shadow-sm"
                                        />
                                        <div>
                                            <h3 className="text-[10px] sm:text-base font-bold text-[#004d61] group-hover:text-[#2d8bba] transition-colors leading-tight">
                                                {quote.name}
                                            </h3>
                                            {quote.year && <p className="text-[8px] sm:text-xs font-semibold text-[#2d8bba] mt-0.5">{quote.year}</p>}
                                            {quote.role && <p className="text-[8px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight">{quote.role}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fade Gradient Overlay */}
                    <div className={`absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20 transition-opacity duration-500 sm:hidden ${showAll ? 'opacity-0' : 'opacity-100'}`}></div>
                </div>

                {/* Collapsible Button (Small screens Only) */}
                <div className="mt-10 flex justify-center sm:hidden">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2 rounded-full bg-[#2d8bba] text-white text-xs font-bold shadow-lg shadow-[#2d8bba]/20 hover:bg-[#1e6181] transition-all duration-300 flex items-center gap-2"
                    >
                        {showAll ? "Thu gọn" : "Xem thêm"}
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeStudentQuotes;