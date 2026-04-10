import { ApplyFormPage } from "@/components/apply/apply-form-page";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function ApplyFormRoute() {
  return (
    <>
      <SiteHeader />
      <ApplyFormPage />
      <SiteFooter />
    </>
  );
}
