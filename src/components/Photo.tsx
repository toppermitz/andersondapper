import Image from 'next/image'

export default function Photo({
  src,
  alt,
  sizes,
  priority = false,
  className = '',
  blurDataURL,
}: {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
  blurDataURL?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      className={`theme-photo ${className}`}
    />
  )
}
