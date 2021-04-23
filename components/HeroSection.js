import Head from 'next/head'
import React from 'react'

export default class HeroSection extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js" integrity="sha512-jq8sZI0I9Og0nnZ+CfJRnUzNSDKxr/5Bvha5bn7AHzTnRyxUfpUArMzfH++mwE/hb2efOo1gCAgI+1RMzf8F7g==" crossorigin="anonymous"></script>
                </Head>
                <div className="flex items-center w-full h-screen pt-20 text-white border-b bg-gradient-to-br from-purple-800 to-purple-500">
                    <div className="w-full mx-auto max-w-7xl">
                        <div className="grid w-full grid-flow-row grid-cols-12">
                            <div className="col-span-5">
                                <h3 className="mb-6 text-3xl font-bold">
                                    Mirai Dream ID
                                </h3>
                                <p className="mb-6 text-xl leading-relaxed tracking-wider">
                                    Veniam consectetur cillum nostrud ipsum officia minim. Duis do veniam ex cupidatat reprehenderit. Veniam cupidatat proident ad est dolor id laborum incididunt.
                                </p>
                                <div className="relative overflow-hidden w-36 h-14">
                                    <button className="w-32 py-2 font-semibold text-purple-700 transition-colors duration-300 bg-white rounded hover:bg-purple-900 hover:text-amber-300">
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}