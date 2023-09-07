import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import lenis from "./utils/smooth";
import link from "./utils/link";

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
