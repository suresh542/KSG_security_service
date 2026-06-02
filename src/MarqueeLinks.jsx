import { MARQUEE_LINKS } from './data'

export default function MarqueeLinks() {
  const items = [...MARQUEE_LINKS, ...MARQUEE_LINKS, ...MARQUEE_LINKS]
  return (
    <div className="py-4 bg-cyber-green/5 border-y border-cyber-green/10 overflow-hidden">
      <div className="flex">
        <div className="flex gap-12 animate-marquee  whitespace-nowrap">
          {items.map((item, i) => (
            <a key={i} href="#" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-green text-sm font-body transition-colors flex-shrink-0">
              <span className="w-1.5 h-1.5 bg-cyber-green rounded-full" />
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-12 animate-marquee whitespace-nowrap ml-12" aria-hidden>
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-gray-400 text-sm font-body flex-shrink-0">
              <span className="w-1.5 h-1.5 bg-cyber-green rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
