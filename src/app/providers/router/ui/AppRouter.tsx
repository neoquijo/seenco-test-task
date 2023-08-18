import { useAppSelector } from "app/providers/store/TheOnlyOneStore/store";
import { Routes } from "react-router-dom";
import { protectedRoutes } from 'shared/config/router/protectedRoutes';
import { publicRoutes } from 'shared/config/router/publicRoutes';


const AppRouter = () => {

    const { isAuth } = useAppSelector(s => s.authSlice)

    return (

        <Routes>
            {publicRoutes.generate()}
            {isAuth && protectedRoutes.generate()}
        </Routes>

    );
};

export default AppRouter;
