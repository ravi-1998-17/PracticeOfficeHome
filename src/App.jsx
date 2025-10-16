import { useState } from "react";
import "./App.css";
import Form from "./components/Layout/Form";
import Card from "./components/UI/Card";
import FormData from "./components/Layout/FormData";

function App() {
  const [customer, setCustomer] = useState([
    { name: "Ravi Suthar", qty: "2", price: "299", id: 1 },
    { name: "Kartik Jangid", qty: "5", price: "499", id: 2 },
  ]);

  const addNewOrder = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="child-container">
          <Form />
          <main>
            <Card>
              {customer.map((customer) => {
                return (
                  <FormData
                    customer={customer}
                    key={customer.id}
                    addNewOrder={addNewOrder}
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
