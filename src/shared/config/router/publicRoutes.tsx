import { Login } from "pages/Login/Login";
import { Main } from "pages/Main/Main";
import { News } from "pages/News/News";
import { IRoute, RoutesBase } from "./interfaces";
import { Route } from "react-router-dom";


class PublicRoutes extends RoutesBase {
    constructor(routes: IRoute[]) {
        super(routes)
    }

    generate(): JSX.Element[] {
        return this._routes.map((route: IRoute) => <Route path={route.to} element={route.element} />)
    }

}

export const publicRoutes = new PublicRoutes([
    {
        to: '/',
        element: <Main />
    },
    {
        to: '/news',
        element: <News />
    },
    {
        to: '/login',
        element: <Login />
    }
])




