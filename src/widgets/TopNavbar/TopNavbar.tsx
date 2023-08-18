import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import css from './TopNavbar.module.scss';
import { useAppSelector } from 'app/providers/store/TheOnlyOneStore/store';
import { useDispatch } from 'react-redux';
import { logout } from 'app/providers/store/TheOnlyOneStore/slices/authSlice';

const TopNavbar = () => {

    const navigate = useNavigate()
    const { isAuth } = useAppSelector(s => s.authSlice)
    const dispatch = useDispatch()

    return (
        <AppBar position="static" className={css.navbar}>
            <div className={css.public}>
                <span onClick={() => navigate('/')}>
                    <Typography variant="h6">Main</Typography>
                </span>
                <span onClick={() => navigate('/news')}>
                    <Typography variant="h6">News</Typography>
                </span>
                {isAuth && <span onClick={() => navigate('/profile')}>
                    <Typography variant="h6">Profile</Typography>
                </span>}
            </div>
            <div className={css.profile}>
                {isAuth ? <span onClick={() => {
                    navigate('/login')
                    dispatch(logout())
                }}>
                    <Typography variant="h6">Logout</Typography>
                </span> :
                    <span onClick={() => navigate('/login')}>
                        <Typography variant="h6">Login</Typography>
                    </span>
                }
            </div>

        </AppBar>
    );
};

export default TopNavbar;
