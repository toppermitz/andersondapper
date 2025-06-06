'use client'
// import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import CircularProfilePhoto from './CircularProfilePhoto'

export default function Header() {
  return (
    <header className="text-center mb-12 relative">
      {/* Theme Toggle Button */}
      <div className="absolute top-0 right-0">
        <ThemeToggle />
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-6">
        <CircularProfilePhoto
          src="/Profile.jpg"
          alt="Anderson Dapper"
          size="lg"
          objectPosition="center 30%"
        />
        
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Anderson Dapper
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
              Desenvolvedor Full Stack
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full">
             Delphi
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
              Node.js
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
              Next.js
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
              NestJS
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}