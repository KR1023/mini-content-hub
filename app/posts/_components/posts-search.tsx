'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { Post } from '../_lib/posts'

type FilterType = 'all' | 'short' | 'long'

type PostsSearchProps = {
    posts: Post[]
}

export default function PostsSearch({posts}: PostsSearchProps){
    const [keyword, setKeyword] = useState('')
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesKeyword =
                post.title.toLowerCase().includes(keyword.toLowerCase()) ||
                post.summary.toLowerCase().includes(keyword.toLowerCase())

            const matchesFilter = filter === 'all' ? true : post.category === filter

            return matchesKeyword && matchesFilter
        })
    }, [posts, keyword, filter])

    return (
        <section className="space-y-5">
            <div className="space-y-3 rounded-xl border bg-gray-50 p-4">
                <div>
                    <label htmlFor="keyword" className="mb-2 block text-sm font-medium">게시글 검색</label>
                    <input type="text"
                           id="keyword"
                           value={keyword}
                           onChange={e => setKeyword(e.target.value)}
                           placeholder="제목 또는 요약 검색"
                           className="w-full rounded-md border px-3 py-2 outline-none"
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    <button onClick={() => setFilter('all')}
                    className={`rounded-md px-3 py-2 text-sm ${
                        filter === 'all' ? 'border bg-black text-white' : 'border bg-white'
                    }`}>
                        전체
                    </button>
                    <button
                        onClick={() => setFilter('short')}
                        className={`rounded-md px-3 py-2 text-sm ${
                            filter === 'short' ? 'border bg-black text-white' : 'border bg-white'
                        }`}
                    >
                        짧은 글
                    </button>
                    <button
                        onClick={() => setFilter('long')}
                        className={`rounded-md px-3 py-2 text-sm ${
                            filter === 'long' ? 'border bg-black text-white' : 'border bg-white'
                        }`}
                    >
                        긴글
                    </button>
                </div>

                <p className="text-sm text-gray-600">현재 결과: {filteredPosts.length}개</p>
            </div>

            <ul className="space-y-3">
                {filteredPosts.map(post => (
                    <li key={post.id} className="rounded-lg border p-4">
                        <Link href={`/posts/${post.id}`} className="block">
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <h3 className="font-semibold hover:underline">{post.title}</h3>
                                <span className="rounded-full border px-2 py-1 text-xs text-gray-600">{post.category}</span>
                            </div>
                            <p className="text-sm text-gray-600">{post.summary}</p>
                        </Link>
                    </li>
                ))}
            </ul>

            {filteredPosts.length === 0 && (
                <div className="rounded-lg border border-dashed p-6 text-sm text-gray-600">검색 결과가 없습니다.</div>
            )}
        </section>
    )
}