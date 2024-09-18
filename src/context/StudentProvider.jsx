import React, { createContext, useState } from "react";
import { studentsDummy } from "../data";

export const StudentContext = createContext(null);

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(studentsDummy);
  return (
    <StudentContext.Provider value={{ students,setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
