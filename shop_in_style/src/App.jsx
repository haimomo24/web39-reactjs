import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import NotFound from "./pages/user/NotFound";
import Layout from "./pages/user/Layout";
import ProductsDetail from "./pages/user/ProductsDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:id" element={<ProductsDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
