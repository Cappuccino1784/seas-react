import { Link } from 'react-router-dom'
import cards from '../../assets/infomation/home.cards'

const HomeDetail = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Khám Phá SEAS
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Tìm hiểu thêm về chương trình, đội ngũ và cách thức tham gia trại hè SEAS thông qua các phần dưới đây.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={card.link}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`${card.bgColor} p-6 sm:p-8 flex items-center justify-center h-40 sm:h-48`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-3 sm:mt-4 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                  Learn More
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeDetail