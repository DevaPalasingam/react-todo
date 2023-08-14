import { useEffect, useState } from "react";
import "./pico.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos: Todo[]) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function addTodo(title: string) {
    setTodos((currentTodos: Todo[]) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos: Todo[]) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function clearAll() {
    setTodos(() => {
      return [];
    });
  }

  return (
    <main className="container">
      <NewTodoForm onSubmit={addTodo} />
      <h4>Todo List</h4>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      {todos.length > 0 && (
        <button
          onClick={() => clearAll()}
          style={{ width: "9rem" }}
          className="contrast"
        >
          Clear All
        </button>
      )}
    </main>
  );
}
