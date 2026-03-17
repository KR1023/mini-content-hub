import Link from 'next/link'

export default function PostsLayout({
    children
} : {
    children: React.ReactNode
}) {
    return(
        <section className="grid gap-6 md:grid-cols-[220px_1fr]">
            <aside className="rounded-xl border bg-gray-50 p-4">
                <p className="mb-3 text-sm font-semibold text-gray-500">Posts Section</p>
                <nav className="flex flex-col gap-2 text-sm">
                    <Link href="/posts" className="rounded px-3 py-2 hover:bg-white">Posts Home</Link>
                    <Link href="/posts/archive" className="rounded px-3 py-2 hover:bg-white">Archive</Link>
                </nav>

                <div className="mt-4 border-t pt-4 text-xs text-gray-500">
                    이 영역은 /posts 아래의 페이지에서 공통으로 보입니다.
                </div>
            </aside>

            <div className="rounded-xl border p-6">{children}</div>
        </section>
    )
}