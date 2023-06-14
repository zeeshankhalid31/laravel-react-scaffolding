"use client";

import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import style from './list.module.css'
import { Suspense, useEffect, useRef, useState } from 'react'
import DataTable from '@/components/DataTable'
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'

const GetData = (URL) => axios.get(URL)
    .then(res => res.data)
    .catch(error => { throw error })


export default function EditUser({ id }) {
    const router = useRouter();

    const { data: user, error } = useSWR(`/api/users/${router.query.id}`, GetData)

    console.log('id', router.query.id, 'user', user);

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users Edit
                </h2>
            }>
            <Head>
                <title>Users Edit</title>
            </Head>

            <Suspense fallback={<p>Loading user data ...</p>}>
                {/* <!-- Basic HTML Form --> */}
                <form action="/send-data-here" method="post">
                    <label for="first">First name:</label>
                    <input type="text" id="first" name="first" />
                    <label for="last">Last name:</label>
                    <input type="text" id="last" name="last" />
                    <button type="submit">Submit</button>
                </form>

            </Suspense>

        </AppLayout>
    )
}
