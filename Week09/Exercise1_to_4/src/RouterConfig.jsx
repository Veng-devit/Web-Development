import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

// Import Layouts
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';

// Import Pages
import ClientShop from './pages/ClientShop';
import AdminDashboard from './pages/AdminDashboard'; // Matches Admin.jsx in your file tree
// Assuming ProductDetail exists or you are creating it
import ProductDetail from './pages/ProductDetail'; 
export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Section */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ClientShop />} />
          
          {/* GAP 1: Define the dynamic route for product details by ID */}
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