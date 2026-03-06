import { Link } from 'react-router-dom'
const arrowSymbol = (
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
)

const HomeCard = (card: any) => {
    return (
        <>
            <Link
                key={card.id}
                to={card.link}
                className="group relative bg-white/80 backdrop-blur-sm rounded-[24px] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full border border-blue-50/50"
            >
                {/* Top colorful gradient border on hover */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2d8bba] via-teal-400 to-[#1e6181] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className={`${card.bgColor} relative h-32 sm:h-48 overflow-hidden`}>
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-3 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-base sm:text-xl font-bold text-[#2d8bba] mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                        {card.title}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                        {card.description}
                    </p>
                    <div className="mt-auto flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                        Tìm Hiểu Thêm
                        {arrowSymbol}
                    </div>
                </div>
            </Link>
        </>
    );
};

export default HomeCard;