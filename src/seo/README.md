# SEO Configuration - Abin Varghese Portfolio

This folder contains all SEO setup files for https://abinvarghese.me

## Files

- **metadata.ts**: Main SEO metadata configuration including Open Graph and Twitter cards
- **schema.tsx**: JSON-LD structured data for Person schema
- **robots.txt**: Robots file (located in `/public` folder)
- **next-sitemap.config.js**: Sitemap generation configuration

## Setup

1. Install dependencies:
   ```bash
   pnpm add next-sitemap
   ```

2. The sitemap will be automatically generated after build via the `postbuild` script in `package.json`

3. Metadata is imported and used in `app/layout.tsx`

4. Person schema is added to the root layout for structured data

## Page-Level SEO

Each page can export its own metadata:

```tsx
export const metadata: Metadata = {
  title: "Page Title | Abin Varghese",
  description: "Page description",
};
```

## Verification

- Google Search Console: Add verification code to `metadata.ts`
- Update social media links in `schema.tsx` with actual URLs
- Add actual OG image at `/public/og-image.png`

