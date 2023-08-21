// Import necessary components and libraries
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/DashboardPage/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Registration from "./Pages/RegistrationPage/Registration";
import Courses from "./Pages/CoursesPage/Courses";
import Trending from "./Pages/TrendingPage/Trending"
import Profile from "./Pages/ProfilePage/Profile";
import SuccessPage from "./Pages/SuccessPage/SuccessPage";
import { ConfigProvider } from "antd";

// Define the main App component
function App() {
  return (
    <div className="App">
    {/* Configure theme using ConfigProvider */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#9B5DE6",
          },
        }}
      >
      {/* Define routes using react-router-dom */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard  />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/trending" element={<Trending/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/success" element={<SuccessPage/>} />
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
