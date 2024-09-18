/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { StudentContext } from "../../context/StudentProvider";

const StudentForm = () => {
  const { setStudents } = useContext(StudentContext);

  const refName = useRef(null);
  const refAvatar = useRef(null);
  const refMajor = useRef(null);
  

  const getID = () => {
    return Math.round(Math.random() * 1000);
  };

  const frmReset = () => {
   
    refAvatar.current.value = "";
    refName.current.value = "";
    refMajor.current.value = "0";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ref:", refName.current.value);
    console.log("ref:", refAvatar.current.value);
    console.log("ref:", refMajor.current.value);

    const createStudent = {
      name: refName.current.value,
      major: refMajor.current.value,
      avatar: refAvatar.current.value,
    };

    const { name, major, avatar } = createStudent;

    // const { name, major, avatar } = student;
    if (!name || !major || !avatar) {
      alert("please type require data!");
    } else {
      const newStudent = { sID: getID(), ...createStudent };
      setStudents((prev) => [...prev, newStudent]);
      frmReset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={refName}
            // value={student.name}
            // onChange={(e) =>
            //   setStudent((prev) => ({ ...prev, name: e.target.value }))
            // }
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            ref={refAvatar}
            // value={student.avatar}
            // onChange={(e) =>
            //   setStudent((prev) => ({ ...prev, avatar: e.target.value }))
            // }
          />
        </div>
        <div>
          <label htmlFor="major">major</label>
          <select
            name="major"
            id="major"
            defaultValue={"0"}
            ref={refMajor}
            // value={student.major}
            // onChange={(e) =>
            //   setStudent((prev) => ({ ...prev, major: e.target.value }))
            // }
          >
            <option value="0">select a major</option>
            <option value="math">Math</option>
            <option value="english">English</option>
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default StudentForm;
