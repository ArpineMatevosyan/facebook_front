import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSignOut } from "../../store/auth/slice";
import Button from "../button/button";

import styles from "./header.module.scss";

const Header = () => {
  // const { signIn, name } = useSelector((state) => state.auth);
  const signIn = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOut() {
    // dispatch(setSignOut());
    // navigate("/");
  }

  return (
    <div className={styles.header}>
      <nav>
        {!signIn && <Link to="/">Login</Link>}
        {signIn && <Link to="/account">My account</Link>}
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
