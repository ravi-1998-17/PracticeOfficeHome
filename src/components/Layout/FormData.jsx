import React, { useState } from "react";
import "./FormData.css";

const FormData = ({ customer, updateQty  }) => {
  const totalCost = customer.qty * +customer.price;

  const incQtyFunc = () => {
    updateQty(customer.id, +customer.qty + 1);
  };

  const decQtyFunc = () => {
    if (customer.qty > 1) {
      updateQty(customer.id, customer.qty - 1);
    }
  };

  return (
    <>
      <div className="data-card">
        <p>
          Product: <span>{customer.name}</span> | Price:{" "}
          <span>{customer.price}</span> | Qty:{" "}
          <span>
            <button className="qty-btn" onClick={decQtyFunc}>-</button>
            {customer.qty}
            <button className="qty-btn" onClick={incQtyFunc}>+</button>
          </span>
        </p>
        <p>
          Total: <span className="total">₹{totalCost}</span>
        </p>
      </div>
    </>
  );
};

export default FormData;
