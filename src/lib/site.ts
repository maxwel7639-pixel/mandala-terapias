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
  site: "https://mandala-terapias.vercel.app",
} as const;

export type Servico = {
  slug: string;
  nome: string;
  chamada: string;
  descricao: string;
  detalhes: string[];
  /** Foto de fundo do card. null = aguardando foto real do cliente. */
  imagem: string | null;
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
    imagem: null,
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
    imagem: "/assets/luana-tarot.png",
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
    imagem: null,
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
  contexto: string;
  nota: number;
  quando: string;
  texto: string;
};

/** Extraídos dos prints de avaliação do Google — texto mantido como está no original. */
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Adriano Diniz Comissoli",
    contexto: "Local Guide · 63 avaliações",
    nota: 5,
    quando: "há 8 meses",
    texto:
      "Eu sou cético, mas o atendimento da Luana realmente faz efeito e faz me sentir melhor comigo e com o ambiente em volta de mim. Ela é muito cuidadosa e incentiva a gente a pensar sobre si mesmo. Vou voltar!",
  },
  {
    nome: "Cleô Gomes",
    contexto: "9 avaliações · 12 fotos",
    nota: 5,
    quando: "há 3 anos",
    texto:
      "O atendimento da Luana é excelente! Ela tem uma energia linda, sua sala é aconchegante, me senti muito bem lá. Super recomendo!",
  },
  {
    nome: "nadia ravarotto",
    contexto: "7 avaliações",
    nota: 5,
    quando: "há 3 anos",
    texto:
      "Luana fiquei muito satisfeita e grata com o teu atendimento, você é uma excelente profissional me passou confiança e profissionalismo, super indico o teu trabalho. Gratidão.",
  },
  {
    nome: "Naiane Diniz",
    contexto: "11 avaliações · 8 fotos",
    nota: 5,
    quando: "há 3 anos",
    texto:
      "Muito bom! Lugar super acolhedor. A Luana sempre deixa a gente super a vontade durante as terapias o que faz toda a diferença.",
  },
  {
    nome: "Carina Rodrigues",
    contexto: "1 avaliação",
    nota: 5,
    quando: "há 8 meses",
    texto:
      "Maravilhoso. Sério, ético, entrega o que é proposto, bem estruturado, local muito tranquilo.",
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
