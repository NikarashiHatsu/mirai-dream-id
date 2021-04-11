// Next JS Components
import Head from 'next/head'

// Custom Components
import Navbar from '../../components/Navbar'
import TeamSection from '../../components/TeamSection'

export default function About() {
    return (
        <>
            <Head>
                <title>Mirai Dream ID | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <TeamSection />
        </>
    )
}