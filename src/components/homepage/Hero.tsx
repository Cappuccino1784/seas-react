const HeroBG = "/images/layout/hero-bg-3.jpg"

const Hero = () => {
  return (
    <section className="relative py-12  px-4 sm:px-6 lg:px-8 min-h-[500px] sm:min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full p-10 relative z-10 rounded-4xl overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HeroBG}
            alt="Hero background"
            className="w-full h-full object-cover transform scale-105 animate-[slowPan_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/90 via-[#004d61]/70 to-transparent"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl w-full px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 sm:gap-8 items-start animate-[fadeInUp_1s_ease-out_forwards]">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white roboto-slab leading-tight drop-shadow-lg">
              SEAS - Summer in Engineering and Applied Sciences
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl drop-shadow-md animate-[fadeInUp_1.2s_ease-out_forwards]">
              Trường hè Kỹ thuật và Khoa học Ứng dụng Miền Trung (SEAS) là tổ chức phi lợi nhuận mang đến cơ hội học tập miễn phí cho học sinh trung học phổ thông. Tại đây, các em được trực tiếp hướng dẫn bởi các nghiên cứu sinh và chuyên gia đến từ những trường đại học danh tiếng cũng như các tập đoàn công nghệ hàng đầu.
            </p>
            <div className="animate-[fadeInUp_1.4s_ease-out_forwards] mt-4">
              <a
                href="/about"
                className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2d8bba] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                Câu chuyện về SEAS
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero