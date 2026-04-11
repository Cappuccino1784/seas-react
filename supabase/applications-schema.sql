create extension if not exists "pgcrypto";

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  current_school text not null,
  academic_year text not null,
  class_or_major text not null,
  hometown text not null,
  permanent_address text not null,
  academic_achievements text not null,
  teacher_name text not null,
  teacher_contact text not null,
  awards text not null default '',
  why_join text not null,
  build_idea text not null,
  difficult_subject text not null,
  helping_others text not null,
  community_long_term text not null,
  future_contribution text not null,
  contribute_to_experience text not null,
  needs_financial_support text not null,
  financial_support_reason text not null default '',
  conditions text not null default '',
  extra_info text not null default '',
  resume_name text not null default '',
  submitted_at timestamptz not null
);

alter table public.applications enable row level security;

drop policy if exists "deny direct access to applications" on public.applications;
create policy "deny direct access to applications"
on public.applications
for all
using (false)
with check (false);
