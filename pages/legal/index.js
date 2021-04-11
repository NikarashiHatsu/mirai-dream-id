// Next JS Components
import Head from 'next/head'

// Custom Components
import Navbar from '../../components/Navbar'
import LegalSection from '../../components/LegalSection'

export default function Legal() {
    return (
        <>
            <Head>
                <title>Mirai Dream ID | Legal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <LegalSection />
        </>
    )
}