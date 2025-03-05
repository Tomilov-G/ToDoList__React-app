import { ToDoState } from "../features/ToDoSlice";
import { RootState } from "../store/store";

export const saveToLocalStorage = (state: RootState) => {
    try {
        const appState = JSON.stringify(state)
        localStorage.setItem('appState', appState)
    } catch (e) {
        console.warn(e);
    }   
}

export const loadFromLocalStorage = (): undefined | { toDoList: ToDoState } => {
    try {
        const appState = localStorage.getItem('appState')
        if (!appState) return undefined
        return JSON.parse(appState)
    } catch (e) {
        console.warn(e);
        return undefined
    }
}