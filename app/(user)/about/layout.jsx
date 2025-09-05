import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AboutLayout({ children }) {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">About layout </h1>
      <main className=" mx-auto py-10">{children}</main>
    </>
  );
}
