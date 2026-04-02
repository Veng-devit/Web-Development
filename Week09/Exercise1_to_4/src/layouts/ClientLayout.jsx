import { Link, Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <nav className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;