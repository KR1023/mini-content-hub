import Link from 'next/link'
import { getPosts } from '@/lib/api'
import UserPanel from '@/components/user-panel'
import { Metadata } from 'next'
import { sleep} from '@/lib/demo'

export const metadata: Metadata  = {
    title: '게시글 목록',
    description: 'Mini Content Hub의 게시글 목록입니다. 각 게시글 상세 페이지로 이동할 수 있습니다.'
}

export default async function PostsPage(){
    await sleep(1200)
    const posts = await getPosts()

    return(
        <main className="space-y-8">
            <section>
                <h1 className="text-3xl font-bold">Posts</h1>
                <p className="mt-2 text-sm text-gray-600">서버 컴포넌트에서 게시글 목록을 가져오는 예제입니다.</p>
            </section>

            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h2 className="text-xl font-semibold">상태 화면 연습</h2>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                    아래 링크로 not-found 화면과 error 화면을 직접 확인할 수 있습니다.
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                    <Link
                        href="/posts/999999"
                        className="text-sm font-medium text-blue-600 hover:underline"
                    >
                        없는 게시글 보기 →
                    </Link>

                    <Link
                        href="/posts/error-demo"
                        className="text-sm font-medium text-blue-600 hover:underline"
                    >
                        에러 화면 보기 →
                    </Link>
                </div>
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