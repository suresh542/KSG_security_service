import { Lock, Eye, Shield, Database, Globe, Cpu, Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'
import ServicesImg1 from './images/ServiceImg1.jpg';
import ServicesImg2 from './images/ServiceImg2.png';
import ServicesImg3 from './images/ServiceImg3.png';
import ServicesImg4 from './images/ServiceImg4.png';
import ServicesImg5 from './images/ServiceImg5.png';
import ServicesImg6 from './images/ServiceImg6.jpg';
import Client1 from './images/Client1.png';
import Client2 from './images/Client2.jpg';
import Client3 from './images/Client3.jpg';
import Client4 from './images/Client4.jpeg';
import Client5 from './images/Client5.jpg';
import Client6 from './images/Client6.jpg';
import Client7 from './images/Client7.jpg';
import Client8 from './images/Client8.jpg';
import Client9 from './images/Client9.jpeg';

export const STATS = [
  { number: '45+', label: 'Top Companies' },
  { number: '500+', label: 'Customer Satisfactions' },
  { number: '200+', label: 'Specialized Duties' },
  { number: '100+', label: 'Happy Staff' },
]

export const SERVICES = [
  {
    icon: Lock,
    title: 'Experienced & Trained Security Guards',
    desc: 'Our security guards are carefully selected, professionally trained, and highly experienced in handling a wide range of security responsibilities. They are skilled in access control, visitor management, patrolling, incident reporting, and emergency handling. With a strong focus on discipline, professionalism, and customer service, our guards ensure a safe and secure environment for your business, employees, and visitors',
    img: ServicesImg1,
  },
  {
    icon: Eye,
    title: '24/7 Security Monitoring Support',
    desc: 'We provide reliable 24/7 security monitoring services to ensure continuous protection for your property and operations. Our dedicated support team actively monitors security activities, responds to alerts, and coordinates immediate action whenever required. Whether during the day or night, we remain committed to keeping your premises secure at all times.',
    img: ServicesImg2,
  },
  {
    icon: Shield,
    title: 'Flexible Security Guards for All Industries',
    desc: 'Every business has unique security needs, which is why we offer customized and flexible security solutions. From small offices to large industrial facilities, we design security plans that match your operational requirements, risk level, and budget while ensuring maximum protection and efficiency.',
    img: ServicesImg3,
  },
  {
    icon: Database,
    title: 'Security Guard Supply Services',
    desc: 'We provide trained and licensed security guards for offices, commercial buildings, factories, warehouses, residential communities, educational institutions, hospitals, construction sites, and events. Our guards are trained to maintain safety, monitor activities, control access, and respond effectively to security incidents, ensuring complete peace of mind for our clients.',
    img: ServicesImg4,
  },
  {
    icon: Globe,
    title: 'Professional Uniformed Staff',
    desc: 'Our security personnel maintain a professional appearance and conduct themselves with discipline and courtesy at all times. Properly uniformed and trained in communication and workplace ethics, our staff create a strong security presence while representing your organization in a respectful and professional manner.',
    img: ServicesImg5,
  },
  {
    icon: Cpu,
    title: 'Trusted by Leading Businesses',
    desc: 'Over the years, we have built strong relationships with clients through our commitment to reliability, professionalism, and consistent service quality. Many leading businesses trust us for their security needs because of our proven track record, experienced team, and dedication to client satisfaction.',
    img: ServicesImg6,
  },
]

export const CLIENTS_PRODUCTS = [
  { title: 'TATA Electronics', category: 'Industrial Security Services', img: Client1 },
  { title: 'TCR Hospital', category: 'Medical Facility Security', img: Client2 },
  { title: 'Ashok Leyland Service Center', category: 'Commercial & Service Center Security', img: Client3 },
  { title: 'Bakery Delight', category: 'Bakery & Restaurant', img: Client4 },
  { title: 'KFC', category: 'Food Court & Commercial Security', img: Client5 },
  { title: 'ARK Hospital', category: 'Healthcare Security Services', img: Client6 },
  { title: 'RK Hospital', category: 'Hospital Security Management', img: Client7 },
  { title: 'RR Biriyani', category: 'Restaurant & Hospitality Security', img: Client8 },
  { title: 'Kirubakar & co', category: 'TMT Metal shop', img: Client9 },
]



export const TEAM = [
  { name: 'Alex Morgan', role: 'Chief Security Officer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face' },
  { name: 'Marcus Reeves', role: 'Network Architect', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&face' },
  { name: 'Priya Nair', role: 'Threat Intelligence Analyst', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face' },
]

export const FEEDBACKS = [
  { name: 'James Wilson', role: 'CTO, TechNova Inc.', rating: 5, text: 'Cybal transformed our entire security posture. Their 24/7 SOC team detected and neutralized three major threats in the first month alone. Truly exceptional service that exceeded every expectation we had.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&face' },
  { name: 'Emma Rodriguez', role: 'VP Security, FinanceHub', rating: 5, text: 'The penetration testing team found vulnerabilities our previous vendor missed for two years. Their detailed reports and remediation guidance saved us from a potentially catastrophic breach. Highly recommended!', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&face' },
  { name: 'David Kim', role: 'CEO, DataStream Co.', rating: 5, text: 'Cybal\'s cloud security audit revealed critical misconfigurations across our AWS environment. Their rapid response and expert guidance helped us achieve compliance in record time. Outstanding professionals.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&face' },
  { name: 'Lisa Thompson', role: 'CISO, MediTech Systems', rating: 5, text: 'Their threat intelligence platform gives us real-time insights that have completely changed how we approach security. The dashboard is intuitive and the alerts are always actionable. World-class solution.', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=80&h=80&fit=crop&face' },
  { name: 'Robert Chang', role: 'IT Director, RetailMax', rating: 5, text: 'We experienced a ransomware attempt last quarter. Cybal\'s incident response team was on-call within 15 minutes and contained the threat before any data was compromised. Absolutely lifesaving service.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&face' },
  { name: 'Sophia Martinez', role: 'Security Lead, EduPlatform', rating: 5, text: 'Implementing zero-trust architecture seemed daunting until Cybal guided us through every step. Their implementation was flawless and our security incidents dropped by 94% in the following quarter.', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&face' },
  { name: 'Michael Brown', role: 'COO, LogisticsAI', rating: 5, text: 'The network segmentation strategy Cybal designed for us is brilliant. We can now isolate threats instantly without business disruption. Their expertise in OT/IT convergence security is unmatched in the industry.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&face' },
  { name: 'Aisha Patel', role: 'Head of Compliance, BankFirst', rating: 5, text: 'Cybal helped us achieve SOC 2 Type II and ISO 27001 certifications simultaneously. Their documentation process was thorough and the audit support was exceptional. Could not have done it without them.', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&face' },
  { name: 'Tom Sullivan', role: 'CTO, StartupVault', rating: 5, text: 'As a startup, we needed enterprise-grade security on a budget. Cybal designed a perfectly tailored solution. The ROI is incredible — we closed three enterprise deals specifically because of our security certifications.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&face' },
  { name: 'Nina Johansson', role: 'Security Architect, CloudCorp', rating: 5, text: 'Cybal\'s threat hunting team proactively identified an advanced persistent threat in our network that had been dormant for months. Their expertise in threat actor TTPs is extraordinary and their professionalism is top-notch.', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&face' },
]

export const MARQUEE_LINKS = [
  'Professional Security Guards',
  '24/7 Security Monitoring',
  'Industrial Security Services',
  'Hospital Security Protection',
  'Hotel & Restaurant Security',
  'Commercial Building Security',
  'Trained Security Personnel',
  'Emergency Response Support',
  'Visitor Management Services',
  'Security Guard Maintenance',
  'Reliable Manpower Solutions',
  'Business Safety Protection',
]

export const STATS_BAR = [
  { label: 'Cyber Attacks', value: 94 },
  { label: 'Data Recovery', value: 86 },
  { label: 'Support Hours', value: 98 },
]

export const SOCIAL = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

export const FOOTER_LINKS = {
  Company: ['About Us', 'Services', 'Careers', 'Blog'],
  Learn: ['FAQs', 'Case Studies', 'Resources', 'Events'],
  Support: ['Contact', 'Privacy Policy', 'Terms of Service', 'Help Center'],
}
