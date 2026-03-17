import Link from 'next/link'
import { getPosts } from '@/lib/api'
import UserPanel from '@/components/user-panel'

export default async function PostsPage(){
    const posts = await getPosts()

    return(
        <main className="space-y-8">
            <section>
                <h1 className="text-3xl font-bold">Posts</h1>
                <p className="mt-2 text-sm text-gray-600">서버 컴포넌트에서 게시글 목록을 가져오는 예제입니다.</p>
            </section>

            <UserPanel />

            <section className="space-y-4">
                {posts.map(post => (
                    <article key={post.id}
                             className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.body}</p>

                        <Link
                            href={`/posts/${post.id}`}
                            className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
                        >상세 보기 →
                        </Link>
                    </article>
                ))}
            </section>
        </main>

    )
}