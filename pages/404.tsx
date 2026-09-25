import type { GetStaticProps } from "next";
import { NotFoundContent } from "@/components/pages/NotFoundContent";
import { getLayoutData, REVALIDATE_SECONDS } from "@/lib/cms";
import type { LayoutData } from "@/lib/cms-types";

export default NotFoundContent;

export const getStaticProps: GetStaticProps<{ layout: LayoutData }> = async () => ({
  props: { layout: await getLayoutData() },
  revalidate: REVALIDATE_SECONDS,
});
