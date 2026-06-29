import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import { SOCIAL, FOOTER_LINKS } from './data'
import headerLogo from './images/headerLogo.png'


export default function Footer() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    businessInfo: '',
    location: '',
  })
  const [status, setStatus] = useState({ submitting: false, message: '', error: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ submitting: true, message: '', error: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const rawText = await response.text()
      let result = null
      if (rawText) {
        try {
          result = JSON.parse(rawText)
        } catch (parseError) {
          throw new Error(`Server returned invalid JSON: ${parseError.message}`)
        }
      }

      if (!response.ok) {
        const message = result?.message || `Server error: ${response.status}`
        throw new Error(message)
      }

      if (!result?.success) {
        throw new Error(result?.message || 'Unable to send message')
      }

      setStatus({ submitting: false, message: 'Message sent successfully. We will contact you soon.', error: '' })
      setFormData({ fullName: '', phone: '', email: '', companyName: '', businessInfo: '', location: '' })
    } catch (error) {
      console.error('Footer form submission error:', error)
      setStatus({ submitting: false, message: '', error: error.message || 'Failed to send message.' })
    }
  }

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center">
              <img
                src={headerLogo}
                alt="Logo"
                className="h-10 w-auto mr-3"
              />
              <span className="font-display text-xl font-bold">
                KSG <span className="gradient-text">Security</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              Your trusted partner in enterprise cybersecurity and security
              services.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ksgsantharaj@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 63791 91157</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Krishnagiri, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
                {group}
              </h4>

              <ul className="space-y-2">
                {links.map((link) => {
                  const getLinkPath = (linkText) => {
                    if (linkText === 'About Us') return '/about'
                    if (linkText === 'Contact') return '/contact'
                    return '#'
                  }

                  const path = getLinkPath(link)

                  if (path !== '#') {
                    return (
                      <li key={link}>
                        <Link
                          to={path}
                          className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400"
                        >
                          <ChevronRight className="w-3 h-3" />
                          {link}
                        </Link>
                      </li>
                    )
                  }

                  return (
                    <li key={link}>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {link}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex gap-3">
            {SOCIAL.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:border-slate-400"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} KSG Security Services. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
