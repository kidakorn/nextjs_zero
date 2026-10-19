import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import SidebarProvider from "./component/SidebarProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next App",
  description: "A Next.js application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex h-screen overflow-hidden">

        <SidebarProvider>
          <Sidebar />

          <div className="flex min-w-0 flex-1 flex-col">
            <Navbar />
            <main className="flex-1 overflow-auto p-4">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
