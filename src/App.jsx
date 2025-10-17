import { useState } from "react";
import "./App.css";
import Form from "./components/Layout/Form";
import Card from "./components/UI/Card";
import FormData from "./components/Layout/FormData";

function App() {
  const [customer, setCustomer] = useState([]);

  const addNewOrder = (data) => {
    console.log("New Order:", data);
    setCustomer((prev) => {
      const newCustomer = {
        ...data,
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
      };
      return [...prev, newCustomer];
    });
  };

  const updateQty = (id, newQty) => {
    setCustomer((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, qty: newQty } : item;
      })
    );
  };

  return (
    <>
      <div className="container">
        <div className="child-container">
          <Form addNewOrder={addNewOrder} />
          <main>
            <Card>
              {customer.map((customer) => {
                return (
                  <FormData
                    customer={customer}
                    key={customer.id}
                    updateQty={updateQty}
                  />
                );
              })}
            </Card>
          </main>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
