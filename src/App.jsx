import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import ProductDetails from "./components/shared/ProductDetails";
import Store from "./components/store";
import ProductsProvider from "./context/productsPrivider";
import ReducerContextProvider from "./context/reducerContextProvider";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <ReducerContextProvider>
          <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/" element={<Store />} />
            <Route path="/*" element={<Navigate path="/products" />} />
          </Routes>
        </ReducerContextProvider>
      </ProductsProvider>
    </div>
  );
};

export default App;
