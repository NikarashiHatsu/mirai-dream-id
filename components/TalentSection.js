import Particles from 'react-particles-js'
import ParticlesJsConfig from '../components/particlesjs-config.json'

export default function TalentSection() {
    return (
        <div className="relative flex items-center w-full min-h-screen text-white bg-yellow-300">
            {/* Top Separator */}
            <div className="absolute right-0 w-full h-8 bg-purple-500 -top-8 transform-gpu skew-y-2"></div>
            <div className="absolute right-0 w-full h-8 bg-purple-400 -top-4 transform-gpu skew-y-1"></div>
            <div className="absolute top-0 right-0 w-full h-8 bg-yellow-200"></div>
            <div className="absolute right-0 w-full h-8 bg-yellow-300 top-4 transform-gpu -skew-y-1"></div>

            <div className="absolute top-0 left-0 z-0 w-full h-full">
                <Particles params={ParticlesJsConfig} />
            </div>

            <div className="static z-20 w-full mx-auto max-w-7xl">
                <h3 className="text-3xl text-center text-gray-700">-COMING SOON-</h3>
            </div>
        </div>
    )
}