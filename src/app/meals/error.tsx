'use client'

type ErrorPageType = {
    error: {
        message: string
    };
}
export default function ErrorPage({error}: ErrorPageType) {
    return (
        <main className="error">
            <h1>An Error Occurred!</h1>
            <p>Failed to fetch Meals Data</p>
            <p>{error.message}</p>
        </main>
    )
}
