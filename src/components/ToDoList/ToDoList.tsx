import { FC, Dispatch, SetStateAction } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { Task } from "../../types/Task";

interface ToDoListProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const ToDoList: FC<ToDoListProps> = ({ tasks, setTasks }) => {
  function handleComplete(id: string) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function handleDelete(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
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
};
export default ToDoList;
