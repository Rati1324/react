import { createContext } from "react";
export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const ToDos = [
        {
            key: 1, 
            todo: "asd",
            complete: false,
        }
    ]

    const log = () => {
        console.log("from prov")
    }

    const values = {ToDos}
    return (
        <ToDoContext.Provider value={values} >
            {children}
        </ToDoContext.Provider>
    )
}
