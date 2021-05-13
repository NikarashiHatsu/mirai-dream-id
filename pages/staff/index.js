// NextJS Components
import Head from 'next/head'

// Libraries
import Particles from 'react-particles-js'

// Custom Components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StaffCard from '../../components/StaffCard'
import ParticlesJsConfig from '../../components/particlesjs-config.json'

export default function Staff() {
    return (
        <>
            <Head>
                <title>Mirai Dream ID | Staff Page</title>
                <link rel="icon" href="/mirai_dream.webp" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend&family=Varela+Round&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />

            <div className="font-lexend">
                <div className="relative flex w-full min-h-screen pb-24 text-white bg-purple-700 pt-28">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Particles params={ParticlesJsConfig} />
                    </div>
                    <div className="static top-0 z-10 flex flex-col w-full mx-auto max-w-7xl">
                        <h2 className="text-4xl text-center text-white">
                            Mirai Dream Corporation
                        </h2>
                        <div className="grid w-full max-w-4xl grid-flow-row grid-cols-4 gap-6 mx-auto mt-10">
                            <StaffCard
                                image="/staff/isamu_riandi.webp"
                                name="Isamu Riandi"
                                role="Founder & CEO"
                                email="isamuriandri12@gmail.com" />
                            <StaffCard
                                image="/staff/pratama_m_iqbal.webp"
                                name="Pratama M. Iqbal"
                                role="Vice CEO"
                                email="-email-" />
                            <StaffCard
                                image="/staff/fuad_fauzi.webp"
                                name="Fuad Fauzi"
                                role="Bendahara - Marketing"
                                email="fuaddomon@gmail.com" />
                            <StaffCard
                                image="/staff/seisou.webp"
                                name="Seisou"
                                role="Discord Admin"
                                email="-email-" />
                            <StaffCard
                                image="/staff/reru_pi.webp"
                                name="Reru / Pi"
                                role="Social Media Admin"
                                email="-email-" />
                            <StaffCard
                                image="/staff/dimas_budi.webp"
                                name="Dimas Budi"
                                role="Video Clipper / MV Editor"
                                email="-email-" />
                            <StaffCard
                                image="/staff/aghits_nidallah.webp"
                                name="Aghits Nidallah"
                                role="Head Web Developer"
                                email="yourlovelydev@gmail.com" />
                            <StaffCard
                                name="Renzuku"
                                role="Web Dev, MV Editor, Layout Maker"
                                email="-email-" />
                            <div className="flex justify-center col-span-4">
                                <StaffCard
                                    image="/staff/tama.webp"
                                    name="Tama"
                                    role="Graphic Designer, Video Clipper"
                                    email="pratamaabjm@gmail.com" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center w-full min-h-screen text-white bg-yellow-300">
                    {/* Top Separator */}
                    <div className="absolute right-0 w-full h-8 bg-purple-500 -top-8 transform-gpu -skew-y-2"></div>
                    <div className="absolute right-0 w-full h-8 bg-purple-400 -top-4 transform-gpu -skew-y-1"></div>
                    <div className="absolute top-0 right-0 w-full h-8 bg-yellow-200"></div>
                    <div className="absolute right-0 w-full h-8 bg-yellow-300 top-4 transform-gpu skew-y-1"></div>

                    <div className="absolute top-0 left-0 z-0 w-full h-full">
                        <Particles params={ParticlesJsConfig} />
                    </div>
                    <div className="static top-0 z-10 flex flex-col w-full mx-auto max-w-7xl">
                        <h2 className="text-4xl text-center text-white text-gray-700">
                            Mirai Dream Studio
                        </h2>
                        <div className="flex justify-center">
                            <div className="grid w-full max-w-xl grid-flow-row grid-cols-3 gap-6 mx-auto mt-10">
                                <StaffCard
                                    image="/staff/zetsu.webp"
                                    className="text-gray-700"
                                    name="Zetsu"
                                    role="Head Quarter Mirai Dream Studio"
                                    email="m.rafly.indrawan@gmail.com" />
                                <StaffCard
                                    image="/staff/fatah.webp"
                                    className="text-gray-700"
                                    name="Fatah"
                                    role="Vice Head Quarter Mirai Dream Studio"
                                    email="alfatahmin9@gmail.com" />
                                <StaffCard
                                    className="text-gray-700"
                                    name="EiShaa"
                                    role="Vice Head Quarter Mirai Dream Studio"
                                    email="-email-" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center w-full min-h-screen pt-20 pb-10 text-white bg-blue-300">
                    {/* Top Separator */}
                    <div className="absolute right-0 w-full h-8 bg-yellow-200 -top-8 transform-gpu skew-y-2"></div>
                    <div className="absolute right-0 w-full h-8 bg-yellow-100 -top-4 transform-gpu skew-y-1"></div>
                    <div className="absolute top-0 right-0 w-full h-8 bg-blue-200"></div>
                    <div className="absolute right-0 w-full h-8 bg-blue-300 top-4 transform-gpu -skew-y-1"></div>

                    <div className="absolute top-0 left-0 z-0 w-full h-full">
                        <Particles params={ParticlesJsConfig} />
                    </div>
                    <div className="static top-0 z-10 flex flex-col w-full mx-auto max-w-7xl">
                        <h2 className="text-4xl text-center text-white">
                            Bagan Struktur Mirai Dream
                        </h2>
                        <div className="mx-auto mt-10 max-w-7xl">
                            <img className="max-h-screen bg-gray-100 border border-black rounded" src="/bagan_mirai_dream.webp" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}