import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LayoutDataProvider } from "@/components/layout/LayoutDataContext";
import { RouteScrollReset } from "@/components/layout/RouteScrollReset";
import type { LayoutData } from "@/lib/cms-types";
import { fontClassNames } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import { useLivePreviewProps } from "@/lib/useLivePreviewProps";
import "@/styles/globals.css";

type AppPageProps = {
  /** Shared CMS data; every page's getStaticProps returns it. */
  layout?: LayoutData;
  /** Component previews render without the site header/footer. */
  bare?: boolean;
};

export default function App({ Component, pageProps }: AppProps<AppPageProps>) {
  const router = useRouter();
  // In the admin's Live Preview pane, unsaved edits stream into these props.
  const liveProps = useLivePreviewProps(pageProps);
  const { layout } = liveProps;

  const page = (
    <main id="main-content" key={router.asPath}>
      <Component {...liveProps} />
    </main>
  );

  return (
    <div className={cn(fontClassNames, "font-sans antialiased")}>
      <RouteScrollReset />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {layout && liveProps.bare ? (
        <LayoutDataProvider value={layout}>{page}</LayoutDataProvider>
      ) : layout ? (
        <LayoutDataProvider value={layout}>
          <Header />
          {page}
          <Footer />
        </LayoutDataProvider>
      ) : (
        page
      )}
    </div>
  );
}
