import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  const [cart, setCart] = useState([]);
  const handleClick=(item)=> {
    console.log(item);
  }

  return (
    <div>
      <Navbar size={cart.length} />
      <Shop handleClick={handleClick} />
    </div>
  );
}

export default App;
