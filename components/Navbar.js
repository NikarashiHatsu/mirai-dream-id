import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed w-full py-4 bg-black between bg-opacity-20">
            <div className="flex justify-between w-full mx-auto max-w-7xl">
                <div className="flex items-center">
                    <img src="/mirai_dream.webp" className="w-8 h-8" />
                    <p className="ml-4 font-semibold text-white">MIRAI DREAM ID</p>
                </div>
                
                <div className="flex items-center px-4 rounded-lg">
                    <Link href="/">
                        <a className="mr-6 text-sm font-semibold text-white hover:underline">Homepage</a>
                    </Link>
                    <Link href="/about">
                        <a className="mr-6 text-sm font-semibold text-white hover:underline">About</a>
                    </Link>
                    <Link href="/legal">
                        <a className="text-sm font-semibold text-white hover:underline">Legal</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}