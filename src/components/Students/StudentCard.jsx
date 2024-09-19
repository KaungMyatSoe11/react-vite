/* eslint-disable react/prop-types */
import { memo, useContext, useState } from "react";
import cssClasses from "./studentCard.module.css";
import { StudentContext } from "../../context/StudentProvider";
const StudentCard = ({ student }) => {
  const { name, studentCode, major, avatar, _id } = student;
  const { dispatch } = useContext(StudentContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteStudent = async (sId) => {
    try {
      const res = await fetch(
        "https://st-api.kaungmyatsoe.dev/api/v1/students/" + sId,
        {
          method: "DELETE",
          headers: {
            key:
              "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w",
          },
        }
      );
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        return data.student;
      }
      return null;
    } catch (error) {
      console.log(error);
      alert("Error");
      return null;
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    const deletedStudent = await deleteStudent(_id);
    if (deletedStudent._id) {
      dispatch({
        type: "DELETE_STUDENT",
        payload: { _id: deletedStudent._id },
      });
    }
    setIsDeleting(false);
  };

  return (
    <div className="border p-[1rem] border-slate-600 rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-90 hover:bg-slate-900 hover:text-white ">
      <div>
        <div>
          <img src={avatar} alt={name} className={cssClasses.studentCardImg} />
          <div>
            <h2>{name}</h2>
            <p>Student ID: {studentCode}</p>
          </div>
        </div>
      </div>
      <div>Major: {major}</div>
      {/* <div>totalMark :{totalMark}</div> */}
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white rounded-sm p-3"
      >
        {isDeleting ? "Processing" : "Delete"}
      </button>
    </div>
  );
};

// StudentCard.propTypes={
//   s
// }

export default memo(StudentCard);
