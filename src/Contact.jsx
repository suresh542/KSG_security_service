import { useState } from 'react'
import { Mail, Phone, MapPin, Shield } from 'lucide-react'

const fields = [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Your phone number' },
    { name: 'email', label: 'Email ID', type: 'email', placeholder: 'Your email address' },
    { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Your company name' },
]

export default function Contact() {
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

    const details = [
        { icon: Mail, label: 'Email', value: 'ksgsantharaj@gmail.com' },
        { icon: Phone, label: 'Phone', value: '+91 6379191157' },
        { icon: MapPin, label: 'Location', value: 'Krishnagiri, Tamil Nadu 635001' },
    ]

    return (
        <section className="bg-white text-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-14">

                    <h1 className="mt-6 text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white">
                        Let's build your cybersecurity future together.
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
                        Submit your details and we will respond with a custom plan for your business.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-3xl">
                        <div className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0d1b2e]/80 p-6 sm:p-8 shadow-sm transition-colors">
                            <form onSubmit={handleSubmit} className="space-y-5">

                                <div className="grid gap-4 sm:grid-cols-2">
                                    {fields.map((field) => (
                                        <label key={field.name} className="block">
                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                {field.label}
                                            </span>

                                            <input
                                                name={field.name}
                                                type={field.type}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                required
                                                className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#111827] dark:text-gray-100"
                                            />
                                        </label>
                                    ))}
                                </div>

                                <label className="block">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        What Business
                                    </span>

                                    <textarea
                                        name="businessInfo"
                                        rows="4"
                                        value={formData.businessInfo}
                                        onChange={handleChange}
                                        placeholder="Describe your business or security needs"
                                        required
                                        className="mt-2 w-full rounded-2xl border border-gray-300 !bg-white dark:!bg-transparent px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#111827] dark:text-gray-100"
                                    />
                                </label>

                                <label className="block">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Location
                                    </span>

                                    <input
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="City, state, or country"
                                        required
                                        className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 dark:border-gray-700 dark:bg-[#111827] dark:text-gray-100"
                                    />
                                </label>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={status.submitting}
                                        className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-gradient-to-r from-cyber-green to-blue-400 px-6 py-3 text-lg font-semibold text-[#0a0e1a] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {status.submitting ? 'Sending...' : 'Submit'}
                                    </button>
                                </div>

                                {status.message && (
                                    <p className="text-sm text-green-600 dark:text-green-300">
                                        {status.message}
                                    </p>
                                )}

                                {status.error && (
                                    <p className="text-sm text-red-600 dark:text-red-300">
                                        {status.error}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
