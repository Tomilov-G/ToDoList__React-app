import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import classes from "./ToDoApp.module.scss";
import ToDoForm from "../ToDoForm/TodoForm";

export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className={classes.toDoApp}>
        <h4 className={classes.title}>
          ToDo List
          <FontAwesomeIcon icon={faCheckSquare} className={classes.icon} />
        </h4>
        <ToDoForm tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
