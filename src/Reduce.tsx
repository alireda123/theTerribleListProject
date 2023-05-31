import { useReducer, useState } from "react";

const command = {
  add: "add",
  add2: "add2",
  rendertext: "rendertext",
  unrender: "unrender"
};
const stater = {
  counter: 0,
  text: "hello world"
};

const Reducerlist = (state, action) => {
  switch (action.type) {
    case command.add:
      stater.counter + 1;
      break;
    default:
      console.log("jflsd");
  }
};

export default function Reduce() {
  const [state, dispatch] = useReducer(Reducerlist, 0);
  const add = () => {
    dispatch({ type: command.add });
  };

  return (
    <div>
      <button onClick={add}>counter1</button>
      {stater.counter}
      <button>counter2</button>
      <button>text render</button>
      <button>unrender all</button>
    </div>
  );
}
