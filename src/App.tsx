import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Logging from "./screens/Logging";
import Login from "./screens/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/logging" element={<Logging />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
