import { ArrowRight, TrendingUp, AlertTriangle, Users } from 'lucide-react'
import { STATS_BAR } from './data'

export default function SkillsGap() {
  return (
    <section className="py-20 lg:py-28 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-cyber-green text-sm font-body font-semibold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-cyber-green" /> Industry Insight
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Cyber Security Skills Gap Widens As Demand For{' '}
              <span className="gradient-text">Experts Continues To Soar.</span>
            </h2>
            <p className="font-body text-gray-400 leading-relaxed">
              The global cybersecurity workforce gap has reached 3.4 million professionals. Organizations increasingly rely on specialized firms like Cybal to bridge this critical skills shortage and maintain robust security postures.
            </p>
            <div className="space-y-5">
              {STATS_BAR.map(s => (
                <div key={s.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-sm text-gray-300">{s.label}</span>
                    <span className="font-body text-sm font-semibold text-cyber-green">{s.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyber-green to-blue-400 transition-all duration-1000"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-[#0a0e1a] bg-gradient-to-r from-cyber-green to-blue-400 hover:scale-105 transition-all glow-green">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber-green/10 to-blue-500/10 border border-cyber-green/20 backdrop-blur-sm flex items-center justify-center animate-float">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyber-green/30 to-blue-500/20 border border-cyber-green/40 flex items-center justify-center glow-green">
                    <TrendingUp className="w-10 h-10 text-cyber-green" />
                  </div>
                  <div className="font-display text-4xl font-bold gradient-text">3.4M</div>
                  <div className="font-body text-gray-400 text-sm">Security Jobs Unfilled</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <AlertTriangle className="w-7 h-7 text-yellow-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Users className="w-7 h-7 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
