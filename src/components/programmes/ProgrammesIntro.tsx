
const ProgrammesIntro = () => {
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F3F8] via-[#F0F8FB] to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                {/* Decorative Theme Blobs */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-5xl mx-auto relative z-10 animate-fadeIn">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004d61] font-bold mb-6 sm:mb-8 roboto-slab drop-shadow-sm">
                        Chương trình Dạy Học
                    </h1>

                    {/* Main Description */}
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 font-medium bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm relative overflow-hidden">
                        <span className="absolute top-0 left-0 w-1.5 h-full bg-[#2d8bba]"></span>
                        Chương trình học được thiết kế thành hai tuần. Tuần đầu tiên là <span className="font-bold text-[#2d8bba]">“Bootcamp Nền tảng”</span>, tập trung vào Python, Đại số tuyến tính và Machine Learning. Tuần thứ hai tập trung vào <span className="font-bold text-[#2d8bba]">“Ứng dụng của AI”</span>, với các nội dung về Thị giác máy tính, AI trong khoa học và AI trong mạng máy tính. Ngoài ra, học viên còn được tham gia các dự án nhóm để thực hành và áp dụng kiến thức vào giải quyết các vấn đề thực tiễn.
                    </p>
                </div>
            </section>
        </>
    );
};

export default ProgrammesIntro;