import { Task } from './Task'

export type ToDoFormProps = {
    tasks: Task[],
    setTasks: (tasks: Task[]) => void,
}