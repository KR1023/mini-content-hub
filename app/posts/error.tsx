// app/posts/error.tsx
'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function PostsError({
                                       error,
                                       reset,
                                   }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className="space-y-6">
            <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <p className="text-sm font-medium text-red-700">Posts 섹션 에러</p>
                <h1 className="mt-2 text-3xl font-bold">
                    게시글을 불러오는 중 문제가 발생했습니다.
                </h1>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                    일시적인 문제일 수 있습니다. 다시 시도하거나 목록으로 돌아가 주세요.
                </p>

                {error.digest ? (
                    <p className="mt-3 text-xs text-gray-500">
                        오류 추적 ID: {error.digest}
                    </p>
                ) : null}
            </section>

            <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => reset()}
                    className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
                >
                    다시 시도
                </button>

                <Link
                    href="/posts"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                    목록으로 이동
                </Link>
            </div>
        </main>
    )
}