import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Account from "../pages/account/account";
import User from "../pages/user/user";
import Images from "../pages/user/images/images";
import Info from "../pages/user/info/info";
import News from "../pages/user/news/news";
import Verify from "../pages/register/components/verify";
import ChangePass from "../pages/user/info/components/changes/changePass/changePass";
import ForgotPass from "../pages/login/components/forGotPass";

export const guestRouter = [
  { text: "login", path: "/", element: <Login /> },
  { text: "register", path: "/register", element: <Register /> },
  { text: "forGotPass", path: "/forGotPass", element: <ForgotPass /> },
  { text: "verify", path: "/verify", element: <Verify /> },
  { text: "error", path: "*", element: <h1>Page not found</h1> },
];

export const signInRoute = [
  { text: "account", path: "/", element: <Account /> },
  { text: "user", path: "/user", element: <User /> },
  { text: "images", path: "/images", element: <Images /> },
  { text: "info", path: "/info", element: <Info /> },
  { text: "createNews", path: "/news", element: <News /> },
  { text: "changePass", path: "/changePass", element: <ChangePass /> },
  { text: "error", path: "*", element: <h1>Page not found</h1> },
];
