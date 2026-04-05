-- Run in Supabase SQL editor or CLI. Writes use the service role from server actions; anon/authenticated users may only read published rows.

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content_html text not null default '',
  toc_json jsonb not null default '[]'::jsonb,
  read_time text not null default '1 min read',
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_published_at_idx
  on public.blog_posts (published_at desc nulls last);

create index if not exists blog_posts_slug_idx on public.blog_posts (slug);

alter table public.blog_posts enable row level security;

create policy "blog_posts_public_read_published"
  on public.blog_posts
  for select
  to anon, authenticated
  using (published = true);
