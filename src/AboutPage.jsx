import { Shield, Target, Award, Users, Zap, Globe, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TEAM, STATS } from './data'

const MILESTONES = [
  {
    year: '2010',
    title: 'Founded',
    desc: 'Security Services was established by a team of security specialists focused on delivering enterprise-grade protection, risk management, and trust solutions.',
  },
  {
    year: '2013',
    title: 'Managed Security Services',
    desc: 'Expanded our capabilities with 24/7 Security Operations Center (SOC) monitoring, incident response, and proactive threat intelligence services for enterprise clients.',
  },
  {
    year: '2016',
    title: 'ISO 9001:2015 Certified',
    desc: 'Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management, operational excellence, and customer-focused security services.',
  },
  {
    year: '2019',
    title: 'Advanced Threat Protection',
    desc: 'Introduced advanced penetration testing, vulnerability assessment, and security solutions to help organizations defend against man power.',
  },
  {
    year: '2022',
    title: 'Security Guard Services',
    desc: 'Expanded our professional security guard services across local commercial, residential, and industrial sectors, providing trained personnel, on-site protection, and 24/7 safety monitoring solutions.',
  },
  {
    year: '2025',
    title: 'Security Monitoring',
    desc: 'Introduced AI-powered online monitoring and smart surveillance solutions with 24/7 real-time threat detection, remote security tracking, and rapid incident response services for businesses and residential properties.',
  },
]

// const VALUES = [
//   { icon: Shield, title: 'Security First', desc: 'Every decision we make starts with a security-first mindset, never compromising on protection.' },
//   { icon: Target, title: 'Precision', desc: 'We deliver precise, measurable results — not vague promises or theoretical frameworks.' },
//   { icon: Users, title: 'Partnership', desc: "We treat every client as a long-term partner, deeply invested in their security outcomes." },
//   { icon: Zap, title: 'Innovation', desc: 'Constantly evolving our methods and tools to stay ahead of the threat landscape.' },
//   { icon: Globe, title: 'Global Reach', desc: 'World-class expertise delivered locally — wherever your business operates.' },
//   { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in every engagement, every time.' },
// ]

const VALUES = [
  {
    icon: Shield,
    title: 'Trusted Protection',
    desc: 'We provide reliable security solutions focused on safeguarding people, properties, and businesses with professionalism and vigilance.',
  },
  {
    icon: Target,
    title: 'Rapid Response',
    desc: 'Our trained security teams respond quickly and effectively to incidents, ensuring safety and minimizing potential risks at all times.',
  },
  {
    icon: Users,
    title: 'Client Commitment',
    desc: 'We build long-term relationships with our clients by delivering dependable security services tailored to their unique requirements.',
  },
  {
    icon: Zap,
    title: 'Smart Surveillance',
    desc: 'Leveraging advanced monitoring systems and modern technology to provide real-time security awareness and threat prevention.',
  },
  {
    icon: Globe,
    title: '24/7 Monitoring',
    desc: 'Round-the-clock security operations and online monitoring services designed to ensure continuous protection and peace of mind.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    desc: 'Our experienced and highly trained personnel maintain the highest standards of discipline, integrity, and service quality.',
  },
]
export default function AboutPage() {
  return (
    <div className="pt-20 bg-[#0a0e1a] text-white">

      {/* Hero */}
      <section className="relative py-24 lg:py-32 section-bg hexagon-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-green/30 bg-cyber-green/5 text-cyber-green text-sm font-body mb-6">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" /> About Cybal
          </div> */}
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Trusted Security Service Company<br />
            <span className="gradient-text glow-text"> Since 2010</span>
          </h1>
          <p className="font-body text-gray-700 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
Established in 2010, we are one of the trusted security service providers serving businesses across Krishnagiri District and surrounding regions. We specialize in supplying and maintaining professional security guards for industries, hospitals, hotels, restaurants, commercial establishments, and service centers. <br />
<br />
 With years of industry experience, we understand the importance of safety, discipline, punctuality, and professional conduct in security services. Our team is committed to providing dependable manpower solutions tailored to each client’s requirements.

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-[#0a0e1a] bg-gradient-to-r from-cyber-green to-blue-400 hover:scale-105 transition-all glow-green">
              Work With Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-white border border-white/20 hover:border-cyber-green/50 hover:bg-cyber-green/5 transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-[#0d1b2e] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2">{s.number}</div>
                <div className="text-gray-700 dark:text-gray-400 text-sm font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 green-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-cyber-green text-sm font-body font-semibold uppercase tracking-widest">
                <span className="w-8 h-0.5 bg-cyber-green" /> Our Mission
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Protecting What Matters Most —{' '}
                <span className="gradient-text">Your Business.</span>
              </h2>
              <p className="font-body text-gray-700 dark:text-gray-400 leading-relaxed">
To become the most trusted and respected security service provider in the region through quality service, discipline, and customer satisfaction.
              </p>
              <div className="space-y-3">
                {[`Strict Access Control & Site Entry Management`,`Real-Time Guard Monitoring & Supervision System`,`Trained & Verified Security Personnel Available 24/7`,`Compliance with Safety Rules & Client Security Standards,Regular Patrolling`, `Inspection & Risk Prevention Services`
].map(item => (
                  <div key={item} className="flex items-center gap-3 text-gray-300 font-body text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyber-green/20 border border-cyber-green/40 flex items-center justify-center">
                      <Check className="w-3 h-3 text-cyber-green" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop" alt="Mission" className="w-full h-auto rounded-2xl object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-green/20 to-transparent rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 stat-card rounded-xl p-4 backdrop-blur-sm">
                <div className="font-display text-3xl font-bold gradient-text">16yr+</div>
                <div className="text-gray-400 text-sm font-body">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 section-bg hexagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-cyber-green text-sm font-body font-semibold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-cyber-green" /> Core Values
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              The Principles That Drive<br />
              <span className="gradient-text">Everything We Do</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-hover cyber-border rounded-2xl p-6 bg-white/95 dark:bg-[#0d1b2e]/50 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cyber-green" />
                </div>
                <h3 className="font-body font-bold text-gray-900 dark:text-white text-xl">{title}</h3>
                <p className="font-body text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 green-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-cyber-green text-sm font-body font-semibold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-cyber-green" /> Our Journey
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              A Decade Of <span className="gradient-text">Excellence</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-green via-blue-500 to-cyber-green/20" />
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className="sm:w-1/2" />
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-green border-2 border-[#0a0e1a] glow-green mt-1" />
                  <div className={`sm:w-1/2 pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`}>
                    <div className="card-hover cyber-border rounded-xl p-5 bg-white/95 dark:bg-[#0d1b2e]/60">
                      <div className="font-display text-cyber-green text-sm font-bold mb-1">{m.year}</div>
                      <div className="font-body font-bold text-gray-900 dark:text-white text-lg mb-2">{m.title}</div>
                      <p className="font-body text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 section-bg hexagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-cyber-green text-sm font-body font-semibold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-cyber-green" /> Leadership
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(member => (
              <div key={member.name} className="card-hover group cursor-pointer cyber-border rounded-2xl overflow-hidden bg-white/95 dark:bg-[#0d1b2e]/50">
                <div className="relative overflow-hidden h-56">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-4">
                  <div className="font-body font-bold text-gray-900 dark:text-white">{member.name}</div>
                  <div className="font-body text-cyber-green text-sm mt-1">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-[#0d1b2e] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Ready To Secure Your <span className="gradient-text">Business?</span>
          </h2>
          <p className="font-body text-gray-400 text-lg">Talk to our experts today and get a free security assessment.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-body font-semibold text-[#0a0e1a] bg-gradient-to-r from-cyber-green to-blue-400 hover:scale-105 transition-all glow-green">
            Get Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
