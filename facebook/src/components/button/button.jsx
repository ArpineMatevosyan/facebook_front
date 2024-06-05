import Button from "@mui/material/Button";

const button = ({ variant, children, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default button;
