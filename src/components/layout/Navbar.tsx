import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollUpDistance, setScrollUpDistance] = useState(0)
  const [scrollDownDistance, setScrollDownDistance] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white duration-300 flex items-center px-2 sm:px-4 py-2"
          >
            <img src="logo_mobile.png" alt="SEAS Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 inline-block mr-2" />
            <div className="roboto-slab">
              SEAS
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden lg:flex list-none m-0 p-0">
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
        
        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="py-4 space-y-2">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Giới Thiệu
              </Link>
            </li>
            <li>
              <Link 
                to="/programs" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Chương Trình
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Đội Ngũ
              </Link>
            </li>
            <li>
              <Link 
                to="/apply" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Đăng Ký
              </Link>
            </li>
            <li>
              <Link 
                to="/donate" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
              >
                Tài trợ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white no-underline text-base px-4 py-2 rounded hover:text-green-500 hover:bg-green-500/10 transition-all duration-300"
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