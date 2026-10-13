import {
  SiDelphi,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGo,
  SiJest,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiRedis,
  SiSwagger,
  SiTailwindcss,
  SiTerraform,
  SiTraefikproxy,
  SiTypescript,
} from 'react-icons/si'
import { FaAws, FaCloud, FaServer } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const items: { name: string; icon: IconType }[] = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'CI/CD', icon: FaCloud },
  { name: 'Docker', icon: SiDocker },
  { name: 'Redis', icon: SiRedis },
  { name: 'REST API', icon: FaServer },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'GitLab', icon: SiGitlab },
  { name: 'Delphi', icon: SiDelphi },
  { name: 'AWS', icon: FaAws },
  { name: 'Golang', icon: SiGo },
  { name: 'Terraform', icon: SiTerraform },
  { name: 'Linux', icon: SiLinux },
  { name: 'RabbitMQ', icon: SiRabbitmq },
  { name: 'Jest', icon: SiJest },
  { name: 'Swagger', icon: SiSwagger },
  { name: 'Python', icon: SiPython },
  { name: 'Traefik', icon: SiTraefikproxy },
]

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="carousel-group" aria-hidden={hidden || undefined}>
      {items.map((item) => {
        const Icon = item.icon
        return (
          <span className="chip" key={`${item.name}-${hidden ? 'b' : 'a'}`}>
            <Icon aria-hidden="true" />
            {item.name}
          </span>
        )
      })}
    </div>
  )
}

export default function TechCarousel() {
  return (
    <section className="carousel" aria-label="Tecnologias">
      <div className="carousel-track">
        <Group />
        <Group hidden />
      </div>
    </section>
  )
}
