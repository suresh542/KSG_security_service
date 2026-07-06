import { useState } from 'react'
import { Shield, ChevronDown, Phone, Mail, MapPin, Send } from 'lucide-react'

const faqItems = [
    {
        question: 'What security services do you provide?',
        answer: 'We provide trained security guards for residential, commercial, industrial, hospital, hotel, and retail environments.',
    },
    {
        question: 'Do you offer 24/7 support?',
        answer: 'Yes, our teams are available round the clock with quick response and monitoring support.',
    },
    {
        question: 'Can you cover multiple locations?',
        answer: 'We support clients across Krishnagiri District and can arrange services for multiple sites.',
    },
]

const initialForm = {
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    location: '',
    businessInfo: '',
}

const BACKEND_URL = 'https://ksg-security-backend-kri.vercel.app/api/contact'

export default function FAQ() {
    const [activeFaq, setActiveFaq] = useState(0)
    const [formData, setFormData] = useState(initialForm)
    const [status, setStatus] = useState({ submitting: false, message: '', error: '' })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setStatus({ submitting: true, message: '', error: '' })

        try {
            const response = await fetch(BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const rawText = await response.text()
            let result = null
            if (rawText) {
                try {
                    result = JSON.parse(rawText)
                } catch {
                    throw new Error('Server returned an invalid response.')
                }
            }

            if (!response.ok) {
                throw new Error(result?.message || 'Unable to send your request right now.')
            }

            setStatus({
                submitting: false,
                message: 'Your request has been sent successfully. We will contact you soon.',
                error: '',
            })
            setFormData(initialForm)
        } catch (error) {
            setStatus({
                submitting: false,
                message: '',
                error: error.message || 'Something went wrong while sending the form.',
            })
        }
    }

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 dark:bg-[#0d1b2e] ">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyber-green">FAQ</p>
                    <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
                        Everything you need to know about our security guard services and support.
                    </p>
                </div>

                <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 py-6 sm:py-8">
                    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111827]">
                        <div className="mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-cyber-green" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Common Questions</h3>
                        </div>

                        <div className="space-y-3">
                            {faqItems.map((item, index) => (
                                <div key={item.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                                    <button
                                        type="button"
                                        onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{item.question}</span>
                                        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeFaq === index && (
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                <div className="rounded-3xl mx-auto flex w-full max-w-5xl flex-col gap-4 py-6 sm:py-8 border border-gray-200 bg-gradient-to-br from-cyber-green/10 to-blue-400/10 p-6 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-cyber-green/20 dark:to-blue-500/20">
                    <div className="mb-4 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-cyber-green" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Us</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block text-sm text-gray-700 dark:text-gray-200">
                                <span className="mb-1 block">Full Name</span>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                    className="w-full rounded-2xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#0f172a] dark:text-white"
                                />
                            </label>

                            <label className="block text-sm text-gray-700 dark:text-gray-200">
                                <span className="mb-1 block">Phone Number</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your phone number"
                                    className="w-full rounded-2xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#0f172a] dark:text-white"
                                />
                            </label>

                            <label className="block text-sm text-gray-700 dark:text-gray-200">
                                <span className="mb-1 block">Email Address</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your email"
                                    className="w-full rounded-2xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#0f172a] dark:text-white"
                                />
                            </label>

                            <label className="block text-sm text-gray-700 dark:text-gray-200">
                                <span className="mb-1 block">Company Name</span>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Your company"
                                    className="w-full rounded-2xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#0f172a] dark:text-white"
                                />
                            </label>
                        </div>

                        <label className="block text-sm text-gray-700 dark:text-gray-200">
                            <span className="mb-1 block">Location</span>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                placeholder="City or area"
                                className="w-full rounded-2xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#0f172a] dark:text-white"
                            />
                        </label>

                        <label className="block text-sm text-gray-700 dark:text-gray-200">
                            <span className="mb-1 block">Your Requirement</span>
                            <textarea
                                name="businessInfo"
                                rows="4"
                                value={formData.businessInfo}
                                onChange={handleChange}
                                required
                                placeholder="Tell us about your security requirement"
                                className="w-full rounded-2xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#0f172a] dark:text-white"
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={status.submitting}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyber-green to-blue-400 px-4 py-3 text-sm font-semibold text-[#0a0e1a] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            <Send className="h-4 w-4" />
                            {status.submitting ? 'Sending...' : 'Send Request'}
                        </button>

                        {status.message && (
                            <p className="rounded-2xl border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-300">
                                {status.message}
                            </p>
                        )}

                        {status.error && (
                            <p className="rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
                                {status.error}
                            </p>
                        )}
                    </form>

                    <div className="mt-6 space-y-3 border-t border-gray-200 pt-4 text-sm text-gray-700 dark:border-white/10 dark:text-gray-300">
                        <a href="mailto:ksgsantharaj@gmail.com" className="flex items-center gap-3 hover:text-cyber-green transition-colors">
                            <Mail className="h-4 w-4" />
                            <span>ksgsantharaj@gmail.com</span>
                        </a>
                        <a href="tel:+916379191157" className="flex items-center gap-3 hover:text-cyber-green transition-colors">
                            <Phone className="h-4 w-4" />
                            <span>+91 6379191157</span>
                        </a>
                        <div className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4" />
                            <span>Krishnagiri, Tamil Nadu 635001</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
