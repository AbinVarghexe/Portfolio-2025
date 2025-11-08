import prisma from '../src/lib/prisma';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  console.log('Creating admin user...');

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.admin.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin',
    },
  });

  console.log('✅ Admin user created/updated:');
  console.log('Email: admin@example.com');
  console.log('Password: admin123');
  console.log('⚠️  IMPORTANT: Change this password after first login!');
}

createAdmin()
  .catch((e) => {
    console.error('Error creating admin:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
