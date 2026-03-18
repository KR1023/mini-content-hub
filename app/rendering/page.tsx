import Link from 'next/link'

export default function RenderingIndexPage() {
    return (
        <main className="space-y-8">
            <section>
                <h1 className="text-3xl font-bold">Rendering Lab</h1>
                <p className="mt-2 text-sm text-gray-600">정적 렌더링, 동적 렌더링, 재검증 차이를 직접 비교하는 공간입니다.</p>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">정적 렌더링 + 재검증</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">빌드 시점 또는 재검증 시점에 렌더링된 결과를 캐시해서 재사용합니다.</p>
                    <Link href="/rendering/static-demo" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
                        static-demo 보기 →
                    </Link>
                </article>

                <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">동적 렌더링</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">요청이 올 때마다 서버가 새로 렌더링됩니다.</p>
                    <Link href="/rendering/dynamic-demo" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
                        dynamic-demo 보기 →
                    </Link>
                </article>
            </section>
        </main>
    )
}