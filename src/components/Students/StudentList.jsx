/* eslint-disable react/prop-types */
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  const studentContainer = { display: "flex", gap: "2rem" };

  return (
    <>
      <h1>Student List</h1>
      <div style={studentContainer}>
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
