import StudentCard from "./StudentCard";

const StudentList = () => {
  const studentContainer = { display: "flex", gap: "2rem" };
  return (
    <>
      <h1>Student List</h1>
      <div style={studentContainer}>
        <StudentCard />
        <StudentCard />
      </div>
    </>
  );
};

export default StudentList;
