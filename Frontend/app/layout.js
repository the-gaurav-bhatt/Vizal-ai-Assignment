"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./components/contexts/cartContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={inter.className}>{children}</body>
      </CartProvider>
    </html>
  );
}
