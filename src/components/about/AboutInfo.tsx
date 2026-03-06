import { useState } from 'react'


const AboutInfo = () => {
  const [activeTab, setActiveTab] = useState<'2025' | '2026'>('2026')

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
          Thông tin chương trình
        </h2>

        {/* Tab Navigation (Pills) */}
        <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab('2025')}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${activeTab === '2025'
              ? 'bg-[#2d8bba] text-white shadow-[#2d8bba]/30 scale-105'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-[#2d8bba]'
              }`}
          >
            SEAS 2025
          </button>
          <button
            onClick={() => setActiveTab('2026')}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${activeTab === '2026'
              ? 'bg-[#2d8bba] text-white shadow-[#2d8bba]/30 scale-105'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-[#2d8bba]'
              }`}
          >
            SEAS 2026
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === '2025' ? (
          <div className="space-y-4 sm:space-y-6">
            {/* Time Period */}
            <div className="flex items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Thời gian:</span> 21/7 - 01/8/2025
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Địa điểm:</span> THPT Chuyên Võ Nguyên Giáp, Quảng Bình (luân phiên các tỉnh miền Trung).
                </p>
              </div>
            </div>

            {/* Theme */}
            <div className="flex items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Chủ đề 2025:</span> Trí tuệ nhân tạo & Ứng dụng.
                </p>
              </div>
            </div>

            {/* Scale */}
            <div className="flex items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Quy mô:</span> Tối đa khoảng 40 học sinh xuất sắc (uu tiên đến từ miền Trung).
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 sm:p-12 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 animate-bounce">🚀</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#004d61] mb-3 sm:mb-4">Coming Soon</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
              Chương trình SEAS 2026 đang được lên kế hoạch và sẽ được công bố sớm!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutInfo;
