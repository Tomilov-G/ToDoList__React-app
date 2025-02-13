import classes from './ToDoApp.module.scss';
import ToDoForm from "../ToDoForm/TodoForm";
import ToDoList from "../ToDoList/ToDoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function ToDoApp() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className={classes.toDoApp}>
        <div className={classes.container}>
          <div className={classes.containerInner}>
            <h4 className={classes.title}>
              ToDo List
              <FontAwesomeIcon icon={faCheckSquare} className={classes.icon} />
            </h4>
            <ToDoForm tasks={tasks} setTasks={setTasks}/>
          </div>
        </div>
      </div>
    </>
  );
}
