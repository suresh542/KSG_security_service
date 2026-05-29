import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-gray-200/50 dark:shadow-black/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyber-green to-blue-500 flex items-center justify-center glow-green">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-gray-900 dark:text-white transition-colors">
              Cy<span className="gradient-text">bal</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`nav-link font-body text-sm font-medium transition-colors ${location.pathname === l.href ? 'text-cyber-green' : 'text-gray-700 dark:text-gray-300 hover:text-cyber-green'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link to="/contact" className="px-5 py-2.5 rounded-lg font-body text-sm font-semibold text-[#0a0e1a] bg-gradient-to-r from-cyber-green to-blue-400 hover:opacity-90 transition-all glow-green">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-gray-900 dark:text-white p-2 transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-white/10 bg-white/97 dark:bg-[#0a0e1a]/97 backdrop-blur-md transition-colors">
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`block px-4 py-3 font-body text-sm transition-colors ${location.pathname === l.href ? 'text-cyber-green' : 'text-gray-700 dark:text-gray-300 hover:text-cyber-green'}`}
              >
                {l.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link to="/contact" className="block text-center px-5 py-3 rounded-lg font-body text-sm font-semibold text-[#0a0e1a] bg-gradient-to-r from-cyber-green to-blue-400">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
