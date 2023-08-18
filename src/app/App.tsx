
import './styles/index.scss';

import { AppRouter } from "app/providers/router";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import TopNavbar from 'widgets/TopNavbar/TopNavbar';
import { useAppDispatch, useAppSelector } from './providers/store/TheOnlyOneStore/store';
import { useLazyAuthVerifyQuery } from './providers/store/TheOnlyOneStore/API/authApi';
import { logout, setAuth, setUser } from './providers/store/TheOnlyOneStore/slices/authSlice';


const App = () => {
    const [verify, { data: user, error: authError }] = useLazyAuthVerifyQuery()
    const dispatch = useAppDispatch()
    const location = useLocation()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            verify('')
        }
        else dispatch(logout())
    }, [location.key])

    useEffect(() => {
        if (authError) {
            dispatch(logout())
        }
        else {
            dispatch(setAuth(true))
            console.log(user)
            dispatch(setUser(user))
        }
    }, [user, authError])

    return (


        <div className='app'>
            <TopNavbar />
            <AppRouter />
        </div>

    );
};

export default App;
