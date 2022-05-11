import { createContext, useReducer, useContext } from "react";

const global = {
  ws: undefined,
  msg: "{}",
};

export const globalContext = createContext(global);
export const dispatchContext = createContext(undefined);

export default function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    global
  );
  return (
    <globalContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </globalContext.Provider>
  );
}

export const useGlobalState = () => [
  useContext(globalContext),
  useContext(dispatchContext),
];
