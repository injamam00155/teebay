import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './singup';
import ProductList from './ProductList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
