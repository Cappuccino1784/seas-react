import { useState } from "react";
import team2025 from "../../assets/infomation/team/team.2025";
import ComingSoon from "../layout/ComingSoon";

const Members = () => {
    const [activeTab, setActiveTab] = useState<"2025" | "2026">("2026");

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-t from-white via-[#F0F8FB] to-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                {/* Decorative Theme Blobs */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-teal-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-[#004d61] font-bold mb-8 sm:mb-12 roboto-slab text-center sm:text-left drop-shadow-sm">
                        Thành Viên SEAS
                    </h1>

                    {/* Tab Navigation (Pills) */}
                    <div className="flex gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center sm:justify-start">
                        <button
                            onClick={() => setActiveTab("2025")}
                            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${activeTab === "2025"
                                ? "bg-[#2d8bba] text-white shadow-[#2d8bba]/30 scale-105"
                                : "bg-white text-gray-600 hover:bg-blue-50 hover:text-[#2d8bba]"
                                }`}
                        >
                            2025
                        </button>
                        <button
                            onClick={() => setActiveTab("2026")}
                            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${activeTab === "2026"
                                ? "bg-[#2d8bba] text-white shadow-[#2d8bba]/30 scale-105"
                                : "bg-white text-gray-600 hover:bg-blue-50 hover:text-[#2d8bba]"
                                }`}
                        >
                            2026
                        </button>
                    </div>

                    {/* Content */}
                    <div className="animate-fadeIn">
                        {activeTab === "2025" ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                                {Object.entries(team2025).map(([key, person]) => (
                                    <div
                                        key={key}
                                        className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-3 sm:p-5 text-center transform hover:-translate-y-2 border border-blue-50/50 flex flex-col h-full"
                                    >
                                        {/* Top bright border on hover */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d8bba] to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-t-2xl"></div>

                                        <div className="relative mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-3 sm:mb-4 rounded-full ring-2 ring-blue-50 group-hover:ring-[#2d8bba]/40 transition-all duration-300 p-1">
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="w-full h-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <h2 className="text-[12px] sm:text-base font-bold text-[#004d61] mb-0.5 sm:mb-1 group-hover:text-[#2d8bba] transition-colors leading-tight">
                                            {person.name}
                                        </h2>
                                        <p className="text-[10px] text-[#2d8bba] font-medium italic mb-2 sm:mb-3 leading-tight">
                                            {person.title}
                                        </p>
                                        <p className="text-[9px] sm:text-xs text-gray-600 whitespace-pre-line leading-snug mt-auto border-t border-gray-100 pt-2 sm:pt-3 lg:line-clamp-none line-clamp-3">
                                            {person.bio}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : activeTab === "2026" ? (
                            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-blue-50 p-8">
                                <ComingSoon text="Danh sách thành viên SEAS 2026 sẽ sớm được công bố. Hãy theo dõi để biết thêm thông tin về đội ngũ tuyệt vời của chúng tôi!" />
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Members;