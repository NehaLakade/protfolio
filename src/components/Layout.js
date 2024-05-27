import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-900 text-white p-4 shadow-lg fixed w-full z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Neha Lakade</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-400">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        <div className="md:hidden mobile-menu hidden">
          <Link href="#about" className="block py-2 px-4 text-sm hover:bg-gray-700">
            About
          </Link>
          <Link href="#projects" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Projects
          </Link>
          <Link href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Contact
          </Link>
        </div>
      </header>
      <main className="pt-16">{children}</main>
      <style jsx>{`
        .mobile-menu-button:focus + .mobile-menu,
        .mobile-menu:hover {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Layout;
