import ProtectedRoute from "./components/LoginPageComponents/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import CartsPage from "./pages/CartsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>

          <Route
            path="/home-page"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/carts-page"
            element={
              <ProtectedRoute>
                <CartsPage />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
