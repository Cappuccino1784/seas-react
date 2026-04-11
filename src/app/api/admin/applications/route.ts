import { NextResponse } from "next/server";
import { isAdminAuthorized, listApplications } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Not authorized. Provide the admin password.",
      },
      { status: 401 },
    );
  }

  try {
    const rows = await listApplications();

    return NextResponse.json({
      ok: true,
      rows,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load applications.";

    return NextResponse.json(
      {
        ok: false,
        message,
      },
      { status: 500 },
    );
  }
}
