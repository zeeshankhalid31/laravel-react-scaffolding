'use client'

import DataTable from "@/components/DataTable";
import axios from "@/lib/axios";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";


async function getUsersData(pageIndex) {
    const { data: users, error, mutate } = useSWR(`/api/user/list?=${pageIndex}`, () => axios.get(`/api/user/list?=${pageIndex}`)
        .then(red => res.data)
        .catch(error => {
            throw error
        })
    )
    return users;
}

export default function page() {
    const [pageIndex, setPageIndex] = useState(0)
    const users = getUsersData(pageIndex)
    

    return (
        <>
            <div>users list page</div>
            <Suspense fallback={<p>Loading user data ...</p>}>
                <DataTable data={users} />
                <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
                <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
            </Suspense>


        </>
    )
}
