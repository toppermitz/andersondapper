'use client'
import Image from 'next/image';

interface CircularProfilePhotoProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showGradientRing?: boolean;
  gradientColors?: string;
  objectPosition?: string;
  className?: string;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24 sm:w-32 sm:h-32',
  lg: 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48',
  xl: 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56'
};

export default function CircularProfilePhoto({
  src,
  alt,
  size = 'lg',
  showGradientRing = true,
  gradientColors = 'from-blue-500 via-purple-500 to-pink-500',
  objectPosition = 'center 20%',
  className = ''
}: CircularProfilePhotoProps) {
  const sizeClass = sizeClasses[size];

  if (!showGradientRing) {
    return (
      <div className={`relative ${sizeClass} ${className}`}>
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <Image 
            src={src} 
            alt={alt}
            width={size === 'sm' ? 64 : size === 'md' ? 96 : size === 'lg' ? 128 : 160}
            height={size === 'sm' ? 64 : size === 'md' ? 96 : size === 'lg' ? 128 : 160} 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
            priority
            style={{ objectPosition }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeClass} ${className}`}>
      {/* Gradient Ring */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors} rounded-full p-1`}>
        {/* Inner white border for contrast */}
        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-1">
          {/* Profile Image Container */}
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{ objectPosition }}
            />
          </div>
        </div>
      </div>
      
      {/* Optional: Add a subtle shadow behind */}
      <div className={`absolute inset-2 bg-gradient-to-r ${gradientColors.replace(/from-(\w+)-(\d+)/g, 'from-$1-$2/20').replace(/via-(\w+)-(\d+)/g, 'via-$1-$2/20').replace(/to-(\w+)-(\d+)/g, 'to-$1-$2/20')} rounded-full blur-md -z-10`}></div>
    </div>
  );
}
