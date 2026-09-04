import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ianmoreiramedeiros.github.io'),
  title: 'Ian Lucas | Portfólio',
  description:
    'Portfólio de Ian Lucas, desenvolvedor full-stack, designer e estudante de Ciência da Computação.',
  openGraph: {
    title: 'Ian Lucas | Portfólio',
    description:
      'Desenvolvedor full-stack, designer e estudante de Ciência da Computação.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Ian Lucas | Desenvolvedor Full-Stack e Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ian Lucas | Portfólio',
    description:
      'Desenvolvedor full-stack, designer e estudante de Ciência da Computação.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
