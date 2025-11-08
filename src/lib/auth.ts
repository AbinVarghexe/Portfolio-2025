// Simple authentication utilities for admin panel
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

export interface AdminSession {
  id: string;
  email: string;
  name: string;
}

export async function createSession(admin: AdminSession) {
  const token = await new SignJWT({ admin })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);

  const cookieStore = await cookies();
  cookieStore.set('admin-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

export async function getSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin-token')?.value;

  if (!token) return null;

  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload.admin as AdminSession;
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('admin-token');
}
