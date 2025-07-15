import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="ml-0 md:ml-64 flex-1 bg-gray-100 p-6">
        <Outlet /> {/* ✅ renders Dashboard or Testimonials here */}
      </main>
    </div>
  );
}
