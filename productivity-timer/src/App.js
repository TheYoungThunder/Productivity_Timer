import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import Main from "./pages/Main";
import Session from "./pages/Session";
import { Route, Routes } from "react-router-dom";
import { useGlobalState } from "./Context";

function App() {
  const [state, dispatch] = useGlobalState();

  useEffect(() => {
    let ws = new WebSocket("ws://localhost:8080");
    ws.addEventListener("message", ({ data }) => {
      console.log(data);
      dispatch({ ...state, msg: data });
    });
    dispatch({ ...state, ws });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main></Main>} />
      <Route path="session" element={<Session></Session>} />
    </Routes>
  );
}

export default App;
