import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SD Health",
    template: "%s | SD Health",
  },
  description:
    "AI-powered healthcare companion for symptom checking, health guidance, and appointment booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}