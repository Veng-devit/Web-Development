import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  // Get current list from Local Storage
  const savedItems = JSON.parse(localStorage.getItem("app_products")) || [];

  // Find the product (id from URL is string, so parseInt)
  const product = savedItems.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="p-8">Product not found</h2>;

  return (
    <div className="p-6 bg-white shadow rounded">
      <Link to="/" className="text-blue-500">← Back to Store</Link>
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600 italic">{product.description}</p>
      <p className="text-xl font-bold text-green-600 mt-2">${product.price}</p>
    </div>
  );
}

export default ProductDetail;