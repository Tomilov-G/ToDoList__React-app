import { Task } from "./Task";

export type ToDoItemProps = {
    task: Task,
    onComplete: (id: Date) => void,
    onDelete: (id: Date) => void,
};