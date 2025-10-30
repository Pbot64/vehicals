import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Summit Motors - Premium Pre-Owned Vehicles',
  description:
    'Discover quality pre-owned vehicles with warranty coverage and transparent pricing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className='pt-16 md:pt-20'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
