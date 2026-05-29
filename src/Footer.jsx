import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import { SOCIAL, FOOTER_LINKS } from './data'

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

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message || 'Unable to send message')
      }

      setStatus({ submitting: false, message: 'Message sent successfully. We will contact you soon.', error: '' })
      setFormData({ fullName: '', phone: '', email: '', companyName: '', businessInfo: '', location: '' })
    } catch (error) {
      setStatus({ submitting: false, message: '', error: error.message || 'Failed to send message.' })
    }
  }

  return (
    <footer id="contact" className="bg-white border-t border-gray-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 gap-10 mb-12">
          <div className="space-y-10">
            <div className="space-y-5">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-slate-900/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-slate-900" />
                </div>
                <span className="font-display text-xl font-bold text-slate-900 transition-colors">
                  Cy<span className="gradient-text">bal</span>
                </span>
              </Link>
              <p className="font-body text-slate-700 text-sm leading-relaxed transition-colors">
                Your trusted partner in enterprise cybersecurity. Protecting businesses with next-generation security solutions.
              </p>
              <div className="flex gap-3 flex-wrap">
                {SOCIAL.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-slate-100 border border-gray-200 hover:border-slate-400 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700 text-sm font-body transition-colors">
                  <Mail className="w-4 h-4 text-slate-900 flex-shrink-0" /> ksgsantharaj@gmail.com
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm font-body transition-colors">
                  <Phone className="w-4 h-4 text-slate-900 flex-shrink-0" /> +91 6379191157
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm font-body transition-colors">
                  <MapPin className="w-4 h-4 text-slate-900 flex-shrink-0" /> Krishnagiri, Tamil Nadu 635001, India
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(FOOTER_LINKS).map(([group, links]) => (
                <div key={group}>
                  <h4 className="font-body font-bold text-slate-900 mb-5 transition-colors">{group}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="font-body text-slate-600 text-sm hover:text-slate-900 transition-colors inline-flex items-center gap-1 hover:gap-2"
                        >
                          <ChevronRight className="w-3 h-3" />{link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
          <p className="font-body text-slate-600 text-sm transition-colors">
            © {new Date().getFullYear()} Cybal. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-slate-600 text-sm hover:text-slate-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
