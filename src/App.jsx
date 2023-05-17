import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/shared/ProductDetails";
import Store from "./components/store";
import ProductsProvider from "./context/productsPrivider";
import ReduserContextPrivider from "./context/reduserContextPrivider";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <ReduserContextPrivider>
        <Routes>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/products" element={<Store/>}/>
      <Route path="/" element={<Store/>}/>
      <Route path="/*" element={<Navigate path="/products"/>}/>
      </Routes>
      </ReduserContextPrivider>
      </ProductsProvider>
    </div>
  );
};

export default App;
