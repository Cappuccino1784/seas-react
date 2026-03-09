import { useState } from "react";
import donations2025 from "../../assets/infomation/donations/donations.2025";
import ComingSoon from "../layout/ComingSoon";

const DonationList = () => {
    const [activeTab, setActiveTab] = useState<"2025" | "2026">("2026");

    return (
        <section className="bg-gradient-to-br from-white to-[#F0F8FB]/50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#004d61] font-bold mb-8 sm:mb-12 roboto-slab text-center sm:text-left">
                    Nhà Hảo Tâm
                </h1>

                {/* Tab Navigation */}
                <div className="flex gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center sm:justify-start">
                    <button
                        onClick={() => setActiveTab("2025")}
                        className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${activeTab === "2025"
                            ? "bg-[#2d8bba] text-white shadow-[#2d8bba]/30 scale-105"
                            : "bg-white text-gray-600 hover:bg-blue-50 hover:text-[#2d8bba]"
                            }`}
                    >
                        SEAS 2025
                    </button>
                    <button
                        onClick={() => setActiveTab("2026")}
                        className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${activeTab === "2026"
                            ? "bg-[#2d8bba] text-white shadow-[#2d8bba]/30 scale-105"
                            : "bg-white text-gray-600 hover:bg-blue-50 hover:text-[#2d8bba]"
                            }`}
                    >
                        SEAS 2026
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-blue-50 overflow-hidden">
                    {activeTab === "2025" ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-100">
                                <thead className="bg-[#F0F8FB]/50">
                                    <tr>
                                        <th className="py-4 px-6 text-left text-xs font-bold text-[#004d61] uppercase tracking-wider">
                                            Ngày
                                        </th>
                                        <th className="py-4 px-6 text-left text-xs font-bold text-[#004d61] uppercase tracking-wider">
                                            Tên
                                        </th>
                                        <th className="py-4 px-6 text-left text-xs font-bold text-[#004d61] uppercase tracking-wider">
                                            Số Tiền hoặc Vật Chất
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-50">
                                    {donations2025.map((donation, index) => (
                                        <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                            <td className="py-4 px-6 text-sm text-gray-600 font-medium">
                                                {donation.date}
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-900 font-bold">
                                                {donation.donor}
                                            </td>
                                            <td className="py-4 px-6 text-sm text-[#2d8bba] font-semibold">
                                                {donation.amount}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-8 sm:p-12">
                            <ComingSoon text="Danh sách nhà hảo tâm cho SEAS 2026 sẽ sớm được công bố. Hãy theo dõi để biết thêm thông tin về những người đã đóng góp cho sự thành công của chúng tôi!" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DonationList;