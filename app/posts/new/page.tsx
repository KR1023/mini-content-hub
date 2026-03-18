import type { Metadata } from "next";

export const metadata: Metadata = {
    title: '새 게시글 작성',
    description: '새 게시글을 작성하는 화면입니다.',
    robots: {
        index: false,
        follow: false
    }
}

export default function NewPostPage() {
    return(
        <main className="space-y-6">
            <section>
                <h1 className='text-3xl font-bold'>새 게시글 작성</h1>
                <p className='mt-2 text-sm text-gray-600'>이 화면은 일반 검색 유입 대상이 아닌 작성용 페이지입니다.</p>
            </section>

            <form className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium">제목</label>
                    <input id="text" type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2"/>
                </div>

                <div className="space-y-2">
                    <label htmlFor="content" className="block text-sm font-medium">내용</label>
                    <input id="content" type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2"/>
                </div>

                <button type="submit" className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">
                    작성하기
                </button>
            </form>
        </main>

    )
}