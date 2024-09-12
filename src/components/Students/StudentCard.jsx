/* eslint-disable react/prop-types */
import { useMemo } from "react";
import cssClasses from "./studentCard.module.css";
const StudentCard = ({
  name,
  sID,
  major,
  avatar,
  setStudents,
  handleDelete,
}) => {
  const updateName = useMemo(() => {
    console.log("calculation process");
    return `Mg ${name}`;
  }, [name]);
  // console.log(totalMark);

  return (
    <div className="border p-[1rem] border-slate-600 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-90 hover:bg-slate-900 hover:text-white ">
      <div>
        <div>
          <img src={avatar} alt={name} className={cssClasses.studentCardImg} />
          <div>
            <h2>{updateName}</h2>
            <p>Student ID: {sID}</p>
          </div>
        </div>
      </div>
      <div>Major: {major}</div>
      {/* <div>totalMark :{totalMark}</div> */}
      <button
        onClick={() => handleDelete(sID)}
        className="bg-red-600 text-white rounded-sm p-3"
      >
        Delete
      </button>
    </div>
  );
};

// StudentCard.propTypes={
//   s
// }

export default StudentCard;
