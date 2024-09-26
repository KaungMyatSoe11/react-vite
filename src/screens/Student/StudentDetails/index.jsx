import { useParams } from "react-router-dom";
import StudentDetail from "../../../components/StudentDetail/StudentDetail";

const StudentDetailScreen = () => {
  const { code } = useParams();
  return (
    <div>
      <h1 className="text-lg">{code}</h1>
      StudentDetailScreen
      <StudentDetail code={code} />
    </div>
  );
};

export default StudentDetailScreen;
