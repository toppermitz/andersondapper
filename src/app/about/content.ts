import { FaCheckCircle, FaRocket, FaSearch, FaServer } from 'react-icons/fa'
import { SiDelphi, SiNextdotjs } from 'react-icons/si'

export const pageDescription =
  'Conheça a trajetória de Anderson Dapper: mais de 20 anos modernizando sistemas críticos e construindo APIs, produtos web e infraestrutura.'

export const journey = [
  {
    eyebrow: 'Fundação',
    title: 'Sistemas Delphi e regras críticas',
    description:
      'Comecei no desenvolvimento desktop e construí uma base sólida em arquitetura, dados e operação. Foram anos entendendo sistemas que sustentam rotinas reais e não podem simplesmente parar.',
    icon: SiDelphi,
    iconClassName: 'text-red-500',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    eyebrow: 'Evolução',
    title: 'Web, APIs e novas experiências',
    description:
      'A partir de 2022, ampliei essa experiência para Node.js, Next.js, NestJS e Golang. A mudança não apagou o legado: trouxe ferramentas novas para evoluí-lo com segurança.',
    icon: SiNextdotjs,
    iconClassName: 'text-slate-900 dark:text-white',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    eyebrow: 'Hoje',
    title: 'Engenharia de ponta a ponta',
    description:
      'Atuo da modelagem de dados à interface, passando por integração, infraestrutura, entrega e observabilidade. O trabalho só termina quando o software está utilizável e verificável em produção.',
    icon: FaRocket,
    iconClassName: 'text-purple-500',
    gradient: 'from-purple-500 to-violet-600',
  },
]

export const workingPrinciples = [
  {
    title: 'Entender antes de substituir',
    description:
      'Mapeio regras, dependências e riscos antes de escolher a solução. Em sistemas maduros, o comportamento existente é parte do contrato.',
    icon: FaSearch,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Evoluir em etapas verificáveis',
    description:
      'Prefiro entregas menores, paridade explícita e validação contínua. Isso reduz risco e deixa decisões técnicas fáceis de revisar.',
    icon: FaCheckCircle,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Levar a entrega até produção',
    description:
      'Build verde é só uma etapa. Deploy, saúde, logs e experiência real também fazem parte da responsabilidade de quem constrói.',
    icon: FaServer,
    gradient: 'from-purple-500 to-violet-600',
  },
]

export const sectors = ['Varejo', 'Fiscal e contábil', 'Bancário', 'Educacional']
