import { redirect } from "next/navigation";
import { ApplyClosedSection } from "@/components/apply/apply-closed-section";
import { ApplyFormPage } from "@/components/apply/apply-form-page";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { isApplicationOpen } from "@/lib/applications";

export default function ApplyFormRoute() {
  redirect("/apply");
}
