import Particles from 'react-particles-js'
import ParticlesJsConfig from '../components/particlesjs-config.json'
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Modal from 'react-modal'
import React from 'react';

export default function TalentSection() {
    resetIdCounter();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    const customModalStyle = {
        content: {
            backgroundColor: '#EFF6FF'
        }
    }
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    function openModal2() {
        setIsOpen2(true);
    }

    function closeModal2() {
        setIsOpen2(false);
    }
    
    return (
        <div className="relative w-full min-h-screen text-white bg-yellow-300 pt-24 pb-20">
            {/* Top Separator */}
            <div className="absolute right-0 w-full h-8 bg-purple-500 -top-8 transform-gpu skew-y-2"></div>
            <div className="absolute right-0 w-full h-8 bg-purple-400 -top-4 transform-gpu skew-y-1"></div>
            <div className="absolute top-0 right-0 w-full h-8 bg-yellow-200"></div>
            <div className="absolute right-0 w-full h-8 bg-yellow-300 top-4 transform-gpu -skew-y-1"></div>

            <div className="absolute top-0 left-0 z-0 w-full h-full">
                <Particles className="absolute top-0 left-0 z-0" params={ParticlesJsConfig} />
            </div>

            <div className="max-w-7xl mx-auto py-4 z-10 relative">
                <h3 className="text-3xl text-center text-gray-700 upperacse mb-6">
                    Talents
                </h3>
                <div className="w-full">
                    <Tabs className="w-full">
                        <TabList className="flex justify-center">
                            <Tab className="outline-none">
                                <button className="px-4 py-2 mb-8 outline-none rounded border hover:text-yellow-300 font-semibold bg-transparent text-purple-700 hover:bg-purple-800 transition-colors duration-300 ease-in-out border-gray-700 mr-4">
                                    Gen 1
                                </button>
                            </Tab>
                        </TabList>

                        <TabPanel className="w-full h-full flex items-center justify-center text-gray-700 text-3xl font-semibold px-8">
                            <div className="grid grid-cols-2 grid-flow-row gap-4">
                                <button className="w-32 h-32 sm:w-64 sm:h-64 bg-white border-4 border-purple-700 transition-colors duration-300 ease-in-out" onClick={openModal}>
                                    <img src="/talents_thumbnail/talent_01.webp" />
                                </button>

                                <Modal
                                    closeTimeoutMS={200}
                                    isOpen={modalIsOpen}
                                    overlayClassName="z-50 fixed top-0 left-0 bottom-0 right-0 bg-gray-700 bg-opacity-75"
                                    onRequestClose={closeModal}
                                    style={customModalStyle}
                                >
                                    <div className="grid grid-cols-12 grid-flow-row gap-8">
                                        <div className="col-span-12 md:col-span-4">
                                            <img src="/talents/talent_01.webp" />
                                        </div>
                                        <div className="col-span-12 md:col-span-8">
                                            <div className="relative flex justify-center md:justify-between items-center mb-8">
                                                <h3 className="text-3xl md:text-left text-center">
                                                    Revina Scarlet
                                                </h3>
                                                <button className="absolute hidden md:flex top-8 right-8 md:relative font-semibold text-xl border w-8 h-8 rounded bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out items-center justify-center" onClick={closeModal}>
                                                    &times;
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-12 grid-rows-3 md:grid-rows-4 grid-flow-row gap-8">
                                                <div className="col-span-12 md:col-span-4 row-span-1 md:row-span-4">
                                                    <p className="text-lg mb-4">
                                                        Biodata Talent
                                                    </p>
                                                    <p><i>-COMING SOON-</i></p>
                                                </div>
                                                <div className="col-span-12 md:col-span-8 row-span-1 md:row-span-3">
                                                    <p className="text-lg mb-4">
                                                        Lore Talent
                                                    </p>
                                                    <p><i>-COMING SOON-</i></p>
                                                </div>
                                                <div className="col-span-12 md:col-span-8 row-span-1 md:row-span-1">
                                                    <p className="text-lg mb-4">
                                                        Sosial Media Talent
                                                    </p>
                                                    <div className="flex flex-row items-center">
                                                        <a href="https://twitter.com/RevinaScarlet">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 512 512">
                                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.facebook.com/Revina-ScarletMirai-Dream-ID-102504732064587/">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 320 512">
                                                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.instagram.com/revinascarlet/">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 448 512">
                                                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>

                                <button className="w-32 h-32 sm:w-64 sm:h-64 bg-white border-4 border-purple-700 transition-colors duration-300 ease-in-out" onClick={openModal2}>
                                    <img src="/talents_thumbnail/talent_02.webp" />
                                </button>

                                <Modal
                                    closeTimeoutMS={200}
                                    isOpen={modalIsOpen2}
                                    overlayClassName="z-50 fixed top-0 left-0 bottom-0 right-0 bg-gray-700 bg-opacity-75"
                                    onRequestClose={closeModal2}
                                    style={customModalStyle}
                                >
                                    <div className="grid grid-cols-12 grid-flow-row gap-8">
                                        <div className="col-span-12 md:col-span-4">
                                            <img src="/talents/talent_02.webp" />
                                        </div>
                                        <div className="col-span-12 md:col-span-8">
                                            <div className="relative flex justify-center md:justify-between items-center mb-8">
                                                <h3 className="text-3xl md:text-left text-center">
                                                    Yuuki Yozora
                                                </h3>
                                                <button className="absolute hidden md:flex top-8 right-8 md:relative font-semibold text-xl border w-8 h-8 rounded bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out items-center justify-center" onClick={closeModal2}>
                                                    &times;
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-12 grid-rows-3 md:grid-rows-4 grid-flow-row gap-8">
                                                <div className="col-span-12 md:col-span-4 row-span-1 md:row-span-4">
                                                    <p className="text-lg mb-4">
                                                        Biodata Talent
                                                    </p>
                                                    <p><i>-COMING SOON-</i></p>
                                                </div>
                                                <div className="col-span-12 md:col-span-8 row-span-1 md:row-span-3">
                                                    <p className="text-lg mb-4">
                                                        Lore Talent
                                                    </p>
                                                    <p><i>-COMING SOON-</i></p>
                                                </div>
                                                <div className="col-span-12 md:col-span-8 row-span-1 md:row-span-1">
                                                    <p className="text-lg mb-4">
                                                        Sosial Media Talent
                                                    </p>
                                                    <div className="flex flex-row items-center">
                                                        <a href="https://twitter.com/yuukiyozora1111">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 512 512">
                                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.facebook.com/Yuuki-YozoraMirai-Dream-ID-102359888747725/">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 320 512">
                                                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}