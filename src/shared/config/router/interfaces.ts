import { ComponentType, ReactNode } from "react";

export interface IRoute {
    to: string,
    element: ReactNode
}

export class RoutesBase {
    protected _routes: IRoute[];


    constructor(routes: IRoute[]) {
        this._routes = routes;
    }

    getRoutes = () => {
        return this._routes;
    };
}