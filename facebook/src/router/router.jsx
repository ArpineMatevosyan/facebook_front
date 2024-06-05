import { Routes, Route } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layouts/layout";
import { useSelector } from "react-redux";
import { mainRoute, signInRoute } from "./route";

const Router = () => {
  const { signIn } = useSelector((state) => state.auth);
  return (
    <Routes path="/" element={<Layout />}>
      {signIn
        ? signInRoute.map((route, idx) => (
            <Route path={route.path} element={route.element}></Route>
          ))
        : mainRoute.map((route, idx) => (
            <Route path={route.path} element={route.element}></Route>
          ))}
    </Routes>
  );
};

export default Router;
