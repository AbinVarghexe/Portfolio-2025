'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { headingClass, textClass, buttonClass } from '@/lib/design-utils';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      router.push('/admin');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ececec] px-4">
      <div className="w-full max-w-md">
        <div className="bg-[#e1e1e1] border border-[#aaaaaa] rounded-[33px] p-8">
          <h1 className={headingClass('h2', 'text-center mb-2')}>Admin Login</h1>
          <p className={textClass('subtitle', 'text-center mb-8 text-[#4a4a68]')}>
            Enter your credentials to access the admin panel
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-[15px] mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className={textClass('label', 'block mb-2')}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px] focus:outline-none focus:border-[#0020d7] transition-colors"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className={textClass('label', 'block mb-2')}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-[15px] border border-[#b4b4b4] bg-white text-[16px] focus:outline-none focus:border-[#0020d7] transition-colors"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className={buttonClass('blue', 'w-full justify-center')}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
