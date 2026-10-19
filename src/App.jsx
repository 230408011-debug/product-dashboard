import { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>React Product Dashboard</h1>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;