// import styling
import "../../../../stylesheets/css/MineHead.css";
import FaceIcon from "./FaceIcon";
import PointsTime from "./PointsTime";

const MineHead = () => {
  return (
    <div className="mine-head">
      <PointsTime />
      <FaceIcon />
      <PointsTime />
    </div>
  );
};

export default MineHead;
