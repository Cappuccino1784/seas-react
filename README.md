# SEAS Website

Official website for the SEAS program. Built with Next.js, TypeScript, and Tailwind CSS.

## Quick start

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Application submissions

The `/apply/form` flow supports:

- Local draft autosave in the browser
- Final submission to Supabase via `POST /api/applications`
- CSV export via `GET /api/applications/export`

The export is a CSV file that can be opened in Excel.

## Environment

Copy `.env.example` to `.env.local` and set the required values. Key environment variables used by the app:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side)
- `APPLICATION_EXPORT_TOKEN` (used to authorize CSV exports)

## Supabase setup

1. Create a Supabase project.
2. Run the SQL schema found at [supabase/applications-schema.sql](supabase/applications-schema.sql) in the Supabase SQL editor.
3. Populate `.env.local` with the values from your Supabase project.

## Export submissions

To download a CSV export of submissions when running locally, visit:

```bash
http://localhost:3000/api/applications/export?token=YOUR_EXPORT_TOKEN
```

Replace `YOUR_EXPORT_TOKEN` with the value of `APPLICATION_EXPORT_TOKEN` set in `.env.local`.

## Notes

- Admin and export endpoints expect server-side credentials; keep `SUPABASE_SERVICE_ROLE_KEY` secret.
- If you need help running the project or updating environment values, open an issue or contact the maintainers.

---

Maintainers: see the repository for contact details.
