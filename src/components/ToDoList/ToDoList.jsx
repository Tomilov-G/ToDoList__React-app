import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList({ tasks, setTasks }) {

  function handleComplete (id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  function handleDelete (id) {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }
  return (
    <>
      <ol>
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete}/>
        ))}
      </ol>
    </>
  );
}
