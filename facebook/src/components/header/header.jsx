import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSignOut } from "../../store/auth/slice";
import { isSignIn } from "../../store/auth/slice";
import Button from "../button/button";

import styles from "./header.module.scss";

const Header = () => {
  const { signIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOut() {
    dispatch(isSignIn(false));
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className={styles.header}>
      <nav>
        {!signIn && <Link to="/">Login</Link>}
        {signIn && <NavLink to="/">Home</NavLink>}
        {signIn && <NavLink to="/account">My account</NavLink>}
      </nav>
      {signIn && (
        <Button variant="outlined" onClick={signOut}>
          Sign out
        </Button>
      )}
    </div>
  );
};

export default Header;
