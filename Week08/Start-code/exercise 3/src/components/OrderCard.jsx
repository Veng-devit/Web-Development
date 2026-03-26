import React from "react";

export default function OrderCard({ product, price, quantity, onQuantityChange }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>$ {price}</small>
      </div>
      <div className="order-quantity">
        <div
          className="order-button"
          onClick={() => onQuantityChange(-1)}
          style={{ opacity: quantity === 0 ? 0.4 : 1, pointerEvents: quantity === 0 ? "none" : "auto" }}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={() => onQuantityChange(+1)}>
          +
        </div>
      </div>
    </div>
  );
}