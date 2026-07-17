import React, { useState } from "react";
import { useReducer } from "react";

const HookUseReducer = () => {
  //! começando com o useReducer

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  //! Avançando no useReducer
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(age);
  };

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");
        return [...state, newTask];

      case "DELETE":

      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Aterar número</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {initialTasks.map((task) => )}
    </div>
  );
};

export default HookUseReducer;
