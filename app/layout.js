import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Chatbot from "./components/Chatbot";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Hanumadakshita Creators | Creating Stories • Building Brands",
  description: "Premier creative agency specializing in Reels, Photography, Graphic Designing, and Social Media Management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body
        className="antialiased font-sans"
      >
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
