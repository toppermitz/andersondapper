import EraFrame from '@/components/EraFrame'
import History from '@/components/History'
import HobbyCards from '@/components/HobbyCards'
import ProfileLinks from '@/components/ProfileLinks'
import TechCarousel from '@/components/TechCarousel'
import { chapters, contactLine, foraBody, foraPhoto, foraTitle, heroPhrase } from '@/lib/copy'
import { siteDescription } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <EraFrame
        src="/img/eras/header.webp"
        alt="Mãos digitando num notebook, com um monitor ao lado e a mesa clara desfocada em primeiro plano."
        marker="header"
        hero
        photoClassName="era-photo-hero"
      >
        <p className="eyebrow">{siteDescription}</p>
        <h1 id="hero-title">Anderson Dapper</h1>
        <p className="lede">{heroPhrase}</p>
        <a className="scroll-hint" href="#historia">
          <span className="scroll-hint-line" aria-hidden="true" />
          Rolar
        </a>
      </EraFrame>

      <History chapters={chapters} />

      <section id="fora" aria-labelledby="fora-title">
        <EraFrame src={foraPhoto.src} alt={foraPhoto.alt} marker="fora">
          <h2 id="fora-title">{foraTitle}</h2>
          <div className="era-body">
            <p>{foraBody}</p>
          </div>
        </EraFrame>
        <div className="block">
          <HobbyCards />
        </div>
      </section>

      <TechCarousel />

      <section id="contato" className="block contact" aria-labelledby="contato-title">
        <h2 id="contato-title">{contactLine}</h2>
        <ProfileLinks />
      </section>
    </>
  )
}
