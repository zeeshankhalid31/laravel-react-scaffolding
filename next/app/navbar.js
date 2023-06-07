"use client";

import Link from "next/link";

export default () => {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/user/login">Login</Link>
            </li>
            <li>
                <Link href="/user/signup">Sign Up</Link>
            </li>
        </ul>
    );
};