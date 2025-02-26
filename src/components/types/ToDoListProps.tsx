import { Task } from "./Task";

export type ToDoListProps = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;

}