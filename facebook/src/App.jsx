import Layout from "./components/Layouts/layout";
import Router from "./router/router";
import { isSignIn } from "../src/store/auth/slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//import { getUserInfo } from "./services/userInfo";
import { UserInfoAPI } from "./services/userInfo";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") ? true : false;
    dispatch(isSignIn(token));
    dispatch(UserInfoAPI.getUserInfo());
  }, [dispatch]);

  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
