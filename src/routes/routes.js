import Discover from "../pages/Discover";
import Genres from "../pages/Genres";

const routesHome = [
  {
    path: "/discover/:name",
    exact: true,
    component: Discover,
  },
  {
    path: "/genres/:name",
    exact: true,
    component: Genres,
  },
];

export { routesHome };
