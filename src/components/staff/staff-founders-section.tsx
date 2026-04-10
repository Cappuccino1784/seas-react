import Image from "next/image";
import Link from "next/link";

import { staffFounders } from "@/components/staff/staff-members-content";

export function StaffFoundersSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <p className="mb-4 font-lexend text-[1.05rem] font-medium uppercase text-[#ff6d2d] md:text-lg">
          Founders
        </p>
        <h2 className="mb-8 font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-[#04536E] md:mb-12 md:text-6xl md:leading-[1.05]">
          Người sáng lập SEAS
        </h2>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-5">
          {staffFounders.map((founder) => (
            <div
              key={founder.name}
              className="group rounded-[24px] border-[2px] border-[#e8edf2] px-3 py-5 text-center shadow-[0_16px_40px_rgba(150,199,224,0.12)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#2D8BBA] hover:bg-white hover:shadow-[0_22px_50px_rgba(45,139,186,0.18)] md:rounded-[28px] md:px-6 md:py-9"
            >
              <Link href={`/staff/${founder.slug}`}>
                <div className="relative mx-auto mb-4 w-fit md:mb-7">
                  <span className="pointer-events-none absolute left-1/2 top-0 z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-3 scale-75 items-center justify-center rounded-full bg-[linear-gradient(180deg,#fff3a9_0%,#ffcf3f_100%)] text-[1rem] text-[#8a5a00] opacity-0 shadow-[0_10px_24px_rgba(255,207,63,0.4)] transition-all duration-300 ease-out group-hover:-translate-y-5 group-hover:scale-100 group-hover:opacity-100 md:h-8 md:w-8 md:-translate-y-4 md:text-[1.3rem] md:group-hover:-translate-y-6">
                    ♛
                  </span>
                  <div className="h-[96px] w-[96px] overflow-hidden rounded-full border-[3px] border-[#9bdaf6] shadow-[0_12px_28px_rgba(150,199,224,0.18)] transition-transform duration-300 ease-out group-hover:scale-[1.04] md:h-[138px] md:w-[138px]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="font-space-grotesk text-[0.98rem] font-bold text-[#04536E] md:text-[1.3rem]">
                  {founder.name}
                </h3>
                <p className="mt-3 font-lexend text-[0.92rem] leading-[1.45] text-[#4D5761] md:mt-4 md:text-[1rem] md:leading-[1.6]">
                  {founder.role}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
