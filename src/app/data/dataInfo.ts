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
      'data:image/png;base64,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',
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
