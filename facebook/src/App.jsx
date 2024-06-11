import Layout from "./components/Layouts/layout";
import Router from "./router/router";
import { isSignIn } from "../src/store/auth/slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") ? true : false;
    dispatch(isSignIn(token));
  }, [dispatch]);

  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
