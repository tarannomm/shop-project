import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/shared/ProductDetails";
import Store from "./components/store";
import ProductsProvider from "./context/productsPrivider";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <Routes>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/products" element={<Store/>}/>
      <Route path="/" element={<Store/>}/>
      <Route path="/*" element={<Navigate path="/products"/>}/>
      </Routes>
      </ProductsProvider>
    </div>
  );
};

export default App;
