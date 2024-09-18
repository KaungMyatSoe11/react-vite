import { useContext } from "react";
import { StudentContext } from "../../context/StudentProvider";

const Student = () => {
  const { students } = useContext(StudentContext);

  console.log(students);

  return <div>{students.isLoading ? "loading.." : students.data.length}</div>;
};

export default Student;
