export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export type User = {
    id: number
    name: string
    username: string
    email: string
}

const BASE_URL = 'https://jsonplaceholder.typicode.com'

async function fetchJson<T>(url: string): Promise<T> {
    const response = await fetch(url, {
        cache: 'no-store'
    })

    if(!response.ok){
        throw new Error('데이터를 불러오지 못했습니다.')
    }

    return response.json()
}

export async function getPosts(): Promise<Post[]> {
    return fetchJson(`${BASE_URL}/posts?limit=10`)
}

export async function getPost(id: string): Promise<Post | null> {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
        cache: 'no-cache'
    })

    if(response.status === 404){
        return null
    }

    if(!response.ok) {
        throw new Error('게시글을 불러오지 못했습니다.')
    }

    return response.json()
}

export async function getUser(id: number): Promise<User> {
    return fetchJson(`${BASE_URL}/users/${id}`)
}