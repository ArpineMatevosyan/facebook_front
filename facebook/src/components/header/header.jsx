import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSignOut } from "../../store/auth/slice";
import Button from "../button/button";

import styles from "./header.module.scss";

const Header = () => {
  const { signIn, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      {signIn && <h3 className={styles.user}>Welcome {name}</h3>}

      <nav>
        <Link to="/">Home</Link>
        {!signIn && <Link to="/login">Login</Link>}
        {!signIn && <Link to="/register">Register</Link>}
        {!signIn && <Link to="/account">My account</Link>}
      </nav>
      {signIn && (
        <Button variant="outlined" onClick={() => dispatch(setSignOut())}>
          Sign out
        </Button>
      )}
    </div>
  );
};

export default Header;
