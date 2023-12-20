import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './singup';
import ProductList from './ProductList';

const AppRouter = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking the presence of a token)
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform any logout logic (e.g., remove the token from storage)
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Navigate to="/productlist" /> : <SignIn onLogin={handleLogin} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/productlist"
          element={
            authenticated ? (
              <ProductList onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
