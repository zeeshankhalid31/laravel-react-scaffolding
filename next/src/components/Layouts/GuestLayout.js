import { Avatar, Box } from '@mui/material'
import Head from 'next/head'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            {children}
            {/* <div className="font-sans text-gray-900 antialiased">
                {children}
            </div> */}
        </div>
    )
}

export default GuestLayout
