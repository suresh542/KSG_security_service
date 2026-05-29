import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TEAM } from './data'

export default function Team() {
  return (
    <section className="py-20 lg:py-28 section-bg hexagon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-cyber-green text-sm font-body font-semibold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-cyber-green" /> Our Experts
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our Experts Team Member For{' '}
              <span className="gradient-text">Your Solution</span>
            </h2>
            <p className="font-body text-gray-400 leading-relaxed">
              Our team comprises battle-tested cybersecurity veterans with decades of combined experience defending organizations from the world's most sophisticated threats.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-[#0a0e1a] bg-gradient-to-r from-cyber-green to-blue-400 hover:scale-105 transition-all glow-green">
              Meet All Experts <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {TEAM.map(member => (
              <div key={member.name} className="card-hover group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="font-body font-bold text-white text-sm">{member.name}</div>
                    <div className="font-body text-cyber-green text-xs">{member.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
