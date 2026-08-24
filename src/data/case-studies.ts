export type CaseStudyIcon = 'layers' | 'invoice' | 'rocket'

interface CaseStudyStep {
  eyebrow: string
  title: string
  description: string
}

interface CaseStudyCallToAction {
  title: string
  description: string
  label: string
}

interface CaseStudySectionSubtitles {
  challenge: string
  responsibilities: string
  approach: string
}

interface CaseStudyDetails {
  intro: string
  seoDescription: string
  confidentialityNote: string
  challenge: string
  sectionSubtitles: CaseStudySectionSubtitles
  constraints: string[]
  responsibilities: string[]
  approach: CaseStudyStep[]
  validation: string[]
  outcomes: string[]
  tags: string[]
  callToAction: CaseStudyCallToAction
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
      sectionSubtitles: {
        challenge: 'Modernizar sem transformar a operação em laboratório.',
        responsibilities: 'Do entendimento do legado à comprovação em produção.',
        approach: 'Uma sequência repetível em vez de uma grande virada.',
      },
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
      callToAction: {
        title: 'Precisa evoluir um sistema sem apostar tudo em uma reescrita?',
        description:
          'Podemos conversar sobre um caminho incremental, com regras explícitas, entregas verificáveis e risco operacional controlado.',
        label: 'Conversar sobre modernização',
      },
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
    details: {
      intro:
        'Um recorte de como tornar emissões e integrações fiscais previsíveis quando certificados, schemas, serviços externos e tentativas repetidas fazem parte da mesma operação.',
      seoDescription:
        'Case anonimizado de engenharia fiscal com APIs idempotentes, estados explícitos e observabilidade para emissões e integrações rastreáveis.',
      confidentialityNote:
        'Este relato não expõe clientes, documentos, volumes ou provedores. Ele descreve os limites técnicos, as decisões de arquitetura e as evidências usadas para validar a operação.',
      challenge:
        'Uma emissão fiscal não termina quando a API aceita a requisição. Assinatura, schema, certificado, disponibilidade externa, recibos, rejeições e reenvios precisam formar uma única história operacional — inclusive quando uma resposta se perde no caminho.',
      sectionSubtitles: {
        challenge: 'Integrar sem perder a história do que aconteceu.',
        responsibilities: 'Do contrato de entrada à evidência operacional.',
        approach: 'Identidade, estado e evidência em uma única sequência.',
      },
      constraints: [
        'Uma repetição após timeout não poderia criar uma segunda operação fiscal.',
        'Certificados, ambientes e schemas mudavam o comportamento da integração.',
        'Indisponibilidades externas precisavam ser separadas de rejeições de negócio.',
        'O suporte precisava reconstruir cada tentativa sem depender de suposições.',
      ],
      responsibilities: [
        'Modelar identidade, estados e transições da operação fiscal de ponta a ponta.',
        'Definir contratos de API, validação de payload e limites de idempotência.',
        'Separar falhas transitórias, rejeições fiscais e erros internos recuperáveis.',
        'Correlacionar requisição, documento, retorno externo e reprocessamento na telemetria.',
      ],
      approach: [
        {
          eyebrow: '01 · Contrato',
          title: 'Identificar a operação',
          description:
            'Cada emissão ganhava uma identidade estável, regras de entrada explícitas e uma resposta coerente mesmo quando a chamada era repetida.',
        },
        {
          eyebrow: '02 · Estados',
          title: 'Explicitar a jornada',
          description:
            'Processamento, autorização, rejeição e contingência deixavam de ser efeitos colaterais e passavam a formar uma máquina de estados consultável.',
        },
        {
          eyebrow: '03 · Resiliência',
          title: 'Repetir com segurança',
          description:
            'Timeouts e indisponibilidades eram tratados com reconsulta e reprocessamento controlados, sem confundir ausência de resposta com ausência de resultado.',
        },
        {
          eyebrow: '04 · Evidência',
          title: 'Ligar todos os sinais',
          description:
            'Logs estruturados e correlação conectavam API, documento, serviço fiscal e infraestrutura em uma linha do tempo única para diagnóstico.',
        },
      ],
      validation: [
        'Payloads e documentos validados contra contratos e schemas aplicáveis.',
        'Requisições repetidas exercitadas para comprovar o mesmo resultado operacional.',
        'Timeouts, rejeições e indisponibilidades simulados como cenários distintos.',
        'Rastreabilidade verificada da entrada até o retorno e eventuais reprocessamentos.',
      ],
      outcomes: [
        'Reenvios controlados sem transformar retry em duplicidade fiscal.',
        'Estados compreensíveis para aplicação, suporte e operação.',
        'Diagnóstico baseado em uma linha do tempo correlacionada.',
        'Integrações mais previsíveis mesmo diante de dependências externas.',
      ],
      tags: ['NF-e', 'APIs', 'Idempotência', 'Observabilidade', 'Integrações'],
      callToAction: {
        title: 'Precisa tornar uma operação fiscal previsível de ponta a ponta?',
        description:
          'Podemos conversar sobre contratos explícitos, idempotência e observabilidade para integrações que precisam sobreviver a condições reais.',
        label: 'Conversar sobre integrações fiscais',
      },
    },
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
    details: {
      intro:
        'Um recorte de como transformar código aprovado em uma release previsível, conectando artefato, configuração, banco de dados, deploy e sinais de saúde à mesma versão.',
      seoDescription:
        'Case anonimizado de entrega contínua com containers, pipelines, deploy rastreável e observabilidade para releases reproduzíveis.',
      confidentialityNote:
        'Este relato preserva nomes de serviços, ambientes e detalhes de infraestrutura. O foco está no desenho da entrega, nas decisões operacionais e nas provas usadas para confirmar cada release.',
      challenge:
        'Um pipeline verde comprova que etapas terminaram, mas não que a versão correta está atendendo usuários. Entre o commit e a produção existem artefatos, configurações, migrações, dependências e mecanismos de deploy que também precisam ser tratados como parte do produto.',
      sectionSubtitles: {
        challenge: 'Fechar a distância entre commit e operação.',
        responsibilities: 'Da definição do pipeline à prova da versão ativa.',
        approach: 'Evidência em cada transição da cadeia de entrega.',
      },
      constraints: [
        'Frontend, APIs, bancos e serviços precisavam evoluir sem um deploy indivisível.',
        'Diferenças de configuração entre ambientes não poderiam invalidar o build aprovado.',
        'Cada publicação precisava indicar artefato, revisão e caminho de recuperação.',
        'Job concluído, serviço iniciado e operação saudável eram provas diferentes.',
      ],
      responsibilities: [
        'Mapear estágios, dependências, artefatos e critérios de promoção da release.',
        'Padronizar containers e separar configuração de ambiente do código construído.',
        'Coordenar mudanças de aplicação e banco com compatibilidade durante o deploy.',
        'Conectar pipeline, plataforma e telemetria à revisão efetivamente publicada.',
      ],
      approach: [
        {
          eyebrow: '01 · Artefato',
          title: 'Construir uma vez',
          description:
            'A mesma saída versionada avançava pelos ambientes, evitando recompilações que pudessem mudar silenciosamente o conteúdo aprovado.',
        },
        {
          eyebrow: '02 · Critérios',
          title: 'Separar as provas',
          description:
            'Qualidade do código, geração do artefato, publicação e saúde em execução tinham verificações próprias e resultados identificáveis.',
        },
        {
          eyebrow: '03 · Rollout',
          title: 'Implantar com contrato',
          description:
            'Configuração, dependências, mudanças de dados e ordem de atualização eram tratadas como entradas explícitas do deploy, não como conhecimento informal.',
        },
        {
          eyebrow: '04 · Runtime',
          title: 'Provar a versão ativa',
          description:
            'Revisão publicada, endpoints de saúde, logs e telemetria confirmavam separadamente que a entrega chegou e permaneceu operacional.',
        },
      ],
      validation: [
        'O mesmo artefato versionado promovido entre os ambientes previstos.',
        'Falhas de qualidade, build e publicação verificadas em estágios distintos.',
        'Revisão ativa, configuração, mudanças de dados e saúde conferidas após o deploy.',
        'Reexecução e recuperação exercitadas sem depender de passos não documentados.',
      ],
      outcomes: [
        'Releases reproduzíveis, identificáveis e mais simples de promover.',
        'Menos divergência causada por configuração ou recompilação entre ambientes.',
        'Falhas localizadas na etapa que realmente precisa de intervenção.',
        'Diagnóstico operacional ligado à revisão publicada, e não a suposições.',
      ],
      tags: ['CI/CD', 'Containers', 'Deploy', 'Observabilidade', 'Plataforma'],
      callToAction: {
        title: 'Precisa que a entrega continue previsível depois do merge?',
        description:
          'Podemos conversar sobre uma cadeia de entrega reproduzível, com critérios claros de promoção e evidência da versão realmente ativa.',
        label: 'Conversar sobre entrega e plataforma',
      },
    },
  },
]

export const publishedCaseStudies = caseStudies.filter(
  (caseStudy): caseStudy is PublishedCaseStudy => caseStudy.details !== undefined,
)

export function getPublishedCaseStudy(slug: string) {
  return publishedCaseStudies.find((caseStudy) => caseStudy.slug === slug)
}
