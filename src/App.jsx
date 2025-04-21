import Tasks from "./components/Tasks.jsx";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask.jsx";
import { v4 }   from "uuid";
import Title from "./components/Title.jsx";


function App() {
  
  const [task, setTask] = useState( JSON.parse(localStorage.getItem("tasks")) || [] );



  //Salvando tarefas no localStorage toda vez que o estado de task mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task]);

  // Chamando a API para pegar as tarefas, sera chamado toda vez que o componente for montado
  // useEffect(() => {

  //   async function fetchData() {

  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
  //       method: "GET",
  //     });

  //     const data = await response.json();
  //     setTask(data)
  //   }
  //   fetchData();
  
  // }, [])



  function onTaskClick(taskId) {
    const newTasks = task.map((task) => {

      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted }
      }
      return task
    });
    setTask(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }
    setTask([...task, newTask])
  }
  

  function onTaskDelete(taskId) {
    const deleteTask = task.filter((task) => task.id !== taskId)
    setTask(deleteTask);
  }

  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center items-center p-6">
        <div className="w-[500px] space-y-4">
          <Title>Gerenciador de Tarefas</Title>
          <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks tasks={task} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete}/>
        </div>
      </div>
    </>
  );
}

export default App;
