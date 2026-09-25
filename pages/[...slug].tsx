import type { GetServerSideProps } from "next";
import { NotFoundContent } from "@/components/pages/NotFoundContent";
import { getLayoutData } from "@/lib/cms";
import type { LayoutData } from "@/lib/cms-types";

/**
 * Payload's admin lives in the App Router, so Next answers `notFound` with its
 * bare App Router 404. This catch-all renders the site's own 404 page (with
 * header and footer) for any unknown URL instead, still with a 404 status.
 */
export default NotFoundContent;

export const getServerSideProps: GetServerSideProps<{ layout: LayoutData }> = async ({ res }) => {
  res.statusCode = 404;
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  return { props: { layout: await getLayoutData() } };
};
