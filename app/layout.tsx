import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./layouts/navbar";
import Info from './layouts/info';
import Footer from './layouts/footer';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Info />
        <Footer />
      </body>
    </html>
  );
}
