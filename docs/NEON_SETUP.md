# Neon Database Configuration

## ✅ Setup Complete

Your Next.js portfolio is now connected to **Neon PostgreSQL** using MCP (Model Context Protocol).

### 📊 Neon Project Details

- **Project Name:** Portfolio
- **Project ID:** `icy-mouse-69550935`
- **Region:** Azure East US 2
- **PostgreSQL Version:** 17
- **Platform:** Azure

### 🌿 Branches

1. **Production Branch** (Default)
   - Branch ID: `br-sparkling-poetry-a8qrugkb`
   - Status: Ready
   - Current connection in `.env`

2. **Development Branch**
   - Branch ID: `br-misty-tooth-a8frhoxs`
   - Status: Ready
   - Available for testing

### 🔌 Connection Strings

Your `.env` file is configured with:
- **DATABASE_URL** - Pooled connection for serverless functions (Next.js API routes)
- **DIRECT_URL** - Direct connection for Prisma migrations and Studio

### 📦 Database Status

✅ **Schema Pushed:** Project and Message tables created  
✅ **Seeded:** 4 sample projects added  
✅ **Prisma Client:** Generated and ready  
✅ **Dev Server:** Running at http://localhost:3000

### 🗄️ Tables Created

1. **Project**
   - `id` (String/CUID)
   - `title`, `description`, `content`
   - `imageUrl`, `demoUrl`, `githubUrl`
   - `tags` (String array)
   - `featured` (Boolean)
   - `createdAt`, `updatedAt`

2. **Message**
   - `id` (String/CUID)
   - `name`, `email`, `subject`, `message`
   - `read` (Boolean)
   - `createdAt`

### 🚀 Available Commands

```powershell
# View database in browser UI
pnpm prisma studio

# Run SQL queries
pnpm prisma db execute --file query.sql

# Reset database (clears all data)
pnpm prisma db push --force-reset

# Re-seed database
pnpm prisma db seed
```

### 🔍 Prisma Studio

Prisma Studio is running in the background. Access it at:
- URL: http://localhost:5555 (if not already open)
- View and edit your Project and Message data directly

### 📝 Next Steps

1. **Update Resend API Key** in `.env`:
   ```
   RESEND_API_KEY="re_your_actual_api_key"
   CONTACT_EMAIL="your@email.com"
   ```

2. **Test the application:**
   - Home: http://localhost:3000
   - Projects: http://localhost:3000/projects (should show 4 seeded projects)
   - About: http://localhost:3000/about
   - Contact: http://localhost:3000/contact

3. **Customize content:**
   - Edit `app/page.tsx` for your name and bio
   - Replace images in `public/` folder
   - Update `app/about/page.tsx` with your experience

### 🔐 Security Notes

- ✅ Connection strings are in `.env` (not committed to git)
- ✅ `.env` is in `.gitignore`
- ✅ Production uses pooled connections for better performance
- ✅ SSL mode enabled for secure connections

### 🌐 Branch Management (Optional)

You can use the development branch for testing:

```typescript
// To switch to development branch:
// 1. Get the development branch connection string from Neon dashboard
// 2. Update DATABASE_URL in .env
// 3. Run: pnpm prisma db push
```

### 📚 Resources

- [Neon Console](https://console.neon.tech/app/projects/icy-mouse-69550935)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**Status:** ✅ Database configured and ready for development!
