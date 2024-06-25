import Header from "../header/header";
import { useSelector, useDispatch } from "react-redux";

import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  const { signIn } = useSelector((state) => state.auth);

  return (
    <div className={styles.layout}>
      {signIn && <Header />}
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
