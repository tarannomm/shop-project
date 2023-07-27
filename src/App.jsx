import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/shared/Navbar";
import ProductDetails from "./components/shared/ProductDetails";
import ShopCard from "./components/shopCard";
import Store from "./components/store";
import ProductsProvider from "./context/productsPrivider";
import ReducerContextProvider from "./context/reducerContextProvider";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
const App = () => {
  return (
    <div>
      <ProductsProvider>
        <ReducerContextProvider>
          <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductDetails/>} /> 
            <Route path="/products" element={<Store />} />
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/shopCart" element={<ShopCard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/" element={<Landing/>} />
            <Route path="/*" element={<Navigate to="/landing" />} />
          </Routes>
        </ReducerContextProvider>
      </ProductsProvider>
    </div>
  );
};

export default App;
