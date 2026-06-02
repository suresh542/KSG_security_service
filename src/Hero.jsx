import { Shield, Lock, Eye, Zap, ChevronRight, Play } from 'lucide-react'
import { STATS } from './data'
import heroImage1 from './images/homeImage1.jpg'

export default function Hero() {
  return (
    <section className="relative !bg-white dark:!bg-[#0d1b2e] min-h-screen flex items-center overflow-hidden  ">
      {/* BG blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96  rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80  rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full mb-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-8">

            <h1 className="font-display text-xl sm:text-2xl lg:text-4xl xl:text-3xl font-bold text-gray-900 dark:text-white leading-tight font-family: 'tamil', serif transition-colors">
              Trusted Security Guard Services for {' '}
              <span className="gradient-text glow-text">Since 2010</span>

            </h1>
            <p className="font-body text-gray-700 dark:text-gray-400 text-base lg:text-lg max-w-xl leading-relaxed transition-colors">
              Professional manpower security solutions for industries, hospitals, hotels, retail stores, commercial buildings, and service centers across Krishnagiri District.
            </p>
            <p className="font-body text-gray-700 dark:text-gray-400 text-base lg:text-lg max-w-xl leading-relaxed transition-colors">
              We specialize in supplying and maintaining highly trained security guards with a strong focus on safety, discipline, monitoring, and quick response services. Our experienced team ensures reliable protection for your people, property, and business operations 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services-section" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-[#0a0e1a] bg-gradient-to-r from-cyber-green to-blue-400 hover:scale-105 transition-all glow-green">
                Discover More <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#about-section" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-gray-900 dark:text-white border border-gray-500 dark:border-white/20 hover:border-cyber-green/50 transition-all">
                <Play className="w-5 h-5 text-cyber-green" /> Video Tour
              </a>
            </div>
          </div>

          {/* Right — animated shield */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px]">
              <div className="absolute inset-0 rounded-full border-2 border-cyber-green/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-cyber-green/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyber-green/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-cyber-green/30 glow-green overflow-hidden">
                <img src={heroImage1} alt="Shield" className="w-full h-full rounded-full object-cover relative z-10" />
                <div className="absolute inset-0 rounded-full  pointer-events-none" />
              </div>
              {[
                { icon: Lock, label: 'Safety', pos: 'top-4 right-8', delay: '0s' },
                { icon: Eye, label: 'Monitoring', pos: 'bottom-8 left-4', delay: '0.5s' },
                { icon: Zap, label: 'Quality', pos: 'top-1/2 -left-4', delay: '1s' },
              ].map(({ icon: Icon, label, pos, delay }) => (
                <div key={label} className={`absolute ${pos} animate-float`} style={{ animationDelay: delay }}>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#0d1b2e]/90 border border-cyber-green/30 backdrop-blur-sm transition-colors">
                    <Icon className="w-3 h-3 text-cyber-green" />
                    <span className="text-xs text-gray-900 dark:text-white font-body transition-colors">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0  right-0 !bg-white backdrop-blur-md border border-gray-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">{s.number}</div>
                <div className="text-gray-900 dark:text-gray-600 text-xs sm:text-sm font-body mt-1 transition-colors">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
