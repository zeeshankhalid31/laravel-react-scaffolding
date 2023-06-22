'use client'

import Link from 'next/link'
import Date from './Date'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export default function DataTable({ tableConfig, data }) {
    console.log(data)
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label='Table data'>
                    <TableHead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                        <TableRow key={`data-table-header-key`}>
                            {tableConfig.map(config => {
                                return (
                                    <TableCell
                                        key={`data-table-header-col-key-${config.name}`}
                                        scope="col"
                                        className="px-6 py-4">
                                        {config.title}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody className="border-b font-medium dark:border-neutral-500">
                        {data.map(item => {
                            return (
                                <TableRow
                                    className="border-b dark:border-neutral-500"
                                    key={`item-id-${item.id}`}>
                                    {tableConfig.map(config => {
                                        if (config.type === 'date') {
                                            return (
                                                <TableCell
                                                    key={`data-table-tbody-col-key-${config.name}`}
                                                    className="whitespace-nowrap px-6 py-4">
                                                    <Date
                                                        dateString={
                                                            item[config.name]
                                                        }
                                                    />
                                                </TableCell>
                                            )
                                        } else {
                                            return (
                                                <TableCell
                                                    key={`data-table-tbody-col-key-${config.name}`}
                                                    className="whitespace-nowrap px-6 py-4">
                                                    {config.edit ? (
                                                        <>
                                                            <Link
                                                                href={
                                                                    config.edit +
                                                                    '' +
                                                                    item[
                                                                    config.name
                                                                    ]
                                                                }>
                                                                {item[config.name]}
                                                            </Link>{' '}
                                                        </>
                                                    ) : (
                                                        item[config.name]
                                                    )}
                                                </TableCell>
                                            )
                                        }
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
