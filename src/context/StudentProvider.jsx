import { data } from "autoprefixer";
import { createContext, useEffect, useReducer } from "react";

export const StudentContext = createContext(null);

const StudentProvider = ({ children }) => {
  const initStudent = {
    data: [],
    isLoading: false,
    isError: false,
  };

  const studentReducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case "FETCH":
        return { ...state, data: action.payload, isLoading: false };
      case "LOADING":
        return { ...state, isLoading: true };
      default:
        return { ...state };
    }
  };

  const [students, dispatch] = useReducer(studentReducer, initStudent);

  console.log(students);

  const fetchStudent = async (signal) => {
    const res = await fetch("https://st-api.kaungmyatsoe.dev/api/v1/students", {
      method: "GET",
      headers: {
        key:
          "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w",
      },
      signal,
    });

    const data = await res.json();
    console.log(data);
    //dispatch
    dispatch({ type: "FETCH", payload: data.students });
  };

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const controller = new AbortController();

    fetchStudent(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
