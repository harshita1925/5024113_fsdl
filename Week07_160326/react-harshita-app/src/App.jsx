import { useState } from "react";
import "./App.css";

import FunctionComponent from "./components/functioncomponent";
import ClassComponent from "./components/classcomponent";
import EventExample from "./components/eventexample";
import FormExample from "./components/formexample";

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h1>Product App Demo</h1>

      <button onClick={() => setClicks(clicks + 1)}>
        Total Clicks: {clicks}
      </button>

      <hr />

    
      <FormExample />
    </div>
  );
}

export default App;