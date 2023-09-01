
import { products as initilProducts} from "./mocks/products.json";
import { Productos } from "./components/Productos.jsx";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters.jsx";
import { useState } from "react";
import { CartProvider } from "./context/cart.jsx";
import { Cart } from "./components/Cart";

function App() {
  const [products]=useState(initilProducts);
  const {filterProducts}=useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Productos products={filteredProducts} />
    </CartProvider>
  )
}

export default App
