import Image from "next/image";

export function ComingSoonCard() {
  return (
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
        Coming Soon
      </h3>
      <p className="mx-auto mt-5 max-w-[920px] font-lexend text-[1.05rem] leading-[1.8] text-[#4D5761] md:text-[1.18rem]">
        Thong tin chi tiet ve SEAS 2026 se som duoc cap nhat. Hay theo doi de
        khong bo lo co hoi tham gia vao mot trai nghiem hoc tap va phat trien
        tuyet voi!
      </p>
    </div>
  );
}
