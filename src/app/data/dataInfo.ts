import { DataInterface } from '../interfaces/DataInterface';

export const data: DataInterface[] = [
  {
    id: '1',
    photoCover:
      'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/angulart2-dark_1200x303.png?sfvrsn=b936a75a_0',
    title: [
      'As principais atualizações do angular',
      'Signals',
      'Required Inputs',
      'Dados de rotas via Input do componente',
    ],
    description: [
      'A cada 6 meses, como protocolo, é lançada uma atualização do framework angular, dificilmente haviam mudanças significativas, no entanto, a versão 16 trouxe algumas mudanças significativas, veremos a seguir.',
      'O Angular utiliza por baixo dos panos uma lib chamada zone.js. Ela tem o papel de interceptar todas as APIs assíncronas no navegador, utilizando-se de uma técnica chamada “Monkey Patching”. É o zone.js que age a partir da detecção de mudanças para saber quando atualizar o DOM. A ideia de um Signal é não precisar mais utilizar o zone.js para detectar as mudanças, uma vez que ela se torna uma abordagem primitiva do framework. O que podemos prever é que o uso de Observables terá uma diminuição nas aplicações Angular daqui pra frente. Muito do que fazíamos com o RxJS agora podemos fazer com Signals de uma forma mais simples. Para fluxos síncronos e controle de estado, vale a pena usufruir de todo o poder de um Signal, já para fluxos assíncronos o RxJS ainda é a melhor opção.',
      'Mais uma feature que era bastante aguardada pela comunidade! Ter a possibilidade de informar Inputs obrigatórios para um componente previne muitos bugs em tempo de desenvolvimento. Antes para fazer essa validação era necessário adicionar um código a mais nos componentes. Agora caso o desenvolvedor esqueça de informar um Input obrigatório, imediatamente o Angular acusará um erro no momento da compilação.',
      'Outra feature que era aguardada há muito tempo. Antes da versão 16, a forma de capturar dados que uma rota provia (params, query params ou data) era injetando o ActivatedRoute. Agora todos esses dados podem ser recuperados simplesmente atribuindo um Input no componente. Basta nomear o Input da mesma forma que veio da rota.',
    ],
  },
  {
    id: '2',
    photoCover:
      'https://d32myzxfxyl12w.cloudfront.net/images/blog_images/5dcd4fcee9ff0ae141a050c6813b8a200dcc53b6.png?1649061514',
    title: [
      'As significativas diferenças entre os dois maiores frameworks do mercado',
      'Tipo de Biblioteca vs. Framework',
      'Linguagem de Marcação',
      'Tamanho e Complexidade',
      'Flexibilidade',
    ],
    description: [
      'O React e o Angular são duas estruturas (frameworks) populares para o desenvolvimento de aplicativos da web, mas eles têm abordagens diferentes para a construção de aplicativos e oferecem diferentes conjuntos de recursos. Aqui estão algumas das principais diferenças entre o React e o Angular.',
      'O React é uma biblioteca JavaScript para construir interfaces de usuário (UI), enquanto o Angular é um framework completo para o desenvolvimento de aplicativos da web. Isso significa que o React se concentra principalmente na camada de visualização, enquanto o Angular fornece uma estrutura completa com muitos recursos integrados.',
      'O React utiliza JSX (JavaScript XML) para escrever componentes, o que permite que você escreva código JavaScript e HTML juntos em um único arquivo. O Angular usa uma abordagem baseada em templates, onde você escreve templates HTML separados e usa diretivas para adicionar funcionalidade.',
      'O React é conhecido por sua simplicidade e tamanho leve. Você pode escolher bibliotecas e ferramentas adicionais conforme necessário. O Angular, por outro lado, inclui muitos recursos "out of the box", o que pode torná-lo mais pesado e complexo, especialmente para pequenos projetos.',
      'O React é altamente flexível e permite que você escolha outras bibliotecas e ferramentas que deseja usar, como roteadores e gerenciamento de estado. O Angular tem suas próprias soluções integradas para esses recursos.',
    ],
  },
  {
    id: '3',
    photoCover:
      'https://d1tlzifd8jdoy4.cloudfront.net/wp-content/uploads/2022/02/tailwindcss-eyecatch-960x504.png',
    title: [
      'Por que usar o Tailwind CSS?',
      'Customização Total',
      'Produtividade Aprimorada',
      'Responsividade Simplificada',
      'Maior Clareza do Código',
      'Manutenção Facilitada',
    ],
    description: [
      'O Tailwind CSS pode ser útil para desenvolvedores que desejam economizar tempo e personalizar seus estilos de maneira eficiente. Além disso o framework, possuiu inumeras vantagens, entre eles são:',
      'Uma das maiores vantagens do framework é a liberdade que oferece em termos de personalização. Você pode criar designs únicos e complexos, mantendo o controle total sobre os estilos. Não há necessidade de substituir estilos padrão, o que pode resultar em um código inchado e difícil de gerenciar.',
      'A abordagem utilitária do framework permite criar interfaces rapidamente, sem a necessidade de escrever CSS personalizado repetitivo. Com a utilização de classes diretas nos elementos HTML, o desenvolvimento se torna mais rápido e eficiente.',
      'Oferece classes utilitárias dedicadas à responsividade, facilitando a adaptação do design a diferentes tamanhos de tela.',
      'Ao utilizar classes utilitárias diretamente no HTML, o código se torna mais legível e autoexplicativo. Isso também ajuda no trabalho em equipe e na manutenção do código.',
      'Fazer ajustes ou alterações no design é mais simples. Alterações podem ser feitas diretamente no HTML, eliminando a necessidade de navegar por vários arquivos CSS.',
    ],
  },
  {
    id: '4',
    photoCover:
      'https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/TypeScriptBanner.png',
    title: [
      'As vantagens do TypeScript sobre JavaScript',
      'Ferramentas e integração aprimoradas',
      'Tipagem forte e inferência de tipo',
      'Interfaces e classes em TypeScript',
    ],
    description: [
      'TypeScript é especialmente benéfico para projetos de grande escala onde a manutenção e a escalabilidade do código são importantes. Ele oferece uma série de benefícios, vamos dar uma olhada em alguns deles.',
      'Uma das principais vantagens do TypeScript sobre o JavaScript são suas ferramentas aprimoradas e integração com outras tecnologias. TypeScript possui um rico conjunto de ferramentas, como um ambiente de desenvolvimento integrado (IDE) e suporte a editor de texto, que facilita o desenvolvimento e a depuração de código. Isso pode reduzir significativamente o tempo necessário para desenvolver um aplicativo e ajudar a garantir que o código seja de maior qualidade.',
      'Um dos outros benefícios do TypeScript é a tipagem forte. O TypeScript exige que você declare o tipo de variáveis, o que pode ajudar a evitar erros relacionados ao tipo. Isso torna o código mais fácil de ler, manter e depurar e também pode ajudar a reduzir o risco de vulnerabilidades de segurança.',
      'TypeScript também inclui recursos como interfaces e classes, que não estão disponíveis em JavaScript. As interfaces permitem definir um contrato que as classes devem implementar.',
    ],
  },
];
