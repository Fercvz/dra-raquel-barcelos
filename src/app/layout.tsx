import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { DOCTOR, OFFICE } from "@/lib/constants";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${DOCTOR.name} — ${DOCTOR.specialty} em ${OFFICE.city}-${OFFICE.state}`,
  description:
    "Atendimento em geriatria e cuidados paliativos para idosos e suas famílias. Consulta presencial, online e domiciliar em Londrina-PR. Agende pelo WhatsApp.",
  keywords:
    "geriatria, geriatra, cuidados paliativos, paliativista, consulta domiciliar, consulta online, Londrina, idoso, família, cuidador, envelhecimento, qualidade de vida",
  authors: [{ name: DOCTOR.name }],
  robots: "index, follow",
  openGraph: {
    title: `${DOCTOR.name} — ${DOCTOR.specialty}`,
    description:
      "Cuidar de quem você ama com mais segurança, acolhimento e qualidade de vida. Atendimento em geriatria e cuidados paliativos em Londrina-PR.",
    type: "website",
    locale: "pt_BR",
    siteName: DOCTOR.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
