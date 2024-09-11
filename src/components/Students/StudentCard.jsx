/* eslint-disable react/prop-types */
import cssClasses from "./studentCard.module.css";
const StudentCard = ({ name, sID, major, avatar }) => {
  return (
    <div className="border p-[1rem] border-slate-600 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-90 hover:bg-slate-900 hover:text-white ">
      <div>
        <div>
          <img src={avatar} alt={name} className={cssClasses.studentCardImg} />
          <div>
            <h2>{name}</h2>
            <p>Student ID: {sID}</p>
          </div>
        </div>
      </div>
      <div>Major: {major}</div>
    </div>
  );
};

// StudentCard.propTypes={
//   s
// }

export default StudentCard;
