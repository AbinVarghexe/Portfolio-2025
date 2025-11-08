# 📂 Complete File & Folder Structure

## Tree View with Comments

```
portfolio-website/
├── .github/
│   └── copilot-instructions.md        # AI agent instructions for this codebase
│
├── app/                                # Next.js 16 App Router directory
│   ├── api/                            # Backend API routes (serverless functions)
│   │   ├── contact/
│   │   │   └── route.ts                # POST: Handle contact form (saves to DB + sends email)
│   │   └── projects/
│   │       └── route.ts                # GET: Fetch all projects from database
│   │
│   ├── about/
│   │   └── page.tsx                    # About Me page (bio, experience, skills)
│   │
│   ├── contact/
│   │   └── page.tsx                    # Contact form page (client component with state)
│   │
│   ├── projects/
│   │   └── page.tsx                    # Projects list page (server component, fetches from API)
│   │
│   ├── globals.css                     # Global Tailwind CSS styles
│   ├── layout.tsx                      # Root layout (includes Navbar, Footer, metadata)
│   └── page.tsx                        # Home page (hero section with profile & CTAs)
│
├── components/                         # Reusable React components
│   ├── Footer.tsx                      # Footer component (copyright, social links, quick links)
│   └── Navbar.tsx                      # Navigation bar (client component with routing)
│
├── lib/                                # Utility functions and configurations
│   ├── email.ts                        # Resend email utility (sendContactEmail function)
│   └── prisma.ts                       # Prisma Client singleton (prevents multiple instances)
│
├── prisma/                             # Database configuration and schema
│   ├── schema.prisma                   # Prisma schema (Project & Message models)
│   └── seed.ts                         # Database seeding script (dummy projects)
│
├── public/                             # Static assets served at root
│   ├── profile.jpg                     # Profile picture for home page
│   ├── projects/                       # Project thumbnail images
│   │   ├── ecommerce.jpg
│   │   ├── task-app.jpg
│   │   ├── weather.jpg
│   │   └── blog-cms.jpg
│   ├── next.svg                        # Next.js logo
│   └── vercel.svg                      # Vercel logo
│
├── .env                                # Environment variables (gitignored)
├── .env.example                        # Environment variables template (committed)
├── .gitignore                          # Git ignore rules
├── eslint.config.mjs                   # ESLint configuration
├── next-env.d.ts                       # Next.js TypeScript declarations
├── next.config.ts                      # Next.js configuration
├── package.json                        # Dependencies, scripts, and metadata
├── pnpm-lock.yaml                      # pnpm lockfile
├── postcss.config.mjs                  # PostCSS configuration for Tailwind
├── README.md                           # Project documentation
└── tsconfig.json                       # TypeScript configuration
```

## Key File Descriptions

### Backend (API Routes)

**`app/api/projects/route.ts`**
- Exports: `GET` function
- Returns: JSON array of all projects from Prisma
- Sorting: Featured first, then newest
- Used by: `/projects` page

**`app/api/contact/route.ts`**
- Exports: `POST` function
- Validates: Form data with Zod schema
- Actions:
  1. Save message to database (Prisma)
  2. Send email notification (Resend)
- Returns: Success/error JSON response

### Frontend (Pages)

**`app/page.tsx`** - Home Page
- Server Component
- Hero section with:
  - Profile image
  - Name and title
  - Bio text
  - CTA buttons (View Projects, Get in Touch)
  - Social media links (GitHub, LinkedIn, Twitter, Email)

**`app/projects/page.tsx`** - Projects Page
- Server Component
- Fetches from `/api/projects` during SSR
- Displays project cards with:
  - Thumbnail image
  - Title and description
  - Tech stack tags
  - Links (demo, GitHub)
  - Featured badge

**`app/about/page.tsx`** - About Page
- Server Component
- Sections:
  - Biography text
  - Experience timeline (with dates, companies, roles)
  - Skills grid (Frontend, Backend, Tools)

**`app/contact/page.tsx`** - Contact Page
- Client Component (`'use client'`)
- Form fields:
  - Name (required)
  - Email (required)
  - Subject (optional)
  - Message (required)
- Features:
  - Loading state
  - Success/error messages
  - Form reset after submission

### Components

**`components/Navbar.tsx`**
- Client Component (uses `usePathname`)
- Fixed navigation bar
- Active route highlighting
- Responsive design

**`components/Footer.tsx`**
- Server Component
- Sections:
  - Copyright notice
  - Social media links
  - Quick links (Privacy, Terms)

### Utilities

**`lib/prisma.ts`**
- Exports Prisma Client singleton
- Prevents multiple instances in development (hot reload)
- Logging configuration based on environment

**`lib/email.ts`**
- Exports `sendContactEmail()` function
- Uses Resend API
- HTML email template
- Error handling

### Database

**`prisma/schema.prisma`**
- Defines database models:
  - **Project:** Portfolio projects (title, description, images, links, tags)
  - **Message:** Contact form submissions (name, email, message, read status)
- Indexes for performance
- Timestamps for created/updated dates

**`prisma/seed.ts`**
- Creates 4 dummy projects
- Clears existing data first
- Run with: `pnpm prisma:seed`

## Frontend ↔ Backend Flow

### Projects Page Flow
```
/projects page (Server Component)
    ↓ fetch() during SSR
/api/projects route
    ↓ prisma.project.findMany()
PostgreSQL Database (Neon)
    ↓ returns JSON array
/projects page renders cards
```

### Contact Form Flow
```
/contact page (Client Component)
    ↓ form submit (POST)
/api/contact route
    ↓ validates with Zod
    ↓ prisma.message.create()
PostgreSQL Database (Neon)
    ↓ sendContactEmail()
Resend API
    ↓ sends email
User's email inbox
    ↓ returns success/error
/contact page shows feedback
```

## Dependencies Breakdown

### Production Dependencies
```json
{
  "react": "19.2.0",                  // React library
  "react-dom": "19.2.0",              // React DOM rendering
  "next": "16.0.1",                   // Next.js framework
  "@prisma/client": "^6.1.0",         // Prisma ORM client
  "framer-motion": "^11.18.0",        // Animation library (future use)
  "lucide-react": "^0.469.0",         // Icon library
  "resend": "^4.0.1",                 // Email API client
  "zod": "^3.24.1"                    // Schema validation
}
```

### Dev Dependencies
```json
{
  "typescript": "^5",                 // TypeScript compiler
  "@types/node": "^20",               // Node.js type definitions
  "@types/react": "^19",              // React type definitions
  "@types/react-dom": "^19",          // React DOM type definitions
  "@tailwindcss/postcss": "^4",       // Tailwind PostCSS plugin
  "tailwindcss": "^4",                // Tailwind CSS framework
  "eslint": "^9",                     // Linter
  "eslint-config-next": "16.0.1",     // Next.js ESLint config
  "prisma": "^6.1.0",                 // Prisma CLI
  "tsx": "^4.19.2"                    // TypeScript executor (for seed)
}
```

## Environment Variables

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://..."        # Connection pooling URL
DIRECT_URL="postgresql://..."          # Direct connection for migrations

# Email (Resend)
RESEND_API_KEY="re_..."                # API key for sending emails
CONTACT_EMAIL="your@email.com"         # Recipient for contact form

# App
NEXT_PUBLIC_BASE_URL="https://..."     # Base URL (for production API calls)
```

## Commands Reference

```bash
# Development
pnpm install                           # Install dependencies
pnpm dev                               # Start dev server (localhost:3000)
pnpm build                             # Build for production
pnpm start                             # Start production server

# Database (Prisma)
pnpm prisma:generate                   # Generate Prisma Client types
pnpm prisma:push                       # Push schema to database (dev)
pnpm prisma:studio                     # Open database GUI
pnpm prisma:seed                       # Seed database with dummy data

# Code Quality
pnpm lint                              # Run ESLint
```

## Deployment Checklist

1. ✅ Push code to GitHub
2. ✅ Create Neon database (free tier)
3. ✅ Get Resend API key (free tier)
4. ✅ Import to Vercel
5. ✅ Add environment variables in Vercel
6. ✅ Deploy automatically
7. ✅ Run `pnpm prisma:push` in production
8. ✅ Run `pnpm prisma:seed` to add projects

---

**Optimized for:** Vercel (serverless) + Neon (PostgreSQL) + Resend (email)
