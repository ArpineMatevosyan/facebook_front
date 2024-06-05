import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../pages/home/home";

export const mainRoute = [
  { text: "home", path: "/", element: <Home /> },
  { text: "login", path: "/login", element: <Login /> },
  { text: "register", path: "/register", element: <Register /> },
  { text: "error", path: "*", element: <h1>Page not found</h1> },
];

export const signInRoute = [
  { text: "home", path: "/", element: <Home /> },
  { text: "error", path: "*", element: <h1>Page not found</h1> },
];
