interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <span style={{ marginRight: "1rem" }}>{title}</span>
      <button
        className="contrast outline"
        onClick={() => deleteTodo(id)}
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
  );
}
