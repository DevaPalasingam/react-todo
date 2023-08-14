import { useState } from "react";

interface NewTodoFormProps {
  onSubmit: (title: string) => void;
}

export function NewTodoForm({ onSubmit }: NewTodoFormProps): JSX.Element {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoItem">
        Insert Todo
        <input
          type="text"
          id="todoItem"
          name="todoItem"
          placeholder="Do the Laundry"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </label>
      <button style={{ width: "4rem" }}>Add</button>
    </form>
  );
}
