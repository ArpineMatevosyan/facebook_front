import Button from "@mui/material/Button";

const MainButton = ({ variant, children, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MainButton;
