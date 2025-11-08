# Source Directory Structure

This directory contains all the source code for the Next.js 16 portfolio application.

## Directory Layout

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── page.tsx      # Home page (/)
│   ├── layout.tsx    # Root layout with Navbar/Footer
│   ├── about/        # About page (/about)
│   ├── contact/      # Contact page (/contact)
│   ├── projects/     # Projects page (/projects)
│   └── api/          # API routes
│       ├── projects/ # GET /api/projects
│       └── contact/  # POST /api/contact
│
├── components/       # Reusable React components
│   ├── Navbar.tsx    # Navigation with floating animation
│   ├── Footer.tsx    # Footer component
│   └── MouseTrail.tsx # WebGL mouse trail effect
│
├── lib/              # Utility functions and configurations
│   ├── prisma.ts     # Prisma client singleton
│   ├── email.ts      # Email service (Resend)
│   └── utils.ts      # Helper functions
│
└── styles/           # Global styles
    └── globals.css   # Tailwind CSS and global styles
```

## Import Path Alias

The project uses `@/` as an alias for the `src/` directory. This is configured in `tsconfig.json`:

```typescript
// Import examples:
import Navbar from '@/components/Navbar';
import prisma from '@/lib/prisma';
import '@/styles/globals.css';
```

## Page Structure

### App Router (Next.js 16)
- Each route is a folder containing a `page.tsx` file
- `layout.tsx` defines the common layout for all pages
- API routes are in `app/api/[name]/route.ts`

### Example Page Structure:
```
app/
├── page.tsx          # / (Home)
├── layout.tsx        # Root layout
├── about/
│   └── page.tsx      # /about
└── projects/
    └── page.tsx      # /projects
```

## Component Guidelines

- Use **Server Components** by default (no `'use client'` directive)
- Add `'use client'` only when using:
  - `useState`, `useEffect`, or other React hooks
  - Event handlers
  - Browser APIs
  - Animation libraries (framer-motion)

## Development

All source code changes should be made in the `src/` directory. The `@/` import alias makes it easy to reference files across the project structure.
