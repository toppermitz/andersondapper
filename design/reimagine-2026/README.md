# Site pessoal de Anderson Dapper

Conceito e arte gerados com o imagegen integrado. A revisão pessoal substitui a primeira proposta: o objetivo é apresentar Anderson, sua trajetória, projetos e escritos. Sem oferta de serviços ou chamadas de contratação.

- `personal-concept.png`: referência visual inicial, depois evoluída para a narrativa com scroll.
- `concept.png`: primeira exploração, anterior à revisão de posicionamento.
- `../../public/images/software-bridge.png`: arte usada no hero, servida com otimização do Next Image.

## Direção implementada

Azul profundo `#101c2d`, branco gelo `#edf4fb`, azul claro `#b4dcfa`, texto secundário `#a5b7ca` e divisórias `#2b4054`. Sora nos títulos e Manrope nos textos, carregadas localmente por `next/font`. O azul escuro é fixo em todas as páginas; os controles e a dependência de alternância de tema foram removidos.

A ponte acompanha quatro capítulos: apresentação, base em Delphi, expansão para web em 2022 e atuação atual. Os conteúdos vêm da trajetória já publicada. Depois, os projetos aparecem em uma sequência sobreposta no desktop. Games e automobilismo completam a apresentação pessoal.

## Prompt final do conceito

Use case: ui-mockup. Refine the earlier Anderson Dapper website concept into a PERSONAL WEBSITE, not selling services, no sales funnel. 1536x1024 desktop screenshot. Midnight navy #101c2d, icy white sans-serif typography, steel blue muted text, pale sky blue links. Header existing-style simple AD monogram and small Anderson Dapper, navigation 'Trajetória', 'Projetos', 'Escritos', 'Contato'. Left hero small 'Olá, eu sou o Anderson.' HUGE main heading 'Anderson / Dapper.' Below medium text 'Mais de 20 anos entre código, pessoas e sistemas que não podem parar.' Then a short paragraph 'Comecei com Delphi. Hoje transito entre sistemas legados, APIs, produtos web e infraestrutura. Gosto de entender como as coisas funcionam e fazer com que continuem funcionando.' Quiet outlined link 'Minha trajetória' and text link 'O que tenho escrito'. Right hero uses the same photorealistic miniature stone-to-aluminum architecture joined by blue glass bridge, richly detailed. Bottom hero quiet caption 'O conhecimento permanece. A forma evolui.' Under horizontal line, section 'Um pouco do que construo' with three project cards: 'Modernização sem ruptura', 'Operações fiscais rastreáveis', 'Entrega que chega à produção'. Visually striking, spacious, precise personal editorial portfolio. No contact-sales buttons, no hire-me, no availability badge, no business promises, no invented facts. Emphasize personal identity and professional craft.

## Prompt da arte

Create the standalone architectural hero artwork from the previous website mockup, with NO website UI, NO typography, NO letters, NO captions. Wide 3:2 image. Sophisticated photorealistic isometric architectural miniature on perfectly uniform solid midnight navy background #101c2d. Left group of staggered large dark slate stone rectangular monoliths representing mature systems; right a modern open pavilion of vertical brushed aluminum rectangular frames over a concrete plinth. A slender sky-blue translucent glass pedestrian bridge connects the two, preserving continuity. Delicate natural trees near the modern end. Architectural studio model photography with soft cool directional light, realistic stone and glass, subtle shadows, precisely constructed. Composition centered with generous 8 percent empty border, all objects contained, entire model visible. No humans, no signs, no text, no neon, no purple. Match the blue slate bridge sculpture in the preceding website concept.

## Referência técnica

[Next.js 16 Image](https://nextjs.org/docs/app/api-reference/components/image) e [CSS Modules](https://nextjs.org/docs/app/getting-started/css). Versões existentes preservadas.

## Navegação com GSAP

GSAP 3.15.0 e @gsap/react 2.1.2. [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) fixa as cenas e liga a posição, a escala da ilustração e as transições dos capítulos ao scroll. A cena inicial usa `scrub: 0.55`; os projetos, `scrub: 0.35`. A rolagem continua nativa e permite voltar pela mesma sequência. Os atalhos usam `labelToScroll` para chegar a capítulos dentro da cena fixa.

`src/lib/story-material.ts` usa [PixiJS 8.21](https://pixijs.com/8.x/guides/components/filters) e um shader WebGL para integrar as palavras aos materiais. A própria imagem fornece textura e variação de relevo; as letras têm deslocamento pelas fissuras, cavidade escurecida e bordas iluminadas. No vidro, a inscrição recebe um acabamento translúcido. As máscaras tipográficas são desenhadas uma vez, na perspectiva das superfícies, em um atlas de textura.

Delphi, Regras e Dados surgem na pedra; APIs e Conexões, no vidro; Node.js, Next.js e Golang, no concreto. No último capítulo, as inscrições do concreto dão lugar a Web, Infra e Operação. Uma luz percorre a ponte. O tempo do shader vem da mesma timeline GSAP do enquadramento, inclusive ao voltar o scroll. O ticker do Pixi fica parado: cada mudança de tempo solicita um frame. A imagem original permanece como alternativa sem WebGL, sem JavaScript ou com movimento reduzido. A camada é decorativa e não duplica a leitura por tecnologias assistivas; recursos gráficos são liberados ao sair da página.

[ScrollToPlugin](https://gsap.com/docs/v3/Plugins/ScrollToPlugin/) conduz os atalhos em 850 ms; um indicador de 240 ms acompanha a seção ativa. A curva reutiliza os valores do token `--ease-out`. Rolagem manual, toque ou teclado interrompem essa navegação. Teclado chega ao destino imediatamente. [useGSAP](https://gsap.com/resources/React/) gerencia a limpeza ao sair da página.

Com movimento reduzido, sem JavaScript ou em telas muito baixas, os capítulos permanecem em sequência normal, sem fixação nem zoom. No celular, os projetos também ficam em fluxo normal. As âncoras, os links de projetos e a navegação por teclado continuam disponíveis.
