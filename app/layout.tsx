import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// Police Geist embarquée dans le projet (plus de téléchargement depuis Google Fonts)
const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Léonard Court — Robotics, Control & Applied AI Automation",
  description:
    "Léonard Court — M.Sc. student in Robotics, Systems and Control at ETH Zurich, following a B.Sc. in Mechanical Engineering at EPFL. Control, robotics, and applied AI automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
