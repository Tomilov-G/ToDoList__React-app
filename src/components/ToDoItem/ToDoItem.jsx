import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import classes from "./ToDoItem.module.scss";

export default function ToDoItem({ task, onComplete, onDelete }) {

  const taskStyle = {
    borderColor: task.completed ? "green" : "grey",
    textDecoration: task.completed ? "line-through" : "none",
  }

  return (
    <li className={classes.toDoItem}>
      <input
        className={classes.itemInput}
        type="text"
        value={task.text}
        readOnly
        style={taskStyle}
      />
      <FontAwesomeIcon
        className={classes.completeTaskIcon}
        icon={faCheckSquare}
        onClick={() => onComplete(task.id)}
      />
      <FontAwesomeIcon
        className={classes.deleteTaskIcon}
        icon={faTrash}
        onClick={() => onDelete(task.id)}
      />
    </li>
  );
}
