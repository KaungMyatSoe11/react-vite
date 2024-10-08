/* eslint-disable react/prop-types */
import { memo, useContext } from "react";
import StudentCard from "./StudentCard";
import { StudentContext } from "../../context/StudentProvider";

const StudentList = () => {
  console.log("render student list");

  const { students, setStudents } = useContext(StudentContext);

  console.log(students);

  // const marks = [20, 40, 50, 60];
  const handleDelete = (id) => {
    console.log("delete", id);

    setStudents((prev) => [...prev.filter((st) => st.sID !== id)]);
  };

  return (
    <>
      <h1 className="text-xl font-bold">Student List</h1>
      <div className="flex gap-4 flex-wrap mt-4">
        {students.length > 0 &&
          students.map((st, index) => (
            <StudentCard
              key={index}
              name={st.name}
              major={st.major}
              sID={st.sID}
              avatar={st.avatar}
              setStudents={setStudents}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </>
  );
};

export default memo(StudentList);
