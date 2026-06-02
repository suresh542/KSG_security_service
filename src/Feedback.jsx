import { useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { FEEDBACKS } from './data'

export default function Feedback() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 300)
  }, [animating])

  const goPrev = () => goTo((current - 1 + FEEDBACKS.length) % FEEDBACKS.length)
  const goNext = useCallback(() => goTo((current + 1) % FEEDBACKS.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(goNext, 4500)
    return () => clearInterval(timer)
  }, [goNext])

  const f = FEEDBACKS[current]

  return (
    <section id="feedback-section" className="py-20 lg:py-28 green-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-cyber-green text-lg sm:text-xl lg:text-2xl xl:text-3xl font-body font-semibold uppercase tracking-widest">
            <span className="w-8 h-0.5 bg-cyber-green" /> Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 dark:text-gray-300 leading-tight">
            Take A Look Our Top<br />
            <span className="gradient-text">Customer Feedback</span>
          </h2>
        </div>

        {/* Card */}
        <div className={`relative cyber-border rounded-3xl bg-[#0d1b2e]/60 backdrop-blur-sm p-8 sm:p-12 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute top-8 right-8 text-cyber-green/20 font-display text-8xl leading-none select-none">"</div>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-cyber-green/40 glow-green">
                <img src={f.avatar} alt={f.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex gap-1">
                {Array(f.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyber-green text-cyber-green" />
                ))}
              </div>
              <p className="font-body text-gray-300 text-base sm:text-lg leading-relaxed italic">
                "{f.text}"
              </p>
              <div>
                <div className="font-body font-bold text-white text-lg">{f.name}</div>
                <div className="font-body text-cyber-green text-sm">{f.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <button onClick={goPrev} className="w-12 h-12 rounded-full border border-cyber-green/30 hover:border-cyber-green hover:bg-cyber-green/10 flex items-center justify-center text-white transition-all" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {FEEDBACKS.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-cyber-green' : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'}`}
              />
            ))}
          </div>
          <button onClick={goNext} className="w-12 h-12 rounded-full border border-cyber-green/30 hover:border-cyber-green hover:bg-cyber-green/10 flex items-center justify-center text-white transition-all" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="text-center mt-4 font-body text-gray-500 text-sm">
          {current + 1} / {FEEDBACKS.length}
        </div>
      </div>
    </section>
  )
}
