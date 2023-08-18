import { Profile } from "pages/Profile/Profile";
import { IRoute, RoutesBase } from "./interfaces";
import { Route } from "react-router-dom";
import { ComponentType, ReactNode, cloneElement, createElement } from "react";
import { ProtectedRoutesWrapper } from "app/providers/router/ui/ProtectedRoutesWrapper";


class ProtectedRoutes extends RoutesBase {
    wrapper: ComponentType<any>
    constructor(routes: IRoute[], wrapper: ComponentType<any>) {
        super(routes)
        this.wrapper = wrapper
    }

    generate(): JSX.Element[] {
        return this._routes.map((route: IRoute, index: number) => (
            <Route
                key={index}
                path={route.to}
                element={createElement(this.wrapper, {}, route.element)}
            />
        ));
    }



}

export const protectedRoutes = new ProtectedRoutes([
    {
        to: '/profile',
        element: <Profile />
    },
], ProtectedRoutesWrapper)




