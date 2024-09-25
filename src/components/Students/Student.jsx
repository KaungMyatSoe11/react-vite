import useStudent from "../../hooks/useStudent";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const Student = () => {
  const { dispatch } = useStudent();
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    dispatch({ type: "FILTER", payload: { major: e.target.value } }); //payload.major
  };
  return (
    <div>
      <StudentForm />
      <div>
        <select onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="english">English</option>
          <option value="math">Math</option>
        </select>
      </div>
      <StudentList />
    </div>
  );
};

export default Student;
