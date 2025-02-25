import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import classes from "./ToDoApp.module.scss";
import ToDoForm from "../ToDoForm/TodoForm";
import ToDoList from "../ToDoList/ToDoList";

export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks && Array.isArray(savedTasks)) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <>
      <div className={classes.toDoApp}>
        <h4 className={classes.title}>
          ToDo List
          <FontAwesomeIcon icon={faCheckSquare} className={classes.icon} />
        </h4>
        <ToDoForm tasks={tasks} setTasks={setTasks} />
        <ToDoList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
