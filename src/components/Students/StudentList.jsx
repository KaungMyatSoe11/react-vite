/* eslint-disable react/prop-types */
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <>
      <h1 className="text-xl font-bold">Student List</h1>
      <div className="flex gap-4 flex-wrap mt-4">
        {students.map((st, index) => (
          <StudentCard
            key={index}
            name={st.name}
            major={st.major}
            sID={st.sID}
            avatar={st.avatar}
          />
        ))}
      </div>
    </>
  );
};

export default StudentList;
