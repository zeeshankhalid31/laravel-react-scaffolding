'use client'

import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import style from './list.module.css'
import { Suspense, useEffect, useRef, useState } from 'react'
import DataTable from '@/components/DataTable'
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import { Box, Button, Paper, TablePagination } from '@mui/material'

const GetUserListData = URL =>
    axios
        .get(URL)
        .then(res => res.data)
        .catch(error => {
            throw error
        })

export default function UserList() {
    const router = useRouter()

    const [rowsPerPage, setRowsPerPage] = useState(5);

    //#page1 routing on client side.
    const { asPath } = useRouter()
    const hash = asPath.split('#')[1]
    const pageNum = hash && hash.match(/\d+/) ? hash.match(/\d+/)[0] : 1
    console.log('hash:', hash, 'pageNum', pageNum)

    const [pageIndex, setPageIndex] = useState(pageNum)

    const { data: users, error } = useSWR(
        `/api/users?page=${pageIndex}&per_page=${rowsPerPage}`,
        GetUserListData,
    )

    const tableConfig = [
        { name: 'id', title: 'ID', edit: '/dashboard/user/' },
        { name: 'name', title: 'Name' },
        { name: 'email', title: 'Email' },
        { name: 'created_at', title: 'Created At', type: 'date' },
    ]
    console.log(users, error, pageIndex)

    useEffect(() => {
        router.push({ hash: `page${pageIndex}` })
    }, [pageIndex, asPath])

    const handleChangePage = (event, newPage) => {
        // setPage(newPage);
        setPageIndex(newPage + 1)
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPageIndex(0);
    };
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
                {!users || error ? (
                    <p>Loading information</p>
                ) : (
                    <>
                        <Box sx={{ width: '100%' }}>
                            <Paper sx={
                                { margin: 2 }
                            } >
                                <DataTable
                                    tableConfig={tableConfig}
                                    data={users.data}
                                />
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component='div'
                                    count={users.meta.total}
                                    rowsPerPage={users.meta.per_page}
                                    page={pageIndex - 1}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}

                                ></TablePagination>
                            </Paper>
                        </Box>
                    </>
                )}
            </Suspense>
        </AppLayout >
    )
}
