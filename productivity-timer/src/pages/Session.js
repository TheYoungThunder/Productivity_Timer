import { useState } from "react";
import { useGlobalState } from "../Context";
export default function Session(props) {
  const [state, dispatch] = useGlobalState();
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
      <h1>{state.msg}</h1>
    </>
  );
}
