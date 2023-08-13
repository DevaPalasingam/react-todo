import "./pico.css";

export default function App() {
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
        <button>Add</button>
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
