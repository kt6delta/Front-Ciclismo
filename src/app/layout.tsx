import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Loading } from '@/components/reusable/Loading';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consultorio de Psicología",
  description: "Consultorio de Psicología Nuri Catalina Diaz",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="es">
      <body className={`${inter.className} `}>
        <NextUIProvider>
          <main className="h-screen w-full">
            <div className="mx-auto page-container">
              <Loading>
                {children}
              </Loading>
            </div>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
