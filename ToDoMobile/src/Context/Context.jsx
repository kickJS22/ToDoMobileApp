import { Children, createContext, useState } from "react";

const ToDoContext = createContext();

export function ToDoProvider ({children}) {
    const [ToDo, setToDo] = useState();
    const [Completed, serCompleted] = useState();
    
    return(
        <ToDoContext.Provider value={{ToDo, Completed}}>
            {children}
        </ToDoContext.Provider>
    )
}