function assertLines(lines: readonly string[], expected: string, label: string) {
  const joined = lines.join(' ')
  if (joined !== expected) {
    throw new Error(`${label} divergiu do texto aprovado`)
  }
}

export const heroLines = [
  'Sou',
  'Anderson',
  'Dapper,',
  'desenvolvedor de software.',
] as const

export const origemLines = [
  'Programo desde 1999,',
  'quando comecei com Clipper aos 14 anos.',
  'De lá pra cá trabalhei com varejo,',
  'sistemas escolares, contabilidade,',
  'fiscal, banco e indústria,',
  'quase sempre em Delphi',
  'e, nos últimos anos,',
  'cada vez mais na web.',
] as const

export const hojeLines = [
  'Hoje sou tech lead',
  'numa empresa de software.',
  'Lidero a reescrita de um sistema legado grande,',
  'de Delphi para NestJS, Next.js e PostgreSQL,',
  'e acabo cuidando de boa parte da infraestrutura também.',
] as const

export const vagosLines = [
  'Nas horas vagas',
  'estudo IA e segurança',
  'e uso o que aprendo',
  'pra resolver problemas meus.',
] as const

assertLines(
  heroLines,
  'Sou Anderson Dapper, desenvolvedor de software.',
  'hero',
)
assertLines(
  origemLines,
  'Programo desde 1999, quando comecei com Clipper aos 14 anos. De lá pra cá trabalhei com varejo, sistemas escolares, contabilidade, fiscal, banco e indústria, quase sempre em Delphi e, nos últimos anos, cada vez mais na web.',
  'origem',
)
assertLines(
  hojeLines,
  'Hoje sou tech lead numa empresa de software. Lidero a reescrita de um sistema legado grande, de Delphi para NestJS, Next.js e PostgreSQL, e acabo cuidando de boa parte da infraestrutura também.',
  'hoje',
)
assertLines(
  vagosLines,
  'Nas horas vagas estudo IA e segurança e uso o que aprendo pra resolver problemas meus.',
  'vagos',
)

export const sobrePhases = [
  {
    year: '1999',
    tone: 'ink',
    lines: [
      'Comecei a programar em 1999, com Clipper.',
      'O primeiro trabalho pago veio em 2001, em VB6,',
      'e em 2002 passei pro Delphi num sistema de varejo.',
      'Nunca mais larguei.',
    ],
  },
  {
    year: '2004',
    tone: 'paper',
    lines: [
      'Em 2004 migrei um sistema escolar de Delphi para PHP.',
      'Foi meu primeiro contato sério com a web.',
    ],
  },
  {
    year: '2005',
    tone: 'ink',
    lines: [
      'Em 2005 abri uma loja de computadores com um colega do técnico.',
      'Computador doméstico estava em alta e parecia boa ideia.',
      'Não estava preparado: o aluguel não esperava,',
      'as vendas não eram constantes',
      'e eu não sabia separar o dinheiro da empresa do meu.',
      'O sócio saiu, as vendas caíram e as contas subiram.',
      'Fechei em 2006.',
    ],
  },
  {
    year: '',
    tone: 'paper',
    lines: [
      'Voltei pro desenvolvimento.',
      'Passei por varejo de novo,',
      'sistemas contábeis e fiscais em Delphi,',
      'um período num banco trabalhando com PHP',
      'e alguns anos em sistemas para indústria.',
    ],
  },
  {
    year: '2016',
    tone: 'ink',
    lines: [
      'Desde maio de 2016 estou na mesma empresa.',
      'Entrei como desenvolvedor pleno',
      'e hoje sou tech lead e analista de sistemas,',
      'o que na prática quer dizer que faço um pouco de tudo:',
      'arquitetura, código, infra e o que mais aparecer.',
    ],
  },
  {
    year: '',
    tone: 'paper',
    lines: [
      'Tenho o hábito de estudar coisas',
      'que não têm nada a ver com o meu trabalho do momento.',
      'Mais de uma vez elas viraram',
      'exatamente o que eu precisava depois.',
    ],
  },
] as const

const sobreExpected = [
  'Comecei a programar em 1999, com Clipper. O primeiro trabalho pago veio em 2001, em VB6, e em 2002 passei pro Delphi num sistema de varejo. Nunca mais larguei.',
  'Em 2004 migrei um sistema escolar de Delphi para PHP. Foi meu primeiro contato sério com a web.',
  'Em 2005 abri uma loja de computadores com um colega do técnico. Computador doméstico estava em alta e parecia boa ideia. Não estava preparado: o aluguel não esperava, as vendas não eram constantes e eu não sabia separar o dinheiro da empresa do meu. O sócio saiu, as vendas caíram e as contas subiram. Fechei em 2006.',
  'Voltei pro desenvolvimento. Passei por varejo de novo, sistemas contábeis e fiscais em Delphi, um período num banco trabalhando com PHP e alguns anos em sistemas para indústria.',
  'Desde maio de 2016 estou na mesma empresa. Entrei como desenvolvedor pleno e hoje sou tech lead e analista de sistemas, o que na prática quer dizer que faço um pouco de tudo: arquitetura, código, infra e o que mais aparecer.',
  'Tenho o hábito de estudar coisas que não têm nada a ver com o meu trabalho do momento. Mais de uma vez elas viraram exatamente o que eu precisava depois.',
]

sobrePhases.forEach((phase, index) => {
  assertLines(phase.lines, sobreExpected[index], `sobre ${index}`)
})
