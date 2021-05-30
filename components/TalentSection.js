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
                            <Tab className="outline-none">
                                <button className="px-4 py-2 mb-8 outline-none rounded border hover:text-yellow-300 font-semibold bg-transparent text-purple-700 hover:bg-purple-800 transition-colors duration-300 ease-in-out border-gray-700">
                                    Gen 2
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
                                                    <i>
                                                        -COMING SOON-
                                                    </i>
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
                                                    <p><i>-COMING SOON-</i></p>
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
                                                    <i>
                                                        -COMING SOON-
                                                    </i>
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
                                                    <p><i>-COMING SOON-</i></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </TabPanel>
                        <TabPanel className="w-full h-full flex items-center justify-center text-gray-700 text-3xl font-semibold">
                            <h3>-COMING SOON-</h3>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}