import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Chefkoch 1957 | In Gedenken an Roger Wachholtz',
  description: 'Ein Denkmal für einen leidenschaftlichen Koch und seine kulinarische Reise.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
