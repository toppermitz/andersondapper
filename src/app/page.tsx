import EraFrame from '@/components/EraFrame'
import History from '@/components/History'
import Logo from '@/components/Logo'
import ProfileLinks from '@/components/ProfileLinks'
import TechCarousel from '@/components/TechCarousel'
import { chapters, contactLine, foraBody, foraCards, foraPhoto, foraTitle, heroPhrase } from '@/lib/copy'

export default function HomePage() {
  return (
    <>
      <section className="block hero" aria-labelledby="hero-title">
        <div className="ph ph-hero">placeholder: foto mesa.jpg, tela cheia ao fundo</div>
        <Logo className="hero-logo" priority />
        <h1 id="hero-title">Anderson Dapper</h1>
        <p className="lede">{heroPhrase}</p>
        <a className="scroll-hint" href="#historia">
          Rolar
        </a>
      </section>

      <History chapters={chapters} />

      <section className="block" aria-labelledby="fora-title">
        <EraFrame src={foraPhoto.src} alt={foraPhoto.alt}>
          <h2 id="fora-title">{foraTitle}</h2>
          <p>{foraBody}</p>
        </EraFrame>
        <ul className="cards">
          {foraCards.map((card) => (
            <li key={card.label} className="card">
              {'href' in card && card.href ? (
                <a href={card.href}>{card.label}</a>
              ) : (
                <span>{card.label}</span>
              )}
              {'photo' in card && card.photo ? <div className="ph">foto: {card.photo}</div> : null}
            </li>
          ))}
        </ul>
      </section>

      <TechCarousel />

      <section className="block contact" aria-labelledby="contato-title">
        <h2 id="contato-title">{contactLine}</h2>
        <ProfileLinks className="contact-links" />
      </section>
    </>
  )
}
