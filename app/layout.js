import "./globals.css";
import { Poppins } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// FONT: ganti di sini kalau font Sapuangin sudah dipastikan (cek DevTools > Computed > font-family).
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-main" });

export const metadata = {
  title: "Abinara-1 ITS",
  description: "Search and rescue robotics team from Institut Teknologi Sepuluh Nopember, Surabaya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
