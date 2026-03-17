import Link from 'next/link'
import { getPost, getUser} from '@/lib/api'

type PostDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export default async function PostDetailPage({
    params
}: PostDetailPageProps) {
    const {id} = await params
    const post = await getPost(id)

    if(!post) {
        return (
            <main className="space-y-4">
                <h1 className="text-2xl font-bold">게시글을 찾을 수 없습니다.</h1>
                <Link href="/posts" className="text-blue-600 hover:underline">목록으로 돌아가기</Link>
            </main>
        )
    }

    const author = await getUser(post.userId)

    return(
        <main className="space-y-6">
            <Link href="/posts" className="text-sm text-blue-600 hover:underline">
                ← 목록으로 돌아가기
            </Link>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Post #{post.id}</p>
                <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>

                <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                    <p>
                        <span className="font-medium">작성자:</span> {author.name}
                    </p>
                    <p>
                        <span className="font-medium">이메일: </span> {author.email}
                    </p>
                </div>

                <p className="mt-6 whitespace-pre-line leading-7 text-gray-800">
                    {post.body}
                </p>
            </article>
        </main>
    )
}