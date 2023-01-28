import React from "react";

// import EditTodo from "./EditTodo";

export default function TodoList({ todos, setTodos, setEditTodo }) {
  // to communicate with local storage
  // useEffect(()=> {
  //     const storedData = localStorage.getItem('...todos')
  //     if(storedData) {

  //         setTodos(JSON.stringify(storedData))
  //     }
  // },[setTodos])

  // useEffect(() => {
  //     localStorage.setItem('todos',JSON.stringify(todos))
  // },[todos])

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  // delete functionality
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // complete functionality
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <input
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
            className={`list ${todo.completed ? "complete" : ""}`}
          />

          <div>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>

            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>

            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"> </i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
