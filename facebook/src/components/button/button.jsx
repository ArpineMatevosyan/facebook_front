import Button from "@mui/material/Button";

import clsx from "clsx";
import styles from "./button.module.scss";

const MainButton = ({ variant, children, onClick, className }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={clsx(styles.myStyle, className)}
    >
      {children}
    </Button>
  );
};

export default MainButton;
