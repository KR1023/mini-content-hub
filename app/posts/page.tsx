import Link from 'next/link'
import { posts } from './_lib/posts'

export default function PostsPage(){
    return(
        <section className="space-y-5">
            <div>
                <p className="text-sm text-gray-500">게시글 목록 페이지</p>
                <h2 className="text-3xl font-bold">Posts</h2>
                <p className="mt-2 text-sm text-gray-600">각 게시글을 누르면 동적 상세 페이지로 이동합니다.</p>
            </div>


            <ul className="space-y-3">
                {posts.map(post => (
                    <li key={post.id} className="rounded-lg border p-4">
                        <Link href={`/posts/${post.id}`} className="block">
                            <h3 className="font-semibold">{post.title}</h3>
                            <p className="text-sm text-gray-600">{post.summary}</p>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                <p className="mb-2 font-medium">동적 라우팅 확인용 링크</p>
                <div className="flex flex-col gap-1">
                    <Link href="/posts/1" className="text-blue-600 underline">/posts/1</Link>
                    <Link href="/posts/2" className="text-blue-600 underline">/posts/2</Link>
                    <Link href="/posts/999" className="text-blue-600 underline">/posts/999(없는글)</Link>
                </div>
            </div>
        </section>
    )
}