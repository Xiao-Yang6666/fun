import React, { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloudflare Pages Next.js 应用',
  description: '使用 Next.js 和 Cloudflare Pages 构建的全栈应用示例',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
} 