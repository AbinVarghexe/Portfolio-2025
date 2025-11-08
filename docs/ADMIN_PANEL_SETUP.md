# Admin Panel Setup Guide

## Overview

The admin panel allows you to manage your portfolio projects without storing contact form messages in the database. Contact forms send emails directly using Resend.

## Features

✅ **Project Management**
- Create, edit, and delete projects
- Upload project images and links
- Set featured projects
- Manage project tags

✅ **Secure Authentication**
- JWT-based session management
- Password hashing with bcrypt
- Protected routes with middleware

✅ **Direct Email Delivery**
- Contact forms send emails directly (no database storage)
- Cleaner architecture
- Faster response times

## Setup Instructions

### 1. Update Database Schema

Push the new schema to remove the Message table and add Admin table:

\`\`\`bash
pnpm prisma:push
\`\`\`

### 2. Create Admin User

Run the admin creation script:

\`\`\`bash
pnpm prisma:create-admin
\`\`\`

**Default Credentials:**
- Email: `admin@example.com`
- Password: `admin123`

⚠️ **IMPORTANT:** Change these credentials after first login!

### 3. Add Environment Variables

Add to your `.env` file:

\`\`\`bash
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
\`\`\`

Generate a secure secret:
\`\`\`bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
\`\`\`

### 4. Start Development Server

\`\`\`bash
pnpm dev
\`\`\`

## Access the Admin Panel

1. Navigate to: `http://localhost:3000/admin/login`
2. Login with default credentials
3. Change password immediately (recommended)

## Admin Panel Routes

- `/admin/login` - Admin login page
- `/admin` - Admin dashboard (protected)
- `/admin/*` - All admin routes require authentication

## API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout

### Project Management
- `GET /api/admin/projects` - Get all projects
- `POST /api/admin/projects` - Create project
- `GET /api/admin/projects/[id]` - Get single project
- `PUT /api/admin/projects/[id]` - Update project
- `DELETE /api/admin/projects/[id]` - Delete project

### Contact Form
- `POST /api/contact` - Send email directly (no database storage)

## Database Changes

### Removed
- ❌ `Message` model (contact form submissions)

### Added
- ✅ `Admin` model (admin users)

### Why Remove Message Table?

1. **Simpler Architecture**: Direct email delivery is cleaner
2. **No Database Bloat**: No need to store and manage messages
3. **Privacy**: Messages aren't stored permanently
4. **Faster**: One less database operation per contact submission

## Security Best Practices

1. **Change Default Password**
   - Login immediately after setup
   - Use a strong, unique password

2. **Secure JWT Secret**
   - Use a cryptographically random string
   - Never commit to version control
   - Rotate periodically in production

3. **HTTPS in Production**
   - Cookies are marked `secure` in production
   - Always use HTTPS for admin panel

4. **Rate Limiting** (Recommended)
   - Add rate limiting to `/api/admin/login`
   - Prevent brute force attacks

## Troubleshooting

### Can't Login
- Check database connection
- Verify admin user exists: `pnpm prisma:studio`
- Check JWT_SECRET in `.env`

### Session Expires
- Sessions last 7 days by default
- Clear cookies and login again

### Database Errors
- Run `pnpm prisma:generate` after schema changes
- Check DATABASE_URL is correct

## Creating Additional Admins

Modify `prisma/create-admin.ts` and run:

\`\`\`bash
pnpm prisma:create-admin
\`\`\`

Or manually using Prisma Studio:
\`\`\`bash
pnpm prisma:studio
\`\`\`

## Production Deployment

1. Set secure `JWT_SECRET`
2. Enable HTTPS
3. Change default admin password
4. Consider adding 2FA (future enhancement)
5. Set up proper email domain in Resend

## Future Enhancements

- [ ] Password reset functionality
- [ ] Two-factor authentication
- [ ] Activity logs
- [ ] Multiple admin roles
- [ ] Image upload service integration
- [ ] Bulk project operations

## Support

For issues or questions:
1. Check terminal/browser console for errors
2. Verify environment variables
3. Check Prisma Studio for data
4. Review API response errors
