import React from "react";
import Store from "./components/store";
import ProductsProvider from "./context/productsPrivider";
import { getProducts } from "./services/api";
 
const App = () => {
  return (
    <div>
      {/* {console.log(getProducts())} */}
      <ProductsProvider>
       <Store/>
      </ProductsProvider>
    </div>
  );
};

export default App;
