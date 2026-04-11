import { NextResponse } from "next/server";
import { toApplicationsCsv } from "@/lib/applications";
import { isExportAuthorized, listApplications } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  if (!isExportAuthorized(request)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Not authorized. Provide APPLICATION_EXPORT_TOKEN via ?token= or x-export-token.",
      },
      { status: 401 },
    );
  }

  try {
    const rows = await listApplications();
    const csv = `\uFEFF${toApplicationsCsv(rows)}`;
    const filename = `seas-applications-${new Date().toISOString().slice(0, 10)}.csv`;

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to export applications.";

    return NextResponse.json(
      {
        ok: false,
        message,
      },
      { status: 500 },
    );
  }
}
