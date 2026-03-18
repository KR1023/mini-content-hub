// app/posts/[id]/not-found.tsx
import Link from 'next/link'

export default function PostNotFoundPage() {
    return (
        <main className="space-y-6">
            <section className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
                <p className="text-sm font-medium text-yellow-700">게시글 없음</p>
                <h1 className="mt-2 text-3xl font-bold">
                    요청한 게시글을 찾을 수 없습니다.
                </h1>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                    삭제되었거나, 잘못된 주소로 접근했을 수 있습니다.
                </p>
            </section>

            <div className="flex flex-wrap gap-3">
                <Link
                    href="/posts"
                    className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
                >
                    게시글 목록으로 가기
                </Link>

                <Link
                    href="/"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                    홈으로 가기
                </Link>
            </div>
        </main>
    )
}