// import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Nav from "./Nav";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import RoomForm from "./RoomForm";
import MainPage from "./MainPage";
import HomePage from "./HomePage";

function App() {
  return (
    <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
      <Router>
        <div>
          <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/rooms/create" element={<RoomForm />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
