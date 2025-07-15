import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import AdminTestimonials from "./pages/AdminTestimonials";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Wrap with layout using nesting */}
        <Route path="/" element={<AdminLayout />}>
          {/* Redirect / to /dashboard */}
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
