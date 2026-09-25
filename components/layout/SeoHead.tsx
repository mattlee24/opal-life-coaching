import Head from "next/head";
import { useSiteSettings } from "@/components/layout/LayoutDataContext";
import { mediaUrl } from "@/lib/cms-types";
import { site } from "@/lib/site";

type SeoHeadProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function SeoHead({
  title,
  description,
  path = "",
  image,
  noIndex = !site.allowIndexing,
}: SeoHeadProps) {
  const settings = useSiteSettings();
  const canonical = `${site.url}${path}`;
  const shareImage = image ?? mediaUrl(settings.seo.image) ?? "";
  const imageUrl = shareImage.startsWith("http") ? shareImage : `${site.url}${shareImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: settings.name,
    description: description ?? settings.seo.description,
    url: site.url,
    email: settings.email,
    areaServed: settings.location,
    image: imageUrl,
    priceRange: "££",
  };

  return (
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      <link rel="canonical" href={canonical} />
      <meta name="theme-color" content="#f7faf8" />
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={settings.name} />
      <meta property="og:title" content={title} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={imageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
