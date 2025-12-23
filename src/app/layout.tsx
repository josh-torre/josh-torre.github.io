import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Torre",
  description: "Joshua Torre's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.className} bg-[#1A1A1A]`}>
        <div
          className="fixed inset-0 pointer-events-none -z-30 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(80, 80, 80, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(80, 80, 80, 0.3) 1px, transparent 1px)
`,
            backgroundSize: "50px 50px",
          }}
        />
        {children}
      </body>
    </html>
  );
}
