import { Html, Head, Main, NextScript } from "next/document";
import { cormorant, manrope, sacramento } from "@/lib/fonts";

export default function Document() {
  return (
    <Html
      lang="en-GB"
      className={`${manrope.variable} ${cormorant.variable} ${sacramento.variable}`}
    >
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body className={manrope.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
