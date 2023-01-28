import React, { useEffect } from "react";

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSumbit = (e) => {
    e.preventDefault();

    if (!editTodo) {
      setTodos([
        ...todos,
        { id: Math.random() * 1000, title: input, completed: false },
      ]);
      setInput("");
    } else {
      // update the todo
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSumbit}>
        <input
          type="text"
          placeholder="Enter todo..."
          className="task-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="button-add" type="submit">
          {editTodo ? "OK" : "ADD"}
        </button>
      </form>
    </div>
  );
}
