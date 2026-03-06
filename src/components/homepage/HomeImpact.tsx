import { impactData } from '../../assets/infomation/home.impact';

const HomeImpact = () => {
    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    {/* Left Column: Title and Card */}
                    <div className="w-full lg:w-5/12 flex flex-col">
                        <div className="mb-6">
                            <span className="text-[#2d8bba] font-bold uppercase tracking-wider text-sm sm:text-base">
                                {impactData.tag}
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 roboto-slab leading-tight">
                                {impactData.title}
                            </h2>
                        </div>

                        <a
                            href={impactData.card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative rounded-2xl p-6 flex-grow flex flex-col justify-end shadow-sm hover:shadow-xl transition-all group overflow-hidden min-h-[250px] lg:min-h-[300px]"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${impactData.card.image})` }}
                            />
                            {/* Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/90 via-[#001f3f]/50 to-transparent" />

                            {/* Text Content */}
                            <div className="relative z-10 w-full mt-auto">
                                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-2">
                                    {impactData.card.subtitle}
                                </p>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 leading-snug">
                                    {impactData.card.title}
                                </h3>

                                <span className="inline-flex items-center text-[#4a9eff] font-bold group-hover:text-blue-300 transition-colors">
                                    {impactData.card.linkText}
                                    <svg
                                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 lg:gap-y-10 content-start lg:pt-14">
                        {impactData.stats.map((stat) => (
                            <div key={stat.id} className="relative group bg-white rounded-[20px] p-6 shadow-sm border border-blue-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                                {/* Decorative floating blob */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#004d61] mb-2 group-hover:text-[#2d8bba] group-hover:scale-105 transition-all duration-300 origin-left">
                                        {stat.number}
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[250px] font-medium group-hover:text-gray-800 transition-colors">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeImpact;