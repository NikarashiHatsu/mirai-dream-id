import Particles from 'react-particles-js'
import ParticlesJsConfig from '../components/particlesjs-config.json'

export default function ContactSection() {
    return (
        <div className="relative flex items-center justify-center w-full min-h-screen py-24 text-white bg-purple-700">
            {/* Top Separator */}
            <div className="absolute right-0 w-full h-8 bg-yellow-300 -top-8 transform-gpu skew-y-2"></div>
            <div className="absolute right-0 w-full h-8 bg-yellow-200 -top-4 transform-gpu skew-y-1"></div>
            <div className="absolute top-0 right-0 w-full h-8 bg-purple-500"></div>
            <div className="absolute right-0 w-full h-8 bg-purple-600 top-4 transform-gpu -skew-y-1"></div>
            <div className="absolute right-0 w-full h-8 bg-purple-700 top-8 transform-gpu -skew-y-2"></div>

            <div className="absolute top-0 left-0 w-full h-full">
                <Particles params={ParticlesJsConfig} />
            </div>
            <div className="static top-0 z-10 flex flex-col w-full mx-auto max-w-7xl">
                <h3 className="mb-6 text-3xl text-center">Hubungi Kami</h3>
                {/* Mirai Dream Corp */}
                {/* <form className="grid max-w-5xl grid-flow-row grid-cols-2 gap-6 mx-auto" method="POST" action="https://formspree.io/f/mgerazvv"> */}
                {/* Mirai Dream Studio */}
                <form className="grid max-w-5xl grid-flow-row grid-cols-2 gap-6 mx-auto" method="POST" action="https://formspree.io/f/xqkwplaw">
                    <div className="flex flex-col col-span-1">
                        <label for="nama">Nama</label>
                        <input className="px-4 py-2 mt-2 text-gray-700 border border-gray-700 rounded" name="nama" id="nama" type="text" required />
                    </div>
                    <div className="flex flex-col col-span-1">
                        <label for="email">Email</label>
                        <input className="px-4 py-2 mt-2 text-gray-700 border border-gray-700 rounded" name="email" id="email" type="email" required />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <label for="pesan">Pesan Anda</label>
                        <textarea className="px-4 py-2 mt-2 text-gray-700 border border-gray-700 rounded" name="pesan" id="pesan" rows="10" minLength="16" required></textarea>
                    </div>
                    <div className="flex justify-center col-span-2">
                        <button type="submit" className="px-4 py-2 font-bold text-purple-800 transition-colors duration-300 ease-in-out bg-yellow-300 rounded hover:bg-purple-900 hover:text-yellow-300">
                            Kirim
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}