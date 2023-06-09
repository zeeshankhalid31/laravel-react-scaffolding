'use client'

import { ResponsiveNavLink } from '@/components/ResponsiveNavLink'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import { useState } from 'react'

export default function NavbarClient() {
    // const [user, setUser] = useState(false)
    const { user, logout } = useAuth({ middleware: 'guest' })

    return (
        <>
            {user ? (
                <>
                    <li
                        className="mb-4 lg:mb-0 lg:pr-2"
                        data-te-nav-item-ref>
                        <Link
                            href="/dashboard"
                            className="ml-4 text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    </li>
                    <li
                        className="mb-4 lg:mb-0 lg:pr-2"
                        data-te-nav-item-ref>
                        <Link onClick={logout} href="#!">
                            Logout
                        </Link>
                    </li>
                </>
            ) : (
                <>
                    <li
                        className="mb-4 lg:mb-0 lg:pr-2"
                        data-te-nav-item-ref>
                        <Link
                            href="/login"
                            className="text-sm text-gray-700 underline">
                            Login
                        </Link>
                    </li>
                    <li
                        className="mb-4 lg:mb-0 lg:pr-2"
                        data-te-nav-item-ref>
                        <Link
                            href="/register"
                            className="ml-4 text-sm text-gray-700 underline">
                            Register
                        </Link>
                    </li>
                </>
            )}
        </>
    )
}
