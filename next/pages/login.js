import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    TextField,
} from '@mui/material'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <GuestLayout>
            <AuthCard text="Sign in">
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />
                <Box
                    component="form"
                    onSubmit={submitForm}
                    noValidate
                    sx={{ mt: 3 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                        helperText={errors.email ? errors.email : ''}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoCapitalize="current-password"
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        helperText={errors.password ? errors.password : ''}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                value="remember"
                                name="remember"
                                color="primary"
                                onChange={event =>
                                    setShouldRemember(event.target.checked)
                                }
                            />
                        }
                        label="Remember me"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Sign in
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="/forgot-password" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
