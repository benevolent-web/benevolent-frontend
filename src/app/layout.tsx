import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider"

import { GeistSans } from "geist/font/sans";
import { PT_Serif } from 'next/font/google'

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import AppBar from "~/components/layout/app-bar";
import GradientSphereBackground from "~/components/layout/gradient-sphere-background";

export const metadata: Metadata = {
  title: "Benevolent Apps",
  description: "We developer secure performant web2 and web3 apps",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${ptSerif.className}`}>
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
<<<<<<< HEAD
          >
            <GradientSphereBackground />
            <AppBar />
            <main>
              {children}
            </main>
=======
          >{children}
>>>>>>> main
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
