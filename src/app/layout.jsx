import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/router/Header";
import Footer from "@/router/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "burger app",
  description: "training fast food app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "h-full bg-white dark:bg-black"
        )}
      >
        <Toaster />
        <div className="relative m-auto flex max-h-full min-h-full max-w-md flex-col gap-2 border-x py-4">
          <Header />
          <div className="flex-1 overflow-hidden pt-2">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
