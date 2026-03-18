function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    dateStyle: 'full',
    timeStyle: 'medium'
})

export async function getRenderingSnapshot(label: string) {
    await sleep(1500)

    return {
        label,
        renderedAt: dateFormatter.format(new Date()),
        randomNumber: Math.floor(Math.random() * 1000000)
    }
}