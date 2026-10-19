import { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>React Product Dashboard</h1>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <div style={{ marginTop: "16px" }}>
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <p>Hello, {name}!</p>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;