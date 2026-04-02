import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 p-6 bg-black flex flex-col gap-4">
        <Link to="/admin">Dashboard</Link>
        <Link to="/">Back to Store</Link>
      </aside>
      <div className="p-8 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;