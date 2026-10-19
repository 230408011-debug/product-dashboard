import Product from "./Product";

function ProductList() {
  const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Headphones", price: 150 },
    { id: 3, title: "Keyboard", price: 80 },
  ];

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} title={product.title} price={product.price} />
      ))}
    </div>
  );
}

export default ProductList;