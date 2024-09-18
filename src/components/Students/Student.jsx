import { useCallback, useMemo, useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { studentsDummy } from "./data";

const Student = () => {
  const [students, setStudents] = useState(studentsDummy);
  const [count, setCount] = useState(0);
  console.log(students);
  // const marks = [20, 40, 50, 60];

  // const totalMark = useMemo(() => {
  //   console.log("calculation process");
  //   return marks.reduce((prev, current) => prev + current);
  // }, [marks]);

  // console.log(totalMark);

  const handleClick = useCallback(() => {
    console.log("handleClick");
    //logic
  }, [students]);

  return (
    <div>
      <StudentForm setStudents={setStudents} />
      <StudentList
        students={students}
        setStudents={setStudents}
        handleClick={handleClick}
      />
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
};

export default Student;
