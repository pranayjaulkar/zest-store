import { Urbanist } from "next/font/google";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import LoadingBarProvider from "@/providers/LoadingBarProvider";
import ErrorFallback from "@/components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import "./globals.css";

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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ModalProvider />
          <ToastProvider />
          <LoadingBarProvider />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
