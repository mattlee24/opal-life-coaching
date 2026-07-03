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
      </Head>
      <body className={manrope.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
