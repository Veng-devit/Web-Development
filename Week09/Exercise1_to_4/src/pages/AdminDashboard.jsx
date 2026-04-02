import { useState } from "react";

export default function AdminDashboard() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("app_user")) || { name: "Admin" }
  );
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("app_products")) || []
  );

  // Exercise 1: update name to Super_Admin
  const handleUpdateName = () => {
    const updatedUser = { ...user, name: "Super_Admin" };
    setUser(updatedUser);
    localStorage.setItem("app_user", JSON.stringify(updatedUser));
  };

  // Testing injector (from page 7)
  const injectNewProduct = () => {
    const newItem = {
      id: Date.now(),
      name: "New Test Item",
      price: 99,
      description: "Added via Admin Test Button"
    };
    const updated = [...list, newItem];
    setList(updated);
    localStorage.setItem("app_products", JSON.stringify(updated));
  };

  return (
    <div className="p-5 bg-gray-800 text-white rounded">
      <h2>Welcome, {user?.name}</h2>
      <button onClick={handleUpdateName} className="bg-yellow-500 p-2 text-black rounded">
        Upgrade Permissions
      </button>

      <hr className="my-6" />

      <h3>Admin Inventory Manager</h3>
      <button onClick={injectNewProduct} className="bg-green-500 p-2 mt-4 rounded">
        + Inject Random Product
      </button>
      <p className="mt-2 text-sm text-gray-400">Items in DB: {list.length}</p>
    </div>
  );
}