import cards from '../../assets/infomation/home.cards'
import HomeCard from './HomeCard'

const HomeDetail = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F8FB] via-white to-[#E6F3F8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004d61] mb-4 px-2 roboto-slab">
            Khám Phá SEAS
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Tìm hiểu thêm về chương trình, đội ngũ và cách thức tham gia trại hè SEAS thông qua các phần dưới đây.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <HomeCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeDetail