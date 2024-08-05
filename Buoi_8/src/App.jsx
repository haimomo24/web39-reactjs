import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from "./pages/Homes";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Layout/>}>
          <Route index element={<Homes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
