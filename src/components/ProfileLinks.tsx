import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { profileLinks } from '@/lib/site'

const icons: Record<(typeof profileLinks)[number]['label'], IconType> = {
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  'e-mail': FiMail,
}

export default function ProfileLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`profile-links ${className}`.trim()}>
      {profileLinks.map((link) => {
        const Icon = icons[link.label]
        return (
          <li key={link.label}>
            <a
              href={link.href}
              className="profile-link"
              {...(link.href.startsWith('http://') || link.href.startsWith('https://')
                ? { rel: 'noopener noreferrer' }
                : {})}
            >
              <Icon aria-hidden="true" />
              {link.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
