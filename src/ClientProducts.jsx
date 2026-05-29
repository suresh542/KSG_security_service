import { ArrowRight } from 'lucide-react'
import { CLIENTS_PRODUCTS } from './data'

export default function ClientProducts() {
  const doubled = [...CLIENTS_PRODUCTS, ...CLIENTS_PRODUCTS]
  return (
    <section className="py-20 lg:py-28 section-bg hexagon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-cyber-green text-lg sm:text-xl lg:text-2xl xl:text-3xl font-body font-semibold uppercase tracking-widest">
            <span className="w-8 h-0.5 bg-cyber-green" /> Happiest Clients
          </div>
          <h2 className="font-display text-lg sm:text-xl lg:text-2xl text-white">
           Providing Professional Security Services Across Industries, Trusted for Reliable and Professional Security Solutions Since 2010
          </h2>
        </div>
      </div>

      {/* Scrolling cards — right to left */}
      <div className="overflow-hidden">
        <div className="flex gap-6" style={{ animation: 'marquee 28s linear infinite' }}>
          {doubled.map((p, i) => (
            <div key={i} className="flex-shrink-0 w-72 sm:w-80 card-hover cyber-border rounded-2xl overflow-hidden bg-[#0d1b2e]/50 group cursor-pointer">
              <div className="img-overlay h-48">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 rounded-full bg-cyber-green/20 border border-cyber-green/30 text-cyber-green text-xs font-body">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-body font-bold text-white">{p.title}</h3>
                {/* <a href="#" className="inline-flex items-center gap-1 text-cyber-green text-sm mt-2 hover:gap-2 transition-all">
                  View Project <ArrowRight className="w-3 h-3" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
