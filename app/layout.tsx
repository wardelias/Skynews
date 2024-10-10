import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';

const cairo = Cairo({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'الرمز - استثمر في مستقبل الذكاء الاصطناعي',
  description: 'اكتشف فرص الاستثمار الاستثنائية في شركات الذكاء الاصطناعي مع الرمز',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}