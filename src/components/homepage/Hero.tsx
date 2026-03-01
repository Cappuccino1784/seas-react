import heroBg from '../../assets/images/layout/hero-bg.JPG'

const Hero = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            SEAS - Summer in Engineering and Applied Sciences
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Trường hè Kỹ thuật và Khoa học Ứng dụng Miền Trung (SEAS) là tổ chức phi lợi nhuận mang đến cơ hội học tập miễn phí cho học sinh trung học phổ thông. Tại đây, các em được trực tiếp hướng dẫn bởi các nghiên cứu sinh và chuyên gia đến từ những trường đại học danh tiếng cũng như các tập đoàn công nghệ hàng đầu.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Hero