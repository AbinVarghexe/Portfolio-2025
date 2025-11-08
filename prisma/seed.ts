// Seed script to populate database with dummy projects
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.project.deleteMany({});

  // Seed projects
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: 'E-Commerce Platform',
        description: 'Full-stack online store with payment integration and admin dashboard',
        content: `
          Built a comprehensive e-commerce solution using Next.js, Stripe, and PostgreSQL.
          Features include product management, cart functionality, checkout flow, and order tracking.
          Admin panel allows inventory management and sales analytics.
        `,
        imageUrl: '/projects/ecommerce.jpg',
        demoUrl: 'https://demo-ecommerce.vercel.app',
        githubUrl: 'https://github.com/username/ecommerce',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
        featured: true,
      },
    }),
    prisma.project.create({
      data: {
        title: 'Task Management App',
        description: 'Collaborative task tracker with real-time updates and team features',
        content: `
          Developed a task management application with real-time collaboration capabilities.
          Users can create projects, assign tasks, set deadlines, and track progress.
          Implemented using WebSockets for instant updates across team members.
        `,
        imageUrl: '/projects/task-app.jpg',
        demoUrl: 'https://demo-tasks.vercel.app',
        githubUrl: 'https://github.com/username/task-manager',
        tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        featured: true,
      },
    }),
    prisma.project.create({
      data: {
        title: 'Weather Dashboard',
        description: 'Real-time weather forecasting app with interactive maps',
        content: `
          Created a weather dashboard that displays current conditions and forecasts.
          Integrated with OpenWeather API and Mapbox for location-based weather data.
          Features include hourly/daily forecasts, alerts, and historical data visualization.
        `,
        imageUrl: '/projects/weather.jpg',
        demoUrl: 'https://demo-weather.vercel.app',
        githubUrl: 'https://github.com/username/weather-app',
        tags: ['Next.js', 'OpenWeather API', 'Mapbox', 'Chart.js'],
        featured: false,
      },
    }),
    prisma.project.create({
      data: {
        title: 'Blog CMS',
        description: 'Headless CMS for bloggers with markdown support and SEO optimization',
        content: `
          Built a content management system for technical bloggers.
          Supports markdown editing, syntax highlighting, image uploads, and draft management.
          Optimized for SEO with meta tags, sitemaps, and structured data.
        `,
        imageUrl: '/projects/blog-cms.jpg',
        demoUrl: 'https://demo-blog.vercel.app',
        githubUrl: 'https://github.com/username/blog-cms',
        tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
        featured: false,
      },
    }),
  ]);

  console.log(`✅ Created ${projects.length} projects`);
  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
