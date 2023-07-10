import React from "react";
import LandingPage from "../Pages/LandingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentSignUp from "../Pages/StudentSignUp.jsx";
import AdminSignUp from "../Pages/AdminSignUp.jsx";
import AdminHomePage from "../Pages/AdminHome.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/adminsignup" element={<AdminSignUp />} />
          <Route path="/adminhome" element={<AdminHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// import Counter from "../Counter/Counter.jsx";
// import c from "./App.module.css";
// import axios from "axios";

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const getTasks = () => {
//     axios.get("/api/tasks").then((res) => {
//       setTasks(res.data);
//     });
//   };

//   useEffect(getTasks, []);

//   const deleteTask = async (id) => {
//     await axios.delete(`/api/tasks/${id}`);
//     return getTasks();
//   };

//   return (
//     <main>
//       <h2>Tasks</h2>
//       <div className={c.tasks}>
//         {tasks.length > 0 ? (
//           tasks.map(({ id, description }) => (
//             <div key={id}>
//               <button onClick={() => deleteTask(id)}>X</button>
//               <span>{description}</span>
//             </div>
//           ))
//         ) : (
//           <span>No Tasks Remaining</span>
//         )}
//       </div>
//       <h2>Counter</h2>
//       <Counter />
//     </main>
//   );
// };
