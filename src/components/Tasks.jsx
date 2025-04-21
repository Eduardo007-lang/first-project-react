import { CheckIcon, ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
const Tasks = (props) => {

    const navigate = useNavigate();

    

    // Função para navegar para a página de detalhes da tarefa
    const handlerClick = (task) => {
      // Cria um objeto URLSearchParams para armazenar os parâmetros da URL
      const query = new URLSearchParams();
      query.set("title", task.title);
      query.set("description", task.description);
      // Navega para a página de detalhes da tarefa com os parâmetros da URL
      navigate(`/tasks?${query.toString()}`);  
    }


    return (
      <>
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          {props.tasks?.map((task) => (
            <li className="flex gap-2" key={task.id}>
                <button onClick={() => props.onTaskClick(task.id)} className={`w-full bg-slate-400 text-white rounded-md flex items-center gap-2  p-2 cursor-pointer ${task.isCompleted ? "line-through" : ""}`}>
                  {task.isCompleted && <CheckIcon/>}
                  {task.title}
                </button>
                <Button onClick={() => handlerClick(task)} >
                  <ChevronRightIcon />
                </Button>
                <Button onClick={() => props.onTaskDelete(task.id)} >
                  <Trash />
                </Button>
            </li>
          ))}
        </ul>
      </>
    );
};

export default Tasks;