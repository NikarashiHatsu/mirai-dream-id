import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed flex px-6 py-4 bg-white shadow rounded-3xl top-8 right-8">
            <Link href="/">
                <a className="mr-6 text-sm hover:underline">Homepage</a>
            </Link>
            <Link href="/about">
                <a className="mr-6 text-sm hover:underline">About</a>
            </Link>
            <Link href="/legal">
                <a className="text-sm hover:underline">Legal</a>
            </Link>
        </nav>
    )
}