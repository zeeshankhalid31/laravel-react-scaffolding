import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import style from './user-list.module.css'

export default function UserList() {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users List
                </h2>
            }>
            <Head>
                <title>Users List</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(
                        `script loaded correctly, window.FB has been populated`,
                    )
                }
            />
            <div className={style.container}>user list pagination</div>
            <Image
                src="/images/profile.jpg"
                alt="Your Name"
                width={400}
                height={400}
            />
        </AppLayout>
    )
}
