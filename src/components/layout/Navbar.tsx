import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollUpDistance, setScrollUpDistance] = useState(0)
  const [scrollDownDistance, setScrollDownDistance] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = lastScrollY - currentScrollY

      // Always show navbar at the top portion (within 150px from top)
      if (currentScrollY < 150) {
        setIsVisible(true)
        setScrollUpDistance(0)
        setScrollDownDistance(0)
      } 
      // Scrolling up
      else if (currentScrollY < lastScrollY) {
        const newScrollUpDistance = scrollUpDistance + scrollDifference
        setScrollUpDistance(newScrollUpDistance)
        setScrollDownDistance(0) // Reset down counter when scrolling up
        
        // Show navbar after scrolling up at least 200px
        if (newScrollUpDistance >= 200) {
          setIsVisible(true)
        }
      }
      // Scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        const newScrollDownDistance = scrollDownDistance + (currentScrollY - lastScrollY)
        setScrollDownDistance(newScrollDownDistance)
        setScrollUpDistance(0) // Reset up counter when scrolling down
        
        // Hide navbar after scrolling down at least 200px
        if (newScrollDownDistance >= 200) {
          setIsVisible(false)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY, scrollUpDistance, scrollDownDistance])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] bg-[#001f3f] bg-cover bg-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="absolute inset-0 backdrop-blur-md"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#62B3D1]/60 to-[#62B3D1] opacity-80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 relative z-10">
        <div className="flex justify-between items-center">
          <Link
            to="/" 
            className="text-4xl font-bold text-white duration-300 flex items-center px-4 py-2"
          >
            <img src="/src/assets/images/logo/logo_mobile.png" alt="SEAS Logo" className="w-12 h-12 inline-block mr-2" />
            <div className="text-4xl roboto-slab">
              SEAS
            </div>
          </Link>
          <ul className="flex list-none m-0 p-0">
            <li>
              <Link 
                to="/" 
                className="text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Giới Thiệu
              </Link>
            </li>
            <li>
              <Link 
                to="/programs" 
                className="text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Chương Trình
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className="text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Đội Ngũ
              </Link>
            </li>
            <li>
              <Link 
                to="/apply" 
                className="text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Đăng Ký
              </Link>
            </li>
            <li>
              <Link 
                to="/donate" 
                className="text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Tài trợ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Liên Hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar