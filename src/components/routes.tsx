import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Main from "./Main";
import Privacy from "./pages/privacy/Privacy";
import Login from "./pages/login/Login";
import DiscussProject from "./pages/discussProject/DiscussProject";
import Websterz from "./pages/portfolio/portfolioItems/Websterz";

const routes: Array<Object> = [
  {
    path: "/",
    exact: true,
    component: Main,
  },
  {
    path: "/portfolio",
    exact: true,
    component: Portfolio,
  },
  {
    path: "/websterz",
    exact: true,
    component: Websterz,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/privacy",
    exact: true,
    component: Privacy,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/discuss",
    exact: true,
    component: DiscussProject,
  },
];

export default routes;
