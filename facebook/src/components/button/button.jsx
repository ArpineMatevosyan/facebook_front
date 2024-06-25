import Button from "@mui/material/Button";

import styles from "./button.module.scss";

const MainButton = ({ variant, children, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick} className={styles.myStyle}>
      {children}
    </Button>
  );
};

export default MainButton;
