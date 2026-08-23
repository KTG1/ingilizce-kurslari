import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Şehrinde İngilizce Öğren",
  description: "Sana en uygun İngilizce kursunu ve seviyeni birlikte belirleyelim.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
