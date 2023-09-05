import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import Error500Page from "./components/pages/Error500Page";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" Component={ProductPage}  />
        <Route path="/" Component={HomePage}  />
        <Route path="/500" Component={Error500Page} />
      </Routes>
    </Router>
  );
};

export default App;