import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anne Thomas Kurian — AI & Frontend Developer",
  description:
    "Portfolio of Anne Thomas Kurian — AI Application Developer and Frontend Engineer with 14 years of experience in React, TypeScript, and LLM-powered applications.",
  openGraph: {
    title: "Anne Thomas Kurian — AI & Frontend Developer",
    description: "React · TypeScript · OpenAI API · AWS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
