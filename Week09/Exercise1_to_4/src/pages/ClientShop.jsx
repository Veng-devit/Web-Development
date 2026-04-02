import { useState } from "react";
import { Link } from "react-router-dom";

export default function ClientShop() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("app_products")) || []
  );

  const addNewItem = () => {
    const newItem = { id: Date.now(), name: "Headphones", price: 120 };
    // GAP 1: Create a new array including old items and the new item
    const newList = [...products, newItem];
    // GAP 2: Update state and LocalStorage
    setProducts(newList);
    localStorage.setItem("app_products", JSON.stringify(newList));
  };

  return (
    <div className="p-5 bg-blue-50">
      <button
        onClick={addNewItem}
        className="bg-green-600 text-white p-2 rounded mb-4"
      >
        + Suggest New Product
      </button>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded bg-white shadow">
            <Link to={`/product/${product.id}`} className="text-blue-600 font-bold">
              {product.name}
            </Link>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}