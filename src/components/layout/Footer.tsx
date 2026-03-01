import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white mt-auto">
      {/* First Bar - Navigation Links */}
      <div className="p-5 flex justify-between bg-[#62B3D1] flex-wrap px-4 sm:px-6 lg:px-8">
        <div className="text-white text-lg roboto-slab">
          SEAS - Summer in Engineering and Applied Sciences
        </div>
        <div className='gap-5 flex items-center'>
          <Link
            to="/"
            className="text-white no-underline text-base font-medium transition-colors duration-300 hover:text-[#4a9eff]"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white no-underline text-base font-medium transition-colors duration-300 hover:text-[#4a9eff]"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Second Bar - Social Links and Copyright */}
      <div className="p-5 flex justify-between items-center flex-wrap gap-5 bg-[#3BA0C5] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-5 items-center">
          <a 
            href="https://github.com/SEAS-CVN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#4a9eff]"
          >
            <img src="/src/assets/images/icons/github.svg" alt="GitHub" className="w-5 h-5 inline-block mr-1" />
          </a>
          <a 
            href="https://www.facebook.com/seas.cvn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#4a9eff]"
          >
            <img src="/src/assets/images/icons/facebook.svg" alt="Facebook" className="w-5 h-5 inline-block mr-1" />
          </a>
          <a 
            href="mailto:seas.cvn@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#4a9eff]"
          >
            <img src="/src/assets/images/icons/email.svg" alt="Email" className="w-5 h-5 inline-block mr-1" />
          </a>
        </div>
        <div className="text-sm text-white">
          © 2025 SEAS. All rights reserved. 
        </div>
      </div>
    </footer>
  )
}

export default Footer
