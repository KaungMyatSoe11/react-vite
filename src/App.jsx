import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import StudentScreen from "./screens/Student";
import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LogIn from "./screens/LogIn";
import StudentDetailScreen from "./screens/Student/StudentDetails";
import StudentSearchScreen from "./screens/Student/StudentSearch";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/student" element={<StudentScreen />} />
              {/* /student */}
              {/* /student/001 */}
              {/* /student/001/mm */}
              <Route path="/student/:code" element={<StudentDetailScreen />} />
              <Route path="/student/search" element={<StudentSearchScreen />} />
            </Route>
          </Route>

          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
