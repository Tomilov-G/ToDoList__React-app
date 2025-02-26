import { Task } from "./Task";

export type ToDoItemProps = {
    task: Task,
    onComplete: (id: string) => void,
    onDelete: (id: string) => void,
};