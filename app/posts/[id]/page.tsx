import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostById} from "@/app/posts/_lib/posts";

type PostDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export default async function PostDetailPage({
    params
}: PostDetailPageProps) {
    const { id } = await params
    const post = getPostById(id)

    if(!post){
        notFound()
    }

    return(
        <article className="space-y-6">
            <div>
                <p className="text-sm text-gray-500">게시글 상세 페이지</p>
                <h2 className="text-3xl font-bold">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-600">현재 URL의 id: {id}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 text-gray-800">
                <p className="leading-7">{post.content}</p>
            </div>

            <div className="flex gap-4 text-sm">
                <Link href="/posts" className="text-blue-600 underline">목록으로 돌아가기</Link>
                <Link href="/posts/archive" className="text-blue-600 underline">Archive 보기</Link>
            </div>
        </article>
    )
}