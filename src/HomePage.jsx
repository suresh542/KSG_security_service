import Hero from './Hero'
import About from './About'
import Services from './Services'
import MarqueeLinks from './MarqueeLinks'
import AboutTwo from './AboutTwo'
import ClientProducts from './ClientProducts'
import SkillsGap from './SkillsGap'
import Feedback from './Feedback'
import Contact from './Contact'
import Team from './Team'
import FAQ from './FAQ'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MarqueeLinks />
      <AboutTwo />
      <ClientProducts />
      {/* <SkillsGap /> */}
      <Feedback />
      {/* <Contact /> */}
      <Team />
      <FAQ/>
    </>
  )
}
