import React from 'react'
import ParticlesJsConfig from './particlesjs-config.json'
import Particles from 'react-particles-js'
import { Link, animateScroll as scroll, scroller } from 'react-scroll'

export default class HeroSection extends React.Component {
    render() {
        return (
            <div className="relative flex items-center w-full min-h-screen pb-20 text-white pt-28 bg-gradient-to-br from-purple-800 to-purple-700">
                <div className="absolute top-0 left-0 w-full h-full">
                    <Particles params={ParticlesJsConfig} />
                </div>
                <div className="static z-20 w-full px-8 mx-auto max-w-7xl">
                    <div className="grid w-full grid-flow-row grid-cols-12 gap-4 lg:gap-16">
                        <div className="flex flex-col items-center justify-center block col-span-12 px-8 mb-8 md:hidden md:col-span-7 md:px-0">
                            <div className="flex flex-col-reverse items-center w-full md:flex-row">
                                <div className="flex flex-row mt-8 mr-6 md:flex-col">
                                    <a target="_blank" href="https://web.facebook.com/MiraiDreamID" className="flex items-center justify-center w-12 h-12 mb-4 text-purple-900 transition-colors duration-300 ease-in-out border-2 border-purple-900 rounded-full hover:text-amber-300 hover:bg-purple-900">
                                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            {/* ! Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                        </svg>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/MiraiDream_ID" className="flex items-center justify-center w-12 h-12 mx-4 mb-4 text-purple-900 transition-colors duration-300 ease-in-out border-2 border-purple-900 rounded-full hover:text-amber-300 hover:bg-purple-900">
                                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            {/* Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                        </svg>
                                    </a>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCqEkLwmSD2ecYiJAf6lP20A" className="flex items-center justify-center w-12 h-12 mb-4 text-purple-900 transition-colors duration-300 ease-in-out border-2 border-purple-900 rounded-full hover:text-amber-300 hover:bg-purple-900">
                                        <svg className="flex justify-center w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            {/* ! Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                                        </svg>
                                    </a>
                                    {/* <a target="_blank" href="https://discord.com" className="flex items-center justify-center w-12 h-12 text-purple-900 transition-colors duration-300 ease-in-out border-2 border-purple-900 rounded-full hover:text-amber-300 hover:bg-purple-900">
                                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> */}
                                            {/* ! Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                            {/* <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"/>
                                        </svg>
                                    </a> */}
                                </div>
                                <div className="relative w-full h-full aspect-w-16 aspect-h-8">
                                    <div className="absolute w-full h-full bg-white rounded">
                                        <iframe className="absolute w-full h-full bg-white rounded" src="https://www.youtube.com/embed/nVI1AflPxWM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center col-span-12 px-8 text-center md:col-span-5 md:px-0 md:text-left">
                            <h3 className="mb-6 text-3xl font-bold">
                                Mirai Dream ID
                            </h3>
                            <p className="mb-6 text-xl leading-relaxed tracking-wider">
                                Sebuah tim dari Indonesia yang bergerak di dunia Entertainment. <i>Let's grow up and shine together</i>!
                            </p>
                            <div className="relative overflow-hidden h-14">
                                <Link to="about" smooth="easeInOut" duration={1000} className="inline-block w-48 px-4 py-2 font-semibold text-center text-purple-700 transition-colors duration-300 bg-white rounded hover:bg-purple-900 hover:text-amber-300">
                                    Selengkapnya
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center hidden col-span-12 px-8 md:block md:col-span-7 md:px-0">
                            <div className="flex items-center w-full">
                                <div className="flex flex-col mr-6">
                                    <a target="_blank" href="https://web.facebook.com/MiraiDreamID" className="flex items-center justify-center w-12 h-12 mb-4 text-purple-900 transition-colors duration-300 ease-in-out border-2 border-purple-900 rounded-full hover:text-amber-300 hover:bg-purple-900">
                                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            {/* ! Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                        </svg>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/MiraiDream_ID" className="flex items-center justify-center w-12 h-12 mb-4 text-purple-900 transition-colors duration-300 ease-in-out border-2 border-purple-900 rounded-full hover:text-amber-300 hover:bg-purple-900">
                                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            {/* Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                        </svg>
                                    </a>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCqEkLwmSD2ecYiJAf6lP20A" className="flex items-center justify-center w-12 h-12 mb-4 text-purple-900 transition-colors duration-300 ease-in-out border-2 border-purple-900 rounded-full hover:text-amber-300 hover:bg-purple-900">
                                        <svg className="flex justify-center w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            {/* ! Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                                        </svg>
                                    </a>
                                    {/* <a target="_blank" href="https://discord.com" className="flex items-center justify-center w-12 h-12 text-purple-900 transition-colors duration-300 ease-in-out border-2 border-purple-900 rounded-full hover:text-amber-300 hover:bg-purple-900">
                                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> */}
                                            {/* ! Font Awesome Pro 6.0.0-alpha3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                            {/* <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"/>
                                        </svg>
                                    </a> */}
                                </div>
                                <div className="relative w-full h-full aspect-w-16 aspect-h-8">
                                    <div className="absolute w-full h-full bg-white rounded">
                                        <iframe className="absolute w-full h-full bg-white rounded" src="https://www.youtube.com/embed/nVI1AflPxWM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}