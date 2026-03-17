'use client'

import { useEffect, useState} from "react";
import type { User } from '@/lib/api'

export default function UserPanel(){
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let ignore = false

        async function fetchUser() {
            try{
                setIsLoading(true)
                setError(null)

                const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

                if(!response.ok){
                    throw new Error('사용자 정보를 불러오지 못했습니다.')
                }

                const data: User = await response.json()

                if(!ignore){
                    setUser(data)
                }
            }catch(err) {
                if(!ignore){
                    setError(
                        err instanceof Error
                        ? err.message : '알 수 없는 에러가 발생했습니다.'
                    )
                }
            } finally {
                if(!ignore) {
                    setIsLoading(false)
                }
            }
        }

        fetchUser()

        return() => {
            ignore = true
        }
    }, [])

    return (
        <aside className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <h2 className="text-lg font-semibold">User Panel</h2>
            {isLoading && (
                <p className="mt-2 text-sm text-gray-600">사용자 정보를 불러오는 중...</p>
            )}

            {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
            )}

            {!isLoading && !error && user && (
                <div className="mt-3 space-y-1 text-sm text-gray-700">
                    <p>
                        <span className="font-medium">이름:</span> {user.name}
                    </p>
                    <p>
                        <span className="font-medium">아이디: </span> @{user.username}
                    </p>

                    <p>
                        <span className="font-medium">이메일: </span> {user.email}
                    </p>
                </div>
            )}
        </aside>
    )
}