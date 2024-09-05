// import './studentCard.css'
import {studentCardImg} from "./studentCard.module.css";
const StudentCard = () => {

  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/52688252?v=4"
        alt="Kaung Myat Soe"
        className={studentCardImg}
      />
      <p>Kaung Myat Soe</p>
    </div>
  );
};

export default StudentCard;
