import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider"
import {
  // api, 
  HydrateClient
} from "~/trpc/server";

import { GeistSans } from "geist/font/sans";
import { PT_Serif } from 'next/font/google'

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import AppBar from "~/app/_components/layout/app-bar";
import GradientSphereBackground from "~/components/layout/gradient-sphere-background";
import Footer from "./_components/layout/footer";

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
          >
            <HydrateClient>
              <GradientSphereBackground />
              <AppBar />
              <div className="flex flex-col justify-between min-h-screen pt-16">
                <main>
                  {children}
                </main>
                <Footer />
              </div>
            </HydrateClient>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
