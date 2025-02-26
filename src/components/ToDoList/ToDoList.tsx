import ToDoItem from "../ToDoItem/ToDoItem";
import { FC } from "react";
import { ToDoListProps } from "../types/ToDoListProps";

  const ToDoList:FC<ToDoListProps> = ({ tasks, setTasks }) => {
  function handleComplete(id: Date) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id.getTime() === id.getTime()) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function handleDelete(id: Date) {
    setTasks((prevState) => prevState.filter((task) => task.id.getTime() !== id.getTime()))
  }
  return (
    <>
      <ol>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id.getTime()}
            task={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ol>
    </>
  );
}
export default ToDoList