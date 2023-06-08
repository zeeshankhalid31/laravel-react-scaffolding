"use client";

import { ResponsiveNavButton } from "@/components/ResponsiveNavLink";
import { useAuth } from "@/hooks/auth";
import Link from "next/link";
import { useState } from "react";

export default function NavbarClient() {
    // const [user, setUser] = useState(false)
    const { user, logout } = useAuth({ middleware: 'guest' })

    return (
        <>
            {user ? (
                <>
                    <Link
                        href="/dashboard"
                        className="ml-4 text-sm text-gray-700 underline" >
                        Dashboard
                    </Link>
                    <ResponsiveNavButton onClick={logout}>Logout</ResponsiveNavButton>
                </>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="text-sm text-gray-700 underline">
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="ml-4 text-sm text-gray-700 underline">
                        Register
                    </Link>
                </>

            )
            }
        </>
    )
}

