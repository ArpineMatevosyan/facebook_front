import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layouts/layout";
import { useSelector } from "react-redux";
import { signInRoute, guestRouter } from "./route";
import Auth from "../store/auth/slice";

const Router = () => {
  const { signIn } = useSelector((state) => state.auth);
  // const signIn = localStorage.getItem("token") ? true : false;

  return (
    <Routes path="/" element={<Layout />}>
      {signIn
        ? signInRoute.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx}></Route>
          ))
        : guestRouter.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx}></Route>
          ))}
    </Routes>
  );
};

export default Router;
