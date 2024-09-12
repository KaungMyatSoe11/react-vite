import { useState } from "react";
import Post from "./components/Post";
import Student from "./components/Students/Student";

function App() {
  const [Count, setCount] = useState(0);
  const [PCount, setPCount] = useState(0);
  return (
    <div className="container mx-auto">
      {/* <Counter /> */}
      <Student />
      {/* <Post PCount={PCount} />

      <button
        className="bg-slate-700 text-white p-3  m-1"
        onClick={() => setCount(Count + 1)}
      >
        click count{Count}
      </button>
      <button
        className="bg-slate-700 text-white p-3  m-1"
        onClick={() => setPCount(PCount + 1)}
      >
        Post click count{PCount}
      </button> */}
    </div>
  );
}

export default App;
