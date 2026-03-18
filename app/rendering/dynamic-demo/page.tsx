import Link from 'next/link'
import { getRenderingSnapshot } from '@/lib/rendering'

export const dynamic = 'force-dynamic'

export default async function DynamicDemoPage() {
    const snapshot = await getRenderingSnapshot('dynamic-demo')

    return (
        <main className="space-y-6">
            <div>
                <Link href="/rendering" className="text-sm text-blud-600 hover:underline">
                    ← Rendering Lab으로 돌아가기
                </Link>
            </div>

            <section className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
                <p className="text-sm font-medium text-orange-700">요청 시점 동적 렌더링</p>
                <h1 className="mt-2 text-3xl font-bold">Dynamic Demo</h1>
                <p className="mt-3 text-sm leading-6 text-gray-700">이 페이지는 요청이 올 때마다 서버가 새로 렌더링합니다.</p>
            </section>

            <section className="rounded-2xl border-gray-200 bg-white p-6 shadow-sm">
                <dl className="space-y-4 text-sm text-gray-700">
                    <div>
                        <dt className="font-semibold">렌더링된 시각</dt>
                        <dd className="mt-1">{snapshot.renderedAt}</dd>
                    </div>

                    <div>
                        <dt className="font-semibold">랜덤 숫자</dt>
                        <dd className="mt-1">{snapshot.randomNumber}</dd>
                    </div>

                    <div>
                        <dt className="font-semibold">관찰 포인트</dt>
                        <dd className="mt-1 leading-6">새로고침할 때마다 값이 바뀌고, 매번 1.5초 지연도 다시 느껴집니다.</dd>
                    </div>
                </dl>
            </section>
        </main>
    )
}