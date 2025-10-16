import React, { useState } from "react";
import "./FormData.css";

const FormData = ({customer}) => {

    

  return (
    <>
      <div className="data-card">
        <p>
          Name: <span>{customer.name}</span> | Qty: <span>{customer.qty}</span>
        </p>
        <p>
          Total: <span className="total" >₹{customer.price}</span>
        </p>
      </div>
    </>
  );
};

export default FormData;
