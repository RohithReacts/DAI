# Next.js App Router Architecture

## Directory Structure

```text
app/
├── layout.tsx          # Root layout with shared providers and navigation
├── page.tsx            # Landing route (/)
├── (marketing)/        # Route group for public pages
├── api/                # Route handlers for REST/webhook endpoints
└── skills/
    ├── page.tsx        # Skills catalog (/skills)
    └── [slug]/
        └── page.tsx    # Individual skill details (/skills/[slug])
```

## Server vs. Client Components

- **Server Components**: Fetch data directly on the server, read local package files, and keep heavy dependencies out of the client bundle.
- **Client Components**: Add `"use client"` at the top of the file for interactive UI states, animations, and clipboard/browser APIs.

## Data Fetching & Caching

- Co-locate data fetching helpers inside `lib/`.
- Use `generateStaticParams` to pre-render known dynamic routes at build time.
- Handle missing resources gracefully with `notFound()` from `next/navigation`.

