"use client";

import { routeModule } from "next/dist/build/templates/pages";
import Image from "next/image";

const cards = [
  {
    name: "Nguyễn Xuân Hoàng",
    extra: "Trí tuệ Nhân tạo - Trường Đại học Khoa học Tự nhiên, ĐHQG TP.HCM",
    role: "Trại sinh SEAS 2025",
    content: "SEAS thực sự là một nơi đặc biệt đối với mình, một cựu học sinh chuyên Hóa chọn Trí tuệ Nhân tạo là hướng đi tiếp theo tại đại học, dù chưa được tiếp xúc với Tin học hay Trí tuệ Nhân tạo nhiều. SEAS đã cho mình những kiến thức đáng quý, một lộ trình chắc chắn ở đại học và quen thêm những người bạn tuyệt vời, những anh/chị đi trước giỏi giang và cực kì nhiệt huyết.",
    image: "/images/layout/home-review/xuan-hoang.jpeg"
  },
  {
    name: "Nguyễn Tấn Minh",
    extra: "Computer Science - The Chinese University of Hong Kong (Đại học Trung văn Hồng Kông",
    role: "Trại sinh SEAS 2025",
    content: "SEAS lúc đấy như là một cứu cánh cho mùa hè đầy biến động của tuổi 18. Là một Học sinh giỏi Quốc gia Tin học, xa rời những bài tập Competitive Programming đặc thù làm mình đôi lúc vẫn chưa hiểu định hướng của bản thân, và bằng cách nào để hiện thực hóa những dự định ấy. Điều đấy càng làm SEAS thêm giá trị, vì SEAS có thứ mình cần nhất - một người dẫn đường.",
    image: "/images/layout/home-review/tan-minh.jpeg"
  },
  {
    name: "Nguyễn Anh Thư",
    extra: "CNTT - Trường Bách Khoa Đà Nẵng",
    role: "Trại sinh SEAS 2025",
    content: "12 ngày tại SEAS đã tạo ra một sự thay đổi lớn trong cả tư duy và con người mình. Những điều mình từng nghĩ là khó như AI, Python hay Data Science trở nên gần gũi hơn nhờ sự hướng dẫn của các anh chị mentors. Qua dự án DeepFlood, mình nhận ra rằng công nghệ thật sự có thể biến ý tưởng thành hiện thực. Ngoài ra, về mặt tinh thần SEAS giúp mình phá vỡ vỏ bọc tự ti. Dù ban đầu khá e dè trước những 'profile khủng' của các bạn, nhưng môi trường cởi mở ở đây đã giúp mình hòa nhập, biết cách làm việc nhóm xuyên đêm, và mở lòng để đón nhận tình cảm từ những người bạn phòng 36, từ thầy cô và BTC. SEAS truyền cho mình một nguồn cảm hứng mãnh liệt để tiếp tục theo đuổi con đường mà mình đã chọn.",
    image: "/images/layout/home-review/anh-thu.JPG"
  },
  {
    name: "Bùi Minh Thái",
    extra: "Khoa học máy tính - Đại học Bách khoa Hà Nội",
    role: "Trại sinh SEAS 2025",
    content: "Khi nghĩ lại về SEAS, điều mình nhớ nhất vẫn là những cuộc trò chuyện. Từ những lúc cùng nhau tranh luận về một mô hình cho đến những khoảnh khắc rất đời thường như cùng ra biển hay ngồi trò chuyện đến khuya. Và cũng chính từ một buổi tối ở ký túc xá, khi nhóm mình cùng nhau tranh luận về một câu hỏi nhỏ trong mô hình, mình nhận ra rằng những cuộc thảo luận học thuật đầu tiên của mình đã bắt đầu một cách rất tự nhiên như vậy.",
    image: "/images/layout/home-review/minh-thai.jpg"
  },
  {
    name: "Trần Nguyễn Nguyên Ân",
    extra: "Chuyên Lê Quý Đôn Đà Nẵng",
    role: "Trại sinh SEAS 2025",
    content: "Kỷ niệm đáng nhớ nhất là những office hour căng não, nơi mà mọi người tự do thể hiện suy nghĩ của mình về các bài toán, và em cũng được kết thêm nhiều bạn mới. Bên cạnh đó, những giờ bonding đến tận khuya cùng với BTC cũng rất vui nữa.",
    image: "/images/layout/home-review/nguyen-an.png"
  },
];

export function HomeReviewSection() {
  return (
    <section className="py-[72px] max-md:py-14">
      <div className="container">
        <div className="mb-10 text-left md:text-center">
          <p className="mb-4 font-lexend text-[1.05rem] font-medium uppercase text-[#ff6d2d] md:text-lg">
            Câu chuyện SEAS
          </p>
          <h2 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[1.08] tracking-[-0.03em] text-[#04536E] md:text-6xl md:leading-[1.05]">
            Cảm nhận của học viên
          </h2>
          <p className="mt-5 max-w-[760px] font-lexend text-[0.98rem] leading-[1.55] text-[#5b6770] md:mx-auto md:text-[1.15rem] md:leading-[1.6]">
            Lắng nghe chia sẻ từ chính những thế hệ học viên đã từng tham gia
            trại hè.
          </p>
        </div>
      </div>

      <div className="review-marquee-shell w-full overflow-hidden pb-3">
        <div className="flex w-max gap-6 px-6 md:px-10">
          <div className="review-marquee-track flex w-max gap-6">
            {cards.map((card) => (
              <ReviewCard key={`${card.name}-${card.extra}-a`} card={card} />
            ))}
          </div>
          <div
            className="review-marquee-track flex w-max gap-6"
            aria-hidden="true"
          >
            {cards.map((card) => (
              <ReviewCard key={`${card.name}-${card.extra}-b`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ReviewCardData = (typeof cards)[number];

function ReviewCard({ card }: { card: ReviewCardData }) {
  return (
    <article className="relative w-[min(520px,calc(100vw-72px))] min-w-[520px] rounded-[24px] border border-[#7fc8ef] bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] px-6 py-6 shadow-[0_18px_44px_rgba(150,199,224,0.16)] max-md:w-[calc(100vw-56px)] max-md:min-w-[calc(100vw-56px)]">
      <div className="pointer-events-none absolute right-3 top-0 text-[4.4rem] leading-none text-[#fce1b4]">
        &rdquo;
      </div>

      <div className="mb-5 flex items-start gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-100">
          <Image
            src={card.image}
            alt={card.name}
            fill
            sizes="50px"
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="font-space-grotesk text-[1.55rem] font-bold uppercase leading-none text-[#04536E]">
            {card.name}
          </h3>
          <p className="mt-2 font-lexend text-[0.95rem] font-medium text-[#2D8BBA]">
            {card.role}
          </p>
          <p className="mt-1 font-lexend text-[0.92rem] text-[#6a7480]">
            {card.extra}
          </p>
        </div>
      </div>

      <p className="font-lexend text-[1.05rem] leading-[1.65] text-[#4D5761]">
        &ldquo;{card.content}&rdquo;
      </p>
    </article>
  );
}
