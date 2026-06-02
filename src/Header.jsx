import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import headerLogo from './images/headerLogo.png'

export default function Header() {
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

          <nav className="hidden md:flex text-black dark:text-white items-center justify-center gap-8 text-sm font-medium text-slate-900 transition-colors">
            <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-slate-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-slate-600 transition-colors">Contact</Link>
          </nav>

          <button
            type="button"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
            className={`relative inline-flex h-12 w-24 items-center border border-dark dark:!border-white/50 rounded-full p-1 transition-all duration-300 ${isDark
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
