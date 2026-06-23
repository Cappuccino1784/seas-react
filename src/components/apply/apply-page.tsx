import { ApplySection } from "@/components/apply/apply-section";
import { ApplyClosedSection } from "@/components/apply/apply-closed-section";
import { isApplicationOpen } from "@/lib/applications";

export function ApplyPage() {
  const applicationOpen = isApplicationOpen();

  return (
    <main className="overflow-clip bg-[#F9FCFF]">
      {applicationOpen ? <ApplySection /> : <ApplyClosedSection />}
    </main>
  );
}
