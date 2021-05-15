import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed z-50 w-full py-4 bg-black between bg-opacity-20">
            <div className="flex justify-between w-full mx-auto max-w-7xl">
                <div className="flex items-center pl-4">
                    <img src="/mirai_dream.webp" className="w-8 h-8" />
                    <p className="hidden ml-4 font-semibold text-white sm:block">MIRAI DREAM ID</p>
                </div>

                <div className="flex items-center px-4 rounded-lg">
                    <Link href="/">
                        <a className="mr-6 text-sm font-semibold text-white hover:underline">Homepage</a>
                    </Link>
                    <Link href="/audition">
                        <a className="mr-6 text-sm font-semibold text-white hover:underline">Audition</a>
                    </Link>
                    <Link href="/staff">
                        <a className="mr-6 text-sm font-semibold text-white hover:underline">Staff</a>
                    </Link>
                    <a href="https://studio.mirai-dream.com" target="_blank" className="mr-6 text-sm font-semibold text-white hover:underline">
                        Studio (Coming Soon)
                    </a>
                    {/* Temporarily disabled */}
                    {/* <Link href="/legal">
                        <a className="text-sm font-semibold text-white hover:underline">Legal</a>
                    </Link> */}
                </div>
            </div>
        </nav>
    )
}