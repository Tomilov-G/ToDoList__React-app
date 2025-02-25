import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList({ tasks, setTasks }) {
  function handleComplete(id) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function handleDelete(id) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id))
  }
  return (
    <>
      <ol>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ol>
    </>
  );
}
