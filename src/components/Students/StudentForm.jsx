/* eslint-disable react/prop-types */
import { useState } from "react";

const StudentForm = ({ setStudents }) => {
  //   const [name, setName] = useState("");
  //   const [avatar, setAvatar] = useState("");
  //   const [major, setMajor] = useState("0");
  const [student, setStudent] = useState({
    name: "",
    avatar: "",
    major: "0",
  });

  //   console.log({ name });
  //   console.log({ major });
  //   console.log({ avatar });

  const getID = () => {
    return Math.round(Math.random() * 1000);
  };

  const frmReset = () => {
    // setName("");
    // setAvatar("");
    // setMajor("0");
    setStudent({ name: "", avatar: "", major: "0" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    const { name, major, avatar } = student;
    if (!name || !major || !avatar) {
      alert("please type require data!");
    } else {
      const newStudent = { sID: getID(), name, major, avatar };
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
            value={student.name}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            value={student.avatar}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, avatar: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="major">major</label>
          <select
            name="major"
            id="major"
            defaultValue={student.major}
            value={student.major}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, major: e.target.value }))
            }
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
