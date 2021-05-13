// Next JS Components
import Head from 'next/head'

// Custom Components
import Navbar from '../../components/Navbar'
import LegalSection from '../../components/LegalSection'

export default function Legal() {
    return (
        <>
            <Head>
                <title>Mirai Dream ID | Legal Page</title>
                <link rel="icon" href="/mirai_dream.webp" />
            </Head>
            <Navbar />

            <LegalSection />
        </>
    )
}