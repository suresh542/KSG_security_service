import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import headerLogo from './images/headerLogo.png'
import { Menu, X } from "lucide-react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="fixed top-0  left-0 right-0 z-50 !bg-white dark:!bg-[#0d1b2e] border-b border-gray-200 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 h-16">
          <Link to="/" className="flex items-center gap-0">
            <img src={headerLogo} alt="Logo" className="w-auto h-10 pe-3" />
            <span className="font-display text-lg text-black dark:text-white font-bold text-slate-900 transition-colors">
              KSG <span className="gradient-text">security</span>
            </span>
          </Link>

          <nav className="relative ml-auto">
            <div className="flex items-center justify-between p-4">
              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black dark:text-white">
                <Link to="/" className="hover:text-slate-600 transition-colors">
                  Home
                </Link>
                <Link to="/about" className="hover:text-slate-600 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="hover:text-slate-600 transition-colors">
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-black dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile & Tablet Menu */}
            {isOpen && (
              <div className="fixed top-0 left-0 w-screen h-screen min-h-screen z-50 bg-white dark:bg-black md:hidden">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-black dark:text-white"
                >
                  <X size={32} />
                </button>

                <div className="flex flex-col p-8 text-xl gap-6 font-bold space-y-4 text-black dark:text-white">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-slate-600"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-slate-600"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-slate-600"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </nav>


          <button
            type="button"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
            className={`relative sm:hidden md:hidden hidden lg:inline-flex xl:inline-flex 2xl:inline-flex h-12 w-24 items-center border border-dark dark:!border-white/50 rounded-full p-1 transition-all duration-300 ${isDark
              ? '!bg-[#0d1b2e]'
              : '!bg-white'
              }`}
          >
            <span
              className={`absolute top-1 h-10 w-10 rounded-full  shadow transition-transform duration-300 ${isDark ? 'translate-x-12 !bg-white' : 'translate-x-0 !bg-gray-900'
                }`}
            />

            <span className="absolute left-3 flex items-center justify-center">
              <Sun
                className={`h-5 w-5 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-white'
                  }`}
              />
            </span>

            <span className="absolute right-3 flex items-center justify-center">
              <Moon
                className={`h-5 w-5 transition-colors duration-300 ${isDark ? 'text-gray-800' : 'text-gray-500'
                  }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
