import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),

  title: "AbhishekShewale",
  authors: {
    name: "Abhishek Shewale",
  },

  description:
    "Pune-based Fullstack Developer. Crafting captivating web experiences, blending innovation with user-centric design. Let's connect!",
  openGraph: {
    title: "AbhishekShewale",
    description:
      "Pune-based Fullstack Developer. Crafting captivating web experiences, blending innovation with user-centric design. Let's connect!",
    url: "https://localhost:3000",
    siteName: "AbhishekShewale",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
