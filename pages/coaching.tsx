import { ServicePage } from "@/components/pages/ServicePage";
import { serviceStaticProps } from "@/lib/cms";

export default ServicePage;

export async function getStaticProps() {
  return serviceStaticProps("coaching");
}
