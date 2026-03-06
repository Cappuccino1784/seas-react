
const ContactInfo = () => {
    return (
        <>
            <section className="relative bg-gradient-to-br from-[#E6F3F8] via-[#F0F8FB] to-white px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
                <div className="max-w-5xl mx-auto relative z-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <div className="flex flex-col items-start bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-10 gap-6 sm:gap-8 shadow-md border border-blue-50/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">

                        {/* Top glowing accent border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d8bba] to-teal-400 opacity-80 z-10"></div>

                        {/* Background decorative blob inside the card */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex items-center gap-4 text-sm sm:text-base md:text-lg group/email">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover/email:bg-[#2d8bba] group-hover/email:text-white transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block font-bold text-[#004d61] mb-1">Email liên hệ</span>
                                <a href="mailto:seas.cvn@gmail.com" className="text-gray-600 hover:text-[#2d8bba] hover:underline break-all transition-colors font-medium">seas.cvn@gmail.com</a>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-gray-100"></div>

                        <div className="relative z-10 flex items-center gap-4 text-sm sm:text-base md:text-lg group/fb">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover/fb:bg-[#1877F2] group-hover/fb:text-white transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <span className="block font-bold text-[#004d61] mb-1">Cộng đồng Facebook</span>
                                <a href="https://www.facebook.com/seas.cvn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1877F2] hover:underline break-all transition-colors font-medium">facebook.com/seas.cvn</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactInfo;