import React from 'react';

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">欢迎来到 Cloudflare Pages Next.js 应用</h1>
        <p className="mt-4 text-xl">
          这是一个使用 Next.js 和 Cloudflare Pages 构建的全栈应用示例。
        </p>
      </div>
    </main>
  );
} 