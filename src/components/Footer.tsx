import ProfileLinks from './ProfileLinks'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-8 md:px-16">
      <ProfileLinks className="text-sm text-[var(--muted)]" />
    </footer>
  )
}
