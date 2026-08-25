import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const contactLinks = [
  {
    name: 'LinkedIn',
    value: '/andersondapper',
    href: 'https://linkedin.com/in/andersondapper',
    icon: FaLinkedinIn,
    iconClassName: 'bg-blue-600',
    external: true,
  },
  {
    name: 'GitHub',
    value: '/toppermitz',
    href: 'https://github.com/toppermitz',
    icon: FaGithub,
    iconClassName: 'bg-slate-900 dark:bg-slate-700',
    external: true,
  },
  {
    name: 'Email',
    value: 'eu@andersondapper.com.br',
    href: 'mailto:eu@andersondapper.com.br',
    icon: FaEnvelope,
    iconClassName: 'bg-emerald-600',
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contato" className="mb-16 scroll-mt-24 sm:mb-20" aria-labelledby="contact-title">
      <SectionHeading
        id="contact-title"
        title="Vamos conversar?"
        subtitle="Projetos, modernização e boas conversas sobre engenharia"
        className="mb-7 sm:mb-8"
      />

      <p className="mb-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
        Se existe um sistema crítico para evoluir, uma integração difícil de tornar
        previsível ou uma entrega que precisa chegar inteira à produção, podemos conversar.
      </p>

      <div className="grid min-w-0 gap-3 sm:grid-cols-3">
        {contactLinks.map((contact) => {
          const Icon = contact.icon

          return (
            <a
              key={contact.name}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              aria-label={`${contact.name}: ${contact.value}${contact.external ? ' (abre em nova aba)' : ''}`}
              className="pressable group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm hover:border-cyan-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700/80 dark:bg-slate-800/70 dark:hover:border-cyan-700 dark:hover:bg-slate-800"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${contact.iconClassName}`}>
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold text-slate-900 dark:text-white">
                  {contact.name}
                </span>
                <span className="block truncate text-sm text-slate-500 dark:text-slate-400">
                  {contact.value}
                </span>
              </span>
              <FaExternalLinkAlt
                aria-hidden="true"
                className="interactive-arrow h-4 w-4 shrink-0 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
              />
            </a>
          )
        })}
      </div>
    </section>
  )
}
