import { ProgramIntroSection } from "@/components/program/program-intro-section";
import { ProgramSchedulePreviewSection } from "@/components/program/program-schedule-preview-section";
import { ProgramPastProjectsSection } from "@/components/program/program-past-projects-section";

export function ProgramPage() {
  return (
    <main className="overflow-clip bg-[#F9FCFF]">
      <ProgramIntroSection />
      <ProgramSchedulePreviewSection />
      <ProgramPastProjectsSection />
    </main>
  );
}
