import { profileLinks } from '@/lib/site'

export default function ProfileLinks({ className = '' }: { className?: string }) {
  return (
    <p className={className}>
      {profileLinks.map((link, index) => (
        <span key={link.label}>
          {index > 0 ? <span aria-hidden="true"> · </span> : null}
          <a href={link.href} className="site-link">
            {link.label}
          </a>
        </span>
      ))}
    </p>
  )
}
