import readingIllustration from '../../assets/images/illustrations/reading.svg'
import pointingIllustration from '../../assets/images/illustrations/pointing.svg'

const cards = [
    {
      id: 1,
      title: 'Chương Trình Của Chúng Tôi',
      description: 'Khám phá các chương trình hè toàn diện của chúng tôi trong lĩnh vực kỹ thuật và khoa học ứng dụng dành cho học sinh trung học phổ thông.',
      image: readingIllustration,
      link: '/programs',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Gặp Gỡ Đội Ngũ SEAS',
      description: 'Tìm hiểu về đội ngũ nghiên cứu và chuyên gia của chúng tôi từ các trường đại học danh tiếng và các công ty công nghệ hàng đầu.',
      image: pointingIllustration,
      link: '/team',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      title: 'Nộp Đơn Tham Gia',
      description: 'Tham gia chúng tôi vào mùa hè này! Gửi đơn đăng ký và trở thành một phần của cộng đồng học tập của chúng tôi.',
      image: readingIllustration,
      link: '/submit',
      bgColor: 'bg-purple-50'
    }
]

export default cards




