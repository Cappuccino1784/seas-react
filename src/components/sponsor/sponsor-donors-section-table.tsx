import React from 'react'
import { DonorsList } from './sponsor-donors-section';

const SponsorDonorsSectionTable = ({ donors, formatMobileDate }: { donors: DonorsList; formatMobileDate: (date: string) => React.ReactNode }) => {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#b9e7f7] bg-white shadow-[0_20px_48px_rgba(150,199,224,0.14)]">
            <div className="grid grid-cols-[72px_1.2fr_1.2fr] bg-[#dff2fb] font-space-grotesk text-[0.98rem] font-bold uppercase text-[#04536E] md:grid-cols-[170px_1.5fr_1.4fr] md:text-[1rem]">
              <div className="border-r border-[#b9e7f7] px-3 py-4 md:px-5 md:py-5">
                Ngày
              </div>
              <div className="border-r border-[#b9e7f7] px-3 py-4 md:px-5 md:py-5">
                Tên
              </div>
              <div className="px-3 py-4 md:px-5 md:py-5">
                Số tiền hoặc vật chất
              </div>
            </div>

            {donors.map((donor, index) => (
              <div
                key={`${donor.donor}-${index}`}
                className={[
                  "grid grid-cols-[72px_1.2fr_1.2fr] border-t border-[#d7eaf4] font-lexend text-[0.98rem] md:grid-cols-[170px_1.5fr_1.4fr] md:text-[1rem]",
                  "bg-white",
                ].join(" ")}
              >
                <div className="px-3 py-4 leading-[1.35] text-[#4D5761] md:px-5 md:py-5">
                  <span className="md:hidden">
                    {formatMobileDate(donor.date)}
                  </span>
                  <span className="hidden md:inline">{donor.date}</span>
                </div>
                <div className="px-3 py-4 font-semibold text-[#111111] md:px-5 md:py-5">
                  {donor.donor}
                </div>
                <div className="px-3 py-4 font-medium text-[#2D8BBA] md:px-5 md:py-5">
                  {donor.amount}
                </div>
              </div>
            ))}
          </div>
  )
}

export default SponsorDonorsSectionTable