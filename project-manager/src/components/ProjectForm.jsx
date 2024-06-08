import { useState } from "react";
import { toast } from "react-toastify";

const ProjectForm = ({addProject}) =>{

    const [value, setValue] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(!value || !status ) {
            toast.warn("Insira o Nome e o Status do projeto!!")
            return;
        }
        addProject(value, status);
        setValue("");
        setStatus("");
    }

    return(
        <div className="project-form">
            <h2> Criar Projeto: </h2>
            <form onSubmit={handleSubmit}>
                <input value={value} type="text" placeholder="Digite o título" onChange={(event) => setValue(event.target.value)}></input>
                <select value={status} onChange={(event) => setStatus(event.target.value)}>
                    <option value="">Selecione o status do projeto:</option>
                    <option value="Em Progresso">Em Progresso</option>
                    <option value="Aguardando">Aguardando</option>
                    <option value="Em Desenvolvimento">Em Desenvolvimento</option>
                    <option value="Concluido">Concluído</option>
                </select>
                <button type="submit">Adicionar Projeto</button>
            </form>
        </div>
    )
}

export default ProjectForm