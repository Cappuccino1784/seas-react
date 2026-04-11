# SEAS Website

Official website for the SEAS program, built with Next.js and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Application Submissions

The `/apply/form` flow now supports:

- local draft autosave in the browser
- final submission to Supabase through `POST /api/applications`
- CSV export through `GET /api/applications/export`

Excel can open the export CSV directly.

### Supabase setup

1. Create a Supabase project.
2. Run [supabase/applications-schema.sql](C:/Users/Nqk/seas-cvn.github.io/supabase/applications-schema.sql) in the SQL editor.
3. Copy `.env.example` to `.env.local`.
4. Fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `APPLICATION_EXPORT_TOKEN`

### Export submissions

Use:

```bash
http://localhost:3000/api/applications/export?token=YOUR_EXPORT_TOKEN
```

That downloads a CSV file containing all submitted answers.
