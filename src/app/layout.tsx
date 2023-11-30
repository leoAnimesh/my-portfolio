import Navbar from '@/app/components/shared/Navbar';
import Sidebar from '@/app/components/shared/SideBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
// import 'https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@master/ci.min.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Animesh Mondal',
  description: 'Animesh Mondal | Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} dark:bg-dark dark:text-white`}
      >
        <main className="flex flex-1 flex-col h-screen">
          <Navbar />
          <section className="lg:container lg:mx-auto flex flex-1 flex-col lg:flex-row gap-6 mt-6 dark:bg-dark ">
            <Sidebar />
            <section className="lg:w-[80%] mx-5 lg:mx-0 border rounded-t-lg dark:border-borderDark ">
              {children}
            </section>
          </section>
        </main>
      </body>
    </html>
  );
}
