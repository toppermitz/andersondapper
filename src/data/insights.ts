interface InsightSection {
  eyebrow: string
  title: string
  paragraphs: string[]
  points?: string[]
  takeaway?: string
}

interface RelatedCase {
  slug: string
  title: string
  description: string
}

export interface Insight {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  publishedLabel: string
  readTime: string
  tags: string[]
  thesis: string
  introduction: string[]
  sections: InsightSection[]
  checklist: string[]
  conclusion: string[]
  relatedCase: RelatedCase
}

export const insights: Insight[] = [
  {
    slug: 'modernizar-legado-e-preservar-conhecimento',
    title: 'Modernizar legado é preservar conhecimento, não copiar telas',
    description:
      'Um método para transformar comportamento acumulado em contratos explícitos e evoluir sistemas críticos sem apostar tudo em uma reescrita.',
    category: 'Modernização de sistemas',
    publishedAt: '2026-08-24',
    publishedLabel: '24 de agosto de 2026',
    readTime: '8 min de leitura',
    tags: ['Legado', 'Arquitetura', 'Paridade', 'Entrega incremental'],
    thesis:
      'O objetivo de uma modernização não é reproduzir a aplicação antiga com outra tecnologia. É preservar o conhecimento que mantém a operação correta enquanto se criam limites melhores para a próxima década.',
    introduction: [
      'Modernização costuma ser apresentada como uma troca de tecnologia: sair de uma linguagem, adotar um framework, mover a interface para a Web. Em sistemas críticos, essa descrição é incompleta. O software existente também carrega decisões operacionais, exceções e regras que foram refinadas durante anos.',
      'Quando esse conhecimento não está documentado, o comportamento do próprio sistema vira a referência mais confiável. A migração deixa de ser um exercício de transcrição e passa a ser um trabalho de descoberta, explicitação e prova.',
    ],
    sections: [
      {
        eyebrow: '01 · Contexto',
        title: 'Código antigo também é documentação executável',
        paragraphs: [
          'Uma tela aparentemente simples pode combinar permissões, estados intermediários, arredondamentos, consultas, efeitos fiscais e atalhos operacionais. Cada detalhe isolado parece pequeno; juntos, eles formam o contrato real que os usuários conhecem.',
          'Por isso, começar pela arquitetura futura sem mapear o comportamento atual cria uma lacuna perigosa. A equipe passa a discutir como o novo sistema deveria funcionar antes de compreender por que o atual funciona daquela maneira.',
        ],
        takeaway:
          'Antes de substituir uma regra, torne explícito onde ela aparece, quais dados consome e quem depende do resultado.',
      },
      {
        eyebrow: '02 · Baseline',
        title: 'A primeira entrega é uma referência estável',
        paragraphs: [
          'Comparar uma solução nova com um legado que continua mudando é comparar dois alvos móveis. O primeiro passo é fixar uma versão de referência e registrar o recorte que será convertido: entradas, saídas, estados, permissões, consultas e integrações.',
          'Essa baseline não precisa documentar o sistema inteiro. Ela precisa ser específica o suficiente para responder o que pertence à entrega atual e o que continua fora dela. O limite reduz ruído e impede que diferenças legítimas sejam confundidas com regressões.',
        ],
        points: [
          'Versão exata do comportamento usado como referência.',
          'Fluxos e estados que pertencem ao recorte.',
          'Dados, integrações e efeitos colaterais envolvidos.',
          'Exceções conhecidas e decisões ainda pendentes.',
        ],
      },
      {
        eyebrow: '03 · Recorte',
        title: 'Migre fluxos completos, não camadas isoladas',
        paragraphs: [
          'Separar frontend, API e persistência em grandes projetos paralelos parece eficiente, mas adia a única pergunta que importa: o fluxo funciona de ponta a ponta? Uma interface sem regra real ou uma API sem uso concreto produz progresso difícil de validar.',
          'Prefiro recortes verticais pequenos. Um fluxo atravessa interface, contrato, regra, dados e validação antes que o próximo comece. O resultado aparece mais cedo e cada entrega gera aprendizado aplicável à seguinte.',
        ],
        takeaway:
          'Uma fatia menor e completa ensina mais do que várias camadas parcialmente prontas.',
      },
      {
        eyebrow: '04 · Paridade',
        title: 'Equivalência precisa de evidência independente',
        paragraphs: [
          'Paridade não significa copiar cada detalhe visual. Significa demonstrar que entradas relevantes produzem estados e resultados compatíveis, salvo quando uma mudança de comportamento foi decidida de forma explícita.',
          'Testes ajudam, mas não substituem a referência. A comparação precisa combinar cenários automatizados, dados representativos e navegação real. Quando existe diferença, ela deve ser classificada como regressão, correção intencional ou decisão de produto — nunca tratada como impressão.',
        ],
        points: [
          'Comparar resultados e transições, não apenas mensagens da interface.',
          'Exercitar caminhos felizes, exceções e retomadas.',
          'Registrar mudanças intencionais fora da conta de paridade.',
          'Manter rastreabilidade entre regra antiga, contrato novo e prova.',
        ],
      },
      {
        eyebrow: '05 · Transição',
        title: 'Coexistência é parte da arquitetura',
        paragraphs: [
          'Em sistemas que não podem parar, legado e nova solução convivem por algum tempo. Tratar essa convivência como improviso cria duplicidade de estado, caminhos ocultos e suporte confuso. Tratá-la como requisito permite definir claramente quem lê, quem grava e qual sistema responde por cada fluxo.',
          'A substituição acontece quando o recorte novo acumula evidência suficiente, não quando o calendário pede uma grande virada. Isso preserva opções de recuperação e mantém o risco proporcional ao tamanho da entrega.',
        ],
        takeaway:
          'A transição deve ter contratos tão claros quanto a arquitetura de destino.',
      },
      {
        eyebrow: '06 · Produção',
        title: 'O ciclo termina no comportamento publicado',
        paragraphs: [
          'Build, testes, deploy e operação saudável são provas diferentes. Um artefato pode compilar e não ser o que está atendendo usuários; um serviço pode iniciar e falhar na primeira integração real.',
          'A validação final precisa conectar a revisão entregue à versão ativa, exercitar o fluxo no ambiente publicado e observar sinais coerentes de saúde. Essa disciplina fecha a distância entre código aprovado e resultado operacional.',
        ],
        takeaway:
          'Pronto não é o momento em que o pipeline fica verde. É quando a versão correta funciona no ambiente correto com evidência suficiente.',
      },
    ],
    checklist: [
      'Existe uma versão exata do legado usada como referência?',
      'O recorte inclui interface, regra, dados e validação?',
      'Diferenças de comportamento foram classificadas explicitamente?',
      'A convivência entre antigo e novo tem responsabilidades claras?',
      'Cada prova — local, integração, deploy e runtime — está separada?',
      'É possível relacionar o comportamento publicado à revisão entregue?',
    ],
    conclusion: [
      'Modernizar bem exige respeito pelo sistema existente sem ficar preso às suas limitações. O legado fornece evidência sobre o negócio; a nova arquitetura transforma essa evidência em contratos mais claros, módulos mais independentes e entregas menores.',
      'A tecnologia muda durante o caminho. O método permanece: delimitar, compreender, explicitar, migrar e provar. É isso que permite avançar sem apagar o conhecimento que tornou o software útil até aqui.',
    ],
    relatedCase: {
      slug: 'modernizacao-sem-ruptura',
      title: 'Modernização sem ruptura',
      description:
        'Veja como baseline, recortes verticais, paridade e validação aparecem em um contexto real e anonimizado.',
    },
  },
]

export const publishedInsights = insights

export function getPublishedInsight(slug: string) {
  return publishedInsights.find((insight) => insight.slug === slug)
}
