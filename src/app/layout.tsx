import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Minseok Song | Portfolio',
  description:
    'GitHub-native infrastructure for multilingual documentation, open-source maintenance, and developer workflows.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-X946DNBS12`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X946DNBS12');
          `}
        </Script>
      </head>
      <body className={`${inter.className} site-shell`}>
        <Navigation />
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}
