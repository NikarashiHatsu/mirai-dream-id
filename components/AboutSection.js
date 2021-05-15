import ParticlesJsConfig from './particlesjs-config.json'
import Particles from 'react-particles-js'

export default function AboutSection() {
    return (
        <div className="relative flex items-center w-full px-8 text-white bg-purple-700" id="about">
            {/* Top Separator */}
            <div className="absolute right-0 w-full h-8 bg-yellow-300 -top-8 transform-gpu skew-y-2"></div>
            <div className="absolute right-0 w-full h-8 bg-yellow-200 -top-4 transform-gpu skew-y-1"></div>
            <div className="absolute top-0 right-0 w-full h-8 bg-purple-500"></div>
            <div className="absolute right-0 w-full h-8 bg-purple-600 top-4 transform-gpu -skew-y-1"></div>
            <div className="absolute right-0 w-full h-8 bg-purple-700 top-8 transform-gpu -skew-y-2"></div>

            <div className="absolute top-0 left-0 w-full h-full">
                <Particles className="w-full h-full" params={ParticlesJsConfig} />
            </div>

            <div className="grid items-center grid-flow-row grid-cols-11 gap-6 pt-24 pb-20 mx-auto max-w-7xl">
                <div className="flex flex-col col-span-12 mb-16 lg:col-span-5 lg:mb-0">
                    <h2 className="text-4xl font-bold tracking-widest text-yellow-300 uppercase">
                        Tentang Kami
                    </h2>
                    <p className="mt-4 text-lg leading-loose text-yellow-200">
                        Sebuah korporasi dari Indonesia yang bergerak di dunia Entertainment. Kami bertujuan untuk membawa angin perubahan bagi dunia entertainment terutama Virtual YouTuber dan juga dunia animasi.
                    </p>
                </div>
                <div className="relative flex items-start justify-center h-full col-span-12 p-6 pt-16 mx-auto bg-yellow-300 rounded md:col-span-6 lg:col-span-3">
                    <img src="/mirai_dream.webp" className="absolute w-24 h-24 border-2 border-white rounded-full -top-12" />
                    <div className="flex flex-col w-full text-center">
                        <h3 className="text-3xl text-purple-900 uppercase">MIRAI DREAM ID</h3>
                        <hr className="my-2 border-b-2 border-purple-900" />
                        <h5 className="mb-4 text-xl text-purple-900 uppercase">VISI</h5>
                        <p className="text-purple-900">
                            Menjadikan wadah untuk orang-orang bertalenta mengembangkan potensi dan impiannya melalui dunia virtual, serta menghibur masyarakat dengan konten-konten berkualitas yang dapat dinikmati seluruh kalangan.
                        </p>
                    </div>

                    <div className="absolute top-0 left-0 w-8 h-8 m-2 border-t-2 border-l-2 border-purple-700 rounded-tl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 m-2 border-t-2 border-r-2 border-purple-700 rounded-tr"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 m-2 border-b-2 border-l-2 border-purple-700 rounded-bl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 m-2 border-b-2 border-r-2 border-purple-700 rounded-br"></div>
                </div>
                <div className="relative flex items-start justify-center h-full col-span-12 p-6 pt-6 mx-auto bg-yellow-300 rounded md:pt-16 md:col-span-6 lg:col-span-3">
                    <img src="/mirai_dream.webp" className="absolute hidden w-24 h-24 border-2 border-white rounded-full md:block -top-12" />
                    <div className="flex flex-col w-full text-center">
                        <h3 className="text-3xl text-purple-900 uppercase">MIRAI DREAM ID</h3>
                        <hr className="my-2 border-b-2 border-purple-900" />
                        <h5 className="mb-4 text-xl text-purple-900 uppercase">MISI</h5>
                        <ol className="pl-4 list-decimal">
                            <li className="text-left text-purple-900">Menciptakan talent-talent berkualitas yang memiliki talenta diberbagai bidang dan aspek.</li>
                            <li className="text-left text-purple-900">Menghadirkan konten-konten orisinil berkualitas yang dapat dinikmati masyarakat.</li>
                            <li className="text-left text-purple-900">Memberikan hiburan berkualitas kepada masyarakat seluruh kalangan.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}