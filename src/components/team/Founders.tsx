import { Link } from "react-router-dom";
import persons from "../../assets/infomation/team/founders";

const Founders = () => {
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F8FB] via-white to-blue-50 pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 pb-12">
                {/* Decorative Theme Blobs */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Title */}
                    <div className="text-center sm:text-left mb-8 sm:mb-12">
                        <span className="text-[#2d8bba] font-bold uppercase tracking-wider text-[10px] sm:text-base mb-1 sm:mb-2 block">
                            FOUNDERS
                        </span>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl text-[#004d61] font-bold roboto-slab drop-shadow-sm">
                            Người Sáng Lập SEAS
                        </h1>
                    </div>
                    {/* Persons List */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                        {Object.entries(persons).map(([key, person]) => (
                            <Link
                                key={key}
                                to={`/team/${key}`}
                                className="relative bg-white/80 backdrop-blur-sm rounded-[20px] sm:rounded-[24px] shadow-sm hover:shadow-2xl transition-all duration-300 p-4 sm:p-8 text-center cursor-pointer group transform hover:-translate-y-2 border border-blue-50 overflow-hidden"
                            >
                                {/* Top bright border on hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d8bba] to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                <div className="relative mx-auto w-20 h-20 sm:w-36 sm:h-36 mb-4 sm:mb-5 overflow-hidden rounded-full ring-2 ring-blue-50 group-hover:ring-[#2d8bba]/30 transition-all duration-300 shadow-md">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h2 className="text-sm sm:text-xl font-bold text-[#004d61] mb-1 sm:mb-2 group-hover:text-[#2d8bba] transition-colors duration-300 leading-tight">
                                    {person.name}
                                </h2>
                                <p className="text-[10px] sm:text-sm text-gray-500 italic font-medium leading-tight">
                                    {person.title}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Founders;