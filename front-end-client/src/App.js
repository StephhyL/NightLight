// import from other libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other Components
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Login from "./components/login_register/Login";
import Register from "./components/login_register/Register";
import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import Games from "./components/games/Games";
import Minesweeper from "./components/minesweeper/Minesweeper";

// import styling
import "./stylesheets/css/App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/games" element={<Games />} />
          <Route path="/minesweeper" element={<Minesweeper />} />
          <Route path="/*" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
