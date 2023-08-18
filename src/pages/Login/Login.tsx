import { useLoginMutation } from 'app/providers/store/TheOnlyOneStore/API/authApi'
import css from './Login.module.scss'
import { FC, useEffect, useState } from 'react'
import { TextField, Button, Container, Typography, CssBaseline, } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/providers/store/TheOnlyOneStore/store';
import { useNavigate } from 'react-router-dom';
import { setAuth } from 'app/providers/store/TheOnlyOneStore/slices/authSlice';

interface IPProps {

}
export const Login: FC<IPProps> = ({ }) => {

    const [submit, { data, error }] = useLoginMutation()
    const [login, setLogin] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [message, setMessage] = useState<string>()
    const doLogin = async () => {
        setMessage('')
        submit({ username: login, password })
    }

    const { isAuth } = useAppSelector(s => s.authSlice)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (data) {
            const { token } = data
            dispatch(setAuth(true))
            localStorage.setItem('token', token)
        }
        if (error) {
            if ('data' in error) {
                setMessage(String(error.data));
            } else {
                setMessage('An error occurred')
            }
        }
    }, [data, error])
    useEffect(() => {
        if (isAuth) navigate('/profile')
    },
        [isAuth])

    return (<div className={'page-wrapper'}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography component="h1" variant="h5">
                    {message || 'Login'}
                </Typography>

                <form onSubmit={doLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="username"
                        name="username"
                        autoComplete="guest"
                        autoFocus
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="button"
                        onClick={doLogin}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={css.button}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    </div>)
}