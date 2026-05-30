import { ArrowRight } from 'lucide-react'
import { SERVICES } from './data'

export default function Services() {
  return (
    <section id="services-section" className="py-20 lg:py-28 section-bg hexagon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-cyber-green text-lg sm:text-xl lg:text-2xl xl:text-3xl font-body font-semibold uppercase tracking-widest">
            <span className="w-8 h-0.5 bg-cyber-green" /> What We Do
          </div>
          <h2 className="font-display text-3xl text-dark dark:!text-white sm:text-4xl lg:text-5xl font-bold">
            What We Do For Your<br />
            <span className="gradient-text">Security Service</span>
          </h2>
          <p className="font-body text-gray-400  max-w-2xl mx-auto">
            Providing professional security guard services since 2010 across
            Krishnagiri, Hosur, Denkanikottai, Dharmapuri, and Palacode.
            We deliver reliable manpower solutions with trained security personnel
            for industries, hospitals, hotels, restaurants, retail shops, and
            commercial establishments.          </p>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map(s => (
            <div key={s.title} className="card-hover cyber-border rounded-2xl overflow-hidden bg-[#0d1b2e]/50 group cursor-pointer">
              <div className="img-overlay h-48">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e] via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center group-hover:bg-cyber-green/20 transition-all">
                    <s.icon className="w-5 h-5 text-cyber-green" />
                  </div>
                  <h3 className="font-body font-bold text-white text-lg">{s.title}</h3>
                </div>
                <p className="font-body text-gray-400 text-sm leading-relaxed line-clamp-4"> {s.desc}</p>
                                  {/* <a href="#" className="inline-flex items-center gap-1 text-cyber-green text-sm font-semibold hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
