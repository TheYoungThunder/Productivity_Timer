import { useState } from "react";
export default function Session(props) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.socket.send(text);
        }}
      >
        Send
      </button>
      <h1>{props.msg}</h1>
    </>
  );
}
