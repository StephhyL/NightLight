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
      <div className="left-nav">
        <Button
          variant="text"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          variant="text"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </Button>
      </div>
      <div className="right-nav">
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
    </div>
  );
};

export default Navigation;
