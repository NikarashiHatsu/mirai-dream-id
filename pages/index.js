import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Mirai Dream Studio | Homepage</title>
                <link rel="icon" href="/mirai_dream.webp" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend&family=Varela+Round&display=swap" rel="stylesheet" />
            </Head>

            <div className="flex items-center justify-center w-screen h-screen font-lexend">
                <h1 className="text-xl md:text-3xl lg:text-6xl">-COMING SOON-</h1>
            </div>
        </>
    )
}