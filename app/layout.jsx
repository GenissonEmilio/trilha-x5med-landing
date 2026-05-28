import "./globals.css"

export const metadata = {
  title: "Curso de Precificacao Medica | Dr. Fabio Rodrigues",
  description:
    "Aprenda a precificar consultas medicas com metodo, proteger margem e comunicar valor com mais seguranca na medicina particular.",
  openGraph: {
    title: "Curso de Precificacao Medica | Dr. Fabio Rodrigues",
    description:
      "Uma formacao pratica da X5 Med para medicos que querem parar de cobrar no escuro e tomar decisoes de preco com mais clareza.",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/assets/dr-fabio-poster.jpg" fetchPriority="high" />
      </head>
      <body>{children}</body>
    </html>
  )
}
