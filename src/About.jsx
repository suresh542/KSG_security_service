import { Target, Shield } from 'lucide-react'
import AboutImg from './images/aboutImage.png'


export default function About() {
  return (
    <section id="about-section"  className="py-20 !bg-white dark:!bg-[#0d1b2e] lg:py-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={AboutImg}
                alt="Cyber Security Operations Center"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-green/20 to-transparent rounded-2xl" />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 lg:-right-10 stat-card rounded-xl p-4 backdrop-blur-sm">
              <div className="font-display text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-gray-400 text-sm font-body">Uptime Guaranteed</div>
            </div> */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyber-green/10 rounded-full blur-xl" />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-cyber-green text-lg sm:text-xl lg:text-2xl xl:text-3xl font-body font-semibold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-cyber-green" /> About Us
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
             <span className=" text-xl sm:text-2xl lg:text-3xl xl:text-4xl"> Professional Security Services </span><br /><span className="gradient-text"> You Can Trust </span>
            </h2>
            <p className="font-body text-gray-400 leading-relaxed ">
With over 15+ years of experience in the security service industry, we provide dependable and trained security personnel for businesses of all sizes.
<br /> <br />
Our security personnel are professionally trained in surveillance, access control, emergency response, fire safety, and conflict management. We ensure every guard is disciplined, alert, and prepared to handle any situation effectively.
<br /> <br />

With a strong commitment to reliability, punctuality, and service excellence, we provide trusted security solutions including armed and unarmed guards, event security, mobile patrols, and 24/7 protection services.
<br />

Our mission is to deliver peace of mind through dependable, professional, and customer-focused security services.

            </p>
            {/* <div className="space-y-5">
              {[
                { icon: Target, title: 'Identifying Threats', desc: 'Proactive threat hunting using advanced behavioral analytics and ML-powered detection engines.' },
                { icon: Shield, title: 'Security Management', desc: 'Comprehensive security lifecycle management from risk assessment to continuous monitoring and reporting.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-xl border border-cyber-green/10 bg-cyber-green/5 hover:border-cyber-green/30 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyber-green/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyber-green" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-white mb-1">{title}</h3>
                    <p className="font-body text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
