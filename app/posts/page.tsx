import Link from 'next/link'

const mockPosts = [
    { id: 1, title:"첫 번째 글", summary: "Next.js 구조를 이해하는 글입니다."},
    { id: 2, title:"두 번째 글", summary: "App Router의 기본 개념을 정리합니다."},
    { id: 3, title:"세 번째 글", summary: "서버 컴포넌트와 클라이언트 컴포넌트를 준비합니다."},
]

export default function PostsPage(){
    return(
        <section className="space-y-5">
            <div>
                <p className="text-sm text-gray-500">게시글 목록 페이지</p>
                <h2 className="text-3xl font-bold">Posts</h2>
                <p className="mt-2 text-sm text-gray-600">지금은 목록 화면만 만들고, 다음 단계에서 각 게시글 상세 페이지를 연결할 예정입니다.</p>
            </div>


            <ul className="space-y-3">
                {mockPosts.map(post => (
                    <li key={post.id} className="rounded-lg border p-4">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-sm text-gray-600">{post.summary}</p>
                    </li>
                ))}
            </ul>

            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                <p className="mb-2 font-medium">이동 연습</p>
                <Link href="/posts/archive" className="text-blue-600 underline">보관 글 보러 가기</Link>
            </div>
        </section>
    )
}