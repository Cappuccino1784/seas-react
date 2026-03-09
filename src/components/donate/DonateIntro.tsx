const DonateIntro = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F8FB] via-white to-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            {/* Decorative Theme Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-5xl mx-auto relative z-10 animate-fadeIn">
                {/* Title */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004d61] font-bold mb-8 sm:mb-12 roboto-slab drop-shadow-sm">
                    Tài trợ
                </h1>

                {/* Main Description in Glass Container */}
                <div className="relative text-base sm:text-lg text-gray-700 leading-relaxed font-medium backdrop-blur-sm bg-white/40 p-6 sm:p-8 rounded-2xl border border-white/50 shadow-sm overflow-hidden mb-8">
                    <span className="absolute top-0 left-0 w-1.5 h-full bg-[#2d8bba]"></span>
                    <p className="mb-4">
                        Chúng tôi kêu gọi đối tác tài trợ để nâng cao chương trình SEAS, mở rộng cơ hội học tập cho học sinh THPT miền Trung. Sự đồng hành của quý vị sẽ góp phần phát triển khoa học công nghệ tiên tiến và kiến tạo tương lai cho thế hệ trẻ Việt Nam.
                    </p>

                    <div className="bg-white p-4 rounded-2xl shadow-md border border-blue-50">
                        <p className="mt-4">
                            Mọi hỗ trợ tài chính xin quý vị vui lòng liên hệ qua email, Facebook hoặc chuyển khoản trực tiếp tới STK: <span className="text-[#2d8bba] font-bold">19073810358015</span>, Techcombank, Nguyễn Thế Quỳnh, mã QR:
                        </p>
                        <img src="/images/bank/bank_info.jpg" alt="QR Code" className="w-48 sm:w-56 md:w-64" />
                    </div>
                    <p className="mt-4">
                        Nhằm đảm bảo tính minh bạch, sau khi nhận được sự ủng hộ, thông tin của các nhà tài trợ sẽ được đăng tải công khai trên trang web bên dưới.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonateIntro;