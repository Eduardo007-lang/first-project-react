import { useState } from "react";
import Input from "./Input";

const AddTask = ({ onAddTaskSubmit }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <>
            <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                <Input type="text"
                 placeholder="Digite o título da sua tarefa" 
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 />


                <Input type="text"
                 placeholder="Digite a descrição da sua tarefa" 
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 />
            

                <button onClick={() => {
                    if(!title.trim() || !description.trim()){
                        return alert("Preencha todos os campos")
                    }
                    onAddTaskSubmit(title, description)
                    setTitle("");
                    setDescription("");
                }} className="bg-slate-400 text-white rounded-md p-2 w-full cursor-pointer">Adicionar</button>
            </div>
        </>
    );
};

export default AddTask;