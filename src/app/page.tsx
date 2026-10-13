import EraFrame from '@/components/EraFrame'
import History from '@/components/History'
import ProfileLinks from '@/components/ProfileLinks'
import TechCarousel from '@/components/TechCarousel'
import { chapters, contactLine, foraBody, foraCards, foraPhoto, foraTitle, heroPhrase } from '@/lib/copy'

export default function HomePage() {
  return (
    <>
      <EraFrame
        src="/img/eras/header.webp"
        alt="Mãos digitando num notebook, com um monitor ao lado e a mesa clara desfocada em primeiro plano."
        marker="header"
        priority
        intro={false}
        photoClassName="era-photo-hero"
      >
        <h1 id="hero-title">Anderson Dapper</h1>
        <p className="lede">{heroPhrase}</p>
        <a className="scroll-hint" href="#historia">
          Rolar
        </a>
      </EraFrame>

      <History chapters={chapters} />

      <section aria-labelledby="fora-title">
        <EraFrame src={foraPhoto.src} alt={foraPhoto.alt}>
          <h2 id="fora-title">{foraTitle}</h2>
          <p>{foraBody}</p>
        </EraFrame>
        <div className="block">
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
        </div>
      </section>

      <TechCarousel />

      <section className="block contact" aria-labelledby="contato-title">
        <h2 id="contato-title">{contactLine}</h2>
        <ProfileLinks className="contact-links" />
      </section>
    </>
  )
}
