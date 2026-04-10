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

export function ApplySection() {
  return (
    <section className="py-10 pb-16 md:py-14 md:pb-20">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <h1 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.04em] text-[#0a6f9a] md:text-6xl">
            Đăng ký tham gia
          </h1>
        </div>

        <article className="mx-auto max-w-[800px]">
          <div className="rounded-[32px] bg-white px-5 py-7 shadow-[0_16px_40px_rgba(45,139,186,0.18)] md:px-10 md:py-10">
            <div className="space-y-5 font-lexend text-[0.96rem] leading-[1.75] text-[#4D5761] md:text-[1rem]">
              <div className="px-4 py-4">
                <p>
                  <span className="font-semibold text-black">
                    Chào mừng các bạn đến với Trường hè Kỹ thuật và Khoa học Ứng
                    dụng Miền Trung,{" "}
                  </span>
                  <span className="font-semibold text-[#2D8BBA]">
                    SEAS 2026!
                  </span>
                </p>
                <p className="mt-3">
                  Trường hè Kỹ thuật và Khoa học Ứng dụng Miền Trung (SEAS) là
                  cơ hội đặc biệt dành cho{" "}
                  <span className="font-semibold text-[#2D8BBA]">
                    các học sinh THPT và năm đầu Đại học
                  </span>{" "}
                  đam mê khoa học công nghệ. Chương trình kéo dài{" "}
                  <span className="font-semibold text-[#2D8BBA]">
                    từ ngày 20/7 - 31/7/2026 tại THPT Chuyên Võ Nguyên Giáp,
                    Quảng Trị,
                  </span>{" "}
                  với chủ đề{" "}
                  <span className="font-semibold text-[#2D8BBA]">
                    "Trí tuệ nhân tạo (AI) & Ứng dụng."
                  </span>
                </p>
                <p className="mt-3">
                  Chương trình được sáng lập bởi các chuyên viên và nghiên cứu
                  sinh xuất thân từ miền Trung, hiện đang học tập và làm việc
                  tại những trường đại học và tập đoàn hàng đầu thế giới như
                  Harvard, MIT, Stony Brook và Ericsson. Trong số đó có nhiều
                  người từng giành Huy chương Vàng tại các kỳ Olympic Khoa học
                  Quốc tế.
                </p>
              </div>

              <section className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-[#2D8BBA]">
                  <Image
                    src="/images/illustrations/doi-tuong.svg"
                    alt="SVG ICON"
                    width={18}
                    height={18}
                    className="h-[35px] w-[35px] object-contain"
                    aria-hidden="true"
                  />
                  <h2 className="font-space-grotesk text-[1.05rem] font-bold text-[#004D61] md:text-[1.15rem]">
                    Đối tượng
                  </h2>
                </div>

                <div className="rounded-[18px] bg-[#f7fbff] px-4 py-4 md:px-5">
                  <div className="grid gap-3">
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Học sinh THPT có đam mê với khoa học công nghệ, không nhất
                      thiết phải học sinh chuyên các môn tự nhiên. SEAS tuyển
                      nhiều bạn học các ngành xã hội.
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Sinh viên đại học năm 1, 2.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-[#2D8BBA]">
                  <Image
                    src="/images/illustrations/hoc-gi.svg"
                    alt="SVG ICON"
                    width={18}
                    height={18}
                    className="h-[35px] w-[35px] object-contain"
                    aria-hidden="true"
                  />
                  <h2 className="font-space-grotesk text-[1.05rem] font-bold text-[#004D61] md:text-[1.15rem]">
                    Bạn sẽ học gì?
                  </h2>
                </div>

                <div className="rounded-[18px] bg-[#f7fbff] px-4 py-4 md:px-5">
                  <div className="grid gap-3">
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Tuần 1: Lập trình Python, Học máy (Machine Learning), Toán
                      học cho AI.
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Tuần 2: Ứng dụng AI trong cuộc sống và khoa học.
                    </p>
                  </div>

                  <p className="mt-4">
                    Làm dự án nhóm để dùng AI giải quyết các vấn đề thực tiễn,
                    dưới sự hướng dẫn của đội ngũ giảng dạy.
                  </p>
                </div>
              </section>

              <section className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-[#2D8BBA]">
                  <Image
                    src="/images/illustrations/tai-sao.svg"
                    alt="SVG ICON"
                    width={18}
                    height={18}
                    className="h-[35px] w-[35px] object-contain"
                    aria-hidden="true"
                  />
                  <h2 className="font-space-grotesk text-[1.05rem] font-bold text-[#004D61] md:text-[1.15rem]">
                    Tại sao bạn nên tham gia?
                  </h2>
                </div>

                <div className="rounded-[18px] bg-[#f7fbff] px-4 py-4 md:px-5">
                  <div className="grid gap-3">
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Học và tham gia dự án dưới sự hướng dẫn của nghiên cứu
                      sinh và chuyên viên đến từ các đại học và viện nghiên cứu
                      hàng đầu.
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Nhận giấy chứng nhận có hỗ trợ gửi hồ sơ đại học.
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Hoàn toàn miễn phí ăn ở, tài liệu, phần mềm, hoạt động
                      trải nghiệm tại Quảng Bình.
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Kết nối với bạn bè và chuyên gia có cùng đam mê.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-[#2D8BBA]">
                  <Image
                    src="/images/illustrations/tieu-chi.svg"
                    alt="SVG ICON"
                    width={18}
                    height={18}
                    className="h-[35px] w-[35px] object-contain"
                    aria-hidden="true"
                  />
                  <h2 className="font-space-grotesk text-[1.05rem] font-bold text-[#004D61] md:text-[1.15rem]">
                    Tiêu chí xét tuyển
                  </h2>
                </div>

                <div className="rounded-[18px] bg-[#f7fbff] px-4 py-4 md:px-5">
                  <div className="grid gap-3">
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Thành tích học tập.
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Các bài luận.
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Giải thưởng học thuật và hoạt động ngoại khóa.
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Vòng phỏng vấn online với ban tổ chức (BTC).
                    </p>
                    <p className="relative pl-4">
                      <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                      Thông tin mời giới về AI/BTC có thể liên lạc để nắm rõ hơn
                      và xác thực các thành tích của bạn.
                    </p>
                  </div>
                </div>
              </section>

              <div className="border-l-[4px] border-[#2D8BBA] pl-4 text-[#2D8BBA] md:pl-6 mb-8">
                <p className="font-lexend text-[1rem] font-semibold leading-[1.85] md:text-[1.04rem]">
                  Lưu ý: Mục tiêu của các câu hỏi tự luận là để ban tổ chức hiểu{" "}
                  <span className="text-black">
                    cách bạn suy nghĩ, học hỏi, và làm việc với người khác.
                  </span>{" "}
                  Vì vậy, hãy trả lời bằng{" "}
                  <span className="text-black">
                    trải nghiệm thật và suy nghĩ thật của bạn,
                  </span>{" "}
                  <span className="text-[#2D8BBA]">
                    dùng ví dụ cụ thể khi có thể.
                  </span>{" "}
                  Một câu trả lời chân thành, rõ ràng, và mang dấu ấn cá nhân sẽ
                  có giá trị hơn một câu trả lời trau chuốt nhưng chung chung.
                </p>
              </div>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-[#2D8BBA]">
                  <Image
                    src="/images/illustrations/thoi-gian.svg"
                    alt="SVG ICON"
                    width={18}
                    height={18}
                    className="h-[35px] w-[35px] object-contain"
                    aria-hidden="true"
                  />
                  <h2 className="font-space-grotesk text-[1.05rem] font-bold text-[#004D61] md:text-[1.15rem]">
                    Mốc thời gian lưu ý
                  </h2>
                </div>

                <div className="grid gap-3 rounded-[18px] bg-[#f7fbff] px-4 py-4 md:px-5">
                  <p className="relative pl-4">
                    <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                    Thời gian nộp đơn:{" "}
                    <span className="font-semibold">05/04 - 31/05/2026</span>
                  </p>
                  <p className="relative pl-4">
                    <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                    Thời gian dự kiến công bố kết quả:{" "}
                    <span className="font-semibold">15/6/2026</span>
                  </p>
                </div>
              </section>

              <p className="font-semibold text-[#2D8BBA]">
                👉 Hãy điền đơn đăng ký và sẵn sàng trải nghiệm một mùa hè đáng
                nhớ!
              </p>

              <div className="flex justify-center pt-2">
                <PillArrowButton
                  href="/apply/form"
                  label="Điền đơn ngay"
                  className="min-h-[46px] min-w-0 px-8 text-[0.9rem] md:min-w-[220px]"
                />
              </div>

              <div className="grid gap-4 border-t border-[#edf3f8] pt-5 md:grid-cols-3">
                {contacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3"
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                    >
                      <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-[#e7f4fb] text-[0.95rem] text-[#2D8BBA]">
                        <Icon />
                      </span>
                      <span>
                        <span className="block font-space-grotesk text-[0.95rem] font-bold text-[#04536E]">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-[0.88rem] text-[#4D5761]">
                          {item.value}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
