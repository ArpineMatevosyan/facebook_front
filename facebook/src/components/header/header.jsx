import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./header.module.scss";

const Header = () => {
  const { signIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <nav>
        {signIn && <NavLink to="/">Home</NavLink>}
        {signIn && <NavLink to="/account">My account</NavLink>}
        <Link to="/messages">Messages</Link>
        <Link to="/images">Gallery</Link>
        <Link to="/info">Settings</Link>
      </nav>
    </div>
  );
};

export default Header;
