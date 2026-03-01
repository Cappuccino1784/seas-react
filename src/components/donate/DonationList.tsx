import { useState } from "react";
import donations2025 from "../../assets/infomation/donations/donations.2025";

const DonationList = () => {
  const [activeTab, setActiveTab] = useState<"2025" | "2026">("2025");

  return (
    <>
        <section className="bg-white py-16 px-6 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <h1 className="text-2xl sm:text-4xl text-gray-900 mb-8 roboto-slab">
                    Nhà Hảo Tâm
                </h1>
                
                {/* Tab Navigation */}
                <div className="flex gap-4 mb-8 border-b border-gray-300">
                    <button
                        onClick={() => setActiveTab("2025")}
                        className={`px-6 py-3 font-semibold transition-colors ${
                            activeTab === "2025"
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        2025
                    </button>
                    <button
                        onClick={() => setActiveTab("2026")}
                        className={`px-6 py-3 font-semibold transition-colors ${
                            activeTab === "2026"
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        2026
                    </button>
                </div>

                {/* Content */}
                {activeTab === "2025" ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                                        Ngày
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                                        Tên
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                                        Số Tiền hoặc Tài Trợ Vật Chất
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations2025.map((donation, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="py-3 px-4 text-sm text-gray-700 border-b">
                                            {donation.date}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-700 border-b">
                                            {donation.donor}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-700 border-b">
                                            {donation.amount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Coming Soon
                        </h2>
                        <p className="text-gray-600">
                            Thông tin nhà hảo tâm 2026 sẽ được cập nhật sớm.
                        </p>
                    </div>
                )}
            </div>
        </section>
    </>
  );
};

export default DonationList;