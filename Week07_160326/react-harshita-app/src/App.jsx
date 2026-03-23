import { useState } from "react";
import "./App.css";

import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import EventExample from "./components/EventExample";
import FormExample from "./components/FormExample";

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h1>Product App Demo</h1>

      <button onClick={() => setClicks(clicks + 1)}>
        Total Clicks: {clicks}
      </button>

      <hr />

      <FunctionComponent
        productName="Laptop"
        price="50000"
        brand="Dell"
      />

      <ClassComponent
        storeName="Tech Store"
        location="Hyderabad"
        rating="4.5"
      />

      <EventExample />
      <FormExample />
    </div>
  );
}

export default App;