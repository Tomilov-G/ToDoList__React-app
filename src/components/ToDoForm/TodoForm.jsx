import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function ToDoForm({ tasks, setTasks }) {
  const [textOfTask, setTextOfTask] = useState("");

  function handleChangeText(event) {
    setTextOfTask(event.target.value);
  }

  function taskAddInList() {
    
    if (textOfTask.trim()) {

        const newTask = {
        id: tasks.length + 1, 
        text: textOfTask,
        completed: false, 
      };

      setTasks(tasks.concat(newTask));
      console.log(tasks)
      setTextOfTask("");
    } else {
      console.log("Задача некорректна, поробуйте ввести ее еще раз");
    }
  }

  return (
    <form className="todo__form">
      <label htmlFor="taskInput" className="todo__form__label">
        Впишите свою задачу:
      </label>
      <input
        type="text"
        className="todo__form__input"
        id="taskInput"
        placeholder="Например: приготовить ужин"
        maxLength={100}
        value={textOfTask}
        onChange={handleChangeText}
      />
      <FontAwesomeIcon
        icon={faPlusCircle}
        className="todo__form__icon"
        onClick={taskAddInList}
      />
    </form>
  );
}
