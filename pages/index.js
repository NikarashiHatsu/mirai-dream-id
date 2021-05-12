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
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend&family=Varela+Round&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />

            <div className="font-lexend">
                <HeroSection />         {/* Done */}
                <TalentSection />
                <AboutSection />        {/* Done */}
                <FoundersSection />
                <ContactSection />
                <Footer />              {/* Done */}
            </div>
        </>
    )
}