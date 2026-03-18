export default function PostLoading() {
    return(
        <main className="space-y-8">
            <section>
                <div className="h-8 w-52 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-80 animate-pulse rounded bg-gray-200" />
            </section>

            <section className="space-y-4">
                {[1,2,3].map(item => (
                    <article key={item}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="h-6 w-2/3 animate-pulse rounded bg-gray-200"></div>
                        <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200" />
                        <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                        <div className="mt-4 h-4 w-24 animate-pulse rounded bg-gray-200" />
                    </article>
                ))}
            </section>
        </main>
    )
}