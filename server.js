import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const emailHost = process.env.EMAIL_HOST
const emailPort = Number(process.env.EMAIL_PORT || 587)
const emailSecure = process.env.EMAIL_SECURE === 'true'
const emailUser = process.env.EMAIL_USER
const emailPass = process.env.EMAIL_PASS
const emailTo = process.env.EMAIL_TO || 'ksgsantharaj@gmail.com'

const transporter = nodemailer.createTransport({
  host: emailHost,
  port: emailPort,
  secure: emailSecure,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
})

app.post('/api/contact', async (req, res) => {
  const { fullName, phone, email, companyName, businessInfo, location } = req.body

  if (!fullName || !phone || !email || !companyName || !businessInfo || !location) {
    return res.status(400).json({ message: 'Please fill in all required fields.' })
  }

  if (!emailHost || !emailUser || !emailPass) {
    return res.status(500).json({ message: 'Mail server is not configured. Set EMAIL_HOST, EMAIL_USER, and EMAIL_PASS.' })
  }

  const subject = `ksg quare in ${companyName} website`
  const html = `
    <h2>New contact request</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company Name:</strong> ${companyName}</p>
    <p><strong>Business:</strong> ${businessInfo}</p>
    <p><strong>Location:</strong> ${location}</p>
  `
  const text = `New contact request\n
Full Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nCompany Name: ${companyName}\nBusiness: ${businessInfo}\nLocation: ${location}`

  try {
    await transporter.sendMail({
      from: emailUser,
      to: emailTo,
      replyTo: email,
      subject,
      text,
      html,
    })

    return res.json({ message: 'Message sent successfully.' })
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Unable to send email.' })
  }
})

app.listen(port, () => {
  console.log(`Contact server listening on http://localhost:${port}`)
})
