import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Dashboard from "./pages/dashboard/Dashboard";
import Aprovar from "./pages/aprovar/Aprovar";
import Aprovados from "./pages/aprovados/Aprovados";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/aprovar"
              element={isAuthenticated ? <Aprovar /> : <Navigate to="/login" />}
            />
            <Route
              path="/aprovados"
              element={isAuthenticated ? <Aprovados /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
