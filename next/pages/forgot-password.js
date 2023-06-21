import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard text='Reset Password'>
                <Typography sx={{ mt: 3 }}>
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </Typography>

                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                <Box component='form' onSubmit={submitForm} sx={{ mt: 3 }}>
                    {/* Email Address */}
                    <TextField
                        fullWidth
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                        margin='normal'
                        autoCapitalize='email'
                        helperText={errors.email ? errors.email : ''}
                        placeholder='Email Address'
                        label='Email Address'
                    />

                    <Button type='submit'
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >Email Password Reset Link</Button>
                </Box>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword
