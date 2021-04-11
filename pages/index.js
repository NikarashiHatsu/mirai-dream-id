import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Mirai Dream ID</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 class="text-xl">
                This page is created using TailwindCSS and NextJS
            </h1>
        </>
    )
}