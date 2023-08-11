import { useState } from "react";

import "./App.css";
import MasterLayout from "./components/MasterLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MasterLayout />
    </>
  );
}

export default App;
