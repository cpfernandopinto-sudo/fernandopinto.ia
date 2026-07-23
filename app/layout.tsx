import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const editorial = Instrument_Serif({ variable: "--font-editorial", subsets: ["latin"], weight: "400" });

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "fernandopinto.ia.br";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Fernando Pinto | Arquitetura de IA para Operações";
  const description = "Automação, integração de sistemas, dados e inteligência artificial para reduzir trabalho manual e construir operações mais eficientes.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: ["automação com IA", "arquitetura de soluções", "n8n", "BigQuery", "integração de sistemas", "inteligência operacional"],
    authors: [{ name: "Fernando Pinto" }],
    alternates: { canonical: "/" },
    openGraph: { title, description, type: "website", locale: "pt_BR", url: "/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fernando Pinto — Operações mais inteligentes" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Fernando Pinto",
    url: "https://fernandopinto.ia.br/",
    description: "Arquitetura de IA, automação, integração de sistemas e inteligência operacional para empresas.",
    areaServed: "BR",
    sameAs: ["https://www.linkedin.com/in/fernandopinto-ia/", "https://github.com/fernandopinto"],
  };

  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${mono.variable} ${editorial.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
