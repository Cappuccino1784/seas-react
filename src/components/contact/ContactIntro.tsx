
const ContactIntro = () => {
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F3F8] via-[#F0F8FB] to-white pt-12 sm:pt-16 pb-6 px-4 sm:px-6 lg:px-8">
                {/* Decorative Pattern Blob */}
                <div className="absolute top-0 right-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-5xl mx-auto relative z-10 animate-fadeIn">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004d61] font-bold mb-6 sm:mb-8 roboto-slab drop-shadow-sm">
                        Liên Hệ
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm max-w-2xl">
                        Nếu bạn có bất kỳ câu hỏi nào về SEAS, vui lòng liên hệ với chúng tôi qua email hoặc nhắn tin trực tiếp trên trang facebook.
                    </p>
                </div>
            </section>
        </>
    );
};

export default ContactIntro;