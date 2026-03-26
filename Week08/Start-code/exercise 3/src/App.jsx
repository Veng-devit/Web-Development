import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  { product: "Banana", price: 54.6, quantity: 3 },
  { product: "Computer", price: 100.5, quantity: 4 },
  { product: "Table", price: 1070, quantity: 3 },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const handleQuantityChange = (index, delta) => {
    const updatedOrders = orders.map((order, i) =>
      i === index
        ? { ...order, quantity: Math.max(0, order.quantity + delta) }
        : order
    );
    setOrders(updatedOrders);
  };

  const total = orders.reduce((sum, o) => sum + o.price * o.quantity, 0).toFixed(1);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>
      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onQuantityChange={(delta) => handleQuantityChange(index, delta)}
          />
        ))}
      </div>
      <CheckoutButton total={total} />
    </>
  );
}