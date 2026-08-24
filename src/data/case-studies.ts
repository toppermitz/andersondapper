export type CaseStudyIcon = 'layers' | 'invoice' | 'rocket'

interface CaseStudyStep {
  eyebrow: string
  title: string
  description: string
}

interface CaseStudyDetails {
  intro: string
  seoDescription: string
  confidentialityNote: string
  challenge: string
  constraints: string[]
  responsibilities: string[]
  approach: CaseStudyStep[]
  validation: string[]
  outcomes: string[]
  tags: string[]
}

export interface CaseStudy {
  slug: string
  title: string
  context: string
  description: string
  contribution: string
  result: string
  icon: CaseStudyIcon
  iconGradient: string
  accent: string
  details?: CaseStudyDetails
}

export type PublishedCaseStudy = CaseStudy & {
  details: CaseStudyDetails
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'modernizacao-sem-ruptura',
    title: 'Modernização sem ruptura',
    context: 'Legado → Web',
    description:
      'Migração de sistemas Delphi e ERPs com regras críticas, evitando uma reescrita de alto risco.',
    contribution:
      'Arquitetura incremental, APIs, paridade e testes entre o legado e a nova experiência.',
    result:
      'Regras preservadas e evolução por etapas, com risco operacional controlado.',
    icon: 'layers',
    iconGradient: 'from-red-500 to-orange-500',
    accent: 'text-orange-600 dark:text-orange-400',
    details: {
      intro:
        'Um recorte de como evoluir um sistema Delphi maduro para uma experiência web sem interromper a operação nem descartar as regras que o negócio consolidou ao longo dos anos.',
      seoDescription:
        'Case anonimizado de modernização incremental de sistemas Delphi para Web e APIs, com paridade funcional, validação contínua e risco operacional controlado.',
      confidentialityNote:
        'Este relato preserva nomes, volumes, telas e dados do projeto. O foco está no problema de engenharia, nas decisões tomadas e nos critérios usados para validar a evolução.',
      challenge:
        'O sistema existente concentrava anos de comportamento operacional em telas, validações, consultas e integrações. Uma reescrita total criaria um longo período sem entrega e transformaria regras conhecidas em hipóteses.',
      constraints: [
        'A operação precisava continuar durante toda a transição.',
        'Parte das regras estava implícita no comportamento do sistema legado.',
        'Usuários precisavam reconhecer fluxos e resultados na nova experiência.',
        'Legado e Web coexistiriam até que cada recorte estivesse validado.',
      ],
      responsibilities: [
        'Inventariar fluxos, estados, regras e dependências antes da conversão.',
        'Definir a arquitetura incremental e os contratos entre interface, APIs e dados.',
        'Converter recortes verticais com rastreabilidade até o comportamento legado.',
        'Separar prova local, testes, integração, deploy e saúde em produção.',
      ],
      approach: [
        {
          eyebrow: '01 · Baseline',
          title: 'Congelar e mapear',
          description:
            'Cada recorte começava com uma referência estável do legado e um mapa explícito de telas, regras, dados e integrações envolvidas.',
        },
        {
          eyebrow: '02 · Contratos',
          title: 'Criar limites claros',
          description:
            'APIs e modelos transformavam comportamento implícito em contratos revisáveis, reduzindo o acoplamento com a aplicação original.',
        },
        {
          eyebrow: '03 · Paridade',
          title: 'Migrar fatias completas',
          description:
            'Interface, regra, persistência e validação avançavam juntas. Cada fluxo novo precisava demonstrar equivalência antes de substituir o anterior.',
        },
        {
          eyebrow: '04 · Operação',
          title: 'Validar além do build',
          description:
            'A entrega só era considerada pronta depois de integração, deploy, navegação real e sinais de saúde coerentes com o commit publicado.',
        },
      ],
      validation: [
        'Comportamentos e estados comparados com referências do sistema legado.',
        'Regras críticas cobertas por testes e cenários de integração.',
        'Fluxos completos exercitados na interface e nas APIs.',
        'Deploy e funcionamento real verificados separadamente do build.',
      ],
      outcomes: [
        'Regras de negócio preservadas sem depender de uma troca abrupta.',
        'Evolução dividida em entregas menores e verificáveis.',
        'Risco operacional controlado pela convivência temporária entre as soluções.',
        'Uma base reutilizável para converter novos módulos com o mesmo método.',
      ],
      tags: ['Delphi', 'Web', 'APIs REST', 'Paridade funcional', 'Entrega incremental'],
    },
  },
  {
    slug: 'operacoes-fiscais-rastreaveis',
    title: 'Operações fiscais rastreáveis',
    context: 'Fiscal & integrações',
    description:
      'Emissão e integrações em que schema, certificado, idempotência e disponibilidade formam um único contrato.',
    contribution:
      'APIs resilientes, observabilidade e estados explícitos de processamento e reenvio.',
    result:
      'Operações repetíveis e diagnóstico rápido entre sistema, fiscal e infraestrutura.',
    icon: 'invoice',
    iconGradient: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-700 dark:text-cyan-300',
  },
  {
    slug: 'entrega-que-chega-a-producao',
    title: 'Entrega que chega à produção',
    context: 'CI/CD & plataforma',
    description:
      'Frontend, APIs, bancos e serviços que precisam continuar previsíveis depois que chegam à produção.',
    contribution:
      'Containers, pipelines, deploy automatizado e telemetria depois da entrega.',
    result:
      'Releases reproduzíveis e diagnóstico baseado em evidência, não em tentativa e erro.',
    icon: 'rocket',
    iconGradient: 'from-purple-500 to-violet-600',
    accent: 'text-purple-700 dark:text-purple-300',
  },
]

export const publishedCaseStudies = caseStudies.filter(
  (caseStudy): caseStudy is PublishedCaseStudy => caseStudy.details !== undefined,
)

export function getPublishedCaseStudy(slug: string) {
  return publishedCaseStudies.find((caseStudy) => caseStudy.slug === slug)
}
