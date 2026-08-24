interface SectionHeadingProps {
  title: string
  id?: string
  eyebrow?: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({
  title,
  id,
  eyebrow,
  subtitle,
  className = 'mb-10',
}: SectionHeadingProps) {
  return (
    <div className={`${className} flex items-center gap-4 animate-fade-in`}>
      <div aria-hidden="true" className="relative">
        <div className="h-12 w-2 rounded-full bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500" />
        <div className="absolute inset-0 h-12 w-2 rounded-full bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 opacity-50 blur-sm" />
      </div>

      <div>
        {eyebrow && (
          <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
            {eyebrow}
          </p>
        )}
        <h2
          id={id}
          className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
