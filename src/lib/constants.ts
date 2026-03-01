// ============================================
// DADOS CENTRALIZADOS — Dra. Raquel Barcelos
// ============================================
// Altere apenas este arquivo para atualizar dados globais.

export const DOCTOR = {
  name: "Dra. Raquel Barcelos",
  specialty: "Geriatra e Paliativista",
  crm: "CRM-PR 99999", // [PLACEHOLDER] — substituir pelo CRM real
  rqeGeriatria: "RQE Geriatria: 23027",
  rqePaliativos: "RQE Cuidados Paliativos: 35463",
  experience: "+10 anos de atuação",
  university: "Universidade Estadual do Amazonas",
  residency: "USP-SP — Geriatria e Cuidados Paliativos",
} as const;

export const CONTACT = {
  phone: "(43) 3322-4519",
  whatsappNumber: "5543999440505",
  whatsappDisplay: "(43) 99944-0505",
  whatsappMessage:
    "Olá, gostaria de informações sobre atendimento em geriatria/cuidados paliativos com a Dra. Raquel Barcelos.",
  instagram: "https://www.instagram.com/dra.raquelbarcelos/?hl=pt",
  instagramHandle: "@dra.raquelbarcelos",
} as const;

export const OFFICE = {
  address: "R. Adhemar Pereira de Barros, 1500",
  neighborhood: "Bela Suiça",
  city: "Londrina",
  state: "PR",
  zip: "86047-250",
  fullAddress:
    "R. Adhemar Pereira de Barros, 1500 - Bela Suiça, Londrina - PR, 86047-250",
  hours: "Segunda a sexta, das 8h às 18h",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.3!2d-51.1361!3d-23.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+Adhemar+Pereira+de+Barros%2C+1500+-+Bela+Sui%C3%A7a%2C+Londrina+-+PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Adhemar+Pereira+de+Barros,+1500+-+Bela+Suiça,+Londrina+-+PR,+86047-250",
} as const;

export const LINKS = {
  privacyPolicy: "#", // [PLACEHOLDER] — substituir por URL real
  termsOfUse: "#", // [PLACEHOLDER] — substituir por URL real
} as const;

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message || CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${msg}`;
}

// Dados do carrossel de vídeos
export interface VideoItem {
  id: number;
  order: number;
  category: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  embedId: string;
}

export const VIDEOS: VideoItem[] = [
  {
    id: 1,
    order: 1,
    category: "Geriatria",
    title: "Cuidado geriátrico: muito além dos exames",
    description:
      "Idosos costumam passar por muitos especialistas e exames de rotina. A geriatria olha o paciente de forma integral, indo além dos resultados individuais.",
    thumbnailUrl: "https://img.youtube.com/vi/f4-irdgu_SM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/shorts/f4-irdgu_SM",
    embedId: "f4-irdgu_SM",
  },
  {
    id: 2,
    order: 2,
    category: "Cuidados Paliativos",
    title: "A importância da visita domiciliar",
    description:
      "Conhecer o ambiente onde o paciente vive permite um cuidado mais completo. A visita domiciliar revela necessidades que o consultório não alcança.",
    thumbnailUrl: "https://img.youtube.com/vi/oC5_MlCaO3Q/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/shorts/oC5_MlCaO3Q",
    embedId: "oC5_MlCaO3Q",
  },
  {
    id: 3,
    order: 3,
    category: "Cuidados Paliativos",
    title: "Entendendo a classificação das doenças",
    description:
      "Você sabe como as doenças são classificadas? Entender essa divisão ajuda a compreender o caminho do tratamento e do cuidado paliativo.",
    thumbnailUrl: "https://img.youtube.com/vi/hAMH7WsJbTw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/shorts/hAMH7WsJbTw",
    embedId: "hAMH7WsJbTw",
  },
  {
    id: 4,
    order: 4,
    category: "Cuidados Paliativos",
    title: "Quando iniciar o cuidado paliativo?",
    description:
      "O cuidado paliativo deve começar no diagnóstico de uma doença que ameaça a vida. Sinais como perda de energia e alteração de apetite merecem atenção.",
    thumbnailUrl: "https://img.youtube.com/vi/zu4Vk0drdXk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/shorts/zu4Vk0drdXk",
    embedId: "zu4Vk0drdXk",
  },
];
