import PrivacyPolicy from "@/modules/Client/Legal/organisms/PrivacyPolicy";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";

export const metadata = getSeoMetadata({ title: "Privacy Policy | CozyLoops" });

export default function Page() {
  return <PrivacyPolicy />;
}
