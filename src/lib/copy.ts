export const heroPhrase =
  'Desenvolvedor desde 1998. Já fiz de tudo um pouco, e quase tudo funcionou.'

export const contactLine = 'Quer trocar uma ideia? Me chama.'

export type Chapter = {
  year: string
  title: string
  body: string
  detail?: string
}

export const chapters: Chapter[] = [
  {
    year: '1998',
    title: 'Comecei antes de ter computador.',
    body: 'Em 1998 eu lia o manual do Clipper na biblioteca da escola. Programar no papel tem uma vantagem: nada dá erro. Em julho daquele ano ganhei meu primeiro computador e descobri que dava, sim. Fiz o famoso cadastro de videolocadora, que não funcionava direito, mas foi ali que comecei a aprender. Em 1999 eu fazia páginas para a intranet da escola, para o IE 4 e o Netscape, com marquee em tudo. Se algo ficava parado na tela, era porque eu ainda não tinha visto.',
    detail: 'marquee rodando',
  },
  {
    year: '2000',
    title: 'O primeiro trabalho pago foi um site.',
    body: 'Em 2000 fiz, com Dreamweaver e Photoshop, o site do escritório de contabilidade do pai de uma colega. Tinha um applet Java fazendo lens flare no logo, porque contabilidade sem efeito especial não vende. Em 2001, no curso técnico, aprendi VB6 e usei para fazer uma pesquisa de satisfação para uma loja de roupas, com exportação dos resultados.',
    detail: 'lens flare no logo',
  },
  {
    year: '2002',
    title: 'Entrei pelo suporte.',
    body: 'Em 2002 comecei no suporte de uma empresa de automação comercial. Eu conversava direto com os devs, explicava o problema e entendia o que tinham feito para resolver. Os donos viram isso e me puseram no desenvolvimento, talvez para eu parar de incomodar os devs. Foi ali que aprendi Delphi de verdade. Depois fui para uma empresa que atendia prefeituras. Entrei na manutenção, e quando o único dev do sistema de gestão escolar saiu, pedi para assumir. As escolas acessavam o sistema por Citrix, que era caro, e propus reescrever tudo em PHP para rodar na web. Cheguei a ver a primeira implantação.',
  },
  {
    year: '2005',
    title: 'Tive uma loja, e ela fechou.',
    body: 'Em 2005 abri uma loja de informática com um sócio. Durou até 2006. O aluguel pesava e eu não sabia separar o dinheiro da empresa do meu. Hoje eu sei, aprendi do jeito caro. Em 2007 voltei a trabalhar, na empresa de um dos sócios do meu primeiro emprego.',
  },
  {
    year: '2007',
    title: 'Disseram que era impossível.',
    body: 'Ainda em 2007 fui para um escritório de contabilidade, de novo na manutenção. O sistema rodava em Delphi 4, e os dois devs diziam que migrar para o Delphi 7 era impossível. Pedi ao dono para tentar, fiz em uma noite e mostrei rodando no dia seguinte. Os dois saíram e eu assumi o desenvolvimento. Não era bem o plano, mas aceitei. Fiz o técnico em contabilidade para entender o que estava programando.',
    detail: 'Delphi 4 → 7',
  },
  {
    year: '2010',
    title: 'Do código para a arquitetura.',
    body: 'Em 2010 entrei num banco como dev PHP e virei arquiteto. Eu pegava o que o analista desenhava, organizava as telas e o fluxo, e quebrava em tarefas para a equipe. Quando o banco foi para São Paulo, fiquei no RS, porque o aluguel de lá não cabia no salário daqui. Passei por software para indústrias de papelão ondulado, onde fiz o ponto e a folha de pagamento, por um sistema fiscal e contábil, por um freela de três meses que pagou o equivalente a dois anos de salário e por um MRP para metalúrgicas.',
  },
  {
    year: '2016',
    title: 'Os últimos dez anos.',
    body: 'Em maio de 2016 entrei numa empresa de software como dev pleno e fui o mais rápido a terminar o treinamento interno. Como eu sabia fiscal e contabilidade, passei alguns anos como dev e consultor fiscal, o técnico em contabilidade finalmente se pagou. Em 2020 propus refazer o sistema inteiro para a web. Era uma proposta meio maluca, e eu sabia disso. Os três anos seguintes foram de muita conversa para convencer as pessoas, muita mudança na ideia original e muitos testes que mostraram que daquele jeito não ia dar. No meio disso foram muitas horas de curso, à noite e no fim de semana, aprendendo a fazer do jeito certo o que eu tinha prometido. Em 2023 montei uma equipe web com dois devs, começando por aplicações pequenas e muitos testes. Em 2024 éramos cinco. A IA já vinha aparecendo havia anos, mas em 2025 a ideia de o computador escrever o próprio código bateu na nossa porta, e a gente resolveu se mexer pra não perder a onda. Muita gente tinha medo de ser substituída, outros duvidavam que ajudasse, e eu fui entender onde ela servia pra nós. Em julho de 2026 começamos a migrar o sistema inteiro pra web, usando IA pra acelerar. Hoje cuido da arquitetura e de manter o projeto no rumo para os devs trabalharem.',
  },
]

export const foraTitle = 'Fora do trabalho.'

export const foraBody =
  'Estudo IA e segurança. Em 2019 falei no TDC 2019 POA sobre rodar Delphi como daemon no Linux, e sim, funciona. Fiz o Fio a fio, um editor de receitas de crochê, para minha esposa. Contribuo com um projeto open source de pentest com agentes de IA. Gosto muito de carros, de arrancada e de corrida. Jogo no PS5 e estou esperando o GTA 6, como metade do planeta. Quando dá, vou para a chácara respirar ar puro e usar os braços em vez da cabeça.'

export const foraCards = [
  {
    label: 'TDC 2019 POA',
    href: 'https://github.com/toppermitz/Linux-TDC2019',
  },
  {
    label: 'Fio a fio',
    href: 'https://croche-taupe.vercel.app/',
    photo: 'croche.jpg',
  },
  {
    label: 'projeto de pentest (contribuição)',
  },
  {
    label: 'carros/arrancada',
  },
  {
    label: 'PS5/GTA 6',
  },
  {
    label: 'chácara',
    photo: 'serra.jpg',
  },
] as const
