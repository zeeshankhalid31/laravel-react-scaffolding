'use client'

import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import style from './list.module.css'
import { Suspense, useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'

const GetData = URL =>
    axios
        .get(URL)
        .then(res => res.data)
        .catch(error => {
            throw error
        })

export default function EditUser() {
    const router = useRouter()

    const { id } = router.query // need this pattern as router.query is only available on client side when ReactDom.hydrate.
    const [user, setUser] = useState()

    const { data, error } = useSWR(id ? `/api/users/${id}` : null, GetData)

    useEffect(() => {
        if (data) {
            setUser(data.data)
        }
    }, [data])

    const onChangeHandler = async event => {
        // event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = async event => {
        event.preventDefault()

        // API endpoint where we send form data.
        const endpoint = `/api/users/${user.id}`

        // Send the form data to our forms API on Vercel and get a response.
        await axios
            .put(endpoint, user)
            .then(res => {
                setUser(res.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    console.log('router', router, 'id', id, 'user', user)
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
            {user ? (
                <>
                    {/* <!-- Basic HTML Form --> */}
                    <form onSubmit={handleSubmit} method="post">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={user.name}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            defaultValue={user.email}
                            onChange={onChangeHandler}
                        />
                        <input
                            type="test"
                            defaultValue={user.updated_at}
                            readOnly
                        />
                        <button type="submit">Submit</button>
                    </form>
                </>
            ) : (
                <p>loading</p>
            )}
        </AppLayout>
    )
}
