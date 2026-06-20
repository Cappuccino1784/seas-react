import Link from "next/link";
import Image from "next/image";
import { HiOutlineGlobeAlt, HiOutlineMail } from "react-icons/hi";
import { RiFacebookFill } from "react-icons/ri";
import { PillArrowButton } from "@/components/shared/pill-arrow-button";

const contacts = [
  {
    label: "Website chính thức",
    value: "https://seas-cvn.com/",
    href: "https://seas-cvn.com/",
    icon: HiOutlineGlobeAlt,
  },
  {
    label: "Liên hệ",
    value: "seas.cvn@gmail.com",
    href: "mailto:seas.cvn@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "Theo dõi tôi",
    value: "facebook.com/seas.cvn",
    href: "https://facebook.com/seas.cvn",
    icon: RiFacebookFill,
  },
];

export function ApplyClosedSection() {
  return (
    <section className="py-10 pb-16 md:py-14 md:pb-20">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <h1 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.04em] text-[#0a6f9a] md:text-6xl">
            Đăng ký tham gia
          </h1>
        </div>
        <div className="rounded-[30px] bg-white px-6 py-10 text-center shadow-[0_24px_56px_rgba(150,199,224,0.18)] md:px-10 md:py-14">
          <div className="mx-auto mb-10 flex items-center justify-center">
            <Image
              src="/images/illustrations/checklist.svg"
              alt="Checklist illustration"
              width={180}
              height={180}
              className="h-[112px] w-[112px] object-contain md:h-[230px] md:w-[230px]"
            />
          </div>

          <h3 className="font-space-grotesk text-[2.6rem] font-bold uppercase leading-none text-[#2D8BBA] md:text-[4rem]">
            APPLICATION CLOSED
          </h3>
          <p className="mx-auto mt-5 max-w-[920px] font-lexend text-[1.05rem] leading-[1.8] text-[#4D5761] md:text-[1.18rem]">
            SEAS 2026 đã kết thúc quá trình đăng ký. <br />
            Cảm ơn các bạn đã quan tâm
            và ủng hộ SEAS trong suốt thời gian qua. Hãy theo dõi chúng mình để
            cập nhật những thông tin mới nhất về SEAS 2026 cũng như các hoạt
            động sắp tới nhé!
          </p>
        </div>
      </div>
    </section>
  );
}
