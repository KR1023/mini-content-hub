import Link from 'next/link'
import { seoChecklist, seoPagePlans } from '@/lib/seo-checklist'

export default function SeoPage() {
    return(
        <main className="space-y-10">
            <section className="space-y-3">
                <h1 className="text-3xl font-bold">SEO Basics Lab</h1>
                <p className="text-sm leading-6 text-gray-600">
                    이 페이지는 Mini Content Hub에 어떤 SEO 요소가 필요한지 정리한
                    학습용 체크리스트입니다.
                </p>
                <p className="text-sm leading-6 text-gray-600">
                    아직 실제 metadata는 붙이지 않았고, 다음 단계에서 title,
                    description, robots, OG 이미지를 적용할 예정입니다.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">검색엔진이 이해하기 쉬운 페이지 체크리스트</h2>

                <div className="space-y-4">
                    {seoChecklist.map(item => (
                        <article key={item.id}
                            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">현재 프로젝트 페이지별 SEO 설계</h2>

                <div className="space-y-5">
                    {seoPagePlans.map(plan => (
                        <article key={plan.route}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                        >
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-blue-600">{plan.route}</p>
                                <h3 className="text-xl font-semibold">{plan.purpose}</h3>
                            </div>

                            <div className="mt-4 space-y-4 text-sm text-gray-700">
                                <div>
                                    <p className="font-semibold">검색 노출 대상</p>
                                    <p className="mt-1">
                                        {plan.shouldIndex ? 'index 후보' : 'noindex 검토 대상'}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold">title 아이디어</p>
                                    <p className="mt-1">{plan.titleIdea}</p>
                                </div>

                                <div>
                                    <p className="font-semibold">본문에 바로 보여야 할 핵심 정보</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5">
                                        {plan.mainContent.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold">필요한 내부 링크</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5">
                                        {plan.linksNeeded.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold">메모</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5">
                                    {plan.notes.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h2 className="text-xl font-semibold">다음 단계에서 할 일</h2>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                    다음 8단계에서는 위 계획을 실제 Next.js Metadata API로 옮겨서
                    홈/목록/상세 페이지에 title, description, robots, OG 설정을 적용합니다.
                </p>

                <div className="mt-4">
                    <Link href="/posts" className="text-sm font-medium text-blue-600 hover:underline">
                        현재 robots 페이지 다시 보기
                    </Link>
                </div>
            </section>
        </main>
    )
}