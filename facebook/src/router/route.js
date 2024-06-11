import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../pages/home/home";
import Account from "../pages/account/account";
import User from "../pages/user/user";
import Images from "../pages/user/images/images";
import Info from "../pages/user/info/info";
import News from "../pages/user/news/news";

export const guestRouter = [
  { text: "login", path: "/", element: <Login /> },
  { text: "register", path: "/register", element: <Register /> },
  { text: "error", path: "*", element: <h1>Page not found</h1> },
];

export const signInRoute = [
  { text: "home", path: "/", element: <h1>My home page</h1> },
  { text: "account", path: "/account", element: <Account /> },
  { text: "user", path: "/user", element: <User /> },
  { text: "images", path: "/images", element: <Images /> },
  { text: "info", path: "/info", element: <Info /> },
  { text: "createNews", path: "/news", element: <News /> },
  { text: "error", path: "*", element: <h1>Page not found</h1> },
];
