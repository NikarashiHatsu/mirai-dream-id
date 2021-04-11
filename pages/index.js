// NextJS Components
import Head from 'next/head'

// Custom Components
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import FoundersSection from '../components/FoundersSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import TalentSection from '../components/TalentSection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>Mirai Dream ID | Homepage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <HeroSection />
            <TalentSection />
            <AboutSection />
            <FoundersSection />
            <ContactSection />
            <Footer />
        </>
    )
}