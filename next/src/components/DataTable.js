import Date from './Date'

export default function DataTable({ tableConfig, data }) {
    console.log(data)
    return (
        <>
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr key={`data-table-header-key`}>
                        {tableConfig.map(config => {
                            return (
                                <th key={`data-table-header-col-key-${config.name}`} scope="col" className="px-6 py-4">
                                    {config.title}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="border-b font-medium dark:border-neutral-500">
                    {data.map(item => {
                        return (
                            <tr
                                className="border-b dark:border-neutral-500"
                                key={`item-id-${item.id}`}>
                                {tableConfig.map(config => {
                                    if (config.type === 'date') {
                                        return (
                                            <td
                                                key={`data-table-tbody-col-key-${config.name}`}
                                                className="whitespace-nowrap px-6 py-4">
                                                <Date
                                                    dateString={
                                                        item[config.name]
                                                    }
                                                />
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td
                                                key={`data-table-tbody-col-key-${config.name}`}
                                                className="whitespace-nowrap px-6 py-4">
                                                {item[config.name]}
                                            </td>
                                        )
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
