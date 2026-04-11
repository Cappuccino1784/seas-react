import { NextResponse } from "next/server";
import {
  normalizeApplicationPayload,
  toApplicationRow,
  validateApplicationPayload,
} from "@/lib/applications";
import { insertApplication } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const payload = normalizeApplicationPayload(body);
    const validation = validateApplicationPayload(payload);

    if (!validation.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: validation.message,
          missingFields: validation.missingFields,
        },
        { status: 400 },
      );
    }

    const created = await insertApplication(toApplicationRow(payload));

    return NextResponse.json({
      ok: true,
      id: created.id,
      submittedAt: created.submitted_at,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit the application right now.";

    return NextResponse.json(
      {
        ok: false,
        message,
      },
      { status: 500 },
    );
  }
}
