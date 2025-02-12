import ToDoForm from "../ToDoForm/TodoForm";
import ToDoList from "../ToDoList/ToDoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function ToDoApp() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="ToDo-App">
        <div className="container">
          <div className="container__inner">
            <h4 className="title">
              ToDo List
              <FontAwesomeIcon icon={faCheckSquare} className="title__icon" />
            </h4>
            <ToDoForm tasks={tasks} setTasks={setTasks}/>
          </div>
        </div>
      </div>
    </>
  );
}
