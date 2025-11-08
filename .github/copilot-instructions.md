# GitHub Copilot Instructions - Next.js 16 Portfolio

## Project Overview

This is a **Next.js 16 full-stack portfolio website** using:
- App Router (not Pages Router)
- TypeScript with strict mode
- Prisma ORM + PostgreSQL (Neon serverless)
- Tailwind CSS 4
- Resend for emails
- Zod for validation

## Architecture & Data Flow

### Frontend → Backend Communication

**Projects Page (`/projects`):**
- Server Component fetches from `/api/projects` during SSR
- API route uses Prisma to query database
- Returns JSON array of projects
- No client-side state management needed

**Contact Form (`/contact`):**
- Client Component with form state
- POST to `/api/contact` on submit
- API validates with Zod, saves to DB, sends email
- Returns success/error response
- Form displays feedback message

### Database Layer
- **Prisma Client:** Singleton pattern in `lib/prisma.ts` (prevents multiple instances in dev)
- **Models:** Project (portfolio items), Message (contact submissions)
- **Access:** Always use `import prisma from '@/lib/prisma'` in API routes

### Email Service
- **Resend API:** Configured in `lib/email.ts`
- **Flow:** Contact form → API route → Resend → user email
- **Template:** HTML formatted in `sendContactEmail()` function

## File & Folder Conventions

```
app/
  ├── api/              # Route handlers (backend)
  ├── [page]/page.tsx   # Page components (frontend)
  └── layout.tsx        # Root layout with Navbar/Footer

components/             # Shared React components
lib/                    # Utilities (prisma, email)
prisma/                 # Database schema & seeds
public/                 # Static assets (images)
```

## Development Workflows

### Adding New Pages
1. Create `app/[name]/page.tsx`
2. Add route to `components/Navbar.tsx`
3. Use Server Component by default (add `'use client'` only if needed)

### Modifying Database
1. Edit `prisma/schema.prisma`
2. Run `pnpm prisma:push` (dev) or `pnpm prisma:migrate dev` (production)
3. Run `pnpm prisma:generate` to update Prisma Client types
4. Restart dev server

### Adding API Routes
1. Create `app/api/[name]/route.ts`
2. Export named functions: `GET`, `POST`, `PUT`, `DELETE`
3. Use `NextRequest` and `NextResponse` types
4. Validate input with Zod before database operations
5. Handle errors with try-catch and return appropriate status codes

### Common Commands
```bash
pnpm dev                # Start dev server
pnpm prisma:studio      # Open database GUI
pnpm prisma:seed        # Reset & seed database
pnpm build              # Test production build locally
```

## Code Patterns & Conventions

### Server vs Client Components
- **Default:** Server Components (no `'use client'` directive)
- **Use Client when:** Forms, `useState`, `useEffect`, event handlers, browser APIs
- **Example:** Home page is Server, Contact form is Client

### Import Paths
- Use `@/` alias for root imports: `import prisma from '@/lib/prisma'`
- Relative paths for same directory: `import { Component } from './Component'`

### Styling
- Tailwind utility classes (no CSS modules)
- Dark mode: `dark:` prefix (handled by system preference)
- Responsive: `md:`, `lg:` breakpoints
- Icons: Lucide React (`import { Icon } from 'lucide-react'`)

### TypeScript
- **Strict mode enabled** - handle all null/undefined cases
- Define interfaces for API responses and Prisma query results
- Use Zod schemas for runtime validation
- Example:
```ts
interface Project {
  id: string;
  title: string;
  // ... matches Prisma schema
}
```

### Error Handling
- API routes: Return `NextResponse.json({ error: 'message' }, { status: 400 })`
- Client forms: Use state for error messages
- Database errors: Log to console, return generic message to client

## Environment Variables

**Required:**
- `DATABASE_URL` - Neon PostgreSQL connection string
- `DIRECT_URL` - Neon direct connection (for migrations)
- `RESEND_API_KEY` - Email API key
- `CONTACT_EMAIL` - Recipient for contact form

**Access in code:**
- Server: `process.env.VARIABLE_NAME`
- Client: `process.env.NEXT_PUBLIC_VARIABLE_NAME` (prefix required)

## Common Tasks

### Adding a New Project
```bash
pnpm prisma:studio
# Add project via GUI, or edit prisma/seed.ts and run pnpm prisma:seed
```

### Updating Profile Info
- Home: `app/page.tsx` (name, bio, social links)
- About: `app/about/page.tsx` (experience, skills)
- Footer: `components/Footer.tsx` (copyright, links)

### Troubleshooting
- **Prisma type errors:** Run `pnpm prisma:generate`
- **API route not found:** Check `app/api/[name]/route.ts` exists and exports HTTP method
- **Database connection fails:** Verify `DATABASE_URL` in `.env`
- **Email not sending:** Check `RESEND_API_KEY` and verify sender domain

## Integration Points

### Neon Database (PostgreSQL)
- Serverless-optimized (no connection pooling needed)
- Use `DATABASE_URL` for queries, `DIRECT_URL` for migrations
- Auto-scales with traffic

### Resend Email
- Free tier: 100 emails/day
- Requires verified domain for production sender
- Dev: Use default `onboarding@resend.dev` sender

### Vercel Deployment
- Auto-detects Next.js and Prisma
- Add env vars in dashboard
- Build command: `prisma generate && next build` (already in package.json)

## Key Files Reference

- **`app/layout.tsx`** - Root layout, includes Navbar/Footer, defines metadata
- **`lib/prisma.ts`** - Prisma Client singleton (prevents hot-reload issues)
- **`lib/email.ts`** - Email sending utility
- **`prisma/schema.prisma`** - Database models (source of truth)
- **`package.json`** - Scripts and dependencies

## Do's and Don'ts

### ✅ Do
- Use Server Components by default
- Validate API inputs with Zod
- Use Prisma Client from `lib/prisma.ts`
- Keep sensitive data in `.env` (never commit)
- Test API routes with `curl` or Postman before frontend

### ❌ Don't
- Import `@prisma/client` directly in components (use API routes)
- Expose API keys in client code
- Use `any` type in TypeScript (strict mode)
- Forget to run `prisma generate` after schema changes
- Commit `.env` file (use `.env.example` template)

---

**When in doubt:** Check `README.md` for detailed setup instructions and examples.
