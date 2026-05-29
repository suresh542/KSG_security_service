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

          {/* <button
            type="button"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-16 items-center rounded-full border border-slate-300 bg-slate-100 p-1 text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
          >
            <span className={`absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow transition-transform ${isDark ? 'translate-x-6' : 'translate-x-0'}`} />
            <span className="absolute left-3 text-xs text-slate-700 dark:text-slate-400">
              <Sun className="h-4 w-4" />
            </span>
            <span className="absolute right-3 text-xs text-slate-700 dark:text-slate-100">
              <Moon className="h-4 w-4" />
            </span>
          </button> */}
          <button
  type="button"
  aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
  onClick={toggleTheme}
  className={`relative inline-flex h-12 w-24 items-center border border-dark dark:!border-white/50 rounded-full p-1 transition-all duration-300 ${
    isDark
      ? '!bg-[#0d1b2e]'
      : '!bg-white'
  }`}
>
  {/* Toggle Circle */}
  <span
    className={`absolute top-1 h-10 w-10 rounded-full !bg-white  shadow-md transition-transform duration-300 ${
      isDark ? 'translate-x-12' : 'translate-x-0'
    }`}
  />

  {/* Sun Icon */}
  <span className="absolute left-3 flex items-center justify-center">
    <Sun
      className={`h-5 w-5 transition-colors duration-300 ${
        isDark ? 'text-gray-500' : 'text-gray-900'
      }`}
    />
  </span>

  {/* Moon Icon */}
  <span className="absolute right-3 flex items-center justify-center">
    <Moon
      className={`h-5 w-5 transition-colors duration-300 ${
        isDark ? 'text-[#0d1b2e]' : 'text-gray-500'
      }`}
    />
  </span>
</button>
        </div>
      </div>
    </header>
  )
}
