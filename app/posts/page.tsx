import PostsSearch from './_components/posts-search'
import { posts } from './_lib/posts'

export default function PostsPage(){
    return(
        <section className="space-y-5">
            <div>
                <p className="text-sm text-gray-500">게시글 목록 페이지</p>
                <h2 className="text-3xl font-bold">Posts</h2>
                <p className="mt-2 text-sm text-gray-600">게시글 데이터는 서버에서 준비하고, 검색과 필터는 클라이언트에서 처리합니다.</p>
            </div>

            <PostsSearch posts={posts} />

            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                <p className="font-medium">이 페이지에서 역할 나누기</p>
                <ul className="flex flex-col gap-1">
                    <li>서버: posts 데이터를 준비하고 페이지 뼈대를 렌더링</li>
                    <li>클라이언트: 입력값 상태 관리와 즉시 필터링</li>
                </ul>
            </div>
        </section>
    )
}