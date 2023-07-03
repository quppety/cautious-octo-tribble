import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game/Game";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/topics" element={<Game />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/profile" element={<Profile />} />*/}
      </Routes>
    </>
  );
}

export default App;
