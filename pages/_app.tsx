import type { AppProps } from "next/app";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { fontClassNames } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(fontClassNames, "font-sans antialiased")}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
