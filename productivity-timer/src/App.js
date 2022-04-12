import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Main from "./pages/Main";
import Session from "./pages/Session";
let ws = new WebSocket("ws://localhost:8080");

function App() {
  const [page, setPage] = useState("Main");
  const [msg, setMsg] = useState("");

  ws.addEventListener("message", ({ data }) => {
    setMsg(data);
  });
  return (
    <>
      {page === "Main" && <Main setPage={setPage} />}
      {page === "Session" && <Session socket={ws} msg={msg} />}
    </>
  );
}

export default App;
