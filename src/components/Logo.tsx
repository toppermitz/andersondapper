import Image from 'next/image'

export default function Logo({
  className = 'h-9',
  priority = false,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src="/newlogotipo.svg"
      alt=""
      width={97}
      height={56}
      priority={priority}
      unoptimized
      className={`w-auto dark:brightness-0 dark:invert ${className}`}
    />
  )
}
