import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RouteScrollReset } from "@/components/layout/RouteScrollReset";
import { fontClassNames } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={cn(fontClassNames, "font-sans antialiased")}>
      <RouteScrollReset />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" key={router.asPath}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
