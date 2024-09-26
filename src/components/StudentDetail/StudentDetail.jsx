/* eslint-disable react/prop-types */

import useStudent from "../../hooks/useStudent";

const StudentDetail = ({ code }) => {
  
  const { state } = useStudent();
  console.log(state.students);
  const student = state.students.find((st) => st.studentCode == code);
  console.log(student);

  return <div>StudentDetail/{student.name}</div>;
};

export default StudentDetail;
