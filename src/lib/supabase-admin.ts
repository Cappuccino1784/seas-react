import { ApplicationRow } from "@/lib/applications";

const SUPABASE_TABLE = "applications";

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase environment variables are missing. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  return { url, serviceRoleKey };
}

function getAdminPassword() {
  return process.env.ADMIN_DASHBOARD_PASSWORD ?? process.env.APPLICATION_EXPORT_TOKEN;
}

export async function insertApplication(row: ApplicationRow) {
  const { url, serviceRoleKey } = getSupabaseConfig();

  const response = await fetch(`${url}/rest/v1/${SUPABASE_TABLE}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Supabase insert failed.");
  }

  const [created] = (await response.json()) as ApplicationRow[];
  return created;
}

export async function listApplications() {
  const { url, serviceRoleKey } = getSupabaseConfig();

  const response = await fetch(
    `${url}/rest/v1/${SUPABASE_TABLE}?select=*&order=created_at.desc`,
    {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Supabase list failed.");
  }

  return (await response.json()) as ApplicationRow[];
}

export function isAdminAuthorized(request: Request) {
  const adminPassword = getAdminPassword();

  if (!adminPassword) {
    return false;
  }

  const { searchParams } = new URL(request.url);
  const queryPassword = searchParams.get("password");
  const queryToken = searchParams.get("token");
  const headerPassword = request.headers.get("x-admin-password");
  const headerToken = request.headers.get("x-export-token");

  return (
    queryPassword === adminPassword ||
    headerPassword === adminPassword ||
    queryToken === adminPassword ||
    headerToken === adminPassword
  );
}

export function isExportAuthorized(request: Request) {
  return isAdminAuthorized(request);
}
