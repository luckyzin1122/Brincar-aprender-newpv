
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ScrollAnimation } from '@/components/scroll-animation';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Brincar é Aprender | Tire seu filho das telas',
  description:
    'Descubra como +50 atividades pedagógicas comprovadas podem tirar seu filho das telas e transformar esse tempo em aprendizado real.',
  openGraph: {
    title: 'Brincar é Aprender | Tire seu filho das telas',
    description:
      'Descubra como +50 atividades pedagógicas comprovadas podem tirar seu filho das telas e transformar esse tempo em aprendizado real.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
        />
        <script
          id="utmify-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "695ec2227be1954758c3b6a8";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
      </head>
      <body
        className="font-body antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
        <Toaster />
        <ScrollAnimation />
      </body>
    </html>
  );
}
