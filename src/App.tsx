// import { useState } from "react";
import "./pico.css";

export default function App() {
  // const [newItem, setNewItem] = useState("");
  return (
    <main className="container">
      <form>
        <label htmlFor="todoItem">
          Insert Todo
          <input
            type="text"
            id="todoItem"
            name="todoItem"
            placeholder="Do the Laundry"
          />
        </label>
        <button style={{ width: "4rem" }}>Add</button>
      </form>
      <h4>Todo List</h4>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox" />
        <span style={{ marginRight: "1rem" }}>Item 1</span>
        <button
          className="contrast outline"
          style={{
            width: "7rem",
            alignSelf: "baseline",
            padding: 0,
            margin: 0,
          }}
        >
          Delete
        </button>
      </div>
    </main>
  );
}
