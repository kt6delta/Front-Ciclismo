import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NextUIProvider } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ciclismo",
  description: "Administracion de ciclismo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <NextUIProvider>
          <main className="h-screen w-full font-primary">
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
