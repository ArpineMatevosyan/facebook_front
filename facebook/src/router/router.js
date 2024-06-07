import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layouts/layout";
import { useSelector } from "react-redux";
import { signInRoute, guestRouter } from "./route";

const Router = () => {
  const signIn = false;
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
