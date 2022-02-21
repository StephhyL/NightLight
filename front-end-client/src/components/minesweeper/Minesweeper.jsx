// import other Components
import MineHead from "./subComponents/mineHead/MineHead";
import MineBody from "./subComponents/mineBody/MineBody";

// import styling
import "../../stylesheets/css/Minesweeper.css";

const Minesweeper = () => {
  return (
    <div className="minesweeper">
      <MineHead />
      <MineBody />
    </div>
  );
};

export default Minesweeper;
