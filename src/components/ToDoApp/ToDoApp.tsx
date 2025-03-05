import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import classes from "./ToDoApp.module.scss";
import ToDoForm from "../ToDoForm/TodoForm";
import ToDoList from "../ToDoList/ToDoList";

const ToDoApp: FC = () => {
  return (
    <>
      <div className={classes.toDoApp}>
        <h4 className={classes.title}>
          ToDo List
          <FontAwesomeIcon icon={faCheckSquare} className={classes.icon} />
        </h4>
        <ToDoForm />
        <ToDoList />
      </div>
    </>
  );
};
export default ToDoApp;
