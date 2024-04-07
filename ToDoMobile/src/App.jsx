import { useState } from 'react'
import { Task } from './Components/Task'
import { TopBar } from './Components/topBar/TopBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <div id='taskContainer'>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Programación ASASdasdasdasdasdasasdasdasdasdasds"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        <Task title={"Tarea Matemática Discreta"} tags={[["Facultad", "r"],["+7 Dias","v"], ["4-7 Dias", "y"], ["Trabajo","a"], ["Mañana","r"], ["Facultad", "a"], ["Facultad", "r"], ["Facultad", "r"]]} check={false}/>
        
      </div>
    </>
  )
}

export default App

