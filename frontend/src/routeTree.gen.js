import { RootRoute } from "./App";
import { IndexRoute } from "./App";

RootRoute.addChildren([IndexRoute]);

export const routeTree = RootRoute;