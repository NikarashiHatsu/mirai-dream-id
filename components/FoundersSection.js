import Particles from 'react-particles-js'
import ParticlesJsConfig from '../components/particlesjs-config.json'
import StaffCard from './StaffCard'

export default function FounderSection() {
    return (
        <div className="relative flex items-center w-full min-h-screen text-white bg-yellow-300">
            {/* Top Separator */}
            <div className="absolute right-0 w-full h-8 bg-purple-500 -top-8 transform-gpu -skew-y-2"></div>
            <div className="absolute right-0 w-full h-8 bg-purple-400 -top-4 transform-gpu -skew-y-1"></div>
            <div className="absolute top-0 right-0 w-full h-8 bg-yellow-200"></div>
            <div className="absolute right-0 w-full h-8 bg-yellow-300 top-4 transform-gpu skew-y-1"></div>

            <div className="absolute top-0 left-0 z-0 w-full h-full">
                <Particles params={ParticlesJsConfig} />
            </div>

            <div className="static z-20 flex flex-col w-full px-8 pt-24 pb-20 mx-auto max-w-7xl">
                <h3 className="mb-8 text-3xl text-center text-gray-700">Founders</h3>
                <div className="grid max-w-2xl grid-flow-row grid-cols-1 gap-12 mx-auto md:gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center col-span-1">
                        <div className="relative w-32 h-32 mb-4 bg-white">
                            <img src="/staff/isamu_riandi.webp" className="absolute top-0 left-0 w-32 h-32 border-4 border-purple-800" />
                        </div>
                        <h4 className="mb-2 text-2xl font-semibold text-center text-gray-700">CEO Isamu Riandi</h4>
                        <p className="mb-4 leading-relaxed tracking-wider text-center text-gray-700">
                            Berpengalaman di dunia bisnis dan analisis, mempunyai keahlian dalam pemecahan masalah dan mengambil keputusan penting. Mempunyai keinginan mengembangkan dunia entertainment di Indonesia.
                        </p>
                        <div className="flex justify-center w-full">
                            <a className="block w-8 mb-2 text-gray-700" target="_blank" href="https://web.facebook.com/isamu.riandi">
                                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    {/* ! Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                </svg>
                            </a>
                            <a className="block w-8 text-gray-700" target="_blank" href="https://twitter.com/IsamuMiraiDream">
                                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    {/* Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center col-span-1">
                        <div className="relative w-32 h-32 mb-4 bg-white">
                            <img src="/staff/pratama_m_iqbal.webp" className="absolute top-0 left-0 w-32 h-32 border-4 border-purple-800" />
                        </div>
                        <h4 className="mb-2 text-2xl font-semibold text-center text-gray-700">Vice CEO Pratama M. Iqbal</h4>
                        <p className="mb-4 leading-relaxed tracking-wider text-center text-gray-700">
                            Mendalami bidang analitik dan perkembangan dunia entertaintment, mempunyai antusiasme dalam dunia Virtual Youtuber.  Mempunyai misi membawa angin perubahan dalam dunia Entertaintment dan Peranimasian di Indonesia.
                        </p>
                        <div className="flex justify-center w-full">
                            <a className="block w-8 mb-2 text-gray-700" target="_blank" href="https://www.facebook.com/pratama458">
                                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    {/* ! Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                </svg>
                            </a>
                            <a className="block w-8 text-gray-700" target="_blank" href="https://twitter.com/TamaNegi_37">
                                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    {/* Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <h3 className="mb-8 mt-24 text-3xl text-center text-gray-700">Our Partners</h3>
                <div className="grid grid-cols-2 grid-flow-row mx-auto gap-8">
                    <StaffCard
                        className="text-gray-700"
                        image="/partner/agil.png"
                        name="IniAgil"
                        youtube="https://www.youtube.com/channel/UCmJ0FuQ8idXqtXLXU9og7hA" />
                    <StaffCard
                        className="text-gray-700"
                        image="/partner/madelta.png"
                        name="Madelta"
                        youtube="https://www.youtube.com/channel/UCZLBe0sFhSQayVz4WmrQz7g" />
                </div>
            </div>
        </div>
    )
}