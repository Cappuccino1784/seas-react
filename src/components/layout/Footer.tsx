import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white mt-auto">
      {/* First Bar - Navigation Links */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#62B3D1] px-4 sm:px-6 lg:px-8">
        <div className="text-white text-sm sm:text-base lg:text-lg roboto-slab text-center sm:text-left">
          SEAS - Summer in Engineering and Applied Sciences
        </div>
        <div className='gap-3 sm:gap-4 lg:gap-5 flex items-center flex-wrap justify-center sm:justify-end'>
          <Link
            to="/"
            className="text-white no-underline text-sm sm:text-base font-medium transition-colors duration-300 hover:text-[#4a9eff]"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white no-underline text-sm sm:text-base font-medium transition-colors duration-300 hover:text-[#4a9eff]"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Second Bar - Social Links and Copyright */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#004d61] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2d8bba] rounded-full opacity-50 blur-2xl"></div>

        <div className="flex gap-4 sm:gap-6 items-center justify-center sm:justify-start relative z-10">
          <a
            href="https://github.com/SEAS-CVN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-white/10 p-2.5 rounded-full hover:bg-black transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="GitHub"
          >
            <img src="/images/icons/github.svg" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.facebook.com/seas.cvn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-white/10 p-2.5 rounded-full hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Facebook"
          >
            <img src="/images/icons/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:seas.cvn@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-white/10 p-2.5 rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Email"
          >
            <img src="/images/icons/email.svg" alt="Email" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
        <div className="text-xs sm:text-sm text-blue-100 text-center sm:text-right font-medium relative z-10">
          © {new Date().getFullYear()} SEAS Center. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
