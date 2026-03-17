import Link from 'next/link'

export default function PostsNotFoundPage() {
    return(
        <section className="space-y-4">
            <p className="text-sm text-gray-500">게시글을 찾을 수 없습니다.</p>
            <h2 className="text-3xl font-bold">Not Found</h2>
            <p className="text-gray-700">요청한 게시글이 없거나 잘못된 주소입니다.</p>

            <Link href="/posts" className="text-blue-600 underline">게시글 목록으로 돌아가기</Link>
        </section>
    )
}