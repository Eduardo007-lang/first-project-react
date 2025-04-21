// Importando as dependências necessárias React Router DOM para pegar os parametros da URL
import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

const TaskPage = () => {
  // Usando o hook useSearchParams para pegar os parâmetros da URL
  // O hook retorna um array com dois elementos: o primeiro é um objeto URLSearchParams e o segundo é uma função para atualizar os parâmetros
  // O primeiro elemento é usado para pegar os parâmetros da URL
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  //Pegando os parametros da URL e definindo valores por default caso não existam
  const title = searchParams.get("title") || "Sem título";
  const description = searchParams.get("description") || "Sem descrição";

  // Retornando o componente TaskPage com os parâmetros da URL
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      {/* Usando diretivas para mostrar os valores dos parametros da url */}
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100 cursor-pointer">
            <ChevronLeft />
          </button>
          <Title> Detalhes da Tarefas</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
