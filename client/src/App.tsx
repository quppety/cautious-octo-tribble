import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game/Game";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.SessionReducer.username);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/topics" element={<Game />} />
        <Route path={`/profile/${user}`} element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/profile" element={<Profile />} />*/}
      </Routes>
    </>
  );
}

export default App;
