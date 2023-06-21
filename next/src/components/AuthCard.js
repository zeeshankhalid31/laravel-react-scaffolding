import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Link, Typography } from '@mui/material'
import { Link as NextLink } from 'next/link'

const AuthCard = ({ text, children }) => (
    <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
            {text}
        </Typography>
        {children}
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 8, mb: 4 }}>
            {'Copyright © '}
            <Link component={NextLink} color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </Box>

    // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    //     <div>{logo}</div>

    //     <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
    //         {children}
    //     </div>
    // </div>
)

export default AuthCard
