import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import style from './list.module.css'
import { Suspense, useEffect, useState } from 'react'
import DataTable from '@/components/DataTable'
import useSWR from 'swr'
import axios from '@/lib/axios'

const GetUserListData = (pageIndex) => axios.get(`/api/users?page=${pageIndex}&limit=10`)
    .then(res => res.data)
    .catch(error => { throw error })




export default function UserList() {
    const [ pageIndex, setPageIndex ] = useState(0)
    const { data: users, error } = useSWR(`/api/users?page=${pageIndex}&limit=10`, GetUserListData)

    const tableConfig = [
        { name: 'name', title: 'Name' },
        { name: 'email', title: 'Email' },
        { name: 'created_at', title: 'Created At', type: 'date' },
    ]
    console.log(users, error);

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

            <title className={style.container}>Users List</title>
            <Suspense fallback={<p>Loading user data ...</p>}>
                {
                    (!users || error) ?
                        <p>Loading information</p>
                        :
                        <>
                            <DataTable tableConfig={tableConfig} data={users.data} />
                            <button onClick={() => setPageIndex(pageIndex == 0 ? 0 : pageIndex - 1)}>Previous</button>
                        </>
                }

            </Suspense>

        </AppLayout>
    )
}
