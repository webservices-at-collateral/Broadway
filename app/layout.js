import localFont from "next/font/local";
import "./globals.css";

const produkt = localFont({
  src: "./fonts/produkt-regular.woff2",
  variable: "--font-produkt",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "Broadway Export LLC — Forward Thinking Trade",
  description:
    "A global trade platform specializing in the import and export of goods and merchandise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={produkt.variable}>{children}</body>
    </html>
  );
}
