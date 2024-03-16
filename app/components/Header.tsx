import Link from "next/link";

export default function HeaderComp() {
    return (
        <>
            <header className="sticky top-0 z-30 w-full p-6 bg-gray-800 sm:px-4 shadow">
                <div className="flex items-center justify-between mx-auto max-w-7xl">
                    <Link href="/">
                        <span className="text-2xl font-bold text-purple-600 font-serif">My Blogs</span>
                    </Link>
                    <div className="flex items-center space-x-1">
                        <ul className="hidden space-x-2 md:inline-flex">
                            <li><Link href="/" className="px-4 py-2 font-semibold text-white rounded">Home</Link></li>
                            <li><Link href="/about" className="px-4 py-2 font-semibold text-white rounded">About US</Link></li>

                        </ul>
                        <div className="inline-flex md:hidden">
                            <button className="flex-none px-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}