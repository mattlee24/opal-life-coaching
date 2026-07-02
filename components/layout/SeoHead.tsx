import Head from "next/head";

type SeoHeadProps = {
  title: string;
  description?: string;
};

export function SeoHead({ title, description }: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </Head>
  );
}
