// Next JS Components
import Head from 'next/head'
import ParticlesJsConfig from '../../components/particlesjs-config.json'
import Particles from 'react-particles-js'

// Custom Components
import Navbar from '../../components/Navbar'

export default function About() {
    return (
        <>
            <Head>
                <title>Mirai Dream ID | About</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend&family=Varela+Round&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />

            <div className="flex items-center justify-center w-full h-screen pt-16 bg-gray-100 border-b border-gray-300 bg-gradient-to-br from-purple-800 to-purple-700">
                <div className="absolute top-0 left-0 z-0 w-full h-full">
                    <Particles className="bg-opacity-0" params={ParticlesJsConfig} />
                </div>

                <div className="relative flex items-center justify-center p-6 pt-16 mx-auto bg-yellow-300 rounded w-80 font-lexend">
                    <img src="/mirai_dream.webp" className="absolute w-24 h-24 border-2 border-white rounded-full -top-12" />
                    <div className="flex flex-col w-full text-center">
                        <h3 className="text-3xl text-purple-900 uppercase">MIRAI DREAM ID</h3>
                        <hr className="my-2 border-b-2 border-purple-900" />
                        <h5 className="mb-4 text-xl text-purple-900 uppercase">ABOUT</h5>
                        <p className="text-purple-900">
                            Sebuah korporasi dari Indonesia yang bergerak di dunia Entertainment. Kami bertujuan untuk membawa angin perubahan bagi dunia entertainment terutama Virtual YouTuber dan juga dunia animasi.
                        </p>
                    </div>

                    <div className="absolute top-0 left-0 w-8 h-8 m-2 border-t-2 border-l-2 border-purple-700 rounded-tl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 m-2 border-t-2 border-r-2 border-purple-700 rounded-tr"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 m-2 border-b-2 border-l-2 border-purple-700 rounded-bl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 m-2 border-b-2 border-r-2 border-purple-700 rounded-br"></div>
                </div>
            </div>
        </>
    )
}