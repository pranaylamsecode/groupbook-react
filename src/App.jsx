import "./App.css";
import MasterLayout from "./components/MasterLayout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
