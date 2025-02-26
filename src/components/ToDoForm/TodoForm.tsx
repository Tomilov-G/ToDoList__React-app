import { useState, ChangeEvent, MouseEvent, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./ToDoForm.module.scss";
import { Task } from "../types/Task";
import { ToDoFormProps } from "../types/ToDoFormProps";

  const ToDoForm: FC<ToDoFormProps> = ({ tasks, setTasks }) => {
  const [textOfTask, setTextOfTask] = useState<string>("");

  function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
    setTextOfTask(event.target.value);
  }

  function taskAddInList(event: MouseEvent<SVGSVGElement>) {
    event.preventDefault();
    if (textOfTask.trim()) {
      const newTask: Task = {
        id: new Date(),
        text: textOfTask,
        completed: false,
      };

      setTasks(tasks.concat(newTask));
      setTextOfTask("");
    } else {
      console.log("Задача некорректна, поробуйте ввести ее еще раз");
    }
  }

  return (
    <form className={classes.todoForm}>
      <label htmlFor="taskInput" className={classes.label}>
        Впишите свою задачу:
      </label>
      <input
        type="text"
        className={classes.input}
        id="taskInput"
        placeholder="Например: приготовить ужин"
        maxLength={100}
        value={textOfTask}
        onChange={handleChangeText}
      />
      <FontAwesomeIcon
        icon={faPlusCircle}
        className={classes.icon}
        onClick={taskAddInList}
      />
    </form>
  );
};
export default ToDoForm