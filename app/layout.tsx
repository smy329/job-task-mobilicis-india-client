import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oru Phones',
  description: 'Grow Your Network',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container w-full mx-auto">
        <main className="grid grid-cols-4">
          <div className="grid-cols-1">
            <Sidebar />
          </div>
          <div className="col-span-3">
            <Navbar />
            {children}
          </div>
        </main>
        {/* <div className="container w-full mx-auto">{children}</div> */}
      </body>
    </html>
  );
}
