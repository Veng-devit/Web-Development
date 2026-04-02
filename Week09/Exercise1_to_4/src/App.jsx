import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { staticProducts } from "./data";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import ClientShop from "./pages/ClientShop";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetail from "./pages/ProductDetail";

function App() {
  // SEEDER LOGIC – bootstrap localStorage if empty
  useEffect(() => {
    if (!localStorage.getItem("app_products")) {
      localStorage.setItem("app_products", JSON.stringify(staticProducts));
    }
    if (!localStorage.getItem("app_user")) {
      localStorage.setItem("app_user", JSON.stringify({ name: "Admin" }));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Client Section */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ClientShop />} />
          {/* Dynamic route for product details by ID */}
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>

        {/* Admin Section */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;