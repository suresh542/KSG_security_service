import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { fullName, phone, email, companyName, businessInfo, location } = req.body || {}

  if (!fullName || !phone || !email || !companyName || !businessInfo || !location) {
    return res.status(400).json({ message: 'Please fill in all required fields.' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 587),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const emailTo = process.env.EMAIL_TO || 'ksgsantharaj@gmail.com'
  const subject = `New contact request from ${fullName}`
  const html = `
    <h2>New contact request</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company Name:</strong> ${companyName}</p>
    <p><strong>Business:</strong> ${businessInfo}</p>
    <p><strong>Location:</strong> ${location}</p>
  `
  const text = `New contact request\nFull Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nCompany Name: ${companyName}\nBusiness: ${businessInfo}\nLocation: ${location}`

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: emailTo,
      replyTo: email,
      subject,
      text,
      html,
    })

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Mail send error:', error)
    return res.status(500).json({ message: error?.message || 'Unable to send email.' })
  }
}
