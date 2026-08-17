/**
 * Fonte única de conteúdo do site.
 * Depoimentos extraídos dos prints reais do Google (pasta de imagens do cliente),
 * mantidos verbatim — não editar o texto das avaliações.
 */

export const NEGOCIO = {
  nome: "Mandala Terapias Holísticas",
  terapeuta: "Luana",
  nomeEspiritual: "Jinpa Drolma",
  tagline: "Reconexão de dentro pra fora",
  cidade: "Santa Maria",
  estado: "RS",
  endereco: "Rua Dr. Bozano, 729/302 — Bonfim",
  cep: "97015-001",
  enderecoCompleto:
    "Rua Dr. Bozano, 729/302 — Bonfim, Santa Maria - RS, 97015-001",
  telefone: "(55) 99905-6889",
  whatsapp: "5555999056889",
  instagram: "mandala.terapiasholisticas",
  instagramUrl: "https://instagram.com/mandala.terapiasholisticas",
  seguidores: "2.696",
  googleNota: "5,0",
  googleAvaliacoes: 6,
  googleUrl:
    "https://www.google.com/search?q=Mandala+Terapias+Holisticas+Santa+Maria",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Bozano+729+Bonfim+Santa+Maria+RS",
  /* Embed sem chave de API — o parâmetro output=embed dispensa o Maps JS API. */
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Dr.+Bozano,+729+-+Bonfim,+Santa+Maria+-+RS,+97015-001&z=16&output=embed",
  site: "https://mandala-terapias.vercel.app",
} as const;

export type Servico = {
  slug: string;
  nome: string;
  chamada: string;
  descricao: string;
  detalhes: string[];
  imagem: string;
  imagemAlt: string;
  /** Recorte do fundo — cada foto tem um ponto de interesse diferente. */
  foco: string;
};

export const SERVICOS: Servico[] = [
  {
    slug: "reiki",
    nome: "Reiki",
    chamada: "Imposição de mãos para reequilíbrio energético",
    descricao:
      "Uma prática de origem japonesa em que a energia é canalizada pela imposição das mãos. A sessão acontece com você deitada e vestida, num ambiente silencioso, e a maioria das pessoas relata uma sensação profunda de relaxamento e leveza.",
    detalhes: [
      "Sessão de aproximadamente 50 minutos",
      "Presencial em Santa Maria ou à distância",
      "Você permanece vestida e confortável",
    ],
    imagem: "/assets/terapia-reiki.png",
    imagemAlt:
      "Pedras equilibradas e uma flor de lótus sobre a água, em luz dourada de fim de tarde",
    /* Puxa o enquadramento para baixo: evita a palavra REIKI no topo da arte. */
    foco: "center 72%",
  },
  {
    slug: "tarot",
    nome: "Tarot",
    chamada: "Leitura para clarear escolhas e caminhos",
    descricao:
      "O Tarot aqui não é usado para prever o futuro, e sim como espelho: as cartas ajudam a nomear o que já está em movimento em você e a enxergar as escolhas com mais clareza. A leitura é uma conversa, conduzida com cuidado e sem julgamento.",
    detalhes: [
      "Leitura de aproximadamente 60 minutos",
      "Presencial ou online por vídeo",
      "Você traz a pergunta que está pesando",
    ],
    imagem: "/assets/terapia-tarot.png",
    imagemAlt:
      "Cartas de tarot dispostas na areia à beira-mar, sob a lua cheia, ao lado de uma lamparina acesa",
    foco: "center 58%",
  },
  {
    slug: "radiestesia",
    nome: "Radiestesia",
    chamada: "Leitura sutil com pêndulo para harmonização",
    descricao:
      "Com o auxílio do pêndulo, fazemos uma leitura dos campos sutis para identificar desequilíbrios energéticos e trabalhar a harmonização do ambiente ou da pessoa. Um trabalho de escuta fina, feito com método e presença.",
    detalhes: [
      "Sessão de aproximadamente 50 minutos",
      "Pessoas e ambientes",
      "Presencial ou à distância",
    ],
    imagem: "/assets/terapia-radiestesia.png",
    imagemAlt:
      "Pêndulo de ametista suspenso sobre uma mesa de madeira, com velas e luzes desfocadas ao fundo",
    foco: "center 45%",
  },
];

export const COMO_FUNCIONA = [
  {
    numero: "01",
    titulo: "Você chama no WhatsApp",
    texto:
      "Me conta em poucas palavras o que está buscando. Não precisa saber explicar direito — a gente organiza isso junto na conversa.",
  },
  {
    numero: "02",
    titulo: "Escolhemos a terapia e o horário",
    texto:
      "A partir do que você trouxe, indico qual prática faz mais sentido para esse momento. Combinamos se será presencial no Bonfim ou online.",
  },
  {
    numero: "03",
    titulo: "A sessão acontece",
    texto:
      "Em um espaço tranquilo e reservado, no seu tempo. Você não precisa levar nada além de você mesma.",
  },
  {
    numero: "04",
    titulo: "Você segue com o que ficou",
    texto:
      "Ao final conversamos sobre o que apareceu e, se fizer sentido, sobre uma continuidade. Sem pacote obrigatório e sem pressão.",
  },
];

export type Depoimento = {
  nome: string;
  /** Print original da avaliação no Google. */
  imagem: string;
  largura: number;
  altura: number;
  /** Transcrição do print — é o que leitor de tela e busca enxergam. */
  texto: string;
};

/**
 * Prints das avaliações do Google, exibidos como imagem no carrossel.
 *
 * ACESSIBILIDADE: print é texto dentro de imagem, que leitor de tela não lê
 * e busca não indexa. Por isso cada item carrega a transcrição em `texto`,
 * usada como alt da imagem. Ao adicionar um print novo, transcreva também.
 */
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Adriano Diniz Comissoli",
    imagem: "/assets/depoimentos/adriano.png",
    largura: 462,
    altura: 219,
    texto:
      "Avaliação de 5 estrelas de Adriano Diniz Comissoli, Local Guide: Eu sou cético, mas o atendimento da Luana realmente faz efeito e faz me sentir melhor comigo e com o ambiente em volta de mim. Ela é muito cuidadosa e incentiva a gente a pensar sobre si mesmo. Vou voltar!",
  },
  {
    nome: "Cleô Gomes",
    imagem: "/assets/depoimentos/cleo.png",
    largura: 494,
    altura: 240,
    texto:
      "Avaliação de 5 estrelas de Cleô Gomes: O atendimento da Luana é excelente! Ela tem uma energia linda, sua sala é aconchegante, me senti muito bem lá. Super recomendo!",
  },
  {
    nome: "nadia ravarotto",
    imagem: "/assets/depoimentos/nadia.png",
    largura: 496,
    altura: 230,
    texto:
      "Avaliação de 5 estrelas de nadia ravarotto: Luana fiquei muito satisfeita e grata com o teu atendimento, você é uma excelente profissional me passou confiança e profissionalismo, super indico o teu trabalho. Gratidão.",
  },
  {
    nome: "Naiane Diniz",
    imagem: "/assets/depoimentos/naiane.png",
    largura: 497,
    altura: 207,
    texto:
      "Avaliação de 5 estrelas de Naiane Diniz: Muito bom! Lugar super acolhedor. A Luana sempre deixa a gente super a vontade durante as terapias o que faz toda a diferença.",
  },
  {
    nome: "Carina Rodrigues",
    imagem: "/assets/depoimentos/carina.png",
    largura: 488,
    altura: 203,
    texto:
      "Avaliação de 5 estrelas de Carina Rodrigues: Maravilhoso. Sério, ético, entrega o que é proposto, bem estruturado, local muito tranquilo.",
  },
];

export const FAQ = [
  {
    pergunta: "Preciso acreditar em alguma coisa para a terapia funcionar?",
    resposta:
      "Não. Você não precisa ter crença nenhuma nem conhecimento prévio. Uma das avaliações aqui do site é de uma pessoa que se descreve como cética. Vir com curiosidade e abertura já é suficiente.",
  },
  {
    pergunta: "As terapias substituem tratamento médico ou psicológico?",
    resposta:
      "Não substituem. As terapias holísticas são práticas complementares de bem-estar e não são tratamento médico. Se você faz acompanhamento médico ou psicológico, siga com ele — os dois caminhos convivem bem, e eu não interrompo nem oriento sobre nenhum tratamento de saúde.",
  },
  {
    pergunta: "Como funciona o atendimento online?",
    resposta:
      "Tarot é feito por chamada de vídeo, como uma conversa normal. Reiki e Radiestesia são feitos à distância, em horário combinado com você — você se acomoda num lugar tranquilo e eu conduzo a sessão daqui. Depois conversamos sobre como foi.",
  },
  {
    pergunta: "Quanto tempo dura uma sessão?",
    resposta:
      "Entre 50 e 60 minutos, dependendo da prática. A primeira costuma levar um pouco mais, porque reservamos um tempo no começo para você me contar o que está buscando.",
  },
  {
    pergunta: "Preciso fazer mais de uma sessão?",
    resposta:
      "Não existe pacote obrigatório. Muita gente vem para uma sessão pontual e isso basta. Se fizer sentido continuar, conversamos sobre isso ao final — a decisão é sempre sua.",
  },
  {
    pergunta: "O que eu levo ou visto na sessão presencial?",
    resposta:
      "Nada além de você. Venha com roupa confortável. No Reiki você permanece vestida durante toda a sessão, deitada e coberta se quiser.",
  },
  {
    pergunta: "Onde fica o espaço?",
    resposta:
      "Na Rua Dr. Bozano, 729, sala 302, no bairro Bonfim, em Santa Maria. O endereço completo e o mapa estão logo abaixo, na seção de Localização.",
  },
];
