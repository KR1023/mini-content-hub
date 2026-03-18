// lib/seo-checklist.ts
export type SeoChecklistItem = {
    id: string
    title: string
    description: string
}

export type SeoPagePlan = {
    route: string
    purpose: string
    shouldIndex: boolean
    titleIdea: string
    descriptionIdea: string
    mainContent: string[]
    linksNeeded: string[]
    notes: string[]
}

export const seoChecklist: SeoChecklistItem[] = [
    {
        id: 'title',
        title: '설명적인 title',
        description:
            '페이지마다 고유하고 구체적인 제목이 필요합니다. "Home"처럼 너무 일반적인 제목은 피합니다.',
    },
    {
        id: 'description',
        title: '요약하는 description',
        description:
            '검색 결과에서 페이지 내용을 빠르게 이해할 수 있도록 짧고 정확한 설명이 필요합니다.',
    },
    {
        id: 'h1',
        title: '명확한 대표 제목(H1)',
        description:
            '이 페이지가 무엇에 대한 페이지인지 본문 안에서도 분명하게 보여 줘야 합니다.',
    },
    {
        id: 'content',
        title: '핵심 텍스트 콘텐츠',
        description:
            '공개 페이지의 핵심 내용은 이미지나 버튼만이 아니라 실제 텍스트로도 드러나야 합니다.',
    },
    {
        id: 'links',
        title: '크롤 가능한 내부 링크',
        description:
            '목록 → 상세, 상세 → 목록처럼 페이지 간 이동 경로가 분명해야 합니다.',
    },
    {
        id: 'robots',
        title: '색인 허용/비허용 구분',
        description:
            '공개 페이지는 index 대상인지, 관리자/작성 화면은 noindex 대상인지 구분해야 합니다.',
    },
    {
        id: 'og',
        title: '공유용 OG/Twitter 정보',
        description:
            '검색 결과와 별개로, 링크 공유 시 어떤 제목/설명/이미지가 보일지도 정리해야 합니다.',
    },
    {
        id: 'sitemap',
        title: '사이트맵/robots 계획',
        description:
            '검색엔진이 사이트 구조를 더 쉽게 발견할 수 있도록 sitemap, robots 구성을 준비합니다.',
    },
]

export const seoPagePlans: SeoPagePlan[] = [
    {
        route: '/',
        purpose: '서비스 소개와 주요 섹션 진입',
        shouldIndex: true,
        titleIdea: 'Mini Content Hub | 작은 게시글과 노트를 관리하는 웹',
        descriptionIdea:
            '게시글 목록, 상세, 작성 기능을 갖춘 Next.js 학습용 콘텐츠 허브입니다.',
        mainContent: [
            '서비스 소개 문장',
            '무엇을 할 수 있는지 설명하는 본문',
            'posts 섹션으로 이동하는 링크',
        ],
        linksNeeded: ['/posts', '/about'],
        notes: [
            '홈은 너무 추상적인 문구만 두지 말고 사이트 성격을 바로 설명해야 함',
            '검색엔진과 사용자 모두 첫 화면에서 주제를 이해할 수 있어야 함',
        ],
    },
    {
        route: '/posts',
        purpose: '게시글 목록 탐색',
        shouldIndex: true,
        titleIdea: '게시글 목록 | Mini Content Hub',
        descriptionIdea:
            'Mini Content Hub의 게시글 목록입니다. 각 게시글 상세 페이지로 이동할 수 있습니다.',
        mainContent: [
            '목록 페이지 제목',
            '목록의 의미를 설명하는 짧은 문장',
            '각 게시글 제목과 일부 요약 텍스트',
        ],
        linksNeeded: ['/posts/[id]', '/'],
        notes: [
            '각 게시글 링크 텍스트는 "상세 보기"만 반복하지 말고 제목도 함께 보이게 유지',
            '목록 카드 안에 실제 텍스트 요약이 있으면 검색엔진과 사용자 모두 이해하기 쉬움',
        ],
    },
    {
        route: '/posts/[id]',
        purpose: '개별 게시글 상세 읽기',
        shouldIndex: true,
        titleIdea: '게시글 제목 | Mini Content Hub',
        descriptionIdea:
            '게시글 본문 요약 1~2문장과 작성자 정보가 포함된 상세 페이지입니다.',
        mainContent: [
            '게시글 제목',
            '본문 핵심 내용',
            '작성자 또는 부가 정보',
        ],
        linksNeeded: ['/posts'],
        notes: [
            '상세 페이지마다 title/description이 달라져야 함',
            '본문의 핵심 문장이 HTML에 바로 포함되면 SEO에 유리',
        ],
    },
    {
        route: '/posts/new',
        purpose: '새 게시글 작성',
        shouldIndex: false,
        titleIdea: '새 게시글 작성 | Mini Content Hub',
        descriptionIdea:
            '관리 또는 작성용 화면이므로 일반 검색 유입 대상은 아님',
        mainContent: ['작성 폼', '입력 안내'],
        linksNeeded: ['/posts'],
        notes: [
            '작성/관리 화면은 보통 검색 결과에 노출할 필요가 없음',
            '향후 noindex 여부를 명확히 정할 예정',
        ],
    },
]