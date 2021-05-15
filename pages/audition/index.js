// NextJS Components
import Head from 'next/head'

// Libraries
import Particles from 'react-particles-js'
import Countdown from 'react-countdown'

// Custom Components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ParticlesJsConfig from '../../components/particlesjs-config.json'

export default function Audition() {
    const dateBeforeAudition = Date.parse("May 23, 2021. 07:00")
    const dateAfterAudition = Date.parse("May 30, 2021. 23:59")

    const renderedAfter = ({ days, hours, minutes, seconds, completed }) => {
        if(completed) {
            return <h3 className="mb-4 text-3xl">Audisi telah selesai! Sampai jumpa di audisi selanjutnya!</h3>
        }

        return (
            <div className="flex flex-col">
                <h3 className="mb-8 text-3xl">Audisi telah dimulai! Daftar sebelum</h3>
                <div className="flex flex-col lg:flex-row">
                    <span className="mb-4 lg:mb-0">{ days } Hari</span> <span className="hidden lg:block">-</span>
                    <span className="mb-4 lg:mb-0">{ hours } Jam</span> <span className="hidden lg:block">-</span>
                    <span className="mb-4 lg:mb-0">{ minutes } Menit</span> <span className="hidden lg:block">-</span>
                    <span className="mb-4 lg:mb-0">{ seconds } Detik</span>
                </div>

                <div className="flex justify-center">
                    <a className="px-4 py-2 mt-12 text-2xl text-blue-700 transition-colors bg-white rounded hover:bg-blue-800 hover:text-white" target="_blank" href="https://docs.google.com/forms/d/1KiDgazYV4SEwMI8uSfYbKppcLoU6E8OroSqrMMkScxM">
                        Daftar disini!
                    </a>
                </div>
            </div>
        )
    }

    const renderedBefore = ({ days, hours, minutes, seconds, completed }) => {
        if(completed) {
            return <Countdown
                date={ dateAfterAudition }
                renderer={ renderedAfter } />
        }

        return (
            <div className="flex flex-col">
                <h3 className="mb-8 text-3xl">Audisi akan dimulai dalam:</h3>

                <div className="flex flex-col justify-center lg:flex-row">
                    <span className="mb-4 text-2xl lg:text-5xl lg:mb-0">{ days } Hari</span> <span className="hidden mx-4 lg:block">-</span>
                    <span className="mb-4 text-2xl lg:text-5xl lg:mb-0">{ hours } Jam</span> <span className="hidden mx-4 lg:block">-</span>
                    <span className="mb-4 text-2xl lg:text-5xl lg:mb-0">{ minutes } Menit</span> <span className="hidden mx-4 lg:block">-</span>
                    <span className="mb-4 text-2xl lg:text-5xl lg:mb-0">{ seconds } Detik</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Mirai Dream ID | Audition Page</title>
                <link rel="icon" href="/mirai_dream.webp" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend&family=Varela+Round&display=swap" rel="stylesheet" />
            </Head>

            <Navbar />

            <div className="font-lexend">
                <div className="relative flex items-center justify-center w-full min-h-screen px-8 py-24 text-white bg-blue-700">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Particles params={ParticlesJsConfig} />
                    </div>
                    <div className="static top-0 z-10 flex flex-col w-full mx-auto max-w-7xl">
                        <h1 className="text-5xl text-center text-white">
                            <Countdown
                                date={ dateBeforeAudition }
                                renderer={ renderedBefore } />
                        </h1>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}