export type Post = {
    id: string
    title: string
    summary: string
    content: string
}

export const posts: Post[] = [
    {
        id: '1',
        title: '첫 번째 글',
        summary: 'Next.js 구조를 이해하는 글입니다.',
        content: '이 글은 Mini Content Hub의 첫 번째 상세 페이지입니다. 이제부터 /posts/1 같은 경로를 하나의 동적 파일에서 처리하게 됩니다.'
    },
    {
        id: '2',
        title: '두 번째 글',
        summary: 'App Router의 기본 개념을 정리합니다.',
        content: 'App Router에서는 파일과 폴더 구조가 URL 구조가 됩니다. [id] 폴더는 바뀌는 경로 조각을 받는 자리입니다.'
    },
    {
        id: '3',
        title: '세 번째 글',
        summary: '동적 라우팅을 준비하는 글입니다.',
        content: '상세 페이지가 생기면 목록과 상세가 연결됩니다. 이후 단계에서는 metadata, 렌더링 방식, not-found 처리도 더 깊게 다룹니다.'
    },
]

export function getPostById(id: string){
    return posts.find(post => post.id === id)
}