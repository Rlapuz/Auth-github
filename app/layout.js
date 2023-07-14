import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from "./provider";
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="max-w-5xl mx-auto px-8">
            <Navbar />
            <div className="pt-16">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}