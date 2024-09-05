/* eslint-disable react/prop-types */
import cssClasses from "./studentCard.module.css";
const StudentCard = ({ name, sID, major, avatar }) => {
  return (
    <div>
      <div className="studentHeader">
        <div>
          <img src={avatar} alt={name} className={cssClasses.studentCardImg} />
          <div>
            <h2>{name}</h2>
            <p>Student ID: {sID}</p>
          </div>
        </div>
      </div>
      <div className="studentMajor">Major: {major}</div>
    </div>
  );
};

// StudentCard.propTypes={
//   s
// }

export default StudentCard;
