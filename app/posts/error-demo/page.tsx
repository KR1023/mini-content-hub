// app/posts/error-demo/page.tsx
import type { Metadata } from 'next'
import { sleep } from '@/lib/demo'

export const metadata: Metadata = {
    title: '에러 데모',
    description: 'posts error boundary 동작을 확인하는 학습용 페이지입니다.',
    robots: {
        index: false,
        follow: false,
    },
}

export default async function ErrorDemoPage() {
    await sleep(1200)

    throw new Error(
        '학습용 에러입니다. Posts error boundary가 동작하는지 확인하기 위해 의도적으로 발생시켰습니다.'
    )
}