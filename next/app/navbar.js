import Link from 'next/link'
import NavbarClient from './navbarClient'

export default function Navbar() {
    return (
        <>
            <div className="relative flex items-top justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    <Link
                        className="ml-4 text-sm text-gray-700 underline"
                        href="/">
                        Home
                    </Link>
                    <NavbarClient />
                </div>
            </div>
        </>
    )
}
