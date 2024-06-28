import Footer from "@/components/Footer";
import { Urbanist } from "next/font/google";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import "./globals.css";
import LoadingBarProvider from "@/providers/LoadingBarProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export async function generateMetadata() {
  return { title: "Zest Stores", description: "" };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <ToastProvider />
        <LoadingBarProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
