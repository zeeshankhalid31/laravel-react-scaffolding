'use client'

import DataTable from '@/components/DataTable'
import axios from '@/lib/axios'
import { Suspense, useEffect, useState } from 'react'
import useSWR from 'swr'

function getUsersData(pageIndex) {
    const { data: users, error, mutate } = useSWR(
        `/api/users?page=${pageIndex}`,
        () =>
            axios
                .get(`/api/users?page=${pageIndex}`)
                .then(res => res.data)
                .catch(error => {
                    throw error
                }),
    )
    // console.log(returnData);
    // return {}
    return { users, error }
}

export default function page() {
    const [pageIndex, setPageIndex] = useState(0)
    const { users, error } = getUsersData(pageIndex)
    // const {users} = getUsersData(pageIndex)
    if (!users) return <p>loading user info</p>

    const tableConfig = [
        { name: 'name', title: 'Name' },
        { name: 'email', title: 'Email' },
        { name: 'created_at', title: 'Created At', type: 'date' },
    ]

    return (
        <>
            <div>users list page</div>
            <Suspense fallback={<p>Loading user data ...</p>}>
                <DataTable tableConfig={tableConfig} data={users.data} />
                <button
                    onClick={() =>
                        setPageIndex(pageIndex > 0 ? pageIndex - 1 : 0)
                    }>
                    Previous
                </button>
                <button onClick={() => setPageIndex(pageIndex + 1)}>
                    Next
                </button>
            </Suspense>
        </>
    )
}
