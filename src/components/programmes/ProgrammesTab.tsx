import { useState } from 'react'
import { weekSchedule2025, weekSchedule2025Week2 } from '../../assets/infomation/schedules/schedule.2025'
import ScheduleTable from './ScheduleTable'

const ProgrammeTabs = () => {
  const [activeTab, setActiveTab] = useState<'2025' | '2026'>('2026')

  return (
    <>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center sm:text-left mb-8 sm:mb-12">
            <span className="text-[#2d8bba] font-bold uppercase tracking-wider text-[10px] sm:text-base mb-1 sm:mb-2 block">
              SCHEDULES
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-[#004d61] font-bold roboto-slab drop-shadow-sm">
              Lịch Trình SEAS
            </h1>
          </div>
          {/* Tab Navigation (Pills) */}
          <div className="flex gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center sm:justify-start">
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
          <div className="animate-fadeIn">
            {activeTab === '2025' ? (
              <div>
                <ScheduleTable
                  schedule={weekSchedule2025}
                  title="Lịch trình Tuần 1"
                  hasFridaySpecialSlot={true}
                />

                {/* Week 2 */}
                <div className="mt-16">
                  <ScheduleTable
                    schedule={weekSchedule2025Week2}
                    title="Lịch trình Tuần 2"
                    hasFridaySpecialSlot={false}
                  />
                </div>
                <a target='blank' href='https://docs.google.com/spreadsheets/d/10Gu7gnMYNpCZytfNseEYpgpg9r20BPSzPDEoonEzDDQ/edit?usp=sharing' className='mt-10 inline-flex items-center justify-center w-full sm:w-auto bg-white/50 backdrop-blur-sm border border-blue-100 px-8 py-4 rounded-xl text-[#2d8bba] font-bold hover:bg-white hover:shadow-md hover:text-teal-600 transition-all duration-300 group'>
                  Xem chi tiết lịch trình đầy đủ
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 sm:p-12 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 animate-bounce">🚧</div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">Lịch trình chi tiết cho SEAS 2026 sẽ sớm được cập nhật. Hãy theo dõi để không bỏ lỡ thông tin quan trọng!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammeTabs;