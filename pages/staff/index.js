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
                        <h2 className="mb-4 text-4xl text-center text-white">
                            Mirai Dream Corporation
                        </h2>
                        <a className="text-center underline" href="mailto:miraidreamid@gmail.com">
                            miraidreamid@gmail.com
                        </a>
                        <div className="grid w-full max-w-4xl grid-flow-row grid-cols-1 gap-8 mx-auto mt-10 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            <StaffCard
                                image="/staff/isamu_riandi.webp"
                                name="Isamu Riandi"
                                role="Founder & CEO"
                                facebook="https://web.facebook.com/isamu.riandi"
                                twitter="https://twitter.com/IsamuMiraiDream" />
                            <StaffCard
                                image="/staff/pratama_m_iqbal.webp"
                                name="Pratama M. Iqbal"
                                role="Vice CEO"
                                facebook="https://www.facebook.com/pratama458"
                                twitter="https://twitter.com/TamaNegi_37" />
                            <StaffCard
                                image="/staff/fuad_fauzi.webp"
                                name="Fuad Fauzi"
                                role="Bendahara - Marketing"
                                facebook="https://www.facebook.com/fuad47jha" />
                            <StaffCard
                                image="/staff/seisou.webp"
                                name="Seisou"
                                role="Discord Admin"
                                twitter="https://twitter.com/seisomine" />
                            <StaffCard
                                image="/staff/reru_pi.webp"
                                name="Reru / Pi"
                                role="Social Media Admin"
                                twitter="https://twitter.com/ReRunotReU" />
                            <StaffCard
                                image="/staff/dimas_budi.webp"
                                name="Dimas Budi"
                                role="Video Clipper / MV Editor"
                                facebook="https://www.facebook.com/pranoto.dimas.7" />
                            <StaffCard
                                image="/staff/aghits_nidallah.webp"
                                name="Aghits Nidallah"
                                role="Head Web Developer"
                                facebook="https://facebook.com/irlnidallah"
                                twitter="https://twitter.com/NikarashiHatsu" />
                            <StaffCard
                                name="Renzuku"
                                role="Web Dev, MV Editor, Layout Maker" />
                            <StaffCard
                                image="/staff/dani.webp"
                                name="Dani"
                                role="Graphic Designer, Video Clipper"
                                facebook="https://www.facebook.com/pranoto.dimas.7"
                                twitter="https://twitter.com/roe2ro" />
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center w-full min-h-screen pb-24 text-white bg-yellow-300 pt-28">
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
                        <a className="text-center text-gray-700 underline" href="mailto:miraidreamstudio@gmail.com">
                            miraidreamstudio@gmail.com
                        </a>
                        <div className="flex justify-center">
                            <div className="grid w-full max-w-2xl grid-flow-row grid-cols-1 gap-8 mx-auto mt-10 sm:grid-cols-3 sm:gap-6">
                                <StaffCard
                                    image="/staff/zetsu.webp"
                                    className="text-gray-700"
                                    name="Zetsu"
                                    role="Head Quarter Mirai Dream Studio"
                                    facebook="https://www.facebook.com/ZetsubouOu/"
                                    twitter="https://twitter.com/zetsuhere" />
                                <StaffCard
                                    image="/staff/fatah.webp"
                                    className="text-gray-700"
                                    name="Fatah"
                                    role="Vice Head Quarter Mirai Dream Studio"
                                    facebook="https://www.facebook.com/sadao.fatah"
                                    twitter="https://twitter.com/slfatah" />
                                <StaffCard
                                    className="text-gray-700"
                                    name="EiShaa"
                                    role="Vice Head Quarter Mirai Dream Studio"
                                    twitter="https://twitter.com/shaacwan" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}