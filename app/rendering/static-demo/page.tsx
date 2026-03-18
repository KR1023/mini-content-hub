// app/rendering/static-demo/page.tsx
import Link from 'next/link'
import { getRenderingSnapshot } from '@/lib/rendering'

export const revalidate = 15

export default async function StaticDemoPage() {
    const snapshot = await getRenderingSnapshot('static-demo')

    return (
        <main className="space-y-6">
            <div>
                <Link href="/rendering" className="text-sm text-blue-600 hover:underline">
                    ← Rendering Lab으로 돌아가기
                </Link>
            </div>

            <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="text-sm font-medium text-green-700">
                    정적 렌더링 + 15초 재검증
                </p>
                <h1 className="mt-2 text-3xl font-bold">Static Demo</h1>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                    이 페이지는 한 번 렌더링된 결과를 재사용합니다.
                    15초가 지나면 다음 요청에서 새 결과로 갱신됩니다.
                </p>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
                        <dd className="mt-1 leading-6">
                            같은 값이 여러 번 유지되다가, 재검증 시점 이후 다시 접근하면 값이 바뀝니다.
                        </dd>
                    </div>
                </dl>
            </section>
        </main>
    )
}