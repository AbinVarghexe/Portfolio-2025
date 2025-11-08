# Next.js 16 Full-Stack Portfolio WebsiteThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



A modern, full-stack portfolio website built with Next.js 16 App Router, TypeScript, Prisma, and PostgreSQL. Features dynamic project management, contact form with email notifications, and beautiful UI with Tailwind CSS.## Getting Started



## 🎯 FeaturesFirst, run the development server:



- **4 Main Pages:**```bash

  - `/` - Hero section with profile, CTA buttons, and social linksnpm run dev

  - `/projects` - Dynamic project list fetched from PostgreSQL database# or

  - `/about` - Biography, experience timeline, and skills gridyarn dev

  - `/contact` - Contact form that saves to DB and sends email notifications# or

pnpm dev

- **Backend API Routes:**# or

  - `GET /api/projects` - Fetch all projectsbun dev

  - `POST /api/contact` - Handle contact form submissions```



- **Database:**Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  - PostgreSQL (Neon serverless)

  - Prisma ORM for type-safe database accessYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

  - Models: Project, Message

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **Email:**

  - Resend API for contact form emails## Learn More

  - Email templates with HTML formatting

To learn more about Next.js, take a look at the following resources:

## 🛠️ Tech Stack

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- **Frontend:** Next.js 16 (App Router), TypeScript, React 19- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- **Styling:** Tailwind CSS 4, Framer Motion, Lucide Icons

- **Database:** PostgreSQL (Neon), Prisma ORMYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

- **Email:** Resend

- **Validation:** Zod## Deploy on Vercel

- **Deployment:** Vercel (optimized for serverless)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## 📦 Project Structure

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
```
portfolio-website/
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts       # POST: Contact form handler
│   │   │   └── projects/
│   │   │       └── route.ts       # GET: Fetch projects
│   │   ├── about/
│   │   │   └── page.tsx           # About page
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact form page
│   │   ├── projects/
│   │   │   └── page.tsx           # Projects list page
│   │   ├── layout.tsx             # Root layout with Navbar/Footer
│   │   └── page.tsx               # Home page (hero)
│   ├── components/
│   │   ├── Navbar.tsx             # Navigation with floating effect
│   │   ├── Footer.tsx             # Footer component
│   │   └── MouseTrail.tsx         # WebGL mouse trail effect
│   ├── lib/
│   │   ├── prisma.ts              # Prisma client singleton
│   │   └── email.ts               # Email utility with Resend
│   └── styles/
│       └── globals.css            # Global styles and Tailwind
├── prisma/
│   ├── schema.prisma              # Database schema (Project, Message)
│   └── seed.ts                    # Seed dummy projects
├── public/
│   ├── profile.jpg                # Profile picture
│   └── projects/                  # Project images
├── .env.example                   # Environment variables template
├── package.json                   # Dependencies and scripts
└── tsconfig.json                  # TypeScript configuration
```

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd portfolio-website
pnpm install  # or npm install / yarn install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

**Required environment variables:**

```env
# Neon Database URLs
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Resend API Key
RESEND_API_KEY="re_..."

# Contact email recipient
CONTACT_EMAIL="your.email@example.com"
```

**Get credentials:**
- **Neon:** Sign up at [neon.tech](https://neon.tech) (free tier)
- **Resend:** Get API key at [resend.com](https://resend.com) (free tier)

### 3. Set Up Database

```bash
# Generate Prisma Client
pnpm prisma:generate

# Push schema to database
pnpm prisma:push

# Seed dummy projects
pnpm prisma:seed
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Prisma commands
pnpm prisma:generate  # Generate Prisma Client
pnpm prisma:push      # Push schema to database
pnpm prisma:studio    # Open Prisma Studio (DB GUI)
pnpm prisma:seed      # Seed database with dummy data
```

## 🗄️ Database Schema

### Project Model
```prisma
model Project {
  id          String   @id @default(cuid())
  title       String
  description String
  content     String
  imageUrl    String
  demoUrl     String?
  githubUrl   String?
  tags        String[]
  featured    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Message Model
```prisma
model Message {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String?
  message   String
  read      Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

## 🔄 Frontend ↔ Backend Interaction

### Projects Page Flow
1. `/projects` page calls `fetch('/api/projects')` during server-side rendering
2. API route queries Prisma: `prisma.project.findMany()`
3. Returns JSON array of projects
4. Page component renders project cards

### Contact Form Flow
1. User submits form on `/contact` page
2. Client calls `POST /api/contact` with form data
3. API route validates data with Zod schema
4. Saves message to database: `prisma.message.create()`
5. Sends email via Resend API
6. Returns success/error response
7. Client displays feedback to user

## 🎨 Customization

### Update Profile Information

1. **Home page** (`app/page.tsx`):
   - Change "Your Name" and bio text
   - Update social links (GitHub, LinkedIn, Twitter, email)

2. **Profile picture**:
   - Add your photo to `public/profile.jpg`

3. **About page** (`app/about/page.tsx`):
   - Update biography, experience timeline, and skills

### Add Your Projects

Option 1: **Use Prisma Studio** (GUI):
```bash
pnpm prisma:studio
```

Option 2: **Edit seed file** (`prisma/seed.ts`):
- Add your projects
- Run `pnpm prisma:seed`

### Configure Email

Update `lib/email.ts`:
- Change sender domain (requires verified domain in Resend)
- Customize email template HTML

## 🚢 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

**Important:**
- Vercel automatically detects Next.js and Prisma
- Build command: `prisma generate && next build`
- Neon database works perfectly in serverless environment

### Environment Variables for Production

Add in Vercel dashboard:
```
DATABASE_URL=...
DIRECT_URL=...
RESEND_API_KEY=...
CONTACT_EMAIL=...
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

## 🔐 Security Best Practices

- ✅ API routes validate input with Zod
- ✅ Prisma prevents SQL injection
- ✅ Environment variables not exposed to client
- ✅ CORS handled by Next.js
- ✅ Email rate limiting (implement as needed)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Resend Documentation](https://resend.com/docs)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

**Built with ❤️ using Next.js 16, Prisma, and PostgreSQL**

## Development

### Site

This repository includes a typed design system and Tailwind-based utilities that define the current site design styles. Use these patterns to keep UI consistent.

• Fonts

- Display: Vina
- Sans: Poppins

• Colors and Gradients (CSS variables)

Refer to `src/styles/globals.css` for CSS variables like:

```
--color-primary, --color-blue, --color-indigo,
--color-text-body, --color-text-secondary, --color-text-muted,
--color-bg-main, --color-bg-card, --color-bg-secondary,
--gradient-blue, --gradient-gray, --gradient-text
```

• Type-safe tokens and utilities

- Tokens: `src/lib/design-system.ts` (colors, spacing, typography, radii, shadows)
- Utilities: `src/lib/design-utils.ts` (headingClass, textClass, buttonClass, cardClass, tagClass, sectionClass, etc.)

• Common patterns (examples)

Headings and text:

```tsx
import { headingClass, textClass } from '@/lib/design-utils';

<h1 className={headingClass('h1')}>My Creative Toolbox</h1>
<p className={textClass('body')}>Body text</p>
```

Buttons:

```tsx
import { buttonClass } from '@/lib/design-utils';

<button className={buttonClass('primary')}>Contact me</button>
<button className={buttonClass('blue')}>Resume</button>
```

Cards and tags:

```tsx
import { cardClass, tagClass } from '@/lib/design-utils';

<div className={cardClass('default')}>
  <h3 className={headingClass('h3')}>Web Development</h3>
  <p className={textClass('subtitle')}>Description…</p>
</div>

<button className={tagClass(true)}>Graphic Design</button>
<button className={tagClass(false)}>Video Editing</button>
```

Gradient text and sections:

```tsx
import { gradientTextClass, gradientSectionClass } from '@/lib/design-utils';

<h2 className={gradientTextClass('blue')}>Brands & Companies</h2>
<section className={gradientSectionClass()}>
  <p className="text-white/80">Content…</p>
</section>
```

Layout helpers:

```tsx
import { sectionClass, spacingClass } from '@/lib/design-utils';

<section className={sectionClass(spacingClass('py', 'xl'))}>
  {/* content */}
</section>
```

• Tailwind inline theme

Tailwind tokens are mapped from CSS variables in `globals.css` via `@theme inline`. Prefer design tokens over ad-hoc colors (e.g., use text classes or utilities instead of arbitrary Tailwind color names).

• UI components barrel

Import ready-to-use UI components from `@/components/ui`:

```ts
import { Button, MouseTrail, RotatingText, Slidingbanner, SquaresBackground } from '@/components/ui';
```

For deeper guidance, see `DESIGN_SYSTEM.md`.
