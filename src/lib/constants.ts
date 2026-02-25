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

// Dados placeholder para o carrossel de vídeos
// [PLACEHOLDER] — substituir pelos vídeos reais
export interface VideoItem {
  id: number;
  order: number;
  category: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const VIDEOS_PLACEHOLDER: VideoItem[] = [
  {
    id: 1,
    order: 1,
    category: "Geriatria",
    title: "[TÍTULO DO VÍDEO 1]",
    description: "[Descrição breve do vídeo 1]",
    thumbnailUrl: "",
    videoUrl: "#",
  },
  {
    id: 2,
    order: 2,
    category: "Cuidados Paliativos",
    title: "[TÍTULO DO VÍDEO 2]",
    description: "[Descrição breve do vídeo 2]",
    thumbnailUrl: "",
    videoUrl: "#",
  },
  {
    id: 3,
    order: 3,
    category: "Família",
    title: "[TÍTULO DO VÍDEO 3]",
    description: "[Descrição breve do vídeo 3]",
    thumbnailUrl: "",
    videoUrl: "#",
  },
  {
    id: 4,
    order: 4,
    category: "Envelhecimento",
    title: "[TÍTULO DO VÍDEO 4]",
    description: "[Descrição breve do vídeo 4]",
    thumbnailUrl: "",
    videoUrl: "#",
  },
];
