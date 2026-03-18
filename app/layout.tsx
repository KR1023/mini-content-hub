import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Content Hub",
  description: "Next.js 학습용 미니 콘텐츠 허브",
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return(
      <html lang="ko">
        <body className="bg-white text-gray-900">
            <div className="mx-auto min-h-screen max-w-5xl px-6 py-8">
                <header className="mb-8 border-b pb-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Mini Content Hub</h1>

                        <nav className="flex gap-4 text-sm font-medium">
                            <Link href="/" className="hover:underline">Home</Link>
                            <Link href="/about" className="hover:underline">About</Link>
                            <Link href="/posts" className="hover:underline">Posts</Link>
                            <Link href="/rendering">Rendering</Link>
                            <Link href="/seo">SEO</Link>
                        </nav>
                    </div>
                </header>

                <main>{children}</main>
            </div>
        </body>
      </html>
  )
}
