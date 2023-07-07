
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import OtpArea from './Components/OTPArea/OtpArea';
import StudentArea from './Components/StudentArea/StudentArea';


import { Routes, Route } from "react-router-dom";

function App() {

  

  return (
    <>
    <Navbar/>
    <Routes>
              <Route path="/:classname" element={<StudentArea />} />
              <Route path="/otp" element={<OtpArea />} />
            </Routes>
    </>
    
    
  );
}

export default App;
