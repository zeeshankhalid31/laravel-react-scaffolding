import AuthCard from '@/components/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <GuestLayout>
            <AuthCard text='Sign up' >
                <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 3 }}>
                    <TextField
                        margin="normal"
                        autoComplete="name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                        onChange={event => setName(event.target.value)}
                        helperText={errors.name ? errors.name : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={event => setEmail(event.target.value)}
                        helperText={errors.email ? errors.email : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={event => setPassword(event.target.value)}
                        helperText={errors.password ? errors.password : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="passwordConfirmation"
                        label="Confirm Password"
                        type="password"
                        id="passwordConfirmation"
                        autoComplete="new-password"
                        onChange={event => setPasswordConfirmation(event.target.value)}
                        helperText={errors.password_confirmation ? errors.password_confirmation : ''}
                    />
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
