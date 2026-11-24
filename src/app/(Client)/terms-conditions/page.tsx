import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import TermsConditions from "@/modules/Client/Legal/organisms/TermsConditions";

export const metadata = getSeoMetadata({
  title: "Terms & Conditions | CozyLoops",
});

export default function Page() {
  return <TermsConditions />;
}
