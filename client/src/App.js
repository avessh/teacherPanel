
import './App.css';
import Classes from './Components/Classes/Classes';
import Navbar from './Components/NavBar/Navbar';
import OtpArea from './Components/OTPArea/OtpArea';
import StudentArea from './Components/StudentArea/StudentArea';


import { Routes, Route } from "react-router-dom";

function App() {



  return (
    <>
      <Navbar />
      <OtpArea />
      <Routes>
        <Route path="/:classname" element={<StudentArea />} />
        <Route path="/:classname" element={<OtpArea />} />
        <Route path="/calendar" element={<Classes />} />
      </Routes>
    </>


  );
}

export default App;
