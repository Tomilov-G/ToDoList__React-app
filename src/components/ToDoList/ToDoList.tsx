import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, deleteTask } from "../../features/ToDoSlice";
import { RootState } from "../../store/store";
import ToDoItem from "../ToDoItem/ToDoItem";


const ToDoList: FC = () => {
  const toDoList = useSelector((state: RootState) => state.toDoList.tasks)
  
  const dispatch = useDispatch()
  function handleComplete(id: string) {
    dispatch(completeTask(id))
  }

  function handleDelete(id: string) {
    dispatch(deleteTask(id))
  }
  return (
    <>
      <ol>
        {toDoList.map((task) => (
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
