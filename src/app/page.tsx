import Image from 'next/image'
import Link from 'next/link'
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import HomeMotion from '../components/HomeMotion'
import EasterEggWrapper from '../components/EasterEggWrapper'
import { caseStudies } from '../data/case-studies'
import { publishedInsights } from '../data/insights'
import styles from './home.module.css'

const chapters = [
  { id: 'hero-title', label: 'Anderson' },
  { id: 'fundacao', label: 'A base' },
  { id: 'evolucao', label: 'Novos caminhos' },
  { id: 'hoje', label: 'Hoje' },
]

function ProjectDrawing({ variant }: { variant: number }) {
  return (
    <svg viewBox="0 0 480 400" fill="none" aria-hidden="true" className={styles.projectDrawing}>
      <g stroke="currentColor" strokeWidth="1">
        {[0, 1, 2, 3].map(level => (
          <g key={level} transform={`translate(0 ${-level * 43})`} opacity={0.25 + level * 0.2}>
            <path d="M100 265 240 335 380 265 240 195Z" />
            <path d="M100 265v32l140 70 140-70v-32M240 335v32" />
          </g>
        ))}
        {variant === 0 && <path strokeWidth="2" d="M170 244V92l70-35 70 35v152M170 92l70 35 70-35M240 127v152" />}
        {variant === 1 && <><path strokeWidth="2" d="m155 212 85-44 85 44-85 44Z" /><path d="M155 212v-90m170 90v-90M240 168V75M240 256v54" /><circle cx="240" cy="75" r="9" /><circle cx="155" cy="122" r="7" /><circle cx="325" cy="122" r="7" /></>}
        {variant === 2 && <><path strokeWidth="2" d="M240 263V67m-32 32 32-32 32 32" /><path d="m189 139 51 26 51-26m-102 39 51 26 51-26" /></>}
      </g>
      <ellipse cx="240" cy="377" rx="170" ry="15" stroke="currentColor" opacity=".12" />
    </svg>
  )
}

export default function HomePage() {
  const insight = publishedInsights[0]

  return (
    <HomeMotion className={`portfolio-home ${styles.home}`}>
      <div className={styles.masthead} data-masthead>
        <header className={`${styles.container} ${styles.header}`}>
          <Link href="/" className={styles.brand} aria-label="Anderson Dapper, início">
            <Image src="/newlogotipo.svg" alt="" width={51} height={34} className={styles.logo} />
            <span>Anderson Dapper</span>
          </Link>
          <nav aria-label="Navegação principal" className={styles.navigation}>
            <a href="#sobre">Trajetória</a><a href="#projetos">Projetos</a><a href="#insights">Escritos</a><a href="#contato">Contato</a>
            <span className={styles.navIndicator} data-nav-indicator aria-hidden="true" />
          </nav>
        </header>
        <div className={styles.scrollProgress} data-scroll-progress aria-hidden="true" />
      </div>

      <section id="sobre" className={styles.story} aria-label="Minha trajetória" data-story>
        <div className={styles.storyStage} data-story-stage>
          <div className={styles.storyVisual} data-story-visual>
            <Image src="/images/software-bridge.png" alt="Uma ponte de vidro une uma base de pedra a uma estrutura moderna. A mesma base, novas possibilidades." width={1536} height={1024} sizes="(max-width: 700px) 110vw, 85vw" preload />
          </div>
          <div className={`${styles.container} ${styles.chapters}`}>
            <article className={styles.chapter} data-chapter>
              <p className={styles.eyebrow}>Olá, eu sou o Anderson.</p>
              <h1 id="hero-title">Anderson<br />Dapper.</h1>
              <p className={styles.chapterLead}>Mais de 20 anos entre código,<br className={styles.desktopBreak} /> pessoas e sistemas.</p>
              <p className={styles.chapterText}>Esta é uma parte da minha história.<br />E ela continua em construção.</p>
              <a href="#fundacao" className={styles.storyInvitation}>Conheça o caminho <FiArrowDown aria-hidden="true" /></a>
            </article>
            <article className={styles.chapter} data-chapter>
              <p className={styles.eyebrow}>A base · Delphi e sistemas de negócio</p>
              <h2 id="fundacao">Antes da web,<br />vieram as regras.</h2>
              <p className={styles.chapterLead}>Aprendi com sistemas<br className={styles.desktopBreak} /> que não podiam parar.</p>
              <p className={styles.chapterText}>Foi no desktop que construí minha base em arquitetura, dados e operação. Entender o que o código significava para as pessoas vinha antes de mudar qualquer coisa.</p>
            </article>
            <article className={styles.chapter} data-chapter>
              <p className={styles.eyebrow}>2022 · Web, APIs e novas experiências</p>
              <h2 id="evolucao">Novas ferramentas.<br />A mesma base.</h2>
              <p className={styles.chapterLead}>O repertório cresceu.<br />O conhecimento veio junto.</p>
              <p className={styles.chapterText}>Node.js, Next.js, NestJS e Golang abriram novos caminhos. As regras e os aprendizados dos sistemas anteriores continuaram fazendo parte deles.</p>
            </article>
            <article className={styles.chapter} data-chapter>
              <p className={styles.eyebrow}>Hoje · Da modelagem à operação</p>
              <h2 id="hoje">Enxergar<br />o caminho inteiro.</h2>
              <p className={styles.chapterLead}>Dados. APIs. Interface.<br />E a vida depois do deploy.</p>
              <p className={styles.chapterText}>Atuo entre varejo, fiscal, bancário e educação. Gosto de conectar as partes e entender como cada decisão aparece na experiência de quem usa.</p>
              <Link href="/about" className={styles.textLink}>Mais sobre mim <FiArrowUpRight aria-hidden="true" /></Link>
            </article>
          </div>
          <div className={`${styles.container} ${styles.storyFooter}`}>
            <p className={styles.scrollHint}>Uma história contada no scroll <FiArrowDown aria-hidden="true" /></p>
            <nav aria-label="Capítulos da trajetória" className={styles.chapterNav}>
              {chapters.map((chapter, index) => <a href={`#${chapter.id}`} key={chapter.id} data-chapter-link><span aria-hidden="true">0{index + 1}</span>{chapter.label}</a>)}
            </nav>
          </div>
        </div>
      </section>

      <section className={styles.interlude} aria-labelledby="continuity-title">
        <p className={styles.eyebrow}>O que levo comigo</p>
        <h2 id="continuity-title" data-statement><span>As ferramentas mudam.</span><br /><span>A curiosidade permanece.</span></h2>
        <p>Entender antes de substituir.<br />Evoluir sem apagar o que aprendi.</p>
      </section>

      <section id="projetos" className={`${styles.container} ${styles.projects}`} aria-labelledby="cases-title" data-projects>
        <div className={styles.projectStage} data-project-stage>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>Recortes dessa trajetória</p><h2 id="cases-title">O caminho, na prática.</h2></div>
            <Link href="/cases" className={styles.textLink}>Todos os projetos <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className={styles.projectDeck} data-project-deck>
            {caseStudies.map((study, index) => <article key={study.slug} className={styles.project} data-project>
              <div className={styles.projectCopy}>
                <p className={styles.projectContext}>{study.context}</p>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <div className={styles.result}><span>O que ficou desse trabalho</span><p>{study.result}</p></div>
                {study.details && <Link href={`/cases/${study.slug}`} className={styles.textLink}>Ler sobre o projeto <FiArrowUpRight aria-hidden="true" /><span className="sr-only">: {study.title}</span></Link>}
              </div>
              <div className={styles.projectVisual}><ProjectDrawing variant={index} /><span>{['Preservar. Compreender. Evoluir.', 'Conectar. Rastrear. Entender.', 'Construir. Entregar. Acompanhar.'][index]}</span></div>
            </article>)}
          </div>
          <div className={styles.projectFooter}><p>Projetos privados. Aprendizados compartilhados.</p><span data-project-counter aria-hidden="true">01 / 03</span></div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.personal}`} aria-labelledby="personal-title">
        <div><p className={styles.eyebrow}>Fora do código</p><h2 id="personal-title">A curiosidade<br />não fecha o editor.</h2></div>
        <div className={styles.personalCopy}><p>Games ajudam a desacelerar e treinar decisões. Automobilismo mantém perto a combinação de engenharia, precisão e performance que também me atrai em software.</p><div className={styles.interests}><span>Games</span><span>Automobilismo</span></div></div>
      </section>

      <div className={styles.container}><EasterEggWrapper /></div>

      <section id="insights" className={`${styles.container} ${styles.insights}`} aria-labelledby="insights-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>O que tenho escrito</p><h2 id="insights-title">Pensar também<br />faz parte de construir.</h2></div><Link href="/insights" className={styles.textLink}>Todos os textos <FiArrowUpRight aria-hidden="true" /></Link></div>
        {insight && <Link href={`/insights/${insight.slug}`} className={styles.insight}>
          <div className={styles.insightMeta}><span>{insight.category}</span><span>{insight.readTime}</span></div>
          <div><h3>{insight.title}</h3><p>{insight.description}</p></div>
          <FiArrowUpRight className={styles.insightArrow} aria-hidden="true" />
        </Link>}
      </section>

      <section id="contato" className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>A história segue</p>
          <h2 id="contact-title">E a conversa<br />continua.</h2>
          <p className={styles.contactDescription}>Para trocar experiências, conversar sobre tecnologia<br className={styles.desktopBreak} /> ou simplesmente dizer oi.</p>
          <a href="mailto:eu@andersondapper.com.br" className={styles.email}>eu@andersondapper.com.br <FiArrowUpRight aria-hidden="true" /></a>
          <footer className={styles.footer}><span>© {new Date().getFullYear()} Anderson Dapper</span><div><a href="https://github.com/toppermitz" target="_blank" rel="noopener noreferrer" aria-label="GitHub, abre em nova aba"><FiGithub aria-hidden="true" />GitHub</a><a href="https://linkedin.com/in/andersondapper" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn, abre em nova aba"><FiLinkedin aria-hidden="true" />LinkedIn</a><a href="#hero-title">Voltar ao início ↑</a></div></footer>
        </div>
      </section>
    </HomeMotion>
  )
}
