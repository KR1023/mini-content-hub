import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: '홈',
    description: 'Mini Content Hub의 홈 화면입니다. 게시글 목록과 주요 학습 섹션으로 이동할 수 있습니다.'
}

export default function HomePage(){
  return(
      <main className="space-y-8">
          <section className="space-y-3">
              <h1 className="text-3xl font-bold">Mini Content Hub</h1>
              <p className="text-sm leading-6 text-gray-600">
                  작은 게시글과 노트를 관리하는 Next.js 학습용 프로젝트입니다.
              </p>
          </section>

          <section className="space-y-3">
              <h2 className="text-xl font-semibold">바로 가기</h2>
              <div className="flex gap-4 text-sm">
                  <Link href="/posts" className="text-blue-600 hover:underline">
                      게시글 목록
                  </Link>
                  <Link href="/seo" className="text-blue-600 hover:underline">
                      SEO 체크리스트
                  </Link>
                  <Link href="/rendering" className="text-blue-600 hover:underline">
                      렌더링 비교
                  </Link>
              </div>
          </section>
      </main>

  )
}