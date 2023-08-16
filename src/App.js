import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/DashboardPage/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Registration from "./Pages/RegistrationPage/Registration";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider theme={{token: {
      colorPrimary: "#9B5DE6"
    }}}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
    </ConfigProvider>
  );
}

export default App;
