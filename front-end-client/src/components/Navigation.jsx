//import from other libraries
import { useNavigate } from "react-router-dom";

// import from MUI
import Button from "@mui/material/Button";

// import styling
import "../stylesheets/css/Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <Button
        variant="text"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </Button>
      <Button
        variant="text"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
      <Button
        variant="text"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
      <Button
        variant="text"
        onClick={() => {
          navigate("/logout");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Navigation;
