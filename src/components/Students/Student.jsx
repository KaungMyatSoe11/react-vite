import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { studentsDummy } from "./data";

const Student = () => {
  const [students, setStudents] = useState(studentsDummy);
  console.log(students);

  return (
    <div>
      <StudentForm setStudents={setStudents} />
      <StudentList students={students} />
    </div>
  );
};

export default Student;
