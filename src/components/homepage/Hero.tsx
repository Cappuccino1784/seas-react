const HeroBG = "/images/layout/hero-bg-3.jpg"

const Hero = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 min-h-[500px] sm:min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroBG}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-2 roboto-slab mb-4 sm:mb-6">
              SEAS - Summer in Engineering and Applied Sciences
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-4 sm:px-6 lg:px-8 max-w-2xl">
              Trường hè Kỹ thuật và Khoa học Ứng dụng Miền Trung (SEAS) là tổ chức phi lợi nhuận mang đến cơ hội học tập miễn phí cho học sinh trung học phổ thông. Tại đây, các em được trực tiếp hướng dẫn bởi các nghiên cứu sinh và chuyên gia đến từ những trường đại học danh tiếng cũng như các tập đoàn công nghệ hàng đầu.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero