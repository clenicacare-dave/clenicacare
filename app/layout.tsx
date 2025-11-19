import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ClenicaCare',
  description: 'ClenicaCare is preparing the next evolution in premium care services.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--clenicacare-bg)] text-[var(--clenicacare-text)] antialiased">
        {children}
      </body>
    </html>
  );
}
